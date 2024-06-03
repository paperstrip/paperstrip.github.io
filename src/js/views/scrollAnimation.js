
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

window.scrollAnimation = new (function () {
  this.scroller = false;
  this.init = function () {
    gsap.registerPlugin(ScrollTrigger)
    window.globalScroll.smooth.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      window.globalScroll.smooth.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
  }
  this.initGlobal = function () {

  }


  this.trigger = []
  this.resetTrigger = function () {

    this.trigger.forEach(t => t.kill(true));
    let header = document.querySelector('header');
    document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
    $('[data-append-title]').find('button').removeClass('current').removeClass('past')

  }
  this.initView = function () {




    this.resetTrigger();


    let mm = gsap.matchMedia();





  }

  this.addAnimation = function () {
    this.resetTrigger();

  }
  this.initEnterAnimation = function () {

  }


  this.lazyload = function () {
    gsap.utils.toArray("[data-barba-namespace]:last-of-type .container").forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "-50% bottom",
        once: true,
        onEnter: () => {
          window.imageLoader.lazy(section);
        },
        onEnterBack: () => {
          window.imageLoader.lazy(section);
        }
      });
    });
  }
  this.update = function () {
    ScrollTrigger.refresh(false)
  }
});
