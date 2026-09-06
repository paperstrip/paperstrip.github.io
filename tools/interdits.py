#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Traque les formulations ecartees par Arnaud, dans TOUS les formats.

Trois fois pendant la refonte, une phrase retiree des pages HTML a survecu
dans llms.txt ou dans un balisage JSON-LD, parce que la relecture s'arretait
au visible. Ce script regarde le HTML, le texte, le XML et le Markdown.

    python3 tools/interdits.py            signale, sortie non nulle si interdit
    python3 tools/interdits.py --tout     montre aussi les points de vigilance

INTERDITS  : formulations explicitement refusees. Bloquent.
VIGILANCE  : tournures legitimes dans certains contextes seulement. Signalees
             sans bloquer, a relire a l'oeil.
"""
import os
import re
import sys

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EXTENSIONS = (".html", ".txt", ".xml", ".md", ".json")
IGNORES = {".git", "node_modules", "tools"}

# (motif, explication). Le motif est cherche sans tenir compte de la casse.
INTERDITS = [
    (r"ch[eè]ques?\s+entreprises?",
     "label Cheques Entreprise : jamais evoque par Arnaud"),
    (r"choix\s+du\s+mod[eè]le|le\s+mod[eè]le\s+se\s+discute|changer\s+de\s+mod[eè]le",
     "le choix du modele IA n'est pas un sujet commercial"),
    (r"demi[-\s]journ[ée]e",
     "observation sur place d'une demi-journee : pas dans le processus"),
    (r"—",
     "tiret cadratin : proscrit sur tout le site"),
    (r"\bfran[cç]ais[e]?\b(?=[^.]*\b(march[ée]|client|entreprise|PME|soci[ée]t[ée])\b)|\bFrance\b",
     "la zone couverte est la Wallonie et Bruxelles, pas la France"),
    (r"divis[ée]\w*\s+(ses\s+|les\s+|mes\s+)?temps|temps\s+de\s+production\s+par\s+trois",
     "gain de temps chiffre au doigt mouille"),
    (r"audit\s+gratuit|cadrage\s+gratuit|diagnostic\s+gratuit|audit\s+offert",
     "tout travail merite salaire : seul le premier appel est gratuit"),
    # Le sujet d'une phrase n'est jamais l'auteur en train de raconter ses
    # exploits. Le sujet, c'est le travail, le parcours ou le client.
    (r"\bj'ai\b|\bj'avais\b|\bje\s+suis\s+parvenu|\bj'ai\s+r[ée]ussi",
     "narration a la premiere personne du passe : reformuler autour du travail"),
    # « Ce que je fais », « Comment je travaille », « Qui je suis » : des
    # intitules qui parlent de l'auteur au lieu de parler du travail. C'est
    # par la que la tournure revenait, sous forme de titre et de libelle de
    # navigation plutot que de phrase.
    (r"<(?:h[1-4]|title)[^>]*>[^<]*\bje\b"
     r"|class=\"(?:lbl|foot-lbl|kicker|sec-head)\"[^>]*>[^<]*\bje\b"
     r"|\n#{2,} [^\n]*\bje\b",
     "intitule centre sur l'auteur : nommer le travail, pas celui qui le fait"),
]

VIGILANCE = [
    (r"\bPME\b",
     "legitime pour decrire Clevermint, a bannir dans le ciblage commercial"),
    (r"\bgratuit\w*\b",
     "acceptable pour l'appel de trente minutes uniquement"),
    (r"\bgarantit?\b|\bgarantissons\b",
     "verifier qu'on ne promet pas un rang SEO ou GEO"),
]


def fichiers():
    for dossier, sous, noms in os.walk(RACINE):
        sous[:] = [d for d in sous if d not in IGNORES and not d.startswith(".")]
        for n in sorted(noms):
            if n.endswith(EXTENSIONS):
                yield os.path.join(dossier, n)


def signale(chemin, contenu, regles, etiquette):
    trouves = []
    for motif, pourquoi in regles:
        for m in re.finditer(motif, contenu, re.I):
            ligne = contenu.count("\n", 0, m.start()) + 1
            debut = max(0, m.start() - 55)
            extrait = contenu[debut:m.end() + 55].replace("\n", " ")
            extrait = re.sub(r"\s+", " ", extrait).strip()
            trouves.append((ligne, m.group(0), pourquoi, extrait))
    if trouves:
        rel = os.path.relpath(chemin, RACINE)
        for ligne, texte, pourquoi, extrait in sorted(trouves):
            print("%s:%d  [%s] %r" % (rel, ligne, etiquette, texte))
            print("    %s" % pourquoi)
            print("    ...%s..." % extrait)
    return len(trouves)


def main():
    tout = "--tout" in sys.argv
    bloquants = 0
    vigilances = 0
    for chemin in fichiers():
        contenu = open(chemin, encoding="utf-8").read()
        bloquants += signale(chemin, contenu, INTERDITS, "INTERDIT")
        if tout:
            vigilances += signale(chemin, contenu, VIGILANCE, "vigilance")

    print()
    print("%d formulation(s) interdite(s)" % bloquants)
    if tout:
        print("%d point(s) de vigilance (a relire, non bloquants)" % vigilances)
    else:
        print("(relancer avec --tout pour les points de vigilance)")
    sys.exit(1 if bloquants else 0)


if __name__ == "__main__":
    main()
