import { gsap } from 'gsap';

window.cart = new (function (){
  this.cartButtonScale = function(){
    let btn = document.querySelectorAll('.btn-cart')
    if (btn[0]._gsap == undefined){
        return 1

    }else{
        return btn[0]._gsap.scaleX

    }
  }
  this.init = function(){

      $('body').on('click','[data-cart-button],[data-cart-close],.cart-overlay',function(e){
          e.preventDefault();
          e.stopPropagation();
          if ($('#cartAside').hasClass('open')){
              window.cart.hideCart();
          }else{
              window.cart.showCart();
          }
      });
      $('body').on('click','.shipping-calculator-button',function(e){
        e.preventDefault();
        $('.shipping-calculator-form').slideDown(300);
      })
      $('body').on('click','.cart-grid__item [data-spinner] [data-spinner-plus]', function(e) {
          e.preventDefault();
          e.stopPropagation();
          if($(this).parents('[data-spinner]').find('input').val() == $(this).parents('[data-spinner]').find('input').attr('max')){
              return false;
          }else{
              $(this).parents('[data-spinner]').find('input').val(parseInt( $(this).parents('[data-spinner]').find('input').val(), 10) + 1);
              $(this).parents('[data-spinner]').find('input').trigger('change');
          }
      });
      $('body').on('click','.cart-grid__item [data-spinner] [data-spinner-minus]', function(e) {
          e.preventDefault();
          if($(this).parents('[data-spinner]').find('input').val() == $(this).parents('[data-spinner]').find('input').attr('max')){
              return false;
          }else{
              $(this).parents('[data-spinner]').find('input').val(parseInt( $(this).parents('[data-spinner]').find('input').val(), 10) - 1);
              $(this).parents('[data-spinner]').find('input').trigger('change');

          }
      });
      $('body').on('click','button[name="calc_shipping"]',function(e){
          e.preventDefault();
          $('#cartAside').addClass('loading');
          $( '<input />' ).attr( 'type', 'hidden' )
          .attr( 'name', 'calc_shipping' )
          .attr( 'value', 'x' )
          .appendTo($('.woocommerce-shipping-calculator'));
          let  data = {
            action: 'updating_shipping',
            refresh_shipping: 'yes',

        }
          window.cart.ajax(window.data.ajaxUrl+'?action=updating_shipping',$('.woocommerce-shipping-calculator').serialize());
          
      })
      $('body').on('click','[data-remove-item]',function(e){
          e.preventDefault();
          e.stopPropagation();
          let url = $(this).attr('href');
          window.cart.ajax(url);
          $('#cartAside').addClass('loading');
      })
      $('body').on('change','[data-form-cart] input.qty',function(e){
          $('#cartAside').addClass('loading');
          //$( document.body ).trigger( 'updated_wc_div' );
          //$( document.body ).trigger( 'updated_cart_totals' );
          let data =  {
            action: 'qty_cart',
            hash:  $( this ).attr( 'name' ).replace(/cart\[([\w]+)\]\[qty\]/g, "$1"),
            quantity: parseFloat($( this ).val()),
        }
        console.log(data);
          window.cart.ajax(window.data.ajaxUrl,data);
         //$(this).submit();
      })
      window.appEvent.listen('form:addToCart:process',this.addToCartProcessing);

      window.appEvent.listen('form:addToCart:success',this.addToCartHandler);
      $(document).off('form:updateCart:success',this.addToCartHandler).on('form:updateCart:success',this.addToCartHandler);
      $( document.body ).on( 'updated_cart_totals', function(response){
          console.log('respons', response)
      });

    }
    this.ajax = function(url,serialize){
        $.ajax({
           type: "POST",
           url: url,
           data: serialize,
           success: function(data) {
               console.log(data);
               window.cart.updateCart(data);

           },
           error: function(data) {
               console.log(data);
           }
       });
    }
    this.timeline = gsap.timeline({paused:true});
    this.timeline.to('main', .6 ,{
        opacity: 0,
        ease: 'power2.inOut',

    },'cartAnimation')
    this.timeline.to('.main-header__logo,.main-header__main-nav .btn-menu,.main-header__main-nav .btn-profile,.main-header__right-button .btn-wiggle,.main-header__right-button .language-switcher', .6 ,{
        autoAlpha: 0,
        yPercent:-100,
        stagger:.08,
        ease: 'power2.inOut',

    },'cartAnimation')
    this.timeline.to('.btn-cart', .6 ,{
        scale: 4,
        force3D: false,
        stagger:.08,
        ease: 'power2.inOut',
    },'cartAnimation')
   
    this.timeline.to('[data-cart-overlay]', .6 ,{
        "--clip": '0%',  
        delay:.3,   
        ease: 'power2.inOut',
       

    },'cartAnimation')
    
    this.timeline.to('[data-cart-append]', .6 ,{
        yPercent: -100,
        delay:.6,   
        ease: 'power2.inOut',

    },'cartAnimation');
    
    
   
    this.showCart = function(){
        window.buttonScaleValue = window.cart.cartButtonScale()
        this.timeline.paused(false)
        this.timeline.reversed(false)
        $('#cartAside').addClass('open');
        $('.decorative-iformation').addClass('hidden');
        
        
        
    }
    this.hideCart = function(){
        $('#cartAside').removeClass('open');
        $('.decorative-iformation').removeClass('hidden');

        this.timeline.paused(false)
        this.timeline.reversed(true)

    }
    this.cartLoading = function(){

    }
    this.addToCartProcessing = function(data,el,response){
     // $('#cartAside').addClass('loading');
      console.log(el);
      $(el).find('.btn--add-to-cart').addClass('loading').prop('disabled',true)
    }
    this.addToCartHandler = function(data,response,el){
      window.cart.updateCart(response)
     // $('#cartAside').removeClass('loading');
      $(el).find('.btn--add-to-cart').removeClass('loading').prop('disabled',false)
      window.cart.showCart();


    }
   
    this.updateCart = function(content){
        if ($(content).find('.woocommerce').length){
            console.log($(content).find('.woocommerce'))
            $('[data-cart-append]').html($(content).find('.woocommerce'));

        }else{
            $('[data-cart-append]').html(content);
        }
        if ($(content).find('[data-count-cart]').length  &&  parseFloat($(content).find('[data-count-cart]').attr('data-count-cart')) != 0){
            $('[data-cart-button] .cart-counter').addClass('active').html($(content).find('[data-count-cart]').attr('data-count-cart'))
            const bounce = document.querySelector('[data-cart-button] .cart-counter');
            bounce.classList.add("miniBounce");
            setTimeout(() => bounce.classList.remove('miniBounce'), 1000);



        }else{
            $('[data-cart-button] .cart-counter').removeClass('active').html('0');
            window.cart.hideCart();
        }
        $('#cartAside').removeClass('loading');

    }



});
