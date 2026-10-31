#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Signale les pages modifiees aux moteurs qui suivent IndexNow.

IndexNow est un protocole commun a Bing, Yandex, Seznam, Naver et Yep : une
seule notification a api.indexnow.org est relayee a tous. Bing alimente aussi
les reponses de ChatGPT et de Copilot. Google ne l'utilise pas : pour lui, ce
sont le sitemap et la Search Console.

    python3 tools/indexnow.py --depuis REV     pages modifiees entre REV et HEAD
    python3 tools/indexnow.py --tout           toutes les URL du sitemap
    ajouter --essai pour afficher la liste sans rien envoyer

La cle est le fichier <cle>.txt a la racine du depot, dont le contenu est la
cle elle-meme : c'est ce fichier, servi par le site, qui prouve que la
notification vient bien du proprietaire du domaine. Ne pas le supprimer.

Lance automatiquement par .github/workflows/indexnow.yml a chaque publication
sur gh-pages.
"""
import json
import os
import re
import subprocess
import sys
import urllib.request

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HOTE = "arnaudherr.be"
BASE = "https://%s/" % HOTE
API = "https://api.indexnow.org/indexnow"


def cle():
    for nom in os.listdir(RACINE):
        m = re.fullmatch(r"([0-9a-f]{32})\.txt", nom)
        if m and open(os.path.join(RACINE, nom)).read().strip() == m.group(1):
            return m.group(1)
    sys.exit("aucun fichier de cle IndexNow a la racine")


def url_de(chemin):
    """index.html -> URL de la page ; tout le reste est ignore."""
    if chemin == "index.html":
        return BASE
    if chemin.endswith("/index.html") and not chemin.startswith((".", "tools/", "assets/")):
        return BASE + chemin[: -len("index.html")]
    return None


def depuis(rev):
    sortie = subprocess.run(
        ["git", "diff", "--name-only", "--diff-filter=AM", rev, "HEAD"],
        cwd=RACINE, capture_output=True, text=True, check=True).stdout
    urls = [url_de(c) for c in sortie.split()]
    return sorted({u for u in urls if u})


def tout():
    xml = open(os.path.join(RACINE, "sitemap.xml"), encoding="utf-8").read()
    return re.findall(r"<loc>([^<]+)</loc>", xml)


def envoie(urls, k):
    corps = json.dumps({"host": HOTE, "key": k,
                        "keyLocation": BASE + k + ".txt",
                        "urlList": urls}).encode()
    req = urllib.request.Request(API, data=corps, method="POST",
                                 headers={"Content-Type": "application/json; charset=utf-8"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.status


def main():
    args = sys.argv[1:]
    essai = "--essai" in args
    if "--tout" in args:
        urls = tout()
    elif "--depuis" in args:
        urls = depuis(args[args.index("--depuis") + 1])
    else:
        sys.exit(__doc__)
    if not urls:
        print("aucune page modifiee, rien a signaler")
        return
    print("%d URL :" % len(urls))
    for u in urls:
        print("  " + u)
    if essai:
        print("(essai : rien n'a ete envoye)")
        return
    # 200 et 202 veulent dire acceptee ; 422 ou 403 signalent une cle ou un
    # hote refuses, et font echouer le script pour que l'erreur se voie.
    print("IndexNow a repondu %d" % envoie(urls, cle()))


if __name__ == "__main__":
    main()
