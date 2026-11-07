#!/usr/bin/env node
/* Contraste des textes poses sur les fonds en degrade (data-fond).

   tools/contraste.js ne lit que les couleurs de fond unies : il ne voit pas
   les degrades. Ce script mesure les vrais pixels. Pour chaque bloc
   data-fond, il masque les textes, photographie le fond, puis compare la
   couleur de chaque texte au pixel LE PLUS CLAIR derriere lui (pire cas).

     npx http-server . -p 8099 -s &
     NODE_PATH=/opt/node22/lib/node_modules node tools/contraste-degrades.js

   Seuils AA : 4,5 pour le texte courant, 3 pour le texte large (24 px, ou
   18,66 px en gras). Les boutons, qui ont leur propre fond, sont ignores. */
const { chromium } = require('playwright');
const PAGES = require('fs').readFileSync(__dirname + '/contraste.js', 'utf8')
  .match(/const PAGES=\[([^\]]*)\]/)[1].split(',').map(s => s.trim().replace(/'/g, '')).filter(Boolean);
const BASE = 'http://localhost:8099/';

function lum([r, g, b]) {
  const f = c => (c /= 255) <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m); return (x + 0.05) / (y + 0.05); };

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1 });
  let echecs = 0;
  const { PNG } = require('pngjs');
  for (const path of PAGES) {
    await p.goto(BASE + path, { waitUntil: 'load' });
    await p.addStyleTag({ content: '*,*::before,*::after{transition:none!important;animation:none!important}[data-rv]{opacity:1!important;transform:none!important;filter:none!important}' });
    const nb = await p.evaluate(() => document.querySelectorAll('[data-fond]').length);
    const lignes = [];
    for (let bi = 0; bi < nb; bi++) {
      // Bloc amene dans la fenetre, textes releves puis masques : rien n'est
      // redimensionne, la mise en page reste celle qui est mesuree.
      const textes = await p.evaluate(bi => {
        const bloc = document.querySelectorAll('[data-fond]')[bi];
        bloc.scrollIntoView({ block: 'start' });
        const out = [], walker = document.createTreeWalker(bloc, NodeFilter.SHOW_TEXT);
        let n;
        while ((n = walker.nextNode())) {
          if (!n.textContent.trim()) continue;
          const el = n.parentElement;
          if (el.closest('.btn,svg,[hidden]')) continue;
          const cs = getComputedStyle(el), r = document.createRange();
          r.selectNodeContents(n);
          for (const box of r.getClientRects()) {
            if (!box.width || !box.height) continue;
            out.push({ texte: n.textContent.trim().slice(0, 40), couleur: cs.color,
              taille: parseFloat(cs.fontSize), gras: parseInt(cs.fontWeight) >= 700,
              x: box.left, y: box.top, w: box.width, h: box.height });
          }
        }
        bloc.querySelectorAll('*').forEach(e => {
          e.dataset.c = '1'; e.style.setProperty('color', 'transparent', 'important');
          e.style.setProperty('border-color', 'transparent', 'important');
          e.style.setProperty('text-decoration-color', 'transparent', 'important');
          e.style.setProperty('background-image', 'none', 'important');
        });
        bloc.querySelectorAll('.btn,img,svg').forEach(e => e.style.setProperty('visibility', 'hidden', 'important'));
        return out;
      }, bi);
      const img = PNG.sync.read(await p.screenshot());
      for (const t of textes) {
        let clair = null, lmax = -1;
        for (let y = Math.max(0, Math.floor(t.y)); y < Math.min(img.height, t.y + t.h); y += 2)
          for (let x = Math.max(0, Math.floor(t.x)); x < Math.min(img.width, t.x + t.w); x += 2) {
            const k = (y * img.width + x) * 4, px = [img.data[k], img.data[k + 1], img.data[k + 2]], l = lum(px);
            if (l > lmax) { lmax = l; clair = px; }
          }
        if (!clair) continue;
        // rgb(255, 255, 255) ou color(srgb 1 1 1 / 0.88) : la seconde forme
        // exprime les canaux entre 0 et 1
        const m = t.couleur.match(/[\d.]+/g).map(Number);
        const a = m.length > 3 ? m[3] : 1;
        if (t.couleur.startsWith('color(')) for (let k = 0; k < 3; k++) m[k] *= 255;
        const fg = [0, 1, 2].map(k => Math.round(m[k] * a + clair[k] * (1 - a)));
        const r = ratio(fg, clair), seuil = (t.taille >= 24 || (t.gras && t.taille >= 18.66)) ? 3 : 4.5;
        if (r < seuil) lignes.push(`  ${r.toFixed(2)} au lieu de ${seuil} : ${t.taille}px "${t.texte}"`);
      }
      // retablir le bloc avant le suivant
      await p.evaluate(() => document.querySelectorAll('[data-c]').forEach(e => { e.removeAttribute('style'); delete e.dataset.c; }));
    }
    if (!nb) continue;
    const uniques = [...new Set(lignes)];
    console.log('/' + path + (uniques.length ? '' : '  tous les contrastes passent'));
    uniques.forEach(l => console.log(l)); echecs += uniques.length;
  }
  await b.close();
  console.log(`\n${echecs} echec(s) de contraste sur les degrades`);
  process.exitCode = echecs ? 1 : 0;
})();
