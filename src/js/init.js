import $ from "jquery";

import './_barba/transitions/thematiques-transition.js';
window.initGlobal = function () {
    if (window.navigator.userAgent.match(/MSIE|Trident/) !== null) {
        $('body').addClass('is-ie');
    }
    if (window.isTouchDevice === true) {
        $('body').addClass('is-touch').removeClass('is-desktop');
        try { // prevent exception on browsers not supporting DOM styleSheets properly
            for (var si in document.styleSheets) {
                var styleSheet = document.styleSheets[si];
                if (!styleSheet.rules) continue;

                for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                    if (!styleSheet.rules[ri].selectorText) continue;

                    if (styleSheet.rules[ri].selectorText.match(':hover')) {
                        styleSheet.deleteRule(ri);
                    }
                }
            }
        } catch (ex) { }
    } else {
        $('body').addClass('is-desktop').removeClass('is-touch');
    }
    /*let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--dynamic-vh', `${vh}px`);

    let resizeTimout = false
    let windowWidth = window.innerWidth
    window.appEvent.resize(() => {
        let dynamicVh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--dynamic-vh', `${dynamicVh}px`);
        let header = document.querySelector('header');
        document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
        let headerTop = header.querySelector('.header-top')
        document.documentElement.style.setProperty('--header-height-min', `${headerTop.clientHeight}px`);

        if (window.innerWidth != windowWidth) {
            windowWidth = window.innerWidth
            window.menuNav.menuResizeHandler()
        }

    }, true)*/

    appEvent.listen('app:launcEnterAnimation', () => {
        window.scrollAnimation.update()

    })
    window.menuNav.initView();
    window.appEvent.listen('app:barba:isLoaded', () => {
        window.menuNav.initView();
        if ($('[data-loop-section].duplicated').length) {
            $('[data-loop-section].duplicated').remove()

        }
        window.globalScroll.smooth.options.infinite = false

    })
    appEvent.listen('app:threejsAnimation:start', () => {
        window.scrollAnimation.lazyload()
        window.scrollAnimation.initView()
        window.scrollAnimation.update()
        window.scrollAnimation.initEnterAnimation()

    });

};
window.initView = function () {
    window.menuNav.updateCurrentLink();

};




// Promise pour charger Barba.js
const barbaJsPromise = new Promise((resolve, reject) => {
    import(/* webpackMode: "lazy" */ /* webpackChunkName: "barbaSysthem" */ "./_barba/barba.js")
        .then(module => {
            console.log(module);
            const BarbaJs = module.default;
            if (BarbaJs) {
                window.barba = new BarbaJs();
                window.barba.setDefaultTransition();
                window.barba.addTransition(window.thematiquesTransition);
                resolve(true);
            } else {
                reject(new Error("Failed to load BarbaJs"));
            }
        })
        .catch(error => {
            console.error('Error loading BarbaJs module:', error);
            reject(error);
        });
});

// Promise pour charger ScrollAnimation
const ScrollAnimationPromise = new Promise((resolve) => {
    import(/*webpackMode:"lazy"*/ /*eagger*/ /* webpackChunkName: "scrollAnimationSysthem" */ "./views/scrollAnimation").then(() => {
        resolve(true);
    });
});

// Promise pour charger ScrollComponent
const ScrollComponentPromise = new Promise((resolve) => {
    import(/*webpackMode:"lazy"*/ /*eagger*/ /* webpackChunkName: "scrollComponentSysthem" */ "./_barba/components/ScrollComponent").then(({ default: ScrollComponent }) => {
        window.globalScroll = new ScrollComponent({
            smooth: true,
            offset: 'header'
        });
        resolve(true);
    });
});

// Promise pour charger MenuNav
const MenuNavPromise = new Promise((resolve) => {
    import(/*webpackMode:"lazy"*/ /*eagger*/ /* webpackChunkName: "menuNavSysthem" */ "./views/menuNav.js").then(({ default: ScrollComponent }) => {
        window.menuNav.init();
        resolve(true);
    });
});

// Vérification de la condition pour déterminer le mode de chargement

// Fonction pour initialiser l'application
const initializeApp = () => {
    Promise.all([barbaJsPromise, ScrollComponentPromise, ScrollAnimationPromise, MenuNavPromise]).then(() => {

        window.barba.init();
        window.globalScroll.init().then(() => {
            window.scrollAnimation.init();

            window.scrollAnimation.initGlobal();
            window.scrollAnimation.initView()

            window.scrollAnimation.lazyload();
            window.landingLoader.init();
        });
    });
};
// Appel de la fonction d'initialisation de l'application
initializeApp();



