
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


    if ($('[data-barba-namespace="homeIndex"]').length || $('[data-barba-namespace="thematiquesDetails"]').length) {
      gsap.utils.toArray("[data-barba-namespace]:last-of-type [data-title-section],footer").forEach((section, i) => {
        this.trigger.push(ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          invalidateOnRefresh: true,
          onEnter: () => {
            $('[data-append-title]').find('button').eq(i).addClass('current').removeClass('past');
          },
          onLeave: () => {
            $('[data-append-title]').find('button').eq(i).removeClass('current').addClass('past');

          },
          onEnterBack: () => {
            $('[data-append-title]').find('button').eq(i).addClass('current').removeClass('past');
          },
          onLeaveBack: () => {
            $('[data-append-title]').find('button').eq(i).removeClass('current').removeClass('past');

          }
        }));

      });

      mm.add("(min-width: 768px)", () => {
        console.log('DEBUGG', $('footer').find('.duplicated').length)
        if ($('[data-barba-namespace="homeIndex"]').length && $('body').find('.duplicated').length == 0) {
          let $loopSection = $('[data-barba-namespace="homeIndex"]').find('[data-loop-section]').clone();
          $loopSection.addClass('duplicated')
          $('footer').after($loopSection);
          window.menuNav.end()
          window.globalScroll.smooth.options.infinite = true
        }


        gsap.set("[data-barba-namespace='homeIndex'] .container", { zIndex: (i, target, targets) => targets.length - i });
        gsap.utils.toArray("[data-barba-namespace]:last-of-type .container .sticky-section").forEach((section, i) => {
          let sections = document.querySelectorAll('[data-barba-namespace]:last-of-type .container .sticky-section')
          let animation = gsap.timeline({
            paused: true, onComplete: () => {
              section.classList.add('enter-section')
            }, onReverseComplete: () => {
              section.classList.remove('enter-section')
            }
          })

          console.log(sections[i]);
          animation.fromTo(sections[i], {
            autoAlpha: 0,
            filter: 'blur(10px)',
          }, {
            autoAlpha: 1,
            filter: 'blur(0)',


          })
          animation.to(section.querySelector('.blured-bg'), {
            yPercent: -100,
            duration: 2,

          })
          this.trigger.push(ScrollTrigger.create({
            trigger: section,
            pin: true,
            pinSpacing: false,
            animation: animation,
            invalidateOnRefresh: true,
            start: 'top top',
            scrub: true,
            pinType: 'transform'


          }));

        });

      });


      //this.scrollSection();
      gsap.utils.toArray("[data-loop-section]").forEach((section, i) => {

        this.trigger.push(ScrollTrigger.create({
          trigger: section,
          start: 'center bottom',
          end: 'center+=50 center',
          onEnter: () => {
            window.menuNav.show();
          },
          onEnterBack: () => {
            window.menuNav.show();
          },
          onLeave: () => {
            window.menuNav.hide();
          },
          onLeaveBack: () => {
            window.menuNav.hide();
          }

        }));
      })
      let drawingLines = gsap.timeline({ paused: true })
      drawingLines.from('.labs-grid svg rect', {
        height: 0,
        stagger: .02,
        ease: 'power1.out'

      }, 'animation')
      drawingLines.from('.labs-grid .labs__item', {
        xPercent: 100,
        stagger: .1,
        ease: 'power1.inOut'
      }, 'animation')
      this.trigger.push(ScrollTrigger.create({
        trigger: '.home-labs',
        start: 'top center',
        scrub: true,
        onEnter: () => {
          drawingLines.paused(false)
          drawingLines.reversed(false)

        },
        onLeaveBack: () => {
          drawingLines.paused(false)
          drawingLines.reversed(true)

        }
      }));
      let stickyMap = gsap.timeline({ paused: true })
      stickyMap.to('.footer__header .map', {
        autoAlpha: 0,
      }, 'animation')
      stickyMap.from('.footer__header .fake-map h2', {
        autoAlpha: 0,
        filter: 'blur(20px)',
      }, 'animation')

      this.trigger.push(ScrollTrigger.create({
        trigger: '.footer__header',
        start: 'center center',
        pinSpacing: false,
        pin: true,
        animation: stickyMap,
        scrub: true,
      }));





    }
    if ($('[data-barba-namespace="labsDetails"]').length) {
      let animationHeaderLabs = gsap.timeline({ paused: true })
      mm.add("(min-width: 768px)", () => {

        animationHeaderLabs.to('[data-barba-namespace="labsDetails"] .details-intro .details-intro__right img', {
          filter: 'blur(10px)',
          ease: "none",
          duration: 2,
        }, 'intro')
        animationHeaderLabs.from('[data-barba-namespace="labsDetails"] .details-intro .details-intro__right img', {
          scale: 2,
          duration: 2,

          ease: "none",
        }, 'intro')
        animationHeaderLabs.to('[data-barba-namespace="labsDetails"] .details-intro .details-intro__left button', {
          y: 500,
          ease: "none",
          duration: 2,
        }, 'intro')

        this.trigger.push(ScrollTrigger.create({
          trigger: '[data-barba-namespace="labsDetails"] .details-intro',
          pin: '[data-barba-namespace="labsDetails"] .details-intro',
          pinSpacing: true,
          start: 'top top',
          end: 'top+=33.33% top',
          invalidateOnRefresh: true,
          animation: animationHeaderLabs,
          scrub: 2,
        }));
      })
      mm.add("(max-width: 768px)", () => {

        animationHeaderLabs.to('[data-barba-namespace="labsDetails"] .details-intro .details-intro__right img', {
          filter: 'blur(10px)',
          ease: "none",
          duration: 2,
        }, 'intro')
        animationHeaderLabs.to('[data-barba-namespace="labsDetails"] .details-intro .details-intro__right img', {
          scale: 2,
          duration: 2,

          ease: "none",
        }, 'intro')

        this.trigger.push(ScrollTrigger.create({
          trigger: '[data-barba-namespace="labsDetails"] .details-intro',
          pin: false,
          pinSpacing: true,
          start: 'top top',
          end: 'top+=50% top',
          invalidateOnRefresh: true,
          animation: animationHeaderLabs,
          scrub: true,

        }));
      })

    }
    if ($('[data-barba-namespace="projetsDetails"]').length && $('[data-barba-namespace="projetsDetails"] .project-details-intro .project-details-intro__cover .cover-image').length > 1) {
      let animationHeaderProjets = gsap.timeline({ paused: true })
      animationHeaderProjets.to('[data-barba-namespace="projetsDetails"] .project-details-intro .project-details-intro__cover .cover-image:nth-child(1)', {
        yPercent: -100,
        ease: "none",
        duration: 2,
      }, 'intro')

      this.trigger.push(ScrollTrigger.create({
        trigger: '[data-barba-namespace="projetsDetails"] .project-details-intro',
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
        animation: animationHeaderProjets,
        scrub: true,
        start: 'top top',
        end: 'top+=50% top',
      }));

    }
    if ($('[data-barba-namespace="thematiquesDetails"]').length) {
      this.trigger.push(ScrollTrigger.create({
        trigger: '[data-barba-namespace]:last-child .pagination-section',
        start: 'top center',
        invalidateOnRefresh: true,
        onEnter: () => {
          $('[data-barba-namespace]:last-child .pagination-section').addClass('is-sticky ')
        },
        onEnterBack: () => {
          $('[data-barba-namespace]:last-child .pagination-section').addClass('is-sticky ')
        },

        onLeaveBack: () => {
          $('[data-barba-namespace]:last-child').find('.pagination-section__item').removeClass('pending')
          $('[data-barba-namespace]:last-child  .pagination-section').removeClass('is-sticky ')

          //$('[data-barba-namespace="thematiquesDetails"]').find('.pagination-section__item').eq(i).removeClass('current').removeClass('past');
        }
      }));
      gsap.utils.toArray('[data-barba-namespace]:last-child .paginated-section').forEach((section, i) => {
        this.trigger.push(ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          invalidateOnRefresh: true,
          onEnter: () => {
            $('[data-barba-namespace]:last-child').find('.pagination-section__item').addClass('pending')
            $('[data-barba-namespace]:last-child').find('.pagination-section__item').eq(i).removeClass('pending')
            // $('[data-barba-namespace="thematiquesDetails"]').find('.pagination-section__item').not('.pagination-section__item:nth-child('+(i+1)+')').removeClass('pending')

            // $('[data-barba-namespace="thematiquesDetails"]').find('.pagination-section__item').eq(i).removeClass('pending').addClass('current').removeClass('past');
          },
          onLeave: () => {
            //$('[data-barba-namespace="thematiquesDetails"]').find('.pagination-section__item').not('.pagination-section__item:nth-child('+i+')').addClass('pending')

            //$('[data-barba-namespace="thematiquesDetails"]').find('.pagination-section__item').addClass('pending')
            //$('[data-barba-namespace="thematiquesDetails"]').find('.pagination-section__item').eq(i).removeClass('current').removeClass('pending').addClass('past');

          },
          onEnterBack: () => {
            $('[data-barba-namespace]:last-child').find('.pagination-section__item').addClass('pending')
            $('[data-barba-namespace]:last-child').find('.pagination-section__item').eq(i).removeClass('pending')
            //$('[data-barba-namespace="thematiquesDetails"]').find('.pagination-section__item').eq(i).addClass('current').removeClass('pending').removeClass('past');
          },
          onLeaveBack: () => {
            //$('[data-barba-namespace="thematiquesDetails"]').find('.pagination-section__item').removeClass('pending')

            //$('[data-barba-namespace="thematiquesDetails"]').find('.pagination-section__item').eq(i).removeClass('current').removeClass('past');

          }
        }));

      });



    }




    this.gallerySection(".horizontal-gallery", ".horizontal-gallery .horizontal-gallery__item", ".gallery")

    this.gallerySection(".vertical-gallery", ".vertical-gallery .vertical-gallery__item", ".gallery", true)






  }
  this.scrollSection = function () {

    function goToSection(i, anim) {
      const elm = gsap.utils.toArray("[data-barba-namespace]:last-child .container")
      console.log(i, elm[i]);
      window.globalScroll.smooth.scrollTo(elm[i], {
        lock: true,
      })
    }

    gsap.utils.toArray("[data-barba-namespace]:last-child .container").forEach((panel, i) => {

      this.trigger.push(
        ScrollTrigger.create({
          trigger: panel,
          scroller: this.scroller,
          onEnter: () => goToSection(i),
          onEnterBack: () => goToSection(i)

        })
      )


    });

  }
  this.addAnimation = function () {
    this.resetTrigger();

  }
  this.initEnterAnimation = function () {

  }
  this.gallerySection = function (containerClass, imagesClasses, triggerClass, reverseAnimation = false) {
    return;
    const container = document.querySelector(containerClass);
    if (!container) { return };
    const additionalX = { val: 0 };
    let additionalXAnim;
    let offset = 0;
    let originalImages = gsap.utils.toArray(imagesClasses);

    const sliderWidth = container.offsetWidth;
    let totalImage = originalImages.length
    // DUPLICATE IMAGES FOR LOOP
    originalImages.forEach((image) => {
      var clone = image.cloneNode(true);
      container.appendChild(clone);
    });

    let globalAnimation
    if (reverseAnimation) {
      globalAnimation = gsap.from(container, {
        x: -sliderWidth,
        duration: totalImage * 15,
        repeat: -1,
        ease: "none",

      })
    } else {
      globalAnimation = gsap.to(container, {
        x: -sliderWidth,
        duration: totalImage * 15,
        repeat: -1,
        ease: "none",


      })
    }
    /*this.trigger.push(
      ScrollTrigger.create({
        trigger: 'body',
        start: "top 50%",
        end: "bottom 50%",

        onUpdate: self => {

          let velo = self.getVelocity();
          let speed = velo * 0.005;
          gsap.to(globalAnimation, { timeScale: Math.abs(speed) + 1, duration: 1 });

        }
      }))*/




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
