/***************************************************
██╗    ██╗██╗██████╗ ██╗ ██████╗ ██████╗ ███╗   ███╗
██║    ██║██║██╔══██╗██║██╔════╝██╔═══██╗████╗ ████║
██║ █╗ ██║██║██████╔╝██║██║     ██║   ██║██╔████╔██║
██║███╗██║██║██╔══██╗██║██║     ██║   ██║██║╚██╔╝██║
╚███╔███╔╝██║██████╔╝██║╚██████╗╚██████╔╝██║ ╚═╝ ██║
 ╚══╝╚══╝ ╚═╝╚═════╝ ╚═╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝
***************************************************/


import barbaRouter from '@barba/router';
import barba from '@barba/core';
//import FancyComponent from "../components/FancyComponent";

/**************************************************/
window.barbaInstance = barba;
window.barbaRouter = barbaRouter;
/**************************************************/
import './transitions/default.js';

/**************************************************/
import Router from "./router.js";
window.appRouter = new Router();
/**************************************************/

// app event
import AppEventComponent from './components/AppEventComponent';
window.appEvent = new AppEventComponent();

// form
import FormComponent from './components/FormComponent';
window.formComponent = new FormComponent();

import FormMessage from './views/formMessage.js';
window.formMessage = new FormMessage();


/**************************************************/
import 'parsleyjs';
import ImageLoader from './components/ImageLoaderComponent'
window.imageLoader = new ImageLoader();
/**************************************************/
import LandingLoader from './views/landingLoader.js'
import imageReplace from "./views/imageReplace.js";
window.imageReplace = new (function (){
    this.replace = function(target){
        imageReplace(target)
    }
})

window.landingLoader = new LandingLoader(1);
/************************************************/

export default class Barba{
  constructor(){

    window.transitions= [];
    this.instance = window.barbaInstance;
    this.instance.use(window.appRouter, {
      routes,
    })
  }
  addCustomIntro(introduction){
      window.landingLoader = introduction;
  }
  setDefaultTransition(transitionObject){
    if (transitionObject){
      window.defaultTransition = transitionObject;

    }
    else{
      window.defaultTransition = window.barbaDefaultTransition;
    }
    window.transitions.push(window.defaultTransition)
  }
  addTransition(transitionObject, ){
    window.transitions.push(transitionObject);
  }


  init(){
    //window.imageLoader.lazy();
    imageReplace($('[data-barba="container"]:last-of-type'));
    window.initGlobal();
    window.formComponent.initGlobal();
    window.formMessage.init();
    //window.fancy = new FancyComponent();

    // ADD CONFIG ON HISTORY CHANGE
    (function(history){
        var pushState = history.pushState;
        history.pushState = function(state) {
            if (typeof history.onpushstate == "function") {
                history.onpushstate({state: state});
            }
            return pushState.apply(history, arguments);
        };
    })(window.history);
    window.onpopstate = history.onpushstate = function(e) {
         window.appEvent.trigger('app:barba:historyChange');

    }
    this.instance.hooks.beforeLeave((data) => {
       window.appEvent.trigger('app:barba:isChanging');
        if (data.trigger == "back" || data.trigger == "forward"){
          return;
        }
        localStorage.setItem('windowTop', window.pageYOffset);
        localStorage.setItem('windowTopGlobalScrol', window.globalScroll.y);
    })

    this.instance.hooks.beforeEnter((data) => {
      //window.imageLoader.lazy();
       window.appEvent.trigger('app:barba:beforeEnter');
      imageReplace($('[data-barba="container"]:last-of-type'));
      let inlineScripts = data.next.container.querySelectorAll('script');
      inlineScripts.forEach(script => eval(script.innerHTML));
      window.initView();
      window.formMessage.init();
      window.formComponent.initView();
      document.body.id = typeof data.next.namespace !== 'undefined' ? data.next.namespace : '';
      console.log('DEBUGG ICI',data.next)
      history.scrollRestoration = 'manual';
    });

    this.instance.hooks.enter((data) => {
       window.appEvent.trigger('app:barba:isLoaded');
    });
    this.instance.hooks.after((data) => {

      if (data.trigger == "back" || data.trigger == "forward"){
        window.scrollTo(0, localStorage.getItem('windowTop'));
        if (window.globalScroll){
          window.globalScroll.scrollTo(parseInt(localStorage.getItem('windowTopGlobalScrol')),0);
        }
      }
      else {

        window.scrollTo(0, 0);
        if (window.globalScroll){
          window.globalScroll.initView();
        }
      }

    });
    this.instance.init({
      views: window.views,
      debug: true,
      cacheIgnore: false,
      prefetchIgnore: false,
      prevent:(el) => {
          if(el.href == document.location.href)
          {
              el.event.preventDefault();
              return false;
          }
        },

      transitions: window.transitions,
      timeout:10000
    });
  }
}
