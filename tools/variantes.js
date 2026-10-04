/*
  Produit des déclinaisons réduites des images servies, pour srcset.

    NODE_PATH=/opt/node22/lib/node_modules node tools/variantes.js

  Part de assets/img/<nom>.webp, déjà recadré et traité par tools/images.js,
  et écrit à côté <nom>-800.webp et <nom>-1200.webp. Un téléphone n'a pas
  besoin d'un hero de 1900 px : c'était l'essentiel du poids de la page sur
  mobile. À relancer après chaque passage de tools/images.js.

  Une largeur supérieure ou égale à celle de l'original est sautée : le
  navigateur prend alors l'original, déclaré en dernier dans srcset.
*/
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const DOSSIER = path.join(__dirname, '..', 'assets', 'img');
const LARGEURS = [800, 1200];
/* le hero n'a qu'une déclinaison, servie aux téléphones par <picture> */
const SAUF = { hero: [800] };
const QUALITE = 0.78;
const ko = o => (o / 1024).toFixed(0).padStart(5) + ' Ko';

(async () => {
  const sources = fs.readdirSync(DOSSIER).filter(f => /^[a-z-]+\.webp$/.test(f) && !/-\d+\.webp$/.test(f));
  const b = await chromium.launch();
  const p = await b.newPage();
  await p.goto('about:blank');

  for (const f of sources) {
    const nom = path.basename(f, '.webp');
    const brut = fs.readFileSync(path.join(DOSSIER, f));
    const uri = 'data:image/webp;base64,' + brut.toString('base64');
    for (const w of LARGEURS.filter(w => !(SAUF[nom] || []).includes(w))) {
      const sortie = await p.evaluate(async ({ uri, w, q }) => {
        const img = new Image();
        img.src = uri;
        await img.decode();
        if (w >= img.naturalWidth) return null;
        const h = Math.round(img.naturalHeight * w / img.naturalWidth);
        /* réduction par paliers, comme tools/images.js */
        let c = document.createElement('canvas');
        c.width = img.naturalWidth; c.height = img.naturalHeight;
        c.getContext('2d').drawImage(img, 0, 0);
        while (c.width > w * 2) {
          const n = document.createElement('canvas');
          n.width = Math.round(c.width / 2); n.height = Math.round(c.height / 2);
          const g = n.getContext('2d'); g.imageSmoothingQuality = 'high';
          g.drawImage(c, 0, 0, n.width, n.height);
          c = n;
        }
        const fin = document.createElement('canvas'); fin.width = w; fin.height = h;
        const g = fin.getContext('2d'); g.imageSmoothingQuality = 'high';
        g.drawImage(c, 0, 0, w, h);
        const blob = await new Promise(r => fin.toBlob(r, 'image/webp', q));
        return Array.from(new Uint8Array(await blob.arrayBuffer()));
      }, { uri, w, q: QUALITE });
      if (!sortie) continue;
      const out = Buffer.from(sortie);
      fs.writeFileSync(path.join(DOSSIER, nom + '-' + w + '.webp'), out);
      console.log('%s %s -> %s', (nom + '-' + w + '.webp').padEnd(28), ko(brut.length), ko(out.length));
    }
  }
  await b.close();
})();
