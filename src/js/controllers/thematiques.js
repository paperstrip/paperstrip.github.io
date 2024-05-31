import SwiperItem from '../views/swiperComponent';

window.thematiques = new (function () {
  this.index = function () {

    const slideShow = new SwiperItem('.thematiques-slideshow .swiper-top', {
      slidesPerView: 1,
      centeredSlides: true,
      loop: true,
      reverseDirection: true,
      speed: 10000,
      autoplay: {
        delay: 0,
        disableOnInteraction: true
      },
      freeMode: {
        enabled: true,
        momentum: true,
        sticky: true,
      },
      breakpoints: {
        // when window width is >= 320px
        768: {
          slidesPerView: 2,
        },
      },


    })
    const slideShowText = new SwiperItem('.thematiques-slideshow .swiper-content', {
      slidesPerView: 1,
      centeredSlides: true,
      loop: true,
      speed: 10000,
      slideToClickedSlide: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: true
      },
      freeMode: {
        enabled: true,
        momentum: true,
        sticky: true,
      },
      breakpoints: {
        // when window width is >= 320px
        768: {
          slidesPerView: 2,
        },
      },

    })
    slideShowText.swiper.controller.control = slideShow.swiper;
    slideShow.swiper.controller.control = slideShowText.swiper;
    slideShowText.swiper.on('touchMove', () => {
      slideShow.swiper.el.classList.add('disabled-interaction')
      slideShow.swiper.params.speed = 400;
      slideShow.swiper.params.freeMode.enabled = false
      slideShow.swiper.autoplay.stop()

      slideShowText.swiper.el.classList.add('disabled-interaction')

      slideShowText.swiper.params.speed = 400;
      slideShowText.swiper.params.freeMode.enabled = false
      slideShowText.swiper.autoplay.stop()


    })
    slideShowText.swiper.on('click', () => {
      slideShow.swiper.el.classList.add('disabled-interaction')
      slideShow.swiper.params.speed = 400;
      slideShow.swiper.params.freeMode.enabled = false
      slideShow.swiper.autoplay.stop()

      slideShowText.swiper.el.classList.add('disabled-interaction')

      slideShowText.swiper.params.speed = 400;
      slideShowText.swiper.params.freeMode.enabled = false
      slideShowText.swiper.autoplay.stop()


    })
    window.thematiquesSlideshow = slideShowText.swiper



  }
  this.details = function () {
    const pagination = document.querySelector('[data-barba-namespace]:last-child [data-swiper-pagination]');
    let customPagination = ''
    if (pagination) {
      const items = document.querySelectorAll('[data-barba-namespace]:last-child .slideshow-content .swiper-slide')
      let menu = [];
      items.forEach(element => {
        console.log(element.getAttribute('data-pagination'))
        menu.push(element.getAttribute('data-pagination'))
      });
      customPagination = {
        el: '[data-barba-namespace]:last-child [data-swiper-pagination]',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="tag-labs__item ' + className + '">' + (menu[index]) + '</span>';
        },
      }

    }
    const slideShowContent = new SwiperItem('[data-barba-namespace]:last-child .slideshow-content .swiper-container', {
      slidesPerView: 1,
      centeredSlides: true,
      pagination: customPagination,


    })
    const slideShowCover = new SwiperItem('[data-barba-namespace]:last-child .slideshow-cover .swiper-container', {
      slidesPerView: 'auto',
      centeredSlides: true,

    })
    slideShowCover.swiper.controller.control = slideShowContent.swiper;
    slideShowContent.swiper.controller.control = slideShowCover.swiper;

    const test = new SwiperItem('[data-barba-namespace]:last-child .cover-listing__wrapper', {
      slidesPerView: 1,
      direction: 'vertical',

    })
    const elements = document.querySelectorAll('.project-item');

    // Add mouse enter event listener to each element
    elements.forEach((element, index) => {
      element.addEventListener('mouseenter', function () {
        // Access the index of the element
        // For example, you can change the background color
        test.swiper.slideTo(index, 300)

      });

      // Optional: Add mouse leave event listener to revert changes

    });



  }


});


