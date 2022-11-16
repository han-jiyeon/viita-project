$(function(){

  // 작은 슬라이드
    setInterval(function(){
        $('.pic_list img:first').fadeOut(1000).next().fadeIn(1000);
        $('.pic_list img:first').appendTo('.pic_list');
    },2000);
    
  // 시계 리스트 애니메이션
  $(".list_item").mouseenter(function(){

    // 리스트 시계 이미지 
    $(".list_item").find(".pic_wrap img").css({
        top: "-100vh"
    });
    $(this).find(".pic_wrap img").stop().animate({
      top: "15%"
    },900,"easeOutExpo");

    // 리스트 텍스트
    $(this).find('.info').animate({
      top: "-88%"
    }, 150);

    // 작은 슬라이드 배경 색
    let $bgColor = $(this).find('img').attr('data-color');
    $(".pic_color").css({
      opacity: 1,
      backgroundColor: "#"+$bgColor,
    });

    // 작은 슬라이드 텍스트
    $('.pic_sm').css({
      "text-decoration": "line-through"
    });

  });

  $(".list_item").mouseleave(function(){

    // 리스트 시계 이미지 
      $(this).find(".pic_wrap img").stop().animate({
          top: "100vh"
      },900,"easeOutExpo");

    // 리스트 텍스트
    $(this).find('.info').animate({
      top: "0"
    }, 150);

    // 작은 슬라이드 배경 색
    $(".pic_color").css({
      opacity: 0
    });

    // 작은 슬라이드 텍스트
    $('.pic_sm').css({
      "text-decoration": "none"
    });

  });

  // 리스트 marquee 텍스트
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

});

// 카운트 섹션
$(function(){

  $(window).scroll(function() {
    let countTop =  $('#counter').offset().top;
    let productTop =  $('#product').offset().top - 10;
    let aboutTop =  $('#about').offset().top - 570;
    let winH = window.innerHeight;
    let winST = $(window).scrollTop();
    let leftC = $('.left_count li');
    let rightC = $('.right_count li');
    let oTop = countTop - winH + 300;

    // 카운트 넘버
    if (winST >= oTop) {

      leftC.addClass('active');
      rightC.addClass('active');

      $('.counter-value').each(function() {
        let $this = $(this);
        let  countTo = $this.attr('data-number');
        $({countNum: $this.text()}).animate({
          countNum: countTo},
          {
            duration: 1000,
            step: function() {
            $this.text(Math.floor(this.countNum));
          },
            complete: function() {
            $this.text(this.countNum);
          }
        });
      });
    }else if(winST < (countTop-450)) {
      $('.center_count').text(0);
      leftC.removeClass('active');
      rightC.removeClass('active');
    }

    // GNB 메뉴 active
    if(winST >= productTop && winST < aboutTop) {
      $('.nav_item').removeClass('active');
      $('.nav_item:nth-child(2)').addClass('active');
      $('#counter').css({
        opacity: 0
      });
    }else if(winST < productTop+winH) {
      $('.nav_item:nth-child(1)').addClass('active');
      $('.nav_item:nth-child(2)').removeClass('active');
      $('#counter').css({
        opacity: 1
      });
    }else if(winST > aboutTop){
      $('.nav_item').removeClass('active');
      $('.nav_item:nth-child(3)').addClass('active');
    }

  });
});

// 제품 섹션
$(function () {

  // 제품 카드 marquee 텍스트
  const cm1 = new SuperMarquee( 
    document.getElementById( "runningText-l1" ), {
    speed : "0.1",
    content : "Bugatti Carbone Limited Edition"
  });
  const cm2 = new SuperMarquee( 
    document.getElementById( "runningText-l2" ), {
      speed : "0.1",
    content : "Bugatti Ceramique Edition One "
  });
  const cm3_1 = new SuperMarquee( 
    document.getElementById( "runningText-l3-1" ), {
      speed : "0.1",
    content : "Viita Crystals from Swarovski "
  });
  const cm3_2 = new SuperMarquee( 
    document.getElementById( "runningText-l3-2" ), {
      speed : "0.1",
    direction: 'rtl',
    content : "Viita Crystals from Swarovski "
  });
  const cm3_3 = new SuperMarquee( 
    document.getElementById( "runningText-l3-3" ), {
      speed : "0.1",
    content : "Viita Crystals from Swarovski "
  });
  const cm3_4 = new SuperMarquee( 
    document.getElementById( "runningText-l3-4" ), {
      speed : "0.1",
    direction: 'rtl',
    content : "Viita Crystals from Swarovski "
  });
  const cm3_5 = new SuperMarquee( 
    document.getElementById( "runningText-l3-5" ), {
    speed : "0.1",
    content : "Viita Crystals from Swarovski "
  });
  const cm4 = new SuperMarquee( 
    document.getElementById( "runningText-l4" ), {
    speed : "0.1",
    content : "Vitalmonitor Nano  "
  });
  const cm5 = new SuperMarquee( 
    document.getElementById( "runningText-l5" ), {
    speed : "0.1",
    content : "Viita Race HRV "
  });
  const cm6 = new SuperMarquee( 
    document.getElementById( "runningText-l6" ), {
    speed : "0.1",
    content : "Viita Titan HRV "
  });
  const cm7 = new SuperMarquee( 
    document.getElementById( "runningText-l7" ), {
    speed : "0.1",
    direction: 'rtl',
    content : "Viita Active HRV "
  });
  const cm8 = new SuperMarquee( 
    document.getElementById( "runningText-l8" ), {
    speed : "0.1",
    content : "Viita Hybrid HRV "
  });
  const cm9_1 = new SuperMarquee( 
    document.getElementById( "runningText-l9-1" ), {
    speed : "0.1",
    content : "Vitalmonitor  "
  });
  const cm9_2 = new SuperMarquee( 
    document.getElementById( "runningText-l9-2" ), {
    speed : "0.1",
    direction: 'rtl',
    content : "Vitalmonitor  "
  });
  const cm9_3 = new SuperMarquee( 
    document.getElementById( "runningText-l9-3" ), {
    speed : "0.1",
    content : "Vitalmonitor  "
  });
  const cm9_4 = new SuperMarquee( 
    document.getElementById( "runningText-l9-4" ), {
    speed : "0.1",
    direction: 'rtl',
    content : "Vitalmonitor  "
  });
  const cm9_5 = new SuperMarquee( 
    document.getElementById( "runningText-l9-5" ), {
    speed : "0.1",
    direction: 'rtl',
    content : "Vitalmonitor  "
  });
  const cm10 = new SuperMarquee( 
    document.getElementById( "runningText-l10" ), {
    speed : "0.1",
    content : "Vitalmonitor Original"
  });

// 제품 카드 애니메이션

  //  스크롤매직 컨트롤러 생성
  const controller = new ScrollMagic.Controller();
  // GSAP 스크롤트리거 플러그인 불러오기
  gsap.registerPlugin(ScrollTrigger);
  // 타임라인 인스턴스 생성
  let tl = gsap.timeline();

	if ($("#product").length > 0) {

    // 제품1
    let pd1 = TweenMax.to('#product1 .product-mask', 0.5, {
      rotation:7, 
      scale:'0.7',
      onComplete: function () {
        $('#product1').addClass('hide');
      },
    });

    // 제품1 씬
    let scene1 = new ScrollMagic.Scene({
      triggerElement: "#product2",
			triggerHook: 0.8, 
			offset: 0,
			duration: "100%"
    })
    .setTween(pd1)
    // .addIndicators()
    .addTo(controller);

    // 제품2
    let pd2 =  TweenMax.to('#product2 .product-mask', 0.5, {
      rotation:7, 
      scale:'0.7',
      onComplete: function () {
        $('#product2').addClass('hide');
      },
      onReverseComplete: function () {
        $('#product1').removeClass('hide');
      },
    });

    // 제품2 씬
    let scene2 = new ScrollMagic.Scene({
      triggerElement: "#product3",
      triggerHook: 0.8, 
      offset: -150,
      duration: "95%"
    })
    .setTween(pd2)
    // .addIndicators()
    .addTo(controller);

    // 제품3 텍스트
    let pd3TextUp = tl.to('#product3 .product-rt .runningText', 0.4, {
      top:'0',
    }).to('#product3 .runningText_fade', 0.03, {
      opacity:'0.2',
    });

    // 제품3 텍스트 씬
    let scene2Text = new ScrollMagic.Scene({
      triggerElement: "#product3",
      triggerHook: 0.8, 
      offset: -150,
      duration: "95%"
    })
    .setTween(pd3TextUp)
    // .addIndicators()
    .addTo(controller);

    // 제품3
    let pd3 =  TweenMax.to('#product3 .product-mask', 0.5, {
      rotation:7, 
      scale:'0.7',
      onComplete: function () {
        $('#product3').addClass('hide');
      },
      onReverseComplete: function () {
        $('#product2').removeClass('hide');
      },
    });

    // 제품3 씬
    let scene3 = new ScrollMagic.Scene({
      triggerElement: "#product4",
      triggerHook: 0.8, 
      offset: 0,
      duration: "130%"
    })
    .setTween(pd3)
    // .addIndicators()
    .addTo(controller);

    // 제품4
    let pd4 =  TweenMax.to('#product4 .product-mask', 0.5,{
      rotation:7, 
      scale:'0.7',
      onComplete: function () {
        $('#product4').addClass('hide');
      },
      onReverseComplete: function () {
        $('#product3').removeClass('hide');
      },
    });

    // 제품4 씬
    let scene4 = new ScrollMagic.Scene({
      triggerElement: "#product5",
      triggerHook: 0.8, 
      offset: 0,
      duration: "130%"
    })
    .setTween(pd4)
    // .addIndicators()
    .addTo(controller);

    // 제품5
    let pd5 =  TweenMax.to('#product5 .product-mask', 0.5, {
      rotation:7, 
      scale:'0.7',
      onComplete: function () {
        $('#product5').addClass('hide');
      },
      onReverseComplete: function () {
        $('#product4').removeClass('hide');
      },
    });

    // 제품5 씬
    let scene5 = new ScrollMagic.Scene({
      triggerElement: "#product6",
      triggerHook: 0.8, 
      offset: 0,
      duration: "130%"
    })
    .setTween(pd5)
    // .addIndicators()
    .addTo(controller);
    
    // 제품6
    let pd6 =  TweenMax.to('#product6 .product-mask', 0.5, {
      rotation:7, 
      scale:'0.7',
      onComplete: function () {
        $('#product6').addClass('hide');
      },
      onReverseComplete: function () {
        $('#product5').removeClass('hide');
      },
    });

    // 제품6 씬
    let scene6 = new ScrollMagic.Scene({
      triggerElement: "#product7",
      triggerHook: 0.8, 
      offset: 0,
      duration: "130%"
    })
    .setTween(pd6)
    // .addIndicators()
    .addTo(controller);

    // 제품7
    let pd7 =  TweenMax.to('#product7 .product-mask', 0.5, {
      rotation:7, 
      scale:'0.7',
      onComplete: function () {
        $('#product7').addClass('hide');
      },
      onReverseComplete: function () {
        $('#product6').removeClass('hide');
      },
    });

    // 제품7 씬
    let scene7 = new ScrollMagic.Scene({
      triggerElement: "#product8",
      triggerHook: 0.8, 
      offset: 0,
      duration: "130%"
    })
    .setTween(pd7)
    // .addIndicators()
    .addTo(controller);

    // 제품8
    let pd8 =  TweenMax.to('#product8 .product-mask', 0.5, {
      rotation:7, 
      scale:'0.7',
      onComplete: function () {
        $('#product8').addClass('hide');
      },
      onReverseComplete: function () {
        $('#product7').removeClass('hide');
      },
    });

    // 제품8 씬
    let scene8 = new ScrollMagic.Scene({
      triggerElement: "#product9",
      triggerHook: 0.8, 
      offset: 0,
      duration: "130%"
    })
    .setTween(pd8)
    // .addIndicators()
    .addTo(controller);

    // 제품9 텍스트 업
    let pd9TextUp =  TweenMax.to('#product9 .product-rt .runningText', 0.5, {
        top:'0',
    });
    // 제품9 텍스트 투명도
    let pd9TextUpOp = gsap.to('#product9 .product-rt .runningText_fade', 0.4, {
      opacity:'0.2',
    });
    
    // 제품9 텍스트 씬
    let scene3Text = new ScrollMagic.Scene({
      triggerElement: "#product10",
      triggerHook: 1, 
      offset: -750,
      duration: "95%"
    })
    .setTween(pd9TextUp)
    .addIndicators()
    .addTo(controller);

    let scene3TextOP = new ScrollMagic.Scene({
      triggerElement: "#product10",
      triggerHook: 1, 
      offset: 0,
      duration: "5%"
    })
    .setTween(pd9TextUpOp)
    .addIndicators()
    .addTo(controller);

    // 제품9
    let pd9 =  TweenMax.to('#product9 .product-mask', 0.5, {
      rotation:7, 
      scale:'0.7',
      onComplete: function () {
        $('#product9').addClass('hide');
      },
      onReverseComplete: function () {
        $('#product8').removeClass('hide');
      },
    });

    // 제품9 씬
    let scene9 = new ScrollMagic.Scene({
      triggerElement: "#product10",
      triggerHook: 0.8, 
      offset: 0,
      duration: "130%"
    })
    .setTween(pd9)
    .addTo(controller);
    
    // 제품10
    let pd10 =  TweenMax.to('#product10 .product-mask', 0.5, {
      rotation:7, 
      scale:'0.7',
      onReverseComplete: function () {
        $('#product9').removeClass('hide');
      },
    });

    // 제품10 씬
    let scene10 = new ScrollMagic.Scene({
      triggerElement: "#about",
      triggerHook: 0.8, 
      offset: 0,
      duration: "130%"
    })
    .setTween(pd10)
    // .addIndicators()
    .addTo(controller);

  }
});

// 어바웃 섹션
$(function () {
  
  // 스크롤매직 컨트롤러 생성
	let controller = new ScrollMagic.Controller();

  // 랜덤 래스터
	let raster = TweenMax.to('.raster_item', 0.3, {
    visibility: 'visible',
		stagger: {
			grid: 'auto',
			from: "random",
      amount: '10',
		}
	});

  // 랜덤 래스터 씬
	let rasterScene = new ScrollMagic.Scene({
    triggerHook: 0,
		triggerElement: "#product10",
		duration: "60%",
	})
  .setTween(raster)
  // .addIndicators()
  .addTo(controller);

  // 아이콘 투명도
  let iconWrap =  TweenMax.to('.about-icon-wrapper', 0.5, {
    opacity:1, 
  });
  
  // 아이콘 투명도2
  let iconWrap2 =  TweenMax.to('.about-icon-wrapper', 0.5, {
    opacity:0, 
  });
  // 아이콘 투명도 씬
  let iconWrapShow = new ScrollMagic.Scene({
    triggerElement: ".about-icons-stickytainer",
    triggerHook: 0.6, 
    offset: 0,
    duration: "50%"
  })
  .setTween(iconWrap)
  .addTo(controller);
  // 아이콘 투명도 씬2
  let iconWrapHide = new ScrollMagic.Scene({
    triggerElement: ".about-icons-stickytainer",
    triggerHook: 0, 
    offset: 0,
    duration: "20%"
  })
  .setTween(iconWrap2)
  .addTo(controller);


  // 아이콘 반복 실행
  setInterval(function(){
    setTimeout(function(){
      $('#about .icon_ab:nth-child(4)').removeClass('on');
      $('#about .icon_ab:nth-child(1)').addClass('on');
    },200);
    setTimeout(function(){
      $('#about .icon_ab:nth-child(1)').removeClass('on');
      $('#about .icon_ab:nth-child(2)').addClass('on');
    },400);
    setTimeout(function(){
      $('#about .icon_ab:nth-child(2)').removeClass('on');
      $('#about .icon_ab:nth-child(3)').addClass('on');
    },600);
    setTimeout(function(){
      $('#about .icon_ab:nth-child(3)').removeClass('on');
      $('#about .icon_ab:nth-child(4)').addClass('on');
    },800);
  },1800);

  // SVG 로고 사이즈 변화
  $(window).on("scroll",function(){

    let winST = $(window).scrollTop();
    let iconsST = $(".about-icons-stickytainer").offset().top;
    let width1 = (winST - iconsST)*18;
    // console.log("아이콘 영역 스크롤 탑" + iconsST + "width1 값=" +width1);

    if(winST > iconsST){

      console.log("윈도우 스크롤 탑" + winST + "아이콘 영역 스크롤 탑" + iconsST + " / " + (winST - iconsST)+"차이" );

      $('.about-scaled-logo-box').css({
        opacity:1
      });
      $('.logo_scaled').css({
        "width": width1+"vw",
        "height": width1+"vw"
      });
    }else if(winST <= iconsST) {
      $('.about-scaled-logo-box').css({
        opacity:0
      });
      $('.logo_scaled').css({
        "width": "18vw",
        "height": "18vw"
      });
    }
    let logoW = $(".logo_scaled").width();
    console.log("logoW    " + logoW);
    // if( logoW >= 40000 ){
    //   console.log("40000 넘음!!");
    //   // 아이콘 투명도2
    //   let logoScaled =  TweenMax.to('.about-logo_grey', 0.5, {
    //     fill: "transparent",
    //   });
    //   // 아이콘 투명도 씬
    //   let logoScaledScene = new ScrollMagic.Scene({
    //     triggerElement: ".about-icons-stickytainer",
    //     triggerHook: 1, 
    //     offset: -1000,
    //     duration: "50%"
    //   })
    //   .setTween(logoScaled)
    //   .addTo(controller);
    // }
  });

});





    //     let box = $('.initloading-box');
    //     let item = $('<div class="loading_item"> </div>');
      


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