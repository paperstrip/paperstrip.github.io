#!/usr/bin/env python3
"""Date les pages portant un balisage Article, d'apres l'historique Git.

Pourquoi ce n'est pas la date du dernier commit : un commit qui ajoute une
favicon ou change une couleur touche le fichier sans toucher au texte. S'en
servir comme dateModified annonce une fraicheur qui n'existe pas, ce que
Google traite comme une manipulation de date. On compare donc le contenu de
<main> d'une revision a l'autre et on ne retient que les commits qui l'ont
reellement change.

La date est ecrite a deux endroits, parce que les deux comptent :
  - dans le JSON-LD, pour les moteurs ;
  - en clair sous le titre, parce que Google demande une date visible et
    qu'un lecteur veut savoir s'il lit quelque chose de perime.

Usage : python3 tools/dates.py [--verifier]
"""

import hashlib
import pathlib
import re
import subprocess
import sys

RACINE = pathlib.Path(__file__).resolve().parent.parent

MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet",
        "août", "septembre", "octobre", "novembre", "décembre"]


def _empreinte_corps(rev, chemin):
    """Empreinte du <main> a une revision donnee, ou None s'il manque."""
    r = subprocess.run(["git", "show", f"{rev}:{chemin}"],
                       capture_output=True, text=True, cwd=RACINE)
    if r.returncode:
        return None
    m = re.search(r"<main.*?</main>", r.stdout, re.S)
    return hashlib.sha1(m.group(0).encode()).hexdigest() if m else None


def dates(chemin):
    """(publication, derniere modification reelle du texte) en ISO 8601."""
    sortie = subprocess.run(["git", "log", "--format=%H %aI", "--reverse", "--", chemin],
                            capture_output=True, text=True, cwd=RACINE).stdout
    revs = [l.split() for l in sortie.splitlines() if l.strip()]
    if not revs:
        return None, None
    publie = revs[0][1]
    modifie, empreinte = publie, _empreinte_corps(revs[0][0], chemin)
    for sha, date in revs[1:]:
        e = _empreinte_corps(sha, chemin)
        if e is not None and e != empreinte:
            empreinte, modifie = e, date
    return publie, modifie


def en_clair(iso):
    a, m, j = int(iso[:4]), int(iso[5:7]), int(iso[8:10])
    return f"{j} {MOIS[m-1]} {a}"


def traiter(chemin, texte):
    publie, modifie = dates(chemin)
    if not publie:
        return texte, None

    # --- le balisage ---
    def pose(t, cle, valeur):
        if f'"{cle}"' in t:
            return re.sub(rf'"{cle}":\s*"[^"]*"', f'"{cle}": "{valeur}"', t, count=1)
        return t.replace('"@type": "Article",',
                         f'"@type": "Article",\n   "{cle}": "{valeur}",', 1)

    texte = pose(texte, "datePublished", publie)
    texte = pose(texte, "dateModified", modifie)

    # --- la date visible, sous le chapo du titre ---
    visible = f'<time datetime="{publie[:10]}">{en_clair(publie)}</time>'
    if modifie[:10] != publie[:10]:
        visible += f', mis à jour le <time datetime="{modifie[:10]}">{en_clair(modifie)}</time>'
    bloc = f'      <p class="date-art" data-rv>Publié le {visible}</p>\n'

    texte = re.sub(r'      <p class="date-art".*?</p>\n', '', texte, flags=re.S)
    m = re.search(r'(<h1 id="h1".*?</h1>\n)', texte, re.S)
    if m:
        texte = texte[:m.end(1)] + bloc + texte[m.end(1):]
    return texte, (publie, modifie)


def main(verifier=False):
    cibles = [p for p in sorted(RACINE.rglob("index.html"))
              if "tools" not in p.parts and '"@type": "Article"' in p.read_text(encoding="utf-8")]
    change = []
    for p in cibles:
        rel = str(p.relative_to(RACINE))
        avant = p.read_text(encoding="utf-8")
        apres, d = traiter(rel, avant)
        if d:
            print(f"  {rel:<56} {d[0][:10]}"
                  + (f" → {d[1][:10]}" if d[1][:10] != d[0][:10] else ""))
        if apres != avant:
            change.append(rel)
            if not verifier:
                p.write_text(apres, encoding="utf-8")
    if verifier and change:
        print("dates desynchronisees :", ", ".join(change))
        sys.exit(1)
    print(f"{len(cibles)} page(s) datee(s)" + ("" if verifier else f", {len(change)} reecrite(s)"))


if __name__ == "__main__":
    main("--verifier" in sys.argv)
