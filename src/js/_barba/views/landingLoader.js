import { gsap } from 'gsap';

export default function LandingLoader(timing) {
  let target = $('*[data-barba-introductionscreen]');

  if (target) {
    //gsap.set(target, {autoAlpha: 1});

  }
  this.init = function () {
    if (window.dev) {
      $(target).remove();
      return;
    }


    if (target) {
      let fade = gsap.timeline({
        onStart: () => {
          window.scrollAnimation.update()
        },
        onComplete: () => {
          $(target).remove();
          $('body').addClass('loaded')
        },
        onUpdate: function () {
          //borderTimeline.progress(this.progress())
        },
        //repeat: -1,
      });
      fade.to('#circle-background', {
        duration: 1.4,
        strokeDashoffset: 0,
        ease: 'none',
      }, 'drawing')

      fade.to('#logo-baseline *', {
        duration: .25,
        filter: 'blur(0)',
        autoAlpha: 1,
        ease: 'power2.inOut',
        stagger: .1
      }, 'drawing')

      fade.to('#logo-letter-a,#logo-letter-n', {
        duration: 1,
        strokeDashoffset: 0,
        stagger: .4,
        ease: 'power1.inOut',
      }, 'drawing')

      /*fade.to('#circle-background', {
        fill: '#ffffff',
        ease: 'power1.inOut',
        duration: .45
      }, 'showColor')*/
     

      fade.to('#introduction-screen', {
        backgroundColor: '#FFFFFF',
        ease: 'power1.inOut',
        duration: .45,
        delay: .2,
      }, 'invert')
  
      fade.to('#circle-background', {
        fill: '#000000',
        ease: ' power1.inOut',
        duration: .45,
        delay: .2,

      }, 'invert')
      fade.to('#logo-baseline *', {
        fill: '#000000',
        ease: 'power1.inOut',
        duration: .45,
        delay: .2,

      }, 'invert')

      fade.to('#logo-letter-a,#logo-letter-n', {
        stroke: '#FFFFFF',
        ease: 'power1.inOut',
        duration: .6,
        delay: .2,


      }, 'invert')

      fade.to('#introduction-screen', {
        autoAlpha: 0,
        duration: .8,
        ease: "power2.inOut",
        onStart: () => {
          appEvent.trigger('app:threejsAnimation:start');





        }
      }, 'hideLoader')







    }
    else {
      return false;
    }
  }
  this.simpleInit = function () {
    gsap.to('#introduction-screen', {
      autoAlpha: 0,
      duration: .6,
      ease: "power2.out",
      onStart: () => {

        appEvent.trigger('app:threejsAnimation:start');
        $('#scene').css('z-index', 2)

      },
      onComplete: () => {
        $('#introduction-screen').remove()

      }
    }, 'hideLoader')
  }

}
