/*
  Compresse les images brutes de assets/img-src/ vers assets/img/.

  Aucun utilitaire d'image n'est installé sur la machine : on passe par le
  moteur de rendu de Chromium, qui sait décoder, redimensionner et réencoder.

    NODE_PATH=/opt/node22/lib/node_modules node tools/images.js
    NODE_PATH=/opt/node22/lib/node_modules node tools/images.js --jpeg
    NODE_PATH=/opt/node22/lib/node_modules node tools/images.js --bichromie
    NODE_PATH=/opt/node22/lib/node_modules node tools/images.js --bichromie --dose 55
    NODE_PATH=/opt/node22/lib/node_modules node tools/images.js --qualite 85

  Chaque fichier de assets/img-src/ doit porter un nom de la table ci-dessous,
  quelle que soit son extension. Il est recadré au centre au format attendu,
  redimensionné, puis réencodé en WebP (ou en JPEG avec --jpeg).
*/
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const RACINE = path.join(__dirname, '..');
const SRC = path.join(RACINE, 'assets', 'img-src');
const DST = path.join(RACINE, 'assets', 'img');

/* nom : [largeur, hauteur] telles que declarees dans le HTML */
const CIBLES = {
  'hero':                  [1900, 1267],
  'constat-equipe':        [1000, 1250],
  'cas-tri-documentaire':  [900, 1200],
  'cas-reponses':          [900, 1200],
  'cas-extensions':        [900, 1200],
  'cas-pilotage':          [900, 1200],
  'cas-ponts':             [900, 1200],
  'bento-code':            [800, 1000],
  'bento-atelier':         [1200, 800],
  'manifeste':             [1800, 1200],
  'terrain-distribution':  [900, 720],
  'terrain-relation':      [900, 720],
  'terrain-administratif': [900, 720],
  'cta':                   [1800, 1200],
  'portrait':              [1000, 1250],
  'og':                    [1200, 630],
};

const args = process.argv.slice(2);
const jpeg = args.includes('--jpeg');
/* --bichromie : projette la luminance sur la rampe de marque. Sans ce
   drapeau, les couleurs d'origine sont conservees. */
const bichromie = args.includes('--bichromie');
/* Rampe derivee de :root dans assets/site.css. Les extremes sont
   --brand-ink et --brand-tint-2. Le point median n'est pas --brand-accent
   pur : a pleine saturation, toute photo virait au violet. C'est un lavande
   rompu de gris, qui donne un monochrome teinte plutot qu'une couleur. */
const RAMPE = [[0x17, 0x16, 0x1C], [0x85, 0x79, 0xB0], [0xF6, 0xF5, 0xFA]];
/* --dose 0 a 100 : melange entre l'image d'origine et le traitement.
   100 par defaut, 50 donne une teinte legere. */
const idose = args.indexOf('--dose');
const dose = idose !== -1 ? Math.max(0, Math.min(100, Number(args[idose + 1]))) / 100 : 1;
const iq = args.indexOf('--qualite');
const qualite = iq !== -1 ? Number(args[iq + 1]) / 100 : 0.78;
const ext = jpeg ? 'jpg' : 'webp';
const mime = jpeg ? 'image/jpeg' : 'image/webp';

const ko = o => (o / 1024).toFixed(0).padStart(5) + ' Ko';

(async () => {
  if (!fs.existsSync(SRC)) { console.error('dossier absent : assets/img-src/'); process.exit(1); }
  const fichiers = fs.readdirSync(SRC).filter(f => /\.(png|jpe?g|webp|avif)$/i.test(f));
  if (!fichiers.length) { console.log('rien a traiter dans assets/img-src/'); return; }
  fs.mkdirSync(DST, { recursive: true });

  const b = await chromium.launch();
  const p = await b.newPage();
  await p.goto('about:blank');

  let avant = 0, apres = 0, inconnus = [];
  for (const f of fichiers) {
    const nom = path.basename(f, path.extname(f));
    const cible = CIBLES[nom];
    if (!cible) { inconnus.push(f); continue; }
    const brut = fs.readFileSync(path.join(SRC, f));
    avant += brut.length;

    const dataUri = 'data:image/' + (path.extname(f).slice(1).toLowerCase().replace('jpg', 'jpeg'))
                    + ';base64,' + brut.toString('base64');

    const sortie = await p.evaluate(async ({ uri, w, h, mime, q, rampe, dose }) => {
      const img = new Image();
      img.src = uri;
      await img.decode();
      /* recadrage au centre pour atteindre exactement le rapport demande */
      const rApp = w / h, rSrc = img.naturalWidth / img.naturalHeight;
      let sw = img.naturalWidth, sh = img.naturalHeight, sx = 0, sy = 0;
      if (rSrc > rApp) { sw = Math.round(sh * rApp); sx = Math.round((img.naturalWidth - sw) / 2); }
      else { sh = Math.round(sw / rApp); sy = Math.round((img.naturalHeight - sh) / 2); }
      /* reduction par paliers : un seul drawImage sur un gros facteur cree des escaliers */
      let cw = sw, ch = sh;
      let c = document.createElement('canvas'); c.width = cw; c.height = ch;
      c.getContext('2d').drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
      while (cw > w * 2) {
        const n = document.createElement('canvas');
        n.width = Math.round(cw / 2); n.height = Math.round(ch / 2);
        const g = n.getContext('2d'); g.imageSmoothingQuality = 'high';
        g.drawImage(c, 0, 0, n.width, n.height);
        c = n; cw = n.width; ch = n.height;
      }
      const fin = document.createElement('canvas'); fin.width = w; fin.height = h;
      const g = fin.getContext('2d'); g.imageSmoothingQuality = 'high';
      g.drawImage(c, 0, 0, w, h);
      if (rampe && dose > 0) {
        /* Table de correspondance sur 256 niveaux : deux segments lineaires
           entre les trois teintes de la rampe, calculee une fois plutot que
           par pixel. */
        const lut = new Uint8Array(256 * 3);
        for (let i = 0; i < 256; i++) {
          const x = i / 255, seg = x < 0.5 ? 0 : 1, k = (x - seg * 0.5) * 2;
          for (let c = 0; c < 3; c++)
            lut[i * 3 + c] = Math.round(rampe[seg][c] + (rampe[seg + 1][c] - rampe[seg][c]) * k);
        }
        const d = g.getImageData(0, 0, w, h), px = d.data;
        for (let i = 0; i < px.length; i += 4) {
          /* luminance perceptuelle, pas la moyenne des canaux */
          const l = (0.2126 * px[i] + 0.7152 * px[i + 1] + 0.0722 * px[i + 2]) | 0;
          px[i] += (lut[l * 3] - px[i]) * dose;
          px[i + 1] += (lut[l * 3 + 1] - px[i + 1]) * dose;
          px[i + 2] += (lut[l * 3 + 2] - px[i + 2]) * dose;
        }
        g.putImageData(d, 0, 0);
      }
      const blob = await new Promise(r => fin.toBlob(r, mime, q));
      const buf = new Uint8Array(await blob.arrayBuffer());
      return { octets: Array.from(buf), source: img.naturalWidth + 'x' + img.naturalHeight };
    }, { uri: dataUri, w: cible[0], h: cible[1], mime, q: qualite,
         rampe: bichromie ? RAMPE : null, dose });

    const out = Buffer.from(sortie.octets);
    fs.writeFileSync(path.join(DST, nom + '.' + ext), out);
    apres += out.length;
    console.log('%s  %s -> %dx%d  %s -> %s',
      (nom + '.' + ext).padEnd(26), sortie.source.padStart(11),
      cible[0], cible[1], ko(brut.length), ko(out.length));
  }
  await b.close();

  if (inconnus.length) {
    console.log('\nignores, nom inconnu de la table : ' + inconnus.join(', '));
    console.log('noms attendus : ' + Object.keys(CIBLES).join(', '));
  }
  if (avant) console.log('\ntotal %s -> %s', ko(avant), ko(apres));
})();
