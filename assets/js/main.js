import jquery from 'jquery';
window.jQuery = jquery;
window.$ = jquery;

import Barba from 'barba.js'; // Or nothing if loaded via the browser
import TweenMax from "gsap/TweenMax";
import scrollify from "jquery-scrollify";
import anime from 'animejs/lib/anime.es.js';
import skrollr from 'skrollr';
import slick from "slick-carousel";
import find from 'lodash';

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

Barba.Pjax.start();


/*===========================*/
/*													 */
/*													 */
/*CANVAS*/
/*													 */
/*													 */
/*===========================*/

const canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");
var colorPallete = ["#FFA4BC", "#C5D3FB", "#97F9FF"];
var rayon = 10;

var width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    origin = {
        x: window.innerWidth - 20,
        y: window.innerHeight/2 - 20
    },
    mouse = {
        x: window.innerWidth - 20,
        y: window.innerHeight/2 - 20
    },
    balls = [],
    count = 0,
    randomCount = 1;

window.onresize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    origin = {
        x: window.innerWidth - 20,
        y: window.innerHeight/2 - 20
    };
}

class Ball {
    constructor() {
        this.x = origin.x;
        this.y = origin.y;
        this.angle = Math.PI * 2 * Math.random();
        this.vx = (1.3 + Math.random() * .2) * Math.cos(this.angle);
        this.vy = (1.3 + Math.random() * .2) * Math.sin(this.angle);
        this.r = Math.floor(rayon + 3 * Math.random());
        this.color = colorPallete[Math.floor(Math.random() * colorPallete.length)];

    }

    update() {
        this.x += this.vx / 2;
        this.y += this.vy /2;
        this.r -= .01;

    }
}


function loop() {
    context.clearRect(0, 0, width, height);
    if (count === randomCount) {
        balls.push(new Ball());
        count = 0;
        randomCount = 3 + Math.floor(Math.random() * 5);
    }
    count++;
    for (var i = 0; i < balls.length; i++) {
        var b = balls[i];
        context.fillStyle = b.color;
        context.beginPath();
        context.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
        context.fill();
        b.update();
    }

    origin.x += (mouse.x - origin.x) * .15;
    origin.y += (mouse.y - origin.y) * .15;

    context.fillStyle = "white";
    context.beginPath();
    context.arc(origin.x, origin.y, 40, 0, Math.PI * 2, false);
    context.fill();

    removeBall();
    requestAnimationFrame(loop);
}

function removeBall() {
    for (var i = 0; i < balls.length; i++) {
        var b = balls[i];
        if (
            b.x + b.r < 0 ||
            b.x - b.r > width ||
            b.y + b.r < 0 ||
            b.y - b.r > height ||
            b.r < 0
        ) {
            balls.splice(i, 1);
        }
    }
}

window.addEventListener("click", function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

}, false);
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
  var audio = new Audio('../assets/audio/seba.mp3');

    var tl = new TimelineMax({
        repeat: 0,
        yoyo: false,
        repeatDelay: 0.5
    });

    var polylion_staggerFrom = {
      scale: 0,
      opacity: 0,
      transformOrigin: 'center center',
    };

    var polylion_staggerTo = {
      opacity: 1,
      scale: 1,
      ease: Elastic.easeInOut
    };
    var polylion_shapes   = $('polygon'),
    polylion_stagger  = 0.00475,
    polylion_duration = 1.5;
    //tl.staggerFromTo(polylion_shapes, polylion_duration, polylion_staggerFrom, polylion_staggerTo, polylion_stagger, 0);
    tl.staggerFromTo("#loading-screen", 1, {
        autoAlpha: 1,
        ease: Power4.easeInOut
    }, {
        autoAlpha: 0,
        ease: Power4.easeInOut
    });

    $(".letter-animation").lettering();

    initSlider();
    initScrollify();
    animationLetter();
    var s = skrollr.init({forceHeight: false});
    if (s.isMobile()) {
      s.destroy();
    }
    else{
      loop();

    }

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
    $.scrollify.destroy();

    $.scrollify({
        section: ".slide-section",
        scrollSpeed: 800,
        scrollbars: false,
        easing: "easeOutExpo",
        touchScroll: true,

        setHeights: true,
        updateHash: false,
        before: function() {
          var x = document.getElementById("audio");
          x.pause();
          x.currentTime = 0;

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

                x.play();

              }, 500);



            }, 5000);
          }
        }


    });
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
    }, 0.05);
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

    infinite: true,
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
//scrollSlideshow()
function scrollSlideshow(){
  $('.vertical-slider').one('mousewheel', function(e) {
    var delta = e.originalEvent.wheelDelta;
    e.preventDefault();
    $.scrollify.disable();
    if (delta < 0) {


      $('.vertical-slider').slick('slickNext');
      $('.vertical-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){

        if (currentSlide == 0 ){

          $.scrollify.enable();
          $.scrollify.instantNext();
        }
        else{
          $.scrollify.disable();
        }

      })

    } else {
      $('.vertical-slider').slick('slickPrev');
      $('.vertical-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){

        if (currentSlide == 0 ){
          $.scrollify.enable();
          $.scrollify.instantPrevious();
        }
        else{
          $.scrollify.disable();

        }

      })
    }

  });


}
slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
  //scrollSlideshow();
});

}

//initSlideShow();




// ------------------- INIT TRANSITION  .............

var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
        $('.main-nav').removeClass('active');
        $('.btn-menu').removeClass('cross');
        $.scrollify.move(0);

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
      initSlider();
      this.done();

    }
});
var ExpandTransition = Barba.BaseTransition.extend({
    start: function() {
        $('.main-nav').removeClass('active');
        $('.btn-menu').removeClass('cross');
        $.scrollify.move(0);

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
      initSlider();
      this.done();

    }
});

var CardToCasestudy = Barba.BaseTransition.extend({
    start: function() {
        $('.main-nav').removeClass('active');
        $('.btn-menu').removeClass('cross');

        Promise
            .all([this.newContainerLoading, this.beforeLeave()]) //Call Function = BeforeLeave
            .then(this.beforeEnter.bind(this));
    },
    beforeLeave: function() {
      //$('.holder').slick('unslick');
      var tl = new TimelineMax({
          repeat: 0,
          yoyo: false,
          delay:.9,
          onComplete: function() {
              deferred.resolve();
          }

      });

      tl.staggerFromTo(".transition-left", 1,  {
          x:"0%",
          autoAlpha: 1,
          ease: Power4.easeInOut
      }, {
          x:"-100%",
          autoAlpha: 0,
          ease: Power4.easeInOut
      });




        var deferred = Barba.Utils.deferred();

        return deferred.promise;

    },

    beforeEnter: function() {
      initScrollify();
      mouse.x = window.innerWidth;
      mouse.y = window.innerHeight;
      colorPallete = ["#FFA4BC", "#C5D3FB", "#97F9FF"];
      $(".letter-animation").lettering();
      var tl = new TimelineMax({
          repeat: 0,
          yoyo: false,

      });
      tl.staggerFromTo(".portfolio-container__content--text", 1,  {
          y:"100%",
          autoAlpha: 0,
          ease: Power4.easeInOut
      }, {
          y:"0%",
          autoAlpha: 1,
          ease: Power4.easeInOut
      });
      animationLetter();
      $.scrollify.move(0);


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
        animationLetter();

    },
    onLeave: function() {
        // A new Transition toward a new page has just started.
        console.log('leaving');
      //  $.scrollify.instantPrevious();

    },
    onLeaveCompleted: function() {}
});

// Don't forget to init the view!
Homepage.init();
function isCasestudy(array) {
    var bool = array.includes("work",2);
    return bool;
}
Barba.Pjax.getTransition = function() {
    var newPage = Barba.HistoryManager.currentStatus().url.split('/');
    var prevPage = Barba.HistoryManager.prevStatus().url.split('/').pop();

      if (prevPage === 'index.html' && isCasestudy(newPage) || prevPage === "" && isCasestudy(newPage)) {
          console.log('cardToCasestudy');
          return CardToCasestudy;
      }

      if (isCasestudy(prevPage) && newPage === 'index') {
          console.log('casestudyToCard');

      }

      if (!isCasestudy(newPage)) {
           console.log('page to page')
           return ExpandTransition;

      }

      if (isCasestudy(prevPage) && isCasestudy(newPage)) {
          console.log('case studies to case studies ');

      }

};
Barba.Pjax.start();

function initSlider() {

}
