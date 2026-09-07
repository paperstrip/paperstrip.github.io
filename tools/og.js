#!/usr/bin/env node
/* Regenere assets/og.jpg, l'image affichee quand un lien du site est
   partage sur un reseau social ou dans une messagerie.

     NODE_PATH=/opt/node22/lib/node_modules node tools/og.js

   L'image est rendue par Chromium a partir du HTML ci-dessous, puis
   enregistree en JPEG. Elle reprend les variables de marque de
   assets/site.css : si la palette change la, il faut la reporter ici et
   relancer ce script. La police est integree en base64, aucun serveur
   n'est necessaire. */
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const RACINE = path.join(__dirname, '..');
const police = fs.readFileSync(path.join(RACINE, 'assets/fonts/sg-latin.woff2')).toString('base64');
const policeExt = fs.readFileSync(path.join(RACINE, 'assets/fonts/sg-latin-ext.woff2')).toString('base64');

/* Repris de :root dans assets/site.css */
const INK = '#17161C';
const ACCENT = '#9B87E0';
const CLAIR = '#FFFFFF';

const HTML = `<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8"><style>
  @font-face{font-family:'SG';font-weight:400 700;font-display:block;
    src:url(data:font/woff2;base64,${police}) format('woff2');}
  @font-face{font-family:'SGx';font-weight:400 700;font-display:block;
    src:url(data:font/woff2;base64,${policeExt}) format('woff2');}
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1200px;height:630px;background:${INK};color:${CLAIR};
    font-family:'SG','SGx',system-ui,sans-serif;-webkit-font-smoothing:antialiased;
    display:flex;flex-direction:column;justify-content:space-between;padding:74px 84px;}
  .marque{font-size:30px;font-weight:700;letter-spacing:-.015em}
  .marque i{color:${ACCENT};font-style:normal}
  .trait{width:64px;height:3px;background:${ACCENT};margin-bottom:34px}
  h1{font-size:64px;font-weight:400;line-height:1.1;letter-spacing:-.025em;max-width:17ch}
  h1 em{color:${ACCENT};font-style:normal}
  .bas{display:flex;justify-content:space-between;align-items:flex-end;
    font-size:23px;color:rgba(255,255,255,.66);letter-spacing:.005em}
</style></head><body>
  <p class="marque">Arnaud Herr<i>.</i></p>
  <div>
    <div class="trait"></div>
    <h1>Avant de vous vendre de l'IA, on regarde si vous <em>en avez besoin</em>.</h1>
  </div>
  <div class="bas">
    <span>Consultance &middot; Agents IA &middot; Sites et logiciels sur mesure</span>
    <span>Wallonie et Bruxelles</span>
  </div>
</body></html>`;

(async () => {
  const b = await chromium.launch();
  /* 1200x630 exactement : c'est la taille annoncee par og:image:width et
     og:image:height sur chaque page. Un rendu en double densite obligerait
     a changer ces deux balises partout. */
  const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  await p.setContent(HTML, { waitUntil: 'load' });
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(300);
  const sortie = path.join(RACINE, 'assets/og.jpg');
  await p.screenshot({ path: sortie, type: 'jpeg', quality: 88 });
  await b.close();
  const ko = Math.round(fs.statSync(sortie).size / 1024);
  console.log('assets/og.jpg regenere : ' + ko + ' Ko');
})();
