import SwiperItem from '../views/swiperComponent';

window.projets = new (function () {

  this.details = function () {

    const drawingSlideShow = document.querySelector('[data-barba-namespace]:last-child .projects-drawing__slideshow')
    if (drawingSlideShow) {
      const pagination = drawingSlideShow.querySelector('.swiper-pagination');
      let customPagination = ''
      if (pagination) {
        const items = drawingSlideShow.querySelectorAll('.swiper-slide')
        let menu = [];
        items.forEach(element => {
          console.log(element.getAttribute('data-pagination'))
          menu.push(element.getAttribute('data-pagination'))
        });
        customPagination = {
          el: '[data-barba-namespace]:last-child .projects-drawing__slideshow .swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="swiper-pagination__item ' + className + '">' + (menu[index]) + '</span>';
          },
        }

      }
      const slideShow = new SwiperItem(drawingSlideShow.querySelector('.swiper-container'), {
        slidesPerView: 1.5,
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
        pagination: customPagination,
        on: {
          init: function (swiper) {
            swiper.pagination.bullets.forEach(paginationItem => {
              paginationItem.addEventListener('click', () => {
                swiper.wrapperEl.classList.add('easing')
                swiper.params.speed = 400;
              })
            })
          },

        }


      })
      slideShow.on('touchMove', () => {
        slideShow.swiper.wrapperEl.classList.add('easing')
        slideShow.swiper.params.speed = 400;
      })
      slideShow.on('click', () => {
        slideShow.swiper.wrapperEl.classList.add('easing')
        slideShow.swiper.params.speed = 400;
      })

    }
    const materialitySlideShow = document.querySelector('[data-barba-namespace]:last-child .materiality__slideshow')
    if (materialitySlideShow) {
      new SwiperItem('[data-barba-namespace]:last-child .materiality__slideshow .swiper-container', {
        slidesPerView: 'auto',
        scrollbar: {
          el: '[data-barba-namespace]:last-child .materiality__slideshow .swiper-scrollbar',
          draggable: true,
        },
        navigation: {
          nextEl: '.materiality__slideshow .btn-swipe--next',
          prevEl: '.materiality__slideshow .btn-swipe--prev',
        },
      })

    }
  }

});


