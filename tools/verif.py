#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Audit structurel du site. A lancer avant toute mise en ligne.

Reprend les controles faits a la main pendant la refonte, dont ceux qui ont
attrape de vrais defauts : une ancre imbriquee qui faisait eclater une carte,
un pied de menu supprime par une expression reguliere trop gourmande, une page
devenue orpheline apres un changement de navigation.

    python3 tools/verif.py

Sortie non nulle si un controle echoue.
"""
import json
import os
import re
import sys
from urllib.parse import urljoin

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = "https://arnaudherr.be/"

soucis = []


def probleme(page, quoi):
    soucis.append("%s : %s" % (page, quoi))


def pages():
    trouvees = []
    for dossier, sous, noms in os.walk(RACINE):
        sous[:] = [d for d in sous if d not in (".git", "node_modules", "tools", "assets")]
        for n in noms:
            if n == "index.html" or n == "404.html":
                trouvees.append(os.path.relpath(os.path.join(dossier, n), RACINE))
    return sorted(trouvees)


def url_de(rel):
    """index.html -> '', consultance/index.html -> 'consultance/'"""
    return "" if rel == "index.html" else rel[:-len("index.html")]


def main():
    liste = pages()
    internes = [p for p in liste if p != "404.html"]
    contenus = {p: open(os.path.join(RACINE, p), encoding="utf-8").read() for p in liste}

    titres, descriptions = {}, {}
    atteintes = set()

    for p in internes:
        s = contenus[p]
        base = os.path.dirname(p)

        # --- un seul titre de premier niveau ---
        n = len(re.findall(r"<h1[\s>]", s))
        if n != 1:
            probleme(p, "%d balise h1 au lieu d'une" % n)

        # --- ancres imbriquees : HTML invalide, casse la mise en page ---
        if re.search(r"<a\b[^>]*>(?:(?!</a>).)*?<a\b", s, re.S):
            probleme(p, "ancre imbriquee dans une autre ancre")

        # --- integrite du menu ---
        for marque, attendu in (("mega-foot", 1), ("mega-nav", 1),
                                ("mega-plus", 1), ("nav-links", 1)):
            if s.count(marque) != attendu:
                probleme(p, "%s apparait %d fois au lieu de %d"
                         % (marque, s.count(marque), attendu))

        # --- liens internes ---
        for href in re.findall(r'href="([^"]+)"', s):
            if href.startswith(("http", "mailto:", "tel:", "#")):
                continue
            cible = os.path.normpath(os.path.join(base, href.split("#")[0]))
            plein = os.path.join(RACINE, cible)
            if not (os.path.isfile(plein) or os.path.isfile(os.path.join(plein, "index.html"))):
                probleme(p, "lien mort vers %s" % href)
            else:
                atteintes.add(os.path.relpath(
                    plein if os.path.isfile(plein) else os.path.join(plein, "index.html"),
                    RACINE))

        # --- images sans texte de remplacement ---
        for balise in re.findall(r"<img\b[^>]*>", s):
            if 'alt=' not in balise:
                probleme(p, "image sans attribut alt : %s" % balise[:60])

        # --- titre et description uniques ---
        t = re.search(r"<title>(.*?)</title>", s, re.S)
        d = re.search(r'<meta name="description" content="(.*?)"', s, re.S)
        if not t:
            probleme(p, "pas de balise title")
        else:
            titres.setdefault(t.group(1).strip(), []).append(p)
        if not d:
            probleme(p, "pas de meta description")
        else:
            texte = d.group(1).strip()
            descriptions.setdefault(texte, []).append(p)
            if len(texte) > 200:
                probleme(p, "meta description de %d caracteres (tronquee vers 160)" % len(texte))

        # --- adresse canonique coherente avec le chemin ---
        c = re.search(r'<link rel="canonical" href="([^"]+)"', s)
        if not c:
            probleme(p, "pas d'adresse canonique")
        elif c.group(1) != urljoin(BASE, url_de(p)):
            probleme(p, "canonique %s au lieu de %s" % (c.group(1), urljoin(BASE, url_de(p))))

        # --- JSON-LD ---
        m = re.search(r'<script type="application/ld\+json">\n(.*?)\n</script>', s, re.S)
        if not m:
            probleme(p, "pas de balisage JSON-LD")
        else:
            try:
                g = json.loads(m.group(1))
            except ValueError as e:
                probleme(p, "JSON-LD invalide : %s" % e)
            else:
                noeuds = g.get("@graph", [])
                types = [n.get("@type") for n in noeuds]
                if p != "index.html" and "Person" in types:
                    probleme(p, "redeclare le noeud Person au lieu de le referencer par @id")
                if p != "index.html" and not any(t == "BreadcrumbList" for t in types):
                    probleme(p, "pas de fil d'Ariane dans le balisage")
                if '"FAQPage"' in s and "<details>" not in s:
                    probleme(p, "balisage FAQPage sans questions visibles")

    # --- titres et descriptions dupliques ---
    for valeur, ou in titres.items():
        if len(ou) > 1:
            probleme(", ".join(ou), "partagent le meme title : %r" % valeur[:50])
    for valeur, ou in descriptions.items():
        if len(ou) > 1:
            probleme(", ".join(ou), "partagent la meme meta description")

    # --- pages orphelines : joignables depuis l'accueil ---
    for p in internes:
        if p != "index.html" and p not in atteintes:
            probleme(p, "page orpheline, aucun lien interne n'y mene")

    # --- sitemap en phase avec les pages reelles ---
    chemin_sitemap = os.path.join(RACINE, "sitemap.xml")
    if os.path.isfile(chemin_sitemap):
        dedans = set(re.findall(r"<loc>(.*?)</loc>", open(chemin_sitemap, encoding="utf-8").read()))
        attendues = {urljoin(BASE, url_de(p)) for p in internes}
        for manque in sorted(attendues - dedans):
            probleme("sitemap.xml", "n'annonce pas %s" % manque)
        for trop in sorted(dedans - attendues):
            probleme("sitemap.xml", "annonce %s qui n'existe pas" % trop)

    print("%d page(s) verifiee(s)" % len(internes))
    if soucis:
        for s in soucis:
            print("  " + s)
        print("\n%d probleme(s)" % len(soucis))
        sys.exit(1)
    print("aucun probleme")


if __name__ == "__main__":
    main()
