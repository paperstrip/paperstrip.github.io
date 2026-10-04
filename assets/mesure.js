/* ---------------------------------------------------------------
   Mesure d'audience : Google Tag Manager (GTM-PJQDG24R), même balise
   sur toutes les pages, 404 comprise.

   Deux choix, l'un juridique, l'autre de performance.

   1. Consentement. Google Analytics dépose des cookies : il faut un accord
      préalable. Le mode consentement de Google part donc sur « refusé »
      tant que le visiteur n'a rien dit, et le bandeau ci-dessous recueille
      son choix. Refusé, GA n'envoie que des signaux anonymes sans cookie.
      Le choix est gardé dans localStorage, pas dans un cookie.

   2. Chargement différé. gtm.js et le gtag qu'il tire pèsent une centaine
      de Ko de JavaScript et occupaient le processeur pendant le premier
      affichage : c'était le premier poste perdu dans PageSpeed sur mobile.
      Le conteneur est chargé à la première interaction, ou quatre secondes
      après la fin du chargement si le visiteur ne fait rien.
   --------------------------------------------------------------- */
(function(){
  'use strict';
  var ID = 'GTM-PJQDG24R';
  var CLE = 'consentement-mesure';

  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }

  function lis(){ try { return localStorage.getItem(CLE); } catch(e){ return null; } }
  function ecris(v){ try { localStorage.setItem(CLE, v); } catch(e){} }
  function accord(v){
    return {
      analytics_storage: v === 'oui' ? 'granted' : 'denied',
      ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'
    };
  }

  /* l'état par défaut doit précéder le conteneur dans dataLayer */
  gtag('consent', 'default', accord(lis()));

  var charge = false;
  function chargeGTM(){
    if(charge) return;
    charge = true;
    window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtm.js?id=' + ID;
    document.head.appendChild(s);
  }
  var gestes = ['pointerdown', 'keydown', 'scroll', 'touchstart'];
  function auGeste(){
    gestes.forEach(function(t){ window.removeEventListener(t, auGeste, {passive:true}); });
    chargeGTM();
  }
  gestes.forEach(function(t){ window.addEventListener(t, auGeste, {passive:true}); });
  function apresChargement(){ setTimeout(chargeGTM, 4000); }
  if(document.readyState === 'complete') apresChargement();
  else window.addEventListener('load', apresChargement);

  /* ---------- BANDEAU ---------- */
  var bandeau = null;

  function choisis(v){
    ecris(v);
    gtag('consent', 'update', accord(v));
    if(bandeau){ bandeau.remove(); bandeau = null; }
  }

  function montre(){
    if(bandeau) return;
    bandeau = document.createElement('div');
    bandeau.className = 'consent';
    bandeau.setAttribute('role', 'region');
    bandeau.setAttribute('aria-label', 'Mesure d\'audience');
    bandeau.innerHTML =
      '<style>' +
      '.consent{position:fixed;z-index:90;left:12px;right:12px;bottom:12px;max-width:520px;' +
        'padding:16px 18px;border-radius:14px;background:var(--brand-ink,#17161C);color:#fff;' +
        'font:14px/1.45 "Schibsted Grotesk",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;' +
        'box-shadow:0 10px 40px rgba(0,0,0,.35)}' +
      '.consent p{margin:0 0 12px;color:rgba(255,255,255,.82);max-width:none}' +
      '.consent p a{color:#fff;text-decoration:underline;display:inline;padding:0;background:none;font:inherit;border-radius:0}' +
      '.consent div{display:flex;gap:8px;flex-wrap:wrap}' +
      '.consent button{font-family:inherit;font-size:14px;font-weight:600;line-height:1;padding:11px 18px;border-radius:100px;cursor:pointer;' +
        'border:1px solid rgba(255,255,255,.4);background:transparent;color:#fff}' +
      '.consent button.oui{background:var(--brand-accent,#9B87E0);border-color:transparent}' +
      '.consent button:focus-visible{outline:2px solid #fff;outline-offset:2px}' +
      '@media(min-width:700px){.consent{left:24px;bottom:24px}}' +
      '</style>' +
      '<p>Avec votre accord, Google Analytics mesure la fréquentation du site à l\'aide de cookies. ' +
      /* chemin absolu : la 404 est servie à n'importe quelle profondeur */
      '<a href="/mentions-legales/#s3">En savoir plus</a></p>' +
      '<div><button type="button" class="oui">Accepter</button>' +
      '<button type="button" class="non">Refuser</button></div>';
    bandeau.querySelector('.oui').addEventListener('click', function(){ choisis('oui'); });
    bandeau.querySelector('.non').addEventListener('click', function(){ choisis('non'); });
    document.body.appendChild(bandeau);
  }

  /* tout lien marqué data-consentement rouvre le bandeau (mentions légales) */
  document.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('[data-consentement]');
    if(!a) return;
    e.preventDefault();
    montre();
    var b = bandeau.querySelector('button');
    if(b) b.focus();
  });

  /* Affiché après le premier rendu : posé plus tôt, le bandeau pouvait
     devenir l'élément LCP de la page sur un petit écran. */
  if(!lis()){
    if(document.readyState === 'complete') setTimeout(montre, 600);
    else window.addEventListener('load', function(){ setTimeout(montre, 600); });
  }
})();
