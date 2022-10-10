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
});