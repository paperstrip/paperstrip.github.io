window.filters = new (function () {
    
  this.ajax = function(){
    
    /*$('body').on('click','[data-page]',function(e){
        e.preventDefault();
        e.stopPropagation();
        let page = $(this).attr('data-page');
        $('[data-barba-namespace]:last-child').find('[data-ajax-filter] input[name="page"]').val(page);
        let url = $('[data-barba-namespace]:last-child').find('[data-ajax-filter]').attr('action');
        let data =  $('[data-barba-namespace]:last-child').find('[data-ajax-filter]').serialize();
        window.filters.inject(url +'?'+ data)


    })*/
    return new Promise((resolve) =>{

    $('[data-barba-namespace]:last-child [data-ajax-filter]').find('input[type="checkbox"],input[type="radio"]').on('input',()=>{
      $('[data-barba-namespace]:last-child').find('[data-ajax-filter]').addClass('loading');
        let data = $('[data-barba-namespace]:last-child').find('[data-ajax-filter]').serialize()
        let url = $('[data-barba-namespace]:last-child').find('[data-ajax-filter]').attr('action');
        $('[data-barba-namespace]:last-child').find('[data-ajax-filter] input[name="page"]').val('1');

        this.inject(url +'?'+ data,true).then(()=>{
          resolve(true)
        })
    })

     
  });

    

  //   $('[data-barba-namespace]:last-child').find('[data-ajax-content-popup]').on('click',(e)=>{
  //     e.preventDefault();
  //     let url = $(this).attr('href'); // Utiliser 'href' de l'élément cliqué

  //     this.inject(url); // Appeler inject sans sérialiser les données car c'est un lien
  // });
    
    
   
  }
       
  this.inject = function(url, type = 'content') {
    return new Promise((resolve) =>{

      //window.history.replaceState('', '', url);
      $('body').addClass('is-loading')
      window.barbaInstance.history.add(url, 'barba');
      $.ajax({
            url: url,
            type: 'GET',
            success: function(content) {
              
              // $('#post-popup').html($(content).find('[data-ajax-content]').html()); // Assurez-vous que le selecteur correspond à un élément dans votre contenu single-material.php
              //   $('#post-popup').show(); // Afficher le popup

                $('body').removeClass('is-loading');
                console.log('content',content)
                if (type === 'popup') {
                  // Chargement du contenu pour le popup
                  $('[data-barba-namespace]:last-child').find('[data-ajax-popup]').html($(content).find('[data-ajax-content-single]'));
                } else {
                  // Chargement du contenu pour la grille des articles
                  $('[data-barba-namespace]:last-child').find('[data-ajax-content]').replaceWith($(content).find('[data-ajax-content]'));
                  $('[data-barba-namespace]:last-child').find('[data-ajax-filter]').replaceWith($(content).find('[data-ajax-filter]'));
                }
                $('body').removeClass('is-loading')
                window.imageLoader.lazy('.container')
                window.imageReplace.replace()
                window.scrollAnimation.update()


                //window.scrollAnimation.update();
                appEvent.trigger('app:ajaxInjected')
                
                 window.filters.ajax();
                
                resolve(true);

                
                },
                error: function(data) {
                    console.error('error',data); //should print out the name since you sent it along
                    resolve(true);
                }})


            
        });

        
  }

  

 
})



