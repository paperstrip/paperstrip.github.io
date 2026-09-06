(function(){
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = Array.prototype.slice.call(document.querySelectorAll('[data-rv]'));

  if(!reduce && 'IntersectionObserver' in window){
    /* décalage calculé entre voisins directs : deux blocs sans rapport
       ne portent plus un délai hérité d'un index global */
    items.forEach(function(el){
      var sibs = Array.prototype.filter.call(el.parentNode.children, function(n){
        return n.hasAttribute && n.hasAttribute('data-rv');
      });
      el.style.setProperty('--d', Math.min(sibs.indexOf(el), 3) * 0.08 + 's');
    });

    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, {threshold:0.12, rootMargin:'0px 0px -8% 0px'});

    /* le hero s'anime à l'arrivée, pas au scroll */
    document.querySelectorAll('.hero-content [data-rv]').forEach(function(el, i){
      el.style.setProperty('--d', (0.1 + i * 0.08) + 's');
      requestAnimationFrame(function(){ requestAnimationFrame(function(){ el.classList.add('in'); }); });
    });

    items.forEach(function(el){ if(!el.classList.contains('in')) io.observe(el); });
  } else {
    items.forEach(function(el){ el.classList.add('in'); });
  }

  /* en-tête : fond dense dès la sortie du hero */
  var header = document.getElementById('siteHeader'), ticking = false;
  function onScroll(){
    if(ticking) return;
    ticking = true;
    requestAnimationFrame(function(){
      header.classList.toggle('is-stuck', window.scrollY > 70);
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  /* ---------- ACCORDÉONS ----------
     <details> bascule en display:none : l'ouverture est un à-coup. On garde
     l'élément natif (clavier, recherche dans la page, sans JS il fonctionne)
     et on anime sa hauteur autour du changement d'état. */
  if(!reduce){
    Array.prototype.forEach.call(document.querySelectorAll('.faq details'), function(d){
      var sum = d.querySelector('summary');
      if(!sum) return;
      var anim = null;

      function hauteurOuverte(){
        var h = sum.offsetHeight;
        Array.prototype.forEach.call(d.children, function(c){
          if(c !== sum) h += c.offsetHeight + parseFloat(getComputedStyle(c).marginTop || 0);
        });
        return h;
      }

      function joue(de, vers, ferme){
        if(anim) anim.cancel();
        anim = d.animate({height:[de + 'px', vers + 'px']},
                         {duration:320, easing:'cubic-bezier(.215,.61,.355,1)'});
        anim.onfinish = function(){
          anim = null;
          d.style.height = '';
          if(ferme) d.open = false;
        };
        anim.oncancel = function(){ anim = null; };
      }

      sum.addEventListener('click', function(e){
        e.preventDefault();
        var depart = d.offsetHeight;
        if(d.open){
          joue(depart, sum.offsetHeight, true);
        } else {
          d.open = true;
          joue(depart, hauteurOuverte(), false);
        }
      });
    });
  }

  /* ---------- DÉFILEMENT ADOUCI ----------
     Interpolation du défilement à chaque image, façon Lenis. Uniquement sur
     pointeur fin : le tactile a déjà son inertie native, et la lui reprendre
     donne toujours quelque chose de moins bon que ce que fait le système. */
  (function(){
    if(reduce) return;
    if(!window.matchMedia('(pointer:fine)').matches) return;

    var cible = window.scrollY, courant = cible, actif = false;

    function max(){
      return document.documentElement.scrollHeight - window.innerHeight;
    }
    function boucle(){
      var reste = cible - courant;
      if(Math.abs(reste) < 0.4){
        courant = cible;
        window.scrollTo({top:courant, behavior:'instant'});
        actif = false; return;
      }
      courant += reste * 0.12;
      /* 'instant' est indispensable : html porte scroll-behavior:smooth, et
         sans lui le navigateur relance sa propre animation à chaque image,
         par-dessus la nôtre. Les deux se battent et le défilement traîne. */
      window.scrollTo({top:courant, behavior:'instant'});
      requestAnimationFrame(boucle);
    }
    function pousse(delta){
      cible = Math.max(0, Math.min(max(), cible + delta));
      if(!actif){ actif = true; requestAnimationFrame(boucle); }
    }

    window.addEventListener('wheel', function(e){
      /* le menu plein écran défile pour son propre compte */
      if(document.body.classList.contains('menu-open')) return;
      if(e.ctrlKey) return;                       /* zoom du navigateur */
      if(e.deltaMode !== 0) return;               /* défilement par ligne ou par page */
      e.preventDefault();
      if(!actif) courant = cible = window.scrollY;
      pousse(e.deltaY);
    }, {passive:false});

    /* toute autre cause de défilement reprend la main : barre, clavier,
       ancre, retour arrière. Sans ça la cible reste sur l'ancienne valeur
       et la molette suivante ramène la page en arrière d'un bond. */
    window.addEventListener('scroll', function(){
      if(!actif) courant = cible = window.scrollY;
    }, {passive:true});
  })();

  /* ---------- MEGA MENU PLEIN ÉCRAN ---------- */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('megaMenu');
  var lastFocus = null;

  function focusables(){
    return Array.prototype.filter.call(
      menu.querySelectorAll('a[href], button:not([disabled])'),
      function(el){ return el.offsetParent !== null || el.getClientRects().length; }
    );
  }

  function setMenu(open){
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('menu-open', open);
    if(open){
      lastFocus = document.activeElement;
      /* focus au cadre suivant : tant que le style n'est pas recalculé,
         le menu est encore visibility:hidden et refuse le focus */
      requestAnimationFrame(function(){
        var f = focusables();
        if(f.length) f[0].focus();
      });
    } else if(lastFocus){
      lastFocus.focus();
      lastFocus = null;
    }
  }

  /* ---------------------------------------------------------------
     Formulaire de contact : envoi en arriere-plan.

     Le champ cache _next devait renvoyer vers la page de remerciement du
     site, mais Formspree l'a ignore et affichait sa propre page de fin.
     On envoie donc la requete nous-memes et on redirige a la main.

     Sans JavaScript, le formulaire reste un POST classique : _next est
     conserve au cas ou, et au pire l'envoi aboutit quand meme.
     --------------------------------------------------------------- */
  var contact = document.getElementById('contactForm');
  if(contact && window.fetch && window.FormData){
    var bouton = contact.querySelector('button[type="submit"]');
    var erreur = contact.querySelector('.form-erreur');
    var suite = contact.querySelector('input[name="_next"]');
    suite = suite ? suite.value : 'merci/';
    /* _next doit etre absolu pour Formspree ; on n'en garde que le chemin,
       sinon une previsualisation locale part sur le domaine de production. */
    try { suite = new URL(suite, window.location.href).pathname; } catch(e){}

    contact.addEventListener('submit', function(e){
      e.preventDefault();
      if(erreur) erreur.hidden = true;
      var texte = bouton ? bouton.textContent : '';
      if(bouton){ bouton.disabled = true; bouton.textContent = 'Envoi...'; }

      fetch(contact.action, {
        method: 'POST',
        body: new FormData(contact),
        headers: {'Accept': 'application/json'}
      }).then(function(r){
        if(!r.ok) throw new Error(r.status);
        window.location.href = suite;
      }).catch(function(){
        /* On ne fait pas disparaitre le message ecrit : l'adresse directe
           est rappelee pour que rien ne soit perdu. */
        if(bouton){ bouton.disabled = false; bouton.textContent = texte; }
        if(erreur) erreur.hidden = false;
      });
    });
  }

  function isOpen(){ return burger.getAttribute('aria-expanded') === 'true'; }

  burger.addEventListener('click', function(){ setMenu(!isOpen()); });

  /* un lien cliqué referme : les ancres de la même page doivent rester visibles */
  menu.addEventListener('click', function(e){ if(e.target.closest('a')) setMenu(false); });

  document.addEventListener('keydown', function(e){
    if(!isOpen()) return;
    if(e.key === 'Escape'){ setMenu(false); return; }
    if(e.key !== 'Tab') return;
    /* le focus reste enfermé dans le menu tant qu'il est ouvert */
    var f = focusables();
    if(!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
    else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
  });
})();
