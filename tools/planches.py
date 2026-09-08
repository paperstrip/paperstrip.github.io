#!/usr/bin/env python3
"""Genere les planches techniques animees et les injecte dans les pages.

Une planche est un dessin SVG en registre de planche d'execution : trame
millimetree, reperes de calage, ligne de cote, cartouche. Fond clair, une
seule couleur d'accent posee sur l'etape qui merite d'etre signalee.

Pourquoi un generateur plutot que du SVG ecrit a la main : les planches
doivent rester identiques entre elles d'une page a l'autre. Une retouche de
trait ou d'opacite se fait ici une fois, et les six planches suivent.

Contrainte de contraste, verifiee avec tools/contraste.js : sur blanc, une
encre a moins de 0,62 d'opacite tombe sous 4,5:1 et echoue au niveau AA en
petit corps. Les textes ne descendent donc jamais sous 0,62, et l'accent
violet passe a #655892 pour le texte, le #9B87E0 clair ne montant qu'a
3,03:1. Les filets, eux, sont decoratifs et ne sont pas soumis au seuil.

Usage : python3 tools/planches.py [--verifier]
        --verifier ne reecrit rien et signale les pages desynchronisees.
"""

import pathlib
import re
import sys

RACINE = pathlib.Path(__file__).resolve().parent.parent

W, H = 1200, 760
INK = "#17161C"
ACC = "#9B87E0"          # accent, pour les aplats et les filets
ACC_TXT = "#655892"      # meme accent assombri, pour le texte
PAPIER = "#FFFFFF"

# Opacites du trait. Relevees depuis la premiere version : a 0,30 les filets
# tombaient a 1,96:1 et le dessin paraissait delave.
OP_CADRE = ".42"
OP_LIAISON = ".45"
OP_EQUERRE = ".55"
OP_BARRE = ".26"

SY, SH = 286, 96         # ordonnee et hauteur des stations
X0, X1 = 96, 1080        # emprise horizontale utile
DY = 520                 # ligne de cote


def _stations_geometrie(n):
    """Repartit n stations sur l'emprise utile, gouttiere de 48 px minimum."""
    gouttiere = 48
    largeur = min(150, (X1 - X0 - (n - 1) * gouttiere) / n)
    pas = largeur + (X1 - X0 - n * largeur) / (n - 1)
    return largeur, [X0 + i * pas for i in range(n)]


def planche(cle, titre, sous_titre, stations, cote, cartouche,
            annotation=None, issues=None):
    """Rend une planche complete en SVG.

    stations  : liste de (numero, libelle, precision, accent)
    annotation: (index de station, ligne haute, ligne basse) ou None
    issues    : liste de (libelle, precision, accent) ou None
    cartouche : liste de (intitule, valeur)
    """
    n = len(stations)
    sw, xs = _stations_geometrie(n)
    p = [f'<defs>'
         f'<pattern id="{cle}-gp" width="24" height="24" patternUnits="userSpaceOnUse">'
         f'<path d="M24 0 L0 0 L0 24" fill="none" stroke="{INK}" stroke-opacity=".055" stroke-width=".8"/></pattern>'
         f'<pattern id="{cle}-gp2" width="120" height="120" patternUnits="userSpaceOnUse">'
         f'<path d="M120 0 L0 0 L0 120" fill="none" stroke="{INK}" stroke-opacity=".1" stroke-width=".9"/></pattern>'
         f'<clipPath id="{cle}-stage"><rect width="{W}" height="{H}" rx="14"/></clipPath></defs>']
    p.append(f'<g clip-path="url(#{cle}-stage)">')
    p.append(f'<rect width="{W}" height="{H}" fill="{PAPIER}"/>')
    p.append(f'<rect class="pl-fade" width="{W}" height="{H}" fill="url(#{cle}-gp)"/>')
    p.append(f'<rect class="pl-fade" width="{W}" height="{H}" fill="url(#{cle}-gp2)"/>')
    p.append(f'<rect x="48" y="48" width="{W-96}" height="{H-96}" fill="none" stroke="{INK}" stroke-opacity="{OP_CADRE}"/>')
    p.append(f'<rect x="60" y="60" width="{W-120}" height="{H-120}" fill="none" stroke="{INK}" stroke-opacity=".14" stroke-width=".8"/>')

    # cartouche de titre
    p.append(f'<text x="86" y="112" fill="{INK}" fill-opacity=".82" font-size="15" font-weight="700" letter-spacing="2.6">{titre}</text>')
    p.append(f'<text x="86" y="132" fill="{INK}" fill-opacity=".62" font-size="10.5" letter-spacing="1.1">{sous_titre}</text>')
    p.append(f'<line x1="86" y1="150" x2="1114" y2="150" stroke="{INK}" stroke-opacity=".2"/>')

    # stations
    for i, (num, lab, sub, acc) in enumerate(stations):
        x = xs[i]
        d = round(0.5 + i * 0.34, 2)
        teinte = ACC if acc else INK
        p.append(f'<g class="pl-stn" style="animation-delay:{d}s">')
        if acc:
            p.append(f'<rect x="{x:.0f}" y="{SY}" width="{sw:.0f}" height="{SH}" rx="3" fill="{ACC}" fill-opacity=".13" stroke="{ACC}" stroke-width="1.4"/>')
        else:
            p.append(f'<rect x="{x:.0f}" y="{SY}" width="{sw:.0f}" height="{SH}" rx="3" fill="{PAPIER}" stroke="{INK}" stroke-opacity="{OP_CADRE}"/>')
        for r, wpx in enumerate([86, 110, 64]):
            wpx = min(wpx, sw - 40)
            p.append(f'<rect x="{x+20:.0f}" y="{SY+28+r*16}" width="{wpx:.0f}" height="4" rx="2" fill="{teinte}" fill-opacity="{".5" if acc else OP_BARRE}"/>')
        for cx, cy, sx, sy in [(x, SY, 1, 1), (x+sw, SY, -1, 1), (x, SY+SH, 1, -1), (x+sw, SY+SH, -1, -1)]:
            p.append(f'<path d="M{cx:.0f} {cy+9*sy} L{cx:.0f} {cy} L{cx+9*sx:.0f} {cy}" fill="none" stroke="{teinte}" stroke-opacity="{"1" if acc else OP_EQUERRE}" stroke-width="1.2"/>')
        cxm = x + sw / 2
        p.append(f'<circle cx="{cxm:.0f}" cy="{SY-34}" r="13" fill="{PAPIER}" stroke="{teinte}" stroke-opacity="{"1" if acc else ".5"}"/>')
        p.append(f'<text x="{cxm:.0f}" y="{SY-30}" text-anchor="middle" fill="{ACC_TXT if acc else INK}" fill-opacity="{"1" if acc else ".72"}" font-size="10" font-weight="700">{num}</text>')
        p.append(f'<line x1="{cxm:.0f}" y1="{SY-21}" x2="{cxm:.0f}" y2="{SY}" stroke="{INK}" stroke-opacity=".26" stroke-dasharray="2 3"/>')
        p.append(f'<text x="{x:.0f}" y="{SY+SH+30}" fill="{INK}" fill-opacity=".78" font-size="11" font-weight="700" letter-spacing="1.5">{lab}</text>')
        p.append(f'<text x="{x:.0f}" y="{SY+SH+48}" fill="{INK}" fill-opacity=".62" font-size="10" letter-spacing=".7">{sub}</text>')
        p.append('</g>')

    # liaisons et terminaux
    ym = SY + SH / 2
    for i in range(n - 1):
        x1, x2 = xs[i] + sw, xs[i+1]
        dl = round(0.72 + i * 0.34, 2)
        p.append(f'<line class="pl-lnk" x1="{x1:.0f}" y1="{ym:.0f}" x2="{x2:.0f}" y2="{ym:.0f}" stroke="{INK}" stroke-opacity="{OP_LIAISON}" pathLength="100" style="animation-delay:{dl}s"/>')
        for xx in (x1, x2):
            p.append(f'<rect class="pl-stn" x="{xx-3:.0f}" y="{ym-3:.0f}" width="6" height="6" fill="{PAPIER}" stroke="{INK}" stroke-opacity="{OP_EQUERRE}" style="animation-delay:{dl}s"/>')

    # bille qui parcourt la chaine
    p.append(f'<path id="{cle}-run" d="M{xs[0]+sw/2:.0f} {ym:.0f} H{xs[-1]+sw/2:.0f}" fill="none" stroke="none"/>')
    p.append(f'<circle class="pl-bead" r="5" fill="{ACC}"><animateMotion dur="4.2s" begin="2.6s" '
             f'repeatCount="indefinite"><mpath href="#{cle}-run"/></animateMotion></circle>')

    # renvoi d'annotation
    if annotation:
        idx, l1, l2 = annotation
        ax = xs[idx] + sw / 2
        p.append('<g class="pl-anno" style="animation-delay:2.5s">')
        # le filet passe SOUS le bloc de texte : au-dessus il le barrait des que
        # la station annotee se trouvait sous les libelles, cales a droite.
        p.append(f'<path d="M{ax:.0f} {SY-52} V228 H1114" fill="none" stroke="{ACC}" stroke-opacity=".55" stroke-dasharray="3 3"/>')
        p.append(f'<circle cx="{ax:.0f}" cy="{SY-52}" r="3" fill="{ACC}"/>')
        p.append(f'<text x="1114" y="180" text-anchor="end" fill="{ACC_TXT}" font-size="10.5" font-weight="700" letter-spacing="1.4">{l1}</text>')
        p.append(f'<text x="1114" y="204" text-anchor="end" fill="{INK}" fill-opacity=".62" font-size="10" letter-spacing=".7">{l2}</text>')
        p.append('</g>')

    # ligne de cote
    p.append('<g class="pl-anno" style="animation-delay:3.1s">')
    p.append(f'<line x1="{xs[0]:.0f}" y1="{DY}" x2="{xs[-1]+sw:.0f}" y2="{DY}" stroke="{INK}" stroke-opacity="{OP_LIAISON}"/>')
    for xx in (xs[0], xs[-1] + sw):
        p.append(f'<line x1="{xx:.0f}" y1="{DY-6}" x2="{xx:.0f}" y2="{DY+6}" stroke="{INK}" stroke-opacity="{OP_EQUERRE}"/>')
    milieu = (xs[0] + xs[-1] + sw) / 2
    # 10 px gras avec 1,6 d'approche : ~7,5 px par signe, donc 3,75 en demi-largeur,
    # plus une marge de 14 px de chaque cote pour que le filet ne frole pas le texte.
    demi = max(120, len(cote) * 3.75 + 14)
    p.append(f'<rect x="{milieu-demi:.0f}" y="{DY-11}" width="{demi*2:.0f}" height="22" fill="{PAPIER}"/>')
    p.append(f'<text x="{milieu:.0f}" y="{DY+4}" text-anchor="middle" fill="{INK}" fill-opacity=".68" font-size="10" font-weight="700" letter-spacing="1.6">{cote}</text>')
    p.append('</g>')

    # issues
    if issues:
        p.append('<g class="pl-anno" style="animation-delay:3.6s">')
        for k, (lb, sub, acc) in enumerate(issues):
            xx = 600 + k * 260
            p.append(f'<line x1="{xx}" y1="{DY}" x2="{xx}" y2="578" stroke="{INK}" stroke-opacity=".28" stroke-dasharray="3 3"/>')
            p.append(f'<rect x="{xx}" y="578" width="200" height="58" fill="{PAPIER}" stroke="{INK}" stroke-opacity="{OP_CADRE}"/>')
            p.append(f'<rect x="{xx}" y="578" width="3" height="58" fill="{ACC}" fill-opacity="{".85" if acc else ".4"}"/>')
            p.append(f'<text x="{xx+16}" y="604" fill="{INK}" fill-opacity=".78" font-size="10.5" font-weight="700" letter-spacing="1.4">{lb}</text>')
            p.append(f'<text x="{xx+16}" y="622" fill="{INK}" fill-opacity=".62" font-size="9.5" letter-spacing=".7">{sub}</text>')
        p.append('</g>')

    # cartouche de pied
    p.append('<g class="pl-anno" style="animation-delay:4s">')
    hauteur = 32 * len(cartouche)
    p.append(f'<rect x="86" y="578" width="264" height="{hauteur}" fill="none" stroke="{INK}" stroke-opacity="{OP_CADRE}"/>')
    for i, (a, b) in enumerate(cartouche):
        if i:
            p.append(f'<line x1="86" y1="{578+i*32}" x2="350" y2="{578+i*32}" stroke="{INK}" stroke-opacity=".2"/>')
        p.append(f'<text x="98" y="{600+i*32}" fill="{INK}" fill-opacity=".62" font-size="9" font-weight="700" letter-spacing="1.4">{a}</text>')
        p.append(f'<text x="338" y="{600+i*32}" text-anchor="end" fill="{INK}" fill-opacity=".78" font-size="9.5" letter-spacing=".6">{b}</text>')
    p.append('</g></g>')
    return "\n        ".join(p)


def bloc(cle, alt, **kw):
    """Enveloppe la planche dans sa figure, avec le repli de defilement."""
    svg = planche(cle, **kw)
    return (f'      <!-- planche:{cle} -->\n'
            f'      <figure class="planche" data-rv>\n'
            f'        <p class="rail-hint">← Faites glisser</p>\n'
            f'        <div class="planche-scroll">\n'
            f'          <svg viewBox="0 0 {W} {H}" role="img" aria-label="{alt}">\n'
            f'        {svg}\n'
            f'          </svg>\n'
            f'        </div>\n'
            f'      </figure>\n'
            f'      <!-- /planche:{cle} -->')


# --------------------------------------------------------------------------
# Les six planches. Rien n'est invente ici : chaque etape vient soit des
# precisions donnees par Arnaud, soit du texte deja publie sur la page.
# --------------------------------------------------------------------------
PLANCHES = [
    dict(
        cle="tri", page="agents-metier/index.html",
        ancre='      </ul>\n',
        intro="Le premier de ces cas, relevé en entier. La frontière est le vrai sujet : "
              "une seule étape de la chaîne sort de notre infrastructure, et le texte y "
              "arrive déjà débarrassé de l'identité du client.",
        titre="TRI DOCUMENTAIRE", sous_titre="chaîne de traitement · relevé d'exploitation",
        alt="Planche technique du tri documentaire : dépôt dans la fiche client, lecture par OCR en local, "
            "anonymisation, classification par un modèle externe, retour par callback. Les cas incertains "
            "partent au responsable du dossier.",
        stations=[("01", "DÉPÔT", "fiche client · ERP", False),
                  ("02", "LECTURE", "OCR · en local", False),
                  ("03", "ANONYMISATION", "identité retirée", False),
                  ("04", "CLASSIFICATION", "15 catégories", True),
                  ("05", "RETOUR", "callback · JSON", False)],
        annotation=(3, "SEULE ÉTAPE HORS INFRASTRUCTURE", "le texte y arrive déjà anonymisé"),
        cote="CHAÎNE COMPLÈTE · 5 ÉTAPES",
        cartouche=[("PLANCHE", "01 / 06"), ("VOLUME", "100–200 doc. / mois"),
                   ("VALIDATION", "humaine sur le doute")],
        issues=[("CAS TRANCHÉ", "renommé et rangé", False),
                ("CAS INCERTAIN", "le responsable tranche", True)],
    ),
    dict(
        cle="redac", page="agents-metier/index.html",
        ancre=None,  # posee juste apres la planche du tri
        intro="Le deuxième cas, sur un tout autre volume. Ce qui compte ici n'est pas la "
              "vitesse de rédaction, c'est que rien ne parte sans qu'un humain l'ait relu.",
        titre="RÉPONSES ASSISTÉES", sous_titre="première ligne · relevé d'exploitation",
        alt="Planche technique de la pré-rédaction assistée : un mail entrant déclenche une recherche du "
            "contexte du dossier dans Salesforce, une proposition de réponse est pré-rédigée, puis l'agent "
            "relit, corrige et envoie.",
        stations=[("01", "MAIL ENTRANT", "équipe de première ligne", False),
                  ("02", "RECHERCHE", "contexte du dossier", False),
                  ("03", "SALESFORCE", "source interrogée", False),
                  ("04", "PRÉ-RÉDACTION", "proposition de réponse", True),
                  ("05", "RELECTURE", "l'agent corrige et envoie", False)],
        annotation=(4, "RIEN NE PART SANS RELECTURE", "personne n'écrit sous la dictée d'un modèle"),
        cote="ENVIRON 10 000 MAILS PAR MOIS",
        cartouche=[("PLANCHE", "02 / 06"), ("VOLUME", "~10 000 mails / mois"),
                   ("ENVOI", "après validation humaine")],
    ),
    dict(
        cle="mcp", page="sites-web-ia/index.html",
        ancre='  <section class="sec-soft" aria-labelledby="s3">',
        avant=True,
        intro="Le mécanisme, relevé de bout en bout. Le point à retenir est la dernière "
              "étape : tout arrive en brouillon, rien ne se publie sans vous.",
        titre="SERVEUR MCP SUR WORDPRESS", sous_titre="production de pages · relevé d'exploitation",
        alt="Planche technique du serveur MCP posé sur le page builder : une demande de page, le serveur MCP, "
            "les gabarits de la charte, la page créée sans ouvrir l'administration, et un brouillon qui attend "
            "votre relecture.",
        stations=[("01", "DEMANDE", "une page à produire", False),
                  ("02", "SERVEUR MCP", "posé sur le page builder", True),
                  ("03", "CHARTE", "gabarits du site", False),
                  ("04", "PAGE CRÉÉE", "sans ouvrir l'administration", False),
                  ("05", "BROUILLON", "vous relisez et publiez", False)],
        annotation=(4, "RIEN NE SE PUBLIE TOUT SEUL", "tout arrive en brouillon"),
        cote="UNE QUINZAINE DE PAGES PRODUITES AINSI",
        cartouche=[("PLANCHE", "03 / 06"), ("PRODUIT", "une quinzaine de pages"),
                   ("PUBLICATION", "jamais automatique")],
    ),
    dict(
        cle="veille", page="saas-sur-mesure/index.html",
        ancre='  <section class="sec-soft" aria-labelledby="s4">',
        avant=True,
        intro="Un des outils qui tourne aujourd'hui, relevé en entier. Sa seule raison "
              "d'être tient dans la dernière étape.",
        titre="SUPERVISION DE PARC", sous_titre="dix sites clients · relevé d'exploitation",
        alt="Planche technique de la supervision : une sonde vérifie l'état des sites en continu, "
            "détecte l'absence de réponse et notifie immédiatement.",
        stations=[("01", "SONDE", "état vérifié en continu", False),
                  ("02", "RÉPONSE", "le site répond, ou non", False),
                  ("03", "DÉTECTION", "absence de réponse", True),
                  ("04", "NOTIFICATION", "alerte immédiate", False)],
        annotation=(3, "AVANT L'APPEL DU CLIENT", "apprendre une panne par lui, c'est l'avoir subie deux fois"),
        cote="DIX SITES CLIENTS SOUS SURVEILLANCE",
        cartouche=[("PLANCHE", "04 / 06"), ("PARC", "10 sites clients"),
                   ("ALERTE", "dès la première chute")],
    ),
    dict(
        cle="croise", page="pilotage-donnees/index.html",
        ancre='  <section class="sec-soft" aria-labelledby="s4">',
        avant=True,
        intro="Le trajet d'une question, du chiffre brut à la réponse. La dernière étape "
              "est celle qui distingue l'outil d'un moteur qui affirme sans montrer.",
        titre="CROISEMENT ET INTERROGATION", sous_titre="pilotage par les données · relevé d'exploitation",
        alt="Planche technique du croisement de données : les sources internes et le contexte extérieur sont "
            "rassemblés puis croisés, une question posée en français obtient une réponse dont les chiffres "
            "sont cités.",
        stations=[("01", "SOURCES INTERNES", "ERP · CRM · caisse · compta", False),
                  ("02", "CONTEXTE EXTÉRIEUR", "météo · fériés · recherches", False),
                  ("03", "CROISEMENT", "sur vos données réelles", True),
                  ("04", "QUESTION", "posée en français", False),
                  ("05", "RÉPONSE", "chiffres cités", False)],
        annotation=(4, "LES CHIFFRES SONT CITÉS", "vous voyez d'où vient chaque nombre"),
        cote="DES SOURCES INTERNES À LA RÉPONSE",
        cartouche=[("PLANCHE", "05 / 06"), ("EN SERVICE", "groupe de 5 magasins"),
                   ("LANGUE", "question en français")],
    ),
    dict(
        cle="audit", page="ia-maitrisee/index.html",
        ancre='  <section class="sec-soft" aria-labelledby="s4">',
        avant=True,
        intro="Un exemple mesuré, relevé en entier. Le coût de fonctionnement figure au "
              "cartouche : c'est rarement le chiffre qu'on vous donne.",
        titre="AUDIT DE RÉFÉRENCEMENT", sous_titre="exécution mensuelle · relevé d'exploitation",
        alt="Planche technique de l'audit de référencement automatisé : les données de la Search Console, "
            "l'observation des concurrents et PageSpeed Insights alimentent la rédaction du rapport, livré "
            "une fois par mois.",
        stations=[("01", "SEARCH CONSOLE", "vos données de recherche", False),
                  ("02", "CONCURRENCE", "ce que font les autres", False),
                  ("03", "PAGESPEED", "état technique des pages", False),
                  ("04", "RÉDACTION", "le rapport s'écrit", True),
                  ("05", "LIVRAISON", "une fois par mois", False)],
        annotation=(3, "80 000 TOKENS PAR EXÉCUTION", "soit une vingtaine de centimes le rapport"),
        cote="UN RAPPORT PAR MOIS",
        cartouche=[("PLANCHE", "06 / 06"), ("COÛT", "~0,20 € par exécution"),
                   ("CADENCE", "mensuelle")],
    ),
]


def injecter(verifier=False):
    ecrits, desync = [], []
    par_page = {}
    for spec in PLANCHES:
        par_page.setdefault(spec["page"], []).append(spec)

    for page, specs in par_page.items():
        f = RACINE / page
        s = origine = f.read_text(encoding="utf-8")
        for spec in specs:
            cle = spec["cle"]
            corps = bloc(cle, spec["alt"], titre=spec["titre"], sous_titre=spec["sous_titre"],
                         stations=spec["stations"], cote=spec["cote"],
                         cartouche=spec["cartouche"], annotation=spec.get("annotation"),
                         issues=spec.get("issues"))
            intro = f'      <p data-rv>{spec["intro"]}</p>\n\n'
            morceau = intro + corps + "\n"
            motif = re.compile(rf'      <p data-rv>[^<]*</p>\n\n      <!-- planche:{cle} -->.*?<!-- /planche:{cle} -->\n',
                               re.S)
            if motif.search(s):
                s = motif.sub(lambda _: morceau, s, count=1)
            else:
                ancre = spec.get("ancre")
                if ancre is None:      # se pose derriere la planche precedente
                    prec = specs[specs.index(spec) - 1]["cle"]
                    fin = f'      <!-- /planche:{prec} -->\n'
                    s = s.replace(fin, fin + "\n" + morceau, 1)
                elif spec.get("avant"):
                    s = s.replace(ancre, morceau + "\n" + ancre, 1)
                else:
                    s = s.replace(ancre, ancre + "\n" + morceau, 1)
        if s != origine:
            if verifier:
                desync.append(page)
            else:
                f.write_text(s, encoding="utf-8")
                ecrits.append(page)
    return ecrits, desync


if __name__ == "__main__":
    verif = "--verifier" in sys.argv
    ecrits, desync = injecter(verif)
    if verif:
        if desync:
            print("planches desynchronisees :", ", ".join(desync))
            sys.exit(1)
        print(f"{len(PLANCHES)} planche(s) a jour")
    else:
        print(f"{len(PLANCHES)} planche(s) generee(s)")
        for p in ecrits:
            print("  ecrit", p)
