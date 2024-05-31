import SwiperItem from '../views/swiperComponent';
window.about = new (function () {
  this.index = function () {
    const horizontalSlideShow = document.querySelector('[data-barba-namespace]:last-child .horizontal-gallery')
    if (horizontalSlideShow) {

      const slideShowGalleryHorizontal = new SwiperItem(horizontalSlideShow, {
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        speed: 15000,
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



      })
      slideShowGalleryHorizontal.on('touchMove', () => {
        slideShowGalleryHorizontal.swiper.wrapperEl.classList.add('easing')
        slideShowGalleryHorizontal.swiper.params.speed = 400;
      })
      slideShowGalleryHorizontal.on('click', () => {
        slideShowGalleryHorizontal.swiper.wrapperEl.classList.add('easing')
        slideShowGalleryHorizontal.swiper.params.speed = 400;
      })
    }
    const verticalSlideShow = document.querySelector('[data-barba-namespace]:last-child .vertical-gallery')
    if (verticalSlideShow) {

      const slideShowGalleryVertical = new SwiperItem(verticalSlideShow, {
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        speed: 15000,
        slideToClickedSlide: true,
        autoplay: {
          delay: 0,
          disableOnInteraction: true,
          reverseDirection: true,
        },
        freeMode: {
          enabled: true,
          momentum: true,
          sticky: true,
        },



      })
      slideShowGalleryVertical.on('touchMove', () => {
        slideShowGalleryVertical.swiper.wrapperEl.classList.add('easing')
        slideShowGalleryVertical.swiper.params.speed = 400;
      })
      slideShowGalleryVertical.swiper.on('click', () => {
        slideShowGalleryVertical.swiper.wrapperEl.classList.add('easing')
        slideShowGalleryVertical.swiper.params.speed = 400;
      })
    }

  }

});


