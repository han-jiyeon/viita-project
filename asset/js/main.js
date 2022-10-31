$(function(){

  // left_box_slide
    setInterval(function(){
        $('.pic_list img:first').fadeOut(1000).next().fadeIn(1000);
        $('.pic_list img:first').appendTo('.pic_list');
    },2000);
  });
  
  $(function(){
    //right_list img
  $(".list_item").mouseenter(function(){
    
    $(this).find('.info').animate({
      top: "-88%"
  }, 150);
    // img
    $(this).find(".pic_wrap img").css({
      top: "-100vh"
    });
    $(this).find(".pic_wrap img").stop().animate({
      top: "15%"
    },800,"easeOutExpo");
  
    var $bgColor = $(this).find('img').attr('data-color');
    $(".pic_color").css({
      opacity: 1,
      backgroundColor: $bgColor,
    });
  });
  $(".list_item").mouseleave(function(){
    
    $(this).find('.info').animate({
      top: "0"
  }, 150);
    // // img
    $(this).find(".pic_wrap img").stop().animate({
      top: "100vh"
    },800,"easeOutExpo");

      $(".pic_color").css({
        opacity: 0
      });
    });
  
  $(".list_item").mouseenter(function(){
    $('.pic_sm').css({
      "text-decoration": "line-through"
    });
  });
  $(".list_item").mouseleave(function(){
    $('.pic_sm').css({
      "text-decoration": "none"
    });
  });
});

$(function(){

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
          var productTop =  $('#product').offset().top - 10;
          var winH = window.innerHeight;
          var winST = $(window).scrollTop();
          // console.log(countTop,winH,countTop- winH, winST);
          var oTop = countTop - winH;
          if (winST >= oTop) {
            
            $('.counter-value').each(function() {
              var $this = $(this);
              var  countTo = $this.attr('data-count');
              $({
                countNum: $this.text()
              }).animate({
                  countNum: countTo
                },
        
                {
        
                  duration: 1000,
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
          }else if(winST < oTop) {
            var $this = $(this);
            $this.text(0);
          }
          
          
          
          
          if(winST >= productTop) {
            $('.nav_item').removeClass('active');
            $('.nav_item:nth-child(2)').addClass('active');
            $('#counter').css({
              opacity: 0
            });
          }else if(winST < productTop) {
            $('.nav_item:nth-child(1)').addClass('active');
            $('.nav_item:nth-child(2)').removeClass('active');
            $('#counter').css({
              opacity: 1
            });
          }
        
        });
        

        const cm1 = new SuperMarquee( 
          document.getElementById( "runningtext-l1" ), {
          speed : "0.1",
          content : "Bugatti Carbone Limited Edition"
        });

        const cm2 = new SuperMarquee( 
          document.getElementById( "runningtext-l2" ), {
            speed : "0.1",
          content : "Bugatti Ceramique Edition One "
        });

        const cm3_1 = new SuperMarquee( 
          document.getElementById( "runningtext-l3-1" ), {
            speed : "0.1",
          content : "Viita Crystals from Swarovski "
        });

        const cm3_2 = new SuperMarquee( 
          document.getElementById( "runningtext-l3-2" ), {
            speed : "0.1",
          direction: 'rtl',
          content : "Viita Crystals from Swarovski "
        });

        const cm3_3 = new SuperMarquee( 
          document.getElementById( "runningtext-l3-3" ), {
            speed : "0.1",
          content : "Viita Crystals from Swarovski "
        });

        const cm3_4 = new SuperMarquee( 
          document.getElementById( "runningtext-l3-4" ), {
            speed : "0.1",
          direction: 'rtl',
          content : "Viita Crystals from Swarovski "
        });

        const cm3_5 = new SuperMarquee( 
          document.getElementById( "runningtext-l3-5" ), {
          speed : "0.1",
          content : "Viita Crystals from Swarovski "
        });
        const cm4 = new SuperMarquee( 
          document.getElementById( "runningtext-l4" ), {
          speed : "0.1",
          content : "Vitalmonitor Nano  "
        });
        const cm5 = new SuperMarquee( 
          document.getElementById( "runningtext-l5" ), {
          speed : "0.1",
          content : "Viita Race HRV "
        });
        const cm6 = new SuperMarquee( 
          document.getElementById( "runningtext-l6" ), {
          speed : "0.1",
          content : "Viita Titan HRV "
        });
        const cm7 = new SuperMarquee( 
          document.getElementById( "runningtext-l7" ), {
          speed : "0.1",
          direction: 'rtl',
          content : "Viita Active HRV "
        });
        const cm8 = new SuperMarquee( 
          document.getElementById( "runningtext-l8" ), {
          speed : "0.1",
          content : "Viita Hybrid HRV "
        });
        const cm9_1 = new SuperMarquee( 
          document.getElementById( "runningtext-l9-1" ), {
          speed : "0.1",
          content : "Vitalmonitor  "
        });
        const cm9_2 = new SuperMarquee( 
          document.getElementById( "runningtext-l9-2" ), {
          speed : "0.1",
          direction: 'rtl',
          content : "Vitalmonitor  "
        });
        const cm9_3 = new SuperMarquee( 
          document.getElementById( "runningtext-l9-3" ), {
          speed : "0.1",
          content : "Vitalmonitor  "
        });
        const cm9_4 = new SuperMarquee( 
          document.getElementById( "runningtext-l9-4" ), {
          speed : "0.1",
          direction: 'rtl',
          content : "Vitalmonitor  "
        });
        const cm9_5 = new SuperMarquee( 
          document.getElementById( "runningtext-l9-5" ), {
          speed : "0.1",
          direction: 'rtl',
          content : "Vitalmonitor  "
        });
        const cm10 = new SuperMarquee( 
          document.getElementById( "runningtext-l10" ), {
          speed : "0.1",
          content : "Vitalmonitor Original"
        });
});
 


// product
$(function () {
  
  const controller = new ScrollMagic.Controller();

	if ($("#product").length > 0) {
    /* Initialize Controller */

    let prod1 = TweenMax.to('#product0 .product-mask', 0.5, {
      rotation:7, 
      scale:'0.7',
			ease: Power2.easeInOut,
      onComplete: function () {
        $('#product0').addClass('hide');
      },
  });

    /* ScrollMagic Scene */
    var scene1 = new ScrollMagic.Scene({
      triggerElement: "#product1",
			ease: Power2.easeInOut,
			triggerHook: 0.8, 
			offset: 0,
			duration: "130%"
      }).
      setTween(prod1)
      .addIndicators()
      .addTo(controller);

  }
  let prod2 =  TweenMax.to('#product1 .product-mask', 0.5, {
    rotation:7, 
    scale:'0.7',
    ease: Power2.easeInOut,
    onComplete: function () {
      $('#product1').addClass('hide');
    },
    onReverseComplete: function () {
      $('#product0').removeClass('hide');
    },
  });
  /* ScrollMagic Scene */
  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#product2",
    ease: Power2.easeInOut,
    triggerHook: 0.8, 
    offset: 0,
    duration: "130%"
    }).
    setTween(prod2)
    .addIndicators()
    .addTo(controller);


    let prod3 =  TweenMax.to('#product2 .product-mask', 0.5, {
      rotation:7, 
      scale:'0.7',
			ease: Power2.easeInOut,
      onComplete: function () {
        $('#product2').addClass('hide');
      },
      onReverseComplete: function () {
        $('#product1').removeClass('hide');
      },
    });
    /* ScrollMagic Scene */
    var scene3 = new ScrollMagic.Scene({
      triggerElement: "#product3",
      ease: Power2.easeInOut,
      triggerHook: 0.8, 
      offset: 0,
      duration: "130%"
      }).
      setTween(prod3)
      .addIndicators()
      .addTo(controller);
  
      let prod4 =  TweenMax.to('#product3 .product-mask', 0.5,{
        rotation:7, 
        scale:'0.7',
        ease: Power2.easeInOut,
        onComplete: function () {
          $('#product3').addClass('hide');
        },
        onReverseComplete: function () {
          $('#product2').removeClass('hide');
        },
    });
      /* ScrollMagic Scene */
      var scene4 = new ScrollMagic.Scene({
        triggerElement: "#product4",
        ease: Power2.easeInOut,
        triggerHook: 0.8, 
        offset: 0,
        duration: "130%"
        }).
        setTween(prod4)
        .addIndicators()
        .addTo(controller);

        
      let prod5 =  TweenMax.to('#product4 .product-mask', 0.5, {
        rotation:7, 
        scale:'0.7',
        ease: Power2.easeInOut,
        onComplete: function () {
          $('#product4').addClass('hide');
        },
        onReverseComplete: function () {
          $('#product3').removeClass('hide');
        },
      });
      /* ScrollMagic Scene */
      var scene5 = new ScrollMagic.Scene({
        triggerElement: "#product5",
        ease: Power2.easeInOut,
        triggerHook: 0.8, 
        offset: 0,
        duration: "130%"
        }).
        setTween(prod5)
        .addIndicators()
        .addTo(controller);

        
      let prod6 =  TweenMax.to('#product5 .product-mask', 0.5, {
        rotation:7, 
        scale:'0.7',
        ease: Power2.easeInOut,
        onComplete: function () {
          $('#product5').addClass('hide');
        },
        onReverseComplete: function () {
          $('#product4').removeClass('hide');
        },
      });
      /* ScrollMagic Scene */
      var scene6 = new ScrollMagic.Scene({
        triggerElement: "#product6",
        ease: Power2.easeInOut,
        triggerHook: 0.8, 
        offset: 0,
        duration: "130%"
        }).
        setTween(prod6)
        .addIndicators()
        .addTo(controller);

        
      let prod7 =  TweenMax.to('#product6 .product-mask', 0.5, {
        rotation:7, 
        scale:'0.7',
        ease: Power2.easeInOut,
        onComplete: function () {
          $('#product6').addClass('hide');
        },
        onReverseComplete: function () {
          $('#product5').removeClass('hide');
        },
      });
      /* ScrollMagic Scene */
      var scene7 = new ScrollMagic.Scene({
        triggerElement: "#product7",
        ease: Power2.easeInOut,
        triggerHook: 0.8, 
        offset: 0,
        duration: "130%"
        }).
        setTween(prod7)
        .addIndicators()
        .addTo(controller);
        
        
      let prod8 =  TweenMax.to('#product7 .product-mask', 0.5, {
        rotation:7, 
        scale:'0.7',
        ease: Power2.easeInOut,
        onComplete: function () {
          $('#product7').addClass('hide');
        },
        onReverseComplete: function () {
          $('#product6').removeClass('hide');
        },
      });
      /* ScrollMagic Scene */
      var scene8 = new ScrollMagic.Scene({
        triggerElement: "#product8",
        ease: Power2.easeInOut,
        triggerHook: 0.8, 
        offset: 0,
        duration: "130%"
        }).
        setTween(prod8)
        .addIndicators()
        .addTo(controller);
        
      let prod9 =  TweenMax.to('#product8 .product-mask', 0.5, {
        rotation:7, 
        scale:'0.7',
        ease: Power2.easeInOut,
        onComplete: function () {
          $('#product8').addClass('hide');
        },
        onReverseComplete: function () {
          $('#product7').removeClass('hide');
        },
      });
      /* ScrollMagic Scene */
      var scene9 = new ScrollMagic.Scene({
        triggerElement: "#product9",
        ease: Power2.easeInOut,
        triggerHook: 0.8, 
        offset: 0,
        duration: "130%"
        }).
        setTween(prod9)
        .addIndicators()
        .addTo(controller);
        
        
      let prod10 =  TweenMax.to('#product9 .product-mask', 0.5, {
        rotation:7, 
        scale:'0.7',
        ease: Power2.easeInOut,
        onComplete: function () {
          $('#product9').addClass('hide');
        },
        onReverseComplete: function () {
          $('#product8').removeClass('hide');
        },
      });
      /* ScrollMagic Scene */
      var scene10 = new ScrollMagic.Scene({
        triggerElement: "#product10",
        ease: Power2.easeInOut,
        triggerHook: 0.8, 
        offset: 0,
        duration: "130%"
        }).
        setTween(prod9)
        .addIndicators()
        .addTo(controller);
});



    //     let box = $('.initloading-box');
    //     let item = $('<div class="loading_item"> </div>');
      
    //     for( i = 0; i < 100; i++ ) {
    //       const bgColor = "000";
    //       let t = item.clone().css({
    //         'background': "#"+bgColor,
    //         'color' : '#fff'
    //         });

    //     box.append(t);
    //     }

    //     $('.loading_item').html('<span>VIITA</spam>');
    //     setTimeout(function(){
    //     $('.loading_item').css({
    //       letterSpacing: '-0.05em'
    //     });
    //   }, 500);

    //     setTimeout(function(){
    //     for( i = 0; i < 100; i++ ) {
    //           if (i % 2 == 1 ){
    //              $('.loading_item')[i].innerHTML = '<span class="loading">LOADING</span>';
    //             }
    //     }
    //   }, 1000);

    //   TweenLite.delayedCall(1.1, myFunction);

    //   function myFunction() {
        
    // const timeline = gsap.timeline( {defaults: {duration: 1}})
    // timeline
    // .to('.loading', { opacity: 0, duration: 0.1, delay: 0.2})
    // .to('.loading', { opacity: 1, duration: 0.1})
    // .to('.loading', { opacity: 0, duration: 0.1, delay: 0.2})
    // .to('.loading', { opacity: 1, duration: 0.1})
    // .to('.loading', { opacity: 0, duration: 0.1, delay: 0.2})
    // .to('.loading', { opacity: 1, duration: 0.1})
    // .to('.loading_item', { opacity: 0, stagger: { from: "random", amount: .6, duration: 0.1}})
    //   }

//  });