
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
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
    const targetSplitting = document.querySelectorAll('[data-barba-namespace]:last-child [data-splitting]');

    targetSplitting.forEach((el) => {
      Splitting({ target: el, by: 'chars' });
      console.log(el);
      let splittingText = gsap.timeline({ paused: true })
      /*splittingText.fromTo(
        $(el).find(".char"), {
        duration: .25,
        stagger: 0.01,
        color: '#9A50F9',
        ease: "power2.out"
      }, {
        duration: .25,
        stagger: 0.01,
        color: '#FFFFFF',
        ease: "power2.out"
      }, 'showLetter');*/
      splittingText.fromTo(
        $(el).find(".char"), {
        duration: .25,
        stagger: 0.01,
        color: '#9A50F9',
        delay: .1,

        ease: "power2.out"
      }, {
        duration: .25,
        stagger: 0.01,
        color: '#3EFA94',
        ease: "power2.out",
        delay: .1,
      }, 'showLetter');


      this.trigger.push(ScrollTrigger.create({
        trigger: el,
        scrub: true,
        animation: splittingText,
        marker: true,


      }));

    })

    gsap.utils.toArray("[data-barba-namespace]:last-of-type section").forEach((section, i) => {
      let scaleDown = gsap.to(section, {
        scale: .4,
        // z: -400,
      })
      this.trigger.push(ScrollTrigger.create({
        trigger: section,
        start: 'bottom bottom',
        endTrigger: 'footer',
        invalidateOnRefresh: true,
        pin: true,
        scrub: true,
        pinSpacing: false,
        animation: scaleDown,

      }));

    });



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
