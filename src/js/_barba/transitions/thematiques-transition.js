import { gsap } from 'gsap';

window.thematiquesTransition = {
    name: 'themathiquesTransition',
    sync: true,
    from: {

        namespace: [
            'thematiquesIndex',

        ],
    },
    to: {
        namespace: [
            'thematiquesDetails'
        ]
    },

    before: function (data) {
        var done = this.async();
        console.log($(data.trigger).parent());
        let hideElement = gsap.timeline({
            onComplete: () => {
                done()
                $(document).trigger('app:barba:beforeDone');
            }
        })
        window.thematiquesSlideshow.slideTo($(data.trigger).parent().index(), 400)
        hideElement.to('[data-barba-namespace]:last-child .swiper-top .swiper-slide:not(.swiper-slide-active)', {
            yPercent: -100,
            autoAlpha: 0,
            ease: 'power2.out'
        }, 'hide')
        hideElement.to('[data-barba-namespace]:last-child .swiper-content .swiper-slide:not(.swiper-slide-active)', {
            yPercent: 100,
            autoAlpha: 0,
            ease: 'power2.out'
        }, 'hide')
        hideElement.to('[data-barba-namespace]:last-child .swiper-content .swiper-slide.swiper-slide-active .meta,[data-barba-namespace]:last-child .swiper-content .swiper-slide.swiper-slide-active .btn-cta', {
            autoAlpha: 0,
            ease: 'power2.out'

        }, 'hide')



    },
    beforeLeave: function (data) {
        var done = this.async();
        window.globalScroll.smooth.stop()

        gsap.set(data.next.container, { autoAlpha: 0, position: 'absolute', top: 0, left: 0, width: '100%' });
        gsap.set('[data-barba="container"]:last-child .thematique-header__action .btn', {
            yPercent: 100
        })
        let moveElement = gsap.timeline({
            onComplete: () => {
                done()
                //$(document).trigger('app:barba:beforeDone');
            }
        })
        let $title = $('[data-barba="container"]:last-child h1');
        let matchTitle = [];
        let titleBound = $title[0].getBoundingClientRect();

        matchTitle['fontSize'] = $title.css('font-size');
        matchTitle['top'] = titleBound.top;
        matchTitle['left'] = titleBound.left;
        matchTitle['width'] = titleBound.width;
        let titlePrevBound = $('[data-barba="container"]:first-child .swiper-slide.swiper-slide-active h2')[0].getBoundingClientRect()
        let $galleryNext = $('[data-barba="container"]:last-child .row.gallery')
        let matchGallery = []
        let galleryBound = $galleryNext[0].getBoundingClientRect();
        let galleryPrevBound = $('[data-barba="container"]:first-child .row.gallery')[0].getBoundingClientRect()
        matchGallery['top'] = galleryBound.top;
        matchGallery['left'] = galleryBound.x;
        matchGallery['width'] = galleryBound.width;

        console.log(titleBound);



        gsap.set('[data-barba="container"]:first-child .swiper-content .swiper-slide.swiper-slide-active h2', {
            position: 'absolute'
        })
        gsap.set('[data-barba="container"]:first-child .swiper-top .swiper-slide.swiper-slide-active .row.gallery', {
            position: 'absolute',
            //top: galleryPrevBound.top,
            minWidth: 'auto',
            transformOrigin: 'top center',
            //left: galleryPrevBound.left,
            width: galleryPrevBound.width
        })
        moveElement.to('[data-barba="container"]:first-child .swiper-top .swiper-slide.swiper-slide-active .row.gallery', {

            //width: matchGallery['width'],
            //left: matchGallery['left'] + (matchGallery['width'] / 2)
            y: -galleryPrevBound.top - galleryPrevBound.height + matchGallery['top'],
            duration: .8,
            ease: 'power2.inOut'
        }, 'order')
        moveElement.to('[data-barba="container"]:first-child .swiper-content .swiper-slide.swiper-slide-active h2', {
            fontSize: matchTitle['fontSize'],
            y: -titlePrevBound.top + matchTitle['top'],
            duration: .8,
            ease: 'power2.inOut'

        }, 'order')
        moveElement.to('[data-barba="container"]:first-child .swiper-top .swiper-slide.swiper-slide-active .row.gallery', {

            //scale: matchGallery['width'] / galleryPrevBound.width,
            x: (matchGallery['width'] / 2) - (galleryPrevBound.width / 2) - 2.5,
            width: matchGallery['width'],
            duration: .8,
            ease: 'power2.out'
        }, 'scale')
        moveElement.to('[data-barba="container"]:first-child .swiper-top .swiper-slide.swiper-slide-active .row.gallery', {

            //scale: matchGallery['width'] / galleryPrevBound.width,
            marginLeft: '-5px',
            marginRight: '-5px',
            duration: .8,
            ease: 'power2.out'
        }, 'scale')
        moveElement.to('[data-barba="container"]:first-child .swiper-top .swiper-slide.swiper-slide-active .row.gallery .cover-image-wrapper', {

            //scale: matchGallery['width'] / galleryPrevBound.width,
            padding: '5px',
            duration: .8,
            ease: 'power2.out'

        }, 'scale')
        moveElement.to('[data-barba="container"]:first-child .swiper-content .swiper-slide.swiper-slide-active h2', {
            x: - ((window.innerWidth / 2) - matchTitle['width'] / 2) + matchTitle['left'],
            duration: .8,
            ease: 'power2.out'
        }, 'scale')

        /*moveElement.to('[data-barba-namespace]:first-child .swiper-content .swiper-slide.swiper-slide-active h2', {
            fontSize: matchTitle['fontSize'],
        })*/


    },

    beforeEnter: function (data) {
        //done();
        $(document).trigger('app:barba:beforeEnter');
        var done = this.async();
        console.log('Transition', data)
        gsap.set(data.current.container, { autoAlpha: 0, position: 'fixed', top: 0, left: 0, width: '100%' });

        gsap.set(data.next.container, { autoAlpha: 1, position: 'relative', top: 0, left: 0, width: '100%' });
        appEvent.trigger('app:threejsAnimation:start');

        gsap.fromTo('[data-barba="container"]:last-child .thematique-header__action .btn', {
            yPercent: 100,
            duration: .8,
            ease: 'power2.inOut'
        }, {
            yPercent: 0,
            duration: .8,
            ease: 'power2.inOut',
            onComplete: () => {
                done()
            }
        })
    },
    enter: function (data) {
        $(data.next.container).removeClass('is-pending');
        window.globalScroll.smooth.start()

        //$(document).trigger('app:transition:isEnter');



    }

};
