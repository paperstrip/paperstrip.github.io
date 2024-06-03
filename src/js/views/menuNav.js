import { gsap } from 'gsap';
export default window.menuNav;

window.menuNav = new (function () {
    this.init = function () {


        return;
        $('header nav a').on('click', function (e) {
            if ($(this).hasClass('current') && window.outerWidth <= 991 || $(this).hasClass('current') && window.outerHeight <= 620) {
                $('.main-header .btn-menu').trigger('click');
                e.preventDefault();
                return false;
            }
        });

        $('body').on('click', 'header.open nav', function (e) {
            $('.main-header .btn-menu').trigger('click');
        });

        $(document).on('click', function (event) {
            if ($('.main-header').hasClass('open') && $(event.target).closest('.main-header').length === 0) {
                window.menuNav.hide();
            }
        });

        $('body').on('click', 'a[hreflang]', function (e) {
            console.log($(this).val());
            e.preventDefault()
            e.stopPropagation()
            window.barba.instance.force($(this).attr('href'));
        })

        $('.btn-menu').on('click', function (e) {
            e.preventDefault();
            if ($(this).hasClass('open')) {
                window.menuNav.hide();

            } else {
                window.menuNav.show();
                $(".main-header").addClass('open');
            }
        })
        $('header nav').find('a.current').on('click', function () {
            $('.btn-menu').trigger('click');
        })

    }
    this.menuResizeHandler = function () {
        console.log('ici');
        $('.main-header .btn-menu').removeClass('open')
        gsap.set($('.main-nav-center'), { clearProps: "all" });
        gsap.set($('.menu-item a'), { clearProps: "all" });

        //this.hide();


    }
    this.timeline = gsap.timeline({ paused: true });


    this.timeline.to('header  nav', {
        yPercent: 100,
        duration: .4,
        ease: "power2.inOut",

    }, 'triggerMenu')
    this.timeline.to('header [data-append-title]', {
        yPercent: -100,
        autoAlpha: 0,
        duration: .4,
        stagger: .01,
        ease: "power2.inOut",

    }, 'triggerMenu')

    this.timeline.to('header  .btn-menu', {
        autoAlpha: .2,
        duration: .4,
        ease: "power2.inOut",

    }, 'triggerMenu')
    this.timeline.to('header .language-switcher li', {
        yPercent: -100,
        duration: .4,
        stagger: .1,
        ease: "power2.inOut",

    }, 'triggerMenu')


    this.show = function () {
        this.timeline.paused(false)
        this.timeline.reversed(false)
        $('.main-header .btn-menu').addClass('open')


    }
    this.hide = function () {


        return new Promise((resolve) => {
            if ($('.main-header .btn-menu').hasClass('open') != true) {
                resolve(true);
                return;
            }
            else {
                this.timeline.paused(false)
                this.timeline.reversed(true)


                this.timeline.eventCallback('onReverseComplete', () => {
                    resolve()
                })
                $('.main-header,.btn-menu').removeClass('open')



            }




        });





    }
    this.end = function () {
        this.timeline.seek(1)
        this.timeline.paused(true)
        $(".main-header").addClass('open');
        $(".btn-menu").addClass('open');
    }
    this.reset = function () {



        $('.main-header,.btn-menu').removeClass('open')
        gsap.set('.nav-wrapper', { backgroundColor: 'rgba(0,0,0,0)' })
        gsap.to('.nav-footer', { autoAlpha: 0, })
        gsap.set('header .menu-item a,header .social-list a .wrapper', { yPercent: 110 });
        gsap.set('.main-nav-wrapper', { xPercent: -100 })

    }
    this.updateCurrentLink = function () {

        $('header nav a').removeClass('current');
        $('header nav a').removeClass('current');
        $('header nav a').each(function (index) {
            let elHref = $(this).prop("href")

            if (elHref == document.location.href) {
                $(this).addClass('current');
            }

        })
    }
    this.initView = function () {
        return;
        let container = document.querySelectorAll('[data-barba-namespace]:last-of-type');
        container = container[container.length - 1];

        let titleSections = container.querySelectorAll('[data-title-section]');
        let footerSection = document.querySelector('footer');
        let appendSectionTitle = document.querySelector('[data-append-title]');
        let appendPageTitle = document.querySelector('header [data-title]');
        if (container.getAttribute('data-page-title') === null) {
            appendPageTitle.setAttribute('data-title', '')

        } else {

            appendPageTitle.setAttribute('data-title', container.getAttribute('data-page-title'))
        }
        // Convertir NodeList en Array
        let sectionsArray = Array.from(titleSections);

        // Ajouter footerSection à la fin du tableau
        sectionsArray.push(footerSection);

        appendSectionTitle.innerHTML = '';

        sectionsArray.forEach((item) => {
            let button = document.createElement('button');
            button.innerText = item.getAttribute('data-title-section') || 'Footer'; // Utilisez 'Footer' si data-title-section n'existe pas
            button.dataset.scrollto = '[data-title-section="' + (item.getAttribute('data-title-section') || 'footer') + '"]'; // Utilisez 'footer' comme valeur de repli
            appendSectionTitle.append(button);
        });
    }

})
