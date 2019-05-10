

import jquery from 'jquery';
window.jQuery = jquery;
window.$ = jquery;

import Barba from 'barba.js'; // Or nothing if loaded via the browser
import * as THREE from 'three/build/three.min.js';
import TweenMax from "gsap/TweenMax";
import anime from 'animejs/lib/anime.es.js';
import slick from "slick-carousel";
import luxy from "luxy.js";

(function($) {
    function injector(t, splitter, klass, after) {
        var text = t.text(),
            a = text.split(splitter),
            inject = '';
        if (a.length) {
            $(a).each(function(i, item) {
                inject += '<span class="' + klass + (i + 1) + '" aria-hidden="true">' + item + '</span>' + after;
            });
            t.attr('aria-label', text)
                .empty()
                .append(inject)

        }
    }


    var methods = {
        init: function() {

            return this.each(function() {
                injector($(this), '', 'char', '');
            });

        },

        words: function() {

            return this.each(function() {
                injector($(this), ' ', 'word', ' ');
            });

        },

        lines: function() {

            return this.each(function() {
                var r = "eefec303079ad17405c889e092e105b0";
                // Because it's hard to split a <br/> tag consistently across browsers,
                // (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
                // (of the word "split").  If you're trying to use this plugin on that
                // md5 hash string, it will fail because you're being ridiculous.
                injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
            });

        }
    };

    $.fn.lettering = function(method) {
        // Method calling logic
        if (method && methods[method]) {
            return methods[method].apply(this, [].slice.call(arguments, 1));
        } else if (method === 'letters' || !method) {
            return methods.init.apply(this, [].slice.call(arguments, 0)); // always pass an array
        }
        $.error('Method ' + method + ' does not exist on jQuery.lettering');
        return this;
    };

})(jQuery);
var mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

Barba.Pjax.start();



var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
function hasScrolled(elm) {
    var st = $(window).scrollTop();
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        elm.removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            elm.removeClass('nav-up').addClass('nav-down');

        }
    }

    lastScrollTop = st;
}


/*===========================*/
/*													 */
/*													 */
/*BURGUER MENU*/
/*													 */
/*													 */
/*===========================*/
$('.btn-menu').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('cross');
    $('.main-nav').toggleClass('active');
})
/*===========================*/
/*													 */
/*							 	 					 */
/*INIT ON READY*/
/*													 */
/*													 */
/*===========================*/


function onReady(callback) {

    var intervalId = window.setInterval(function() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalId);
            callback.call(this);
        }
    }, 1000);
}


onReady(function() {
  /*luxy.init({
    wrapperSpeed:  0.1

  });*/
  $(".letter-animation").lettering();

    var tl = new TimelineMax({
        repeat: 0,
        yoyo: false,
        repeatDelay: 0.5,
        onComplete: animationLetter
    });

    tl.staggerFromTo("#loading-screen", 1, {
        autoAlpha: 1,
        ease: Power4.easeInOut
    }, {
        autoAlpha: 0,
        ease: Power4.easeInOut
    });



    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled($('.main-header,.scroll-indicator,.dot-animation'));
            didScroll = false;
        }
    }, 250);

});

/*===========================*/
/*													 */
/*													 */
/*INIT scrollify*/
/*													 */
/*													 */
/*===========================*/

function initScrollify() {

  console.log('scrollify init');

  /*  $.scrollify({
        section: ".slide-section",
        scrollSpeed: 800,
        scrollbars: true,
        easing: "easeOutExpo",
        touchScroll: true,

        setHeights: false,
        updateHash: false,
        before: function() {
          var x = document.getElementById("audio");
          if (x){
            x.pause();
            x.currentTime = 0;
          }




          if (typeof audio != 'undefined' ){
            //intervallGlitch.clearInterval();
            console.log('Heere');

          }
          $('.client-container').removeClass('animate');

          $('.client-container').removeClass('is-active');
          $('.client-container').removeClass('is-pixel');
          $('#canvas').removeClass('pixel');



          if ($.scrollify.current().data('color-pallette')){
            colorPallete = $.scrollify.current().data('color-pallette');

          }
          else{
            colorPallete = ["#FFA4BC", "#C5D3FB", "#97F9FF"];
          }
          if (typeof $.scrollify.current().data('blob-x') !== 'undefined' ){
            mouse.x = (window.innerWidth / 100) * ($.scrollify.current().data('blob-x'));
            mouse.y = (window.innerHeight / 100) * ($.scrollify.current().data('blob-y'));
          }
          else{
            mouse.x = window.innerWidth;
            mouse.y = window.innerHeight;
          }


        },
        after: function(){
          if ($.scrollify.current().hasClass('client-container')){
            $.scrollify.current().addClass('is-active');

             setTimeout(function () {
              $('.client-container').toggleClass('animate');
              setTimeout(function () {
                $('.client-container').toggleClass('is-pixel');
                $('#canvas').toggleClass('pixel');
                var x = document.getElementById("audio");
                if (x){
                  x.play();

                }

              }, 500);



            }, 5000);
          }
        }


    });*/
}

function initHomePage() {
    annimationBlob();
    var audio = new Audio('../assets/audio/seba.mp3');

    var breath = new TimelineMax({
        repeat: 0,
        yoyo: false,
        delay:1

    })
    breath.staggerFromTo('.home-container__cover', 2, {
        scaleX: 3,
        opacity: 0,
        scaleY: 3,

        ease: Power4.easeInOut
    }, {
        scaleX: 1,
        opacity: 1,
        scaleY: 1,

        ease: Power4.easeInOut
    }, .2);

    //animationLetter();
    initNavigationHold();
    var container;
    var camera, scene, renderer;
    var objects;
    var material;
    var mouseX = 0, mouseY = 0;
    var lights = [];
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    if (mobileAndTabletcheck() == true) {

    }
    else {

    }
    initWebGl();
    animateWebgl();

    function initWebGl() {
      container = document.getElementsByClassName( 'home-container' );
      camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );
      camera.position.z = 3200;
      scene = new THREE.Scene();


      lights[0] = new THREE.DirectionalLight( 0xFAD8E2, 1 );
      lights[0].position.set( 1, 0, 0 );
      lights[1] = new THREE.DirectionalLight( 0xF9C7C7, 1 );
      lights[1].position.set( 0.75, 1, 0.5 );
      lights[2] = new THREE.DirectionalLight( 0xFF91A3, 1 );
      lights[2].position.set( -0.75, -1, 0.5 );
      lights[3] = new THREE.DirectionalLight( 0xFFFFFF, 1 );
      lights[3].position.set( 1, 1, 1 );
      lights[3] = new THREE.DirectionalLight( 0xFFFFFF, 1 );
      lights[3].position.set( 0, 0, 0 );
      scene.add( lights[0] );
      scene.add( lights[1] );
      scene.add( lights[2] );
      scene.add( lights[3] );


      var lightAmbiance = new THREE.HemisphereLight( 0xFAD8E2,0xFFF4F8, .2 );
      scene.add( lightAmbiance );

    objects = [];
      material = new THREE.MeshPhongMaterial({
       color: 0xFFF4F8,
      });

        var loader = new THREE.BufferGeometryLoader();
        loader.load( 'src/audio/obj.json', function ( geometry ) {
        geometry.computeVertexNormals();
        for ( var i = 0; i < 200; i ++ ) {
          var mesh = new THREE.Mesh( new THREE.SphereGeometry( .8, 32, 32 ), material );
          mesh.position.x = Math.random() * 8000 - 4000;
          mesh.position.y = Math.random() * 8000 - 4000;
          mesh.position.z = Math.random() * 8000 - 4000;
          mesh.rotation.x = Math.random() * 2 * Math.PI;
          mesh.rotation.y = Math.random() * 2 * Math.PI;
          mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 50 + 100;
          objects.push( mesh );
          scene.add( mesh );
        }
      } );
      renderer = new THREE.WebGLRenderer({alpha: true });
      renderer.domElement.id = 'canvasBlob';
      const svg = '<svg class="goes-effect" xmlns="http://www.w3.org/2000/svg" version="1.1"><defs><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" /><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -9"/></filter></defs></svg>',
      blob = new Blob([svg], { type: 'image/svg+xml' }),
      url = URL.createObjectURL(blob);
      renderer.domElement.style.filter = `url('${url}#goo')`;
      renderer.setClearColor( 0x000000, 0 ); //default

      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize( window.innerWidth, window.innerHeight );
      container[0].appendChild( renderer.domElement );
      //
      window.addEventListener( 'resize', onWindowResize, false );
    }
    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
    }
    function onDocumentMouseMove( event ) {
      mouseX = ( event.clientX - windowHalfX ) * 10;
      mouseY = ( event.clientY - windowHalfY ) * 10;
    }
    //
    function animateWebgl() {
      requestAnimationFrame( animateWebgl );
      render();
    }
    function render() {
      camera.position.x += ( mouseX - camera.position.x ) * .005;
      camera.position.y += ( - mouseY - camera.position.y ) * .005;
      camera.lookAt( scene.position );
      for ( var i = 0, il = objects.length; i < il; i ++ ) {
        objects[ i ].rotation.x += 0.01;
        objects[ i ].rotation.y += 0.02;
      }
      renderer.render( scene, camera );
    }

}

function initStagger() {
    var toAnimate = new TimelineMax({delay:.5});
    toAnimate.staggerFromTo(".toStagger", 0.5, {
        ease: Power4.easeInOut,
        opacity: 0,
        yPercent: 100
    }, {
        ease: Power4.easeInOut,
        opacity: 1,
        yPercent: 0
    }, 0.5);
}



function annimationBlob() {
    var morphing = anime({
        targets: "#path-to-morph",
        d: [{
                value: 'M411.421139,85.1909664 C465.347332,118.919722 527.960912,140.019422 560.820007,183.277366 C593.560071,226.535293 596.307569,291.832275 565.485176,336.510528 C534.662783,381.188781 470.032437,405.248269 425.995491,435.983485 C382.077575,466.718719 358.51498,504.010492 326.497171,514.610428 C294.36033,525.210347 253.649262,509.237566 208.654051,499.817631 C163.539809,490.397678 114.022394,487.530553 84.1418103,462.503667 C54.2612086,437.357626 44.0174383,390.051824 26.6309918,337.383006 C9.24456317,284.833343 -15.0464793,226.9207 -3.03141165,179.618234 C8.98363817,132.196613 57.5428606,95.3852036 108.602006,60.361484 C159.661152,25.3377644 213.220221,-7.89826567 262.73819,-1.33735664 C312.137109,5.10438022 357.494946,51.4622105 411.421139,85.1909664 Z'
            },
            {
                value: 'M456.988783,-21.8411018 C510.914976,11.8876541 607.715346,49.3400072 569.471596,97.2268592 C531.227845,145.113711 633.513144,209.07388 606.80098,265.112187 C580.088816,321.150494 500.181205,299.386906 456.144258,330.122122 C412.226343,360.857356 399.830784,432.61215 367.812975,443.212087 C335.676134,453.812006 294.965066,437.839225 249.969855,428.41929 C204.855613,418.999337 155.338198,416.132212 125.457614,391.105326 C95.5770121,365.959285 85.3332419,318.653482 67.9467954,265.984665 C50.5603667,213.435001 26.2693242,155.522359 38.2843919,108.219892 C50.2994417,60.7982714 96.4770633,-5.60051771 147.536209,-40.6242373 C198.595355,-75.6479569 235.600754,-26.1690635 285.118723,-19.6081545 C334.517642,-13.1664176 403.06259,-55.5698577 456.988783,-21.8411018 Z'
            },
        ],
        direction: 'alternate',
        loop: true,
        easing: 'linear',
        duration: 10000,
        delay: 0
    });

}

function animationLetter() {
    var toAnimate = new TimelineMax();
    toAnimate.staggerFromTo(".letter-animation span", 0.5, {
        ease: Back.easeOut.config(1.7),
        opacity: 0,

        bottom: -80
    }, {
        ease: Back.easeOut.config(1.7),
        opacity: 1,

        bottom: 0
    }, 0.05);
    initStagger();

}

function initSlideShow(){
  const slider = $('.vertical-slider');

  slider.slick({
    vertical: true,
    horizontalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.prev-slick'),
    nextArrow: $('.next-slick'),
    dots:true,
    infinite: false,
    waitForAnimate:true,
    arrows: true,
    onAfterChange: function(slide, index){
           if( item_length == index ){
               alert("Slide 2");
           };
       },
    responsive: [
      {
       breakpoint: 1024,
       settings: {
       vertical: false
       }
   }]

  });
  // On before slide change
  slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){

    var morphingCase = anime({
        targets: ".item__clippath",
        d: [{
                value: 'M365.401004,56.9924212 C406.930068,103.079056 415.958125,181.211188 395.419295,244.736008 C374.767614,308.260829 324.549045,357.291572 267.22088,380.731212 C210.005567,404.284087 145.680659,402.245857 100.766073,374.729758 C55.851488,347.326895 30.2343753,294.446162 14.0967228,235.790445 C-2.15378043,177.134729 -9.03767416,112.817263 19.5135572,69.5615034 C48.1776392,26.4189783 112.276846,4.56462826 181.228634,0.601404166 C250.180422,-3.24858495 323.984791,10.9057868 365.401004,56.9924212 Z'

            },
            {
                  value: 'M475.256724,87.3805874 C518.806191,130.922514 534.370261,207.681994 525.690299,292.072533 C517.010336,376.463071 483.787032,468.484669 422.578331,495.268192 C361.519284,521.902085 272.325186,483.297902 200.790323,437.511546 C129.405114,391.72519 75.6791392,338.75666 38.5648168,258.406094 C1.3008398,178.055528 -19.2018303,70.4725539 25.245564,26.6313697 C69.6929582,-17.2098144 179.389726,2.84041995 269.781059,18.1025387 C360.322048,33.3646574 431.707257,43.6890318 475.256724,87.3805874 Z'
            },
        ],
        easing: "easeOutQuad",
        duration: 1000,
        delay:0
    });
  });
  slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
      var coverUrlCurrent = $('.case-list__item').eq(currentSlide).data('cover');
      var coverUrlNext = $('.case-list__item').eq(nextSlide).data('cover');
      if (mobileAndTabletcheck() == true) {
        $('.effect-background').css("background-image", "url('src/img/1500/"+coverUrlNext+"')");
      }
      else {
        if ($('.effect-background').find('canvas').length >= 2 ){
          $('.effect-background canvas').eq(0).remove();
        }
        $('.effect-background').css("background-image", "url('src/img/1500/"+coverUrlNext+"')");

        /*var myAnimation = new hoverEffect({
          parent: document.querySelector('.effect-background'),
          image1: 'src/img/1500/' + coverUrlCurrent,
          image2: 'src/img/1500/' + coverUrlNext,
          displacementImage: 'src/img/1500/distorsion.jpg'
        });*/

      }

  });

}





// ------------------- INIT TRANSITION  .............

var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
        $('.main-nav').removeClass('active');
        $('.btn-menu').removeClass('cross');

        Promise
            .all([this.newContainerLoading, this.beforeLeave()]) //Call Function = BeforeLeave
            .then(this.beforeEnter.bind(this));
    },
    beforeLeave: function() {
      var tl = new TimelineMax({
          repeat: 0,
          yoyo: false,
          onComplete: function() {
              deferred.resolve();
          }

      });
      tl.staggerFromTo(".wrap", 1, {
          autoAlpha: 1,
          ease: Power4.easeInOut
      }, {
          autoAlpha: 1,
          ease: Power4.easeInOut
      });

        var deferred = Barba.Utils.deferred();

        return deferred.promise;

    },

    beforeEnter: function() {
      initScrollify();

      var tl = new TimelineMax({
          repeat: 0,
          yoyo: false,

      });
      tl.staggerFromTo(".wrap", 1, {
          autoAlpha: 0,
          ease: Power4.easeInOut
      }, {
          autoAlpha: 1,
          ease: Power4.easeInOut
      });
      $(".letter-animation").lettering();

      this.done();

    }
});
var ExpandTransition = Barba.BaseTransition.extend({
    start: function() {
        $('.main-nav').removeClass('active');
        $('.btn-menu').removeClass('cross');

        Promise
            .all([this.newContainerLoading, this.beforeLeave()]) //Call Function = BeforeLeave
            .then(this.beforeEnter.bind(this));
    },
    beforeLeave: function() {
      var tl = new TimelineMax({
          repeat: 0,
          yoyo: false,
          onComplete: function() {
              deferred.resolve();
              animationLetter();
          }

      });
      tl.staggerFromTo("#loading-screen", 1, {
          autoAlpha: 0,
          ease: Power4.easeInOut
      }, {
          autoAlpha: 1,
          ease: Power4.easeInOut
      });

        var deferred = Barba.Utils.deferred();

        return deferred.promise;

    },

    beforeEnter: function() {
      initScrollify();
      var tl = new TimelineMax({
          repeat: 0,
          yoyo: false,

      });
      tl.staggerFromTo("#loading-screen", 1, {
          autoAlpha: 1,
          ease: Power4.easeInOut
      }, {
          autoAlpha: 0,
          ease: Power4.easeInOut
      });
      $(".letter-animation").lettering();

      this.done();

    }
});



var Homepage = Barba.BaseView.extend({
    namespace: 'home',
    onEnter: function() {
        // The new Container is ready and attached to the DOM.
        initHomePage();


        console.log(this.namespace +" INIT");
    },
    onEnterCompleted: function() {
        // The Transition has just finished.
        initScrollify();
        initSlideShow();
        //animationLetter();

    },
    onLeave: function() {
        // A new Transition toward a new page has just started.
      //  $.scrollify.instantPrevious();

    },
    onLeaveCompleted: function() {}
});

// Don't forget to init the view!
Homepage.init();

var Works = Barba.BaseView.extend({
    namespace: 'post',

    onEnter: function() {
        // The new Container is ready and attached to the DOM.
        initScrollify();





        console.log(this.namespace +" INIT");
    },
    onEnterCompleted: function() {
      var breath = new TimelineMax({
          repeat: 0,
          yoyo: false,
          delay:1,

      })
      breath.staggerFromTo('.breath-animation', 2, {
          scaleX: 3,
          opacity: 0,
          scaleY: 3,

          ease: Power4.easeInOut
      }, {
          scaleX: 1,
          opacity: 1,
          scaleY: 1,

          ease: Power4.easeInOut
      }, .2);
      animationLetter();
        // The Transition has just finished.

    },
    onLeave: function() {
        // A new Transition toward a new page has just started.
      //  $.scrollify.instantPrevious();

    },
    onLeaveCompleted: function() {}
});

// Don't forget to init the view!
Works.init();
function isCasestudy(array) {
    var bool = array.includes("work",2);
    return bool;
}
Barba.Pjax.getTransition = function() {

    return ExpandTransition;


};
Barba.Pjax.start();


$('body').on('wheel', (function(e) {
  var scrollCount = 0;
  scroll = setTimeout(function(){scrollCount=0;}, 400);
  if(scrollCount) return 0;
    if (e.originalEvent.deltaY < 0) {
      //previousSlide();
    } else {
      //nextSlide();
    }

}));


function initNavigationHold() {

  var mouseTimer;
  function mouseDown() {

      mouseUp();
      $('#bam').addClass('is-pushing');
      mouseTimer = window.setTimeout(execMouseDown,800); //set timeout to fire in 2 seconds when the user presses mouse button down
  }

  function mouseUp() {
      $('#bam').removeClass('is-pushing');
      if (mouseTimer) window.clearTimeout(mouseTimer);  //cancel timer when mouse button is released
  }

  function execMouseDown() {
    $('#bam').removeClass('is-pushing');
    nextSlide();
    mouseUp();
  }

  var div = document.getElementById("bam");
  var fired = false;
  var startEventType = 'mousedown',
    endEventType   = 'mouseup';

    if (mobileAndTabletcheck() == true) {
        startEventType = 'touchstart';
        endEventType   = 'touchend';
        $('#bam').addClass('is-mobile');
    }
  div.addEventListener(startEventType, mouseDown);
  div.addEventListener(endEventType, mouseUp);  //listen for mouse up event on body, not just the element you originally clicked on

  document.body.addEventListener("keydown", function(event){
    if(event.keyCode===32){
     //enter key was pressed
     if(!fired) {
        fired = true;
        // do something
        mouseDown();

      }
     console.log('pressed');
    }
  });
    document.body.addEventListener("keyup", function(event){
      if(event.keyCode==32){
       //enter key was pressed
       fired = false;

       mouseUp();
      }

    });  //listen for mouse up event on body, not just the element you originally clicked on

}

/*$(window).on('wheel', (function(e) {
  e.preventDefault();
  var scrollCount = 0;
  scroll = setTimeout(function(){scrollCount=0;}, 600);
  if(scrollCount) return 0;
  scrollCount=1;
  if (e.originalEvent.deltaY < 0) {
    previousSlide();
  } else {
    nextSlide()
  }
}));
*/
function previousSlide(){
  var offset;
  var rapport;

  if ($('.slide-section')[0]._gsTransform){
    offset = $('.slide-section')[0]._gsTransform.yPercent
  }
  else{
    offset = 0;

  }
  var breath = new TimelineMax({
      repeat: 0,
      yoyo: false
  })
  breath.staggerFromTo('.slide-section', .4, {
    yPercent: offset,


      ease: Power4.easeInOut
  }, {
    yPercent: offset + rapport,


      ease: Power4.easeInOut
  });
}
function nextSlide(){
  if (! $('.wrap').hasClass('normal-scroll')){
    var offset;
    var rapport;
    if ($('.slide-section')[0]._gsTransform && $('.slide-section')[0]._gsTransform.yPercent === ($('.slide-section').length-1)*-100 ){
      setTimeout(function () {
        $('.wrap').addClass('normal-scroll');
        window.scrollTo(0, $('.slide-section').last().offset().top ,{duration:0})

      }, 1000);

    }
    else{
      rapport = -100;
      $('.wrap').removeClass('normal-scroll');
      if ($('.slide-section')[0]._gsTransform){
        offset = $('.slide-section')[0]._gsTransform.yPercent
      }
      else{
        offset = 0;
      }
       console.log(offset);
      var breath = new TimelineMax({
          repeat: 0,
          yoyo: false,

      })
      breath.staggerFromTo('.slide-section', 1, {
          yPercent: offset,


          ease: Power4.easeInOut
      }, {
        yPercent: offset + rapport ,


          ease: Power4.easeInOut
      }, 0);
    }
    }


}







      var hoverEffect = function(opts) {
          var vertex = `
              varying vec2 vUv;
              void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
              }
          `;

          var fragment = `
              varying vec2 vUv;

              uniform sampler2D texture;
              uniform sampler2D texture2;
              uniform sampler2D disp;

              // uniform float time;
              // uniform float _rot;
              uniform float dispFactor;
              uniform float effectFactor;

              // vec2 rotate(vec2 v, float a) {
              //  float s = sin(a);
              //  float c = cos(a);
              //  mat2 m = mat2(c, -s, s, c);
              //  return m * v;
              // }

              void main() {

                  vec2 uv = vUv;

                  // uv -= 0.5;
                  // vec2 rotUV = rotate(uv, _rot);
                  // uv += 0.5;

                  vec4 disp = texture2D(disp, uv);

                  vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
                  vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);

                  vec4 _texture = texture2D(texture, distortedPosition);
                  vec4 _texture2 = texture2D(texture2, distortedPosition2);

                  vec4 finalTexture = mix(_texture, _texture2, dispFactor);

                  gl_FragColor = finalTexture;
                  // gl_FragColor = disp;
              }
          `;

          var parent = opts.parent || console.warn("no parent");
          var dispImage = opts.displacementImage || console.warn("displacement image missing");
          var image1 = opts.image1 || console.warn("first image missing");
          var image2 = opts.image2 || console.warn("second image missing");
          var intensity = opts.intensity || 1;
          var speedIn = opts.speedIn || 1.6;
          var speedOut = opts.speedOut || 1.2;
          var userHover = (opts.hover === undefined) ? true : opts.hover;
          var easing = opts.easing || Expo.easeOut;



          var scene = new THREE.Scene();
          var camera = new THREE.OrthographicCamera(
              parent.offsetWidth / -2,
              parent.offsetWidth / 2,
              parent.offsetHeight / 2,
              parent.offsetHeight / -2,
              1,
              1000
          );

          camera.position.z = 1;

          var renderer = new THREE.WebGLRenderer({
              antialias: false,
              alpha: true
          });

          renderer.setPixelRatio(window.devicePixelRatio);
          renderer.setClearColor(0xffffff, 0.0);
          renderer.setSize(parent.offsetWidth, parent.offsetHeight);
          parent.appendChild(renderer.domElement);

          // var addToGPU = function(t) {
          //     renderer.setTexture2D(t, 0);
          // };

          var loader = new THREE.TextureLoader();
          loader.crossOrigin = "";
          var texture1 = loader.load(image1);
          var texture2 = loader.load(image2);

          var disp = loader.load(dispImage);
          disp.wrapS = disp.wrapT = THREE.RepeatWrapping;

          texture1.magFilter = texture2.magFilter = THREE.LinearFilter;
          texture1.minFilter = texture2.minFilter = THREE.LinearFilter;

          texture1.anisotropy = renderer.getMaxAnisotropy();
          texture2.anisotropy = renderer.getMaxAnisotropy();

          var mat = new THREE.ShaderMaterial({
              uniforms: {
                  effectFactor: { type: "f", value: intensity },
                  dispFactor: { type: "f", value: 0.0 },
                  texture: { type: "t", value: texture1 },
                  texture2: { type: "t", value: texture2 },
                  disp: { type: "t", value: disp }
              },

              vertexShader: vertex,
              fragmentShader: fragment,
              transparent: true,
              opacity: 1.0
          });

          var geometry = new THREE.PlaneBufferGeometry(
              parent.offsetWidth,
              parent.offsetHeight,
              1
          );
          var object = new THREE.Mesh(geometry, mat);
          scene.add(object);

          var addEvents = function(){
              var evtIn = "mouseenter";
              var evtOut = "mouseleave";
              if (mobileAndTabletcheck()) {
                  evtIn = "touchstart";
                  evtOut = "touchend";
              }
              TweenMax.to(mat.uniforms.dispFactor, speedIn, {
                  value: 1,
                  ease: easing
              });
            /*  parent.addEventListener(evtIn, function(e) {
                  TweenMax.to(mat.uniforms.dispFactor, speedIn, {
                      value: 1,
                      ease: easing
                  });
              });*/

              /*parent.addEventListener(evtOut, function(e) {
                  TweenMax.to(mat.uniforms.dispFactor, speedOut, {
                      value: 0,
                      ease: easing
                  });
              });*/
          };

          if (userHover) {
              addEvents();
          }

          window.addEventListener("resize", function(e) {
              renderer.setSize(parent.offsetWidth, parent.offsetHeight);
          });


          this.next = function(){
              TweenMax.to(mat.uniforms.dispFactor, speedIn, {
                  value: 1,
                  ease: easing
              });
          }

          this.previous = function(){
              TweenMax.to(mat.uniforms.dispFactor, speedOut, {
                  value: 0,
                  ease: easing
              });
          };

          var animate = function() {
              requestAnimationFrame(animate);

              renderer.render(scene, camera);
          };
          animate();
      };
