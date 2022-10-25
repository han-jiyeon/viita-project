$(function(){


  // left_box_slide
  // setInterval(function(){$('.pic_list img:eq(0)').fadeOut().next('img').fadeIn().end().appendTo('.pic_list');}, 3000 ,"linear");



    $('.pic_list img:gt(0)').hide();
    setInterval(function(){
        $('.pic_list img:first').fadeOut(1000).next().fadeIn(1000);
        $('.pic_list img:first').appendTo('.pic_list');
    },2000);

  //right_list img
$(function() {
  if($(".list_item").length > 0) {
  $(".list_item").mouseenter(function(){
    // img
    $(this).find(".pic_wrap img").css({
      top: "-100vh"
    });
    $(this).find(".pic_wrap img").stop().animate({
      top: "15%"
    },800,"easeOutExpo");
    // left backgroundColor
    // var $bgColor = $(this).attr('data-color');
    // $(".vis-color").css({
    //   opacity: 1,
    //   backgroundColor: "#"+$bgColor,
    // });
  });
  $(".list_item").mouseleave(function(){
    // // img
    $(this).find(".pic_wrap img").stop().animate({
      top: "100vh"
    },800,"easeOutExpo");
    // left backgroundColor
    // $(".vis-color").css({
    //   opacity: 0
    // });
  });
}
});

  // right_list
    $( ".list_item" ).mouseenter(function() {
        $(this).find('.info').css({
           top:"-100%"
        });
      });
      $( ".list_item" ).mouseleave(function() {
        $(this).find('.info').css({
            top:"0"
        });
        });



        // marquee
        const sm1 = new SuperMarquee( 
          document.getElementById('supermarquee1'), {
          content : "Bugatti Carbone Limited Edition -"
        });


        const sm2 = new SuperMarquee( 
          document.getElementById('supermarquee2'), {
          content : "Bugatti Ceramique Edition One -"
        });

        const sm3 = new SuperMarquee( 
          document.getElementById('supermarquee3'), {
          content : "Viita Crystals from Swarovski -"
        });

        const sm4 = new SuperMarquee( 
          document.getElementById('supermarquee4'), {
          content : "Vitalmonitor Nano -"
        });

        const sm5 = new SuperMarquee( 
          document.getElementById('supermarquee5'), {
          content : "Viita Race HRV -"
        });

        const sm6 = new SuperMarquee( 
          document.getElementById('supermarquee6'), {
          content : "Viita Titan HRV -"
        });

        const sm7 = new SuperMarquee( 
          document.getElementById('supermarquee7'), {
          content : "Viita Active HRV -"
        });

        const sm8 = new SuperMarquee( 
          document.getElementById('supermarquee8'), {
          content : "Viita Hybrid HRV -"
        });

        const sm9 = new SuperMarquee( 
          document.getElementById('supermarquee9'), {
          content : "Vitalmonitor -"
        });

        const sm10 = new SuperMarquee( 
          document.getElementById('supermarquee10'), {
          content : "Vitalmonitor Original -"
        });



        //count

        $(window).scroll(function() {
        
          var countTop =  $('#counter').offset().top;
          var winH = window.innerHeight;
          var winST = $(window).scrollTop();
          // console.log(countTop,winH,countTop- winH, winST);
          var oTop = countTop - winH;
          if (winST >= oTop) {
            $('.counter-value').each(function() {
              var $this = $(this),
                countTo = $this.attr('data-count');
              $({
                countNum: $this.text()
              }).animate({
                  countNum: countTo
                },
        
                {
        
                  duration: 1600,
                  easing: 'swing',
                  step: function() {
                    $this.text(Math.floor(this.countNum));
                  },
                  complete: function() {
                    $this.text(this.countNum);
                    //alert('finished');
                  }
        
                });
            });
          }
        
        });
        


});