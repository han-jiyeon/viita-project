$(function(){
    $( ".list_item" ).mouseenter(function() {
        $(this).find('.info').css({
           "transform":"translateY(-100%)"
        });
        // $(this).addClass('enable-animation');
      });
      $( ".list_item" ).mouseleave(function() {
        $(this).find('.info').css({
            "transform":"translateY(0)"
        });
        //   $(this).removeClass('enable-animation');
        });
        

        let box = $('.initloading-box');
        let item = $('<div class="loading_item"> </div>');
      
        for( i = 0; i < 100; i++ ) {
          const bgColor = "000";
          let t = item.clone().css({
            'background': "#"+bgColor,
            'color' : '#fff'
            });

        box.append(t);
        }

        $('.loading_item').html('<span>VIITA</spam>');
        setTimeout(function(){
        $('.loading_item').css({
          letterSpacing: '-0.05em'
        });
      }, 500);

        setTimeout(function(){
        for( i = 0; i < 100; i++ ) {
              if (i % 2 == 1 ){
                 $('.loading_item')[i].innerHTML = '<span class="loading">LOADING</span>';
                }
        }
      }, 1000);

      TweenLite.delayedCall(1.1, myFunction);

      function myFunction() {
        
    const timeline = gsap.timeline( {defaults: {duration: 1}})
    timeline
    .to('.loading', { opacity: 0, duration: 0.1, delay: 0.2})
    .to('.loading', { opacity: 1, duration: 0.1})
    .to('.loading', { opacity: 0, duration: 0.1, delay: 0.2})
    .to('.loading', { opacity: 1, duration: 0.1})
    .to('.loading', { opacity: 0, duration: 0.1, delay: 0.2})
    .to('.loading', { opacity: 1, duration: 0.1})
    .to('.loading_item', { opacity: 0, stagger: { from: "random", amount: .6, duration: 0.1}})
      }

 });
