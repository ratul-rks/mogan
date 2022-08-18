$(function(){

  // mixitup blogs

  var mixer = mixitup('.blogs_items_all');

  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 50){
      $(".back_to_top") .fadeIn(500);
    }else{
      $(".back_to_top") .fadeOut(500);
    }

      if(scrolling > 100){
        $(".nav_part").addClass("nav_bg")
      }else{
        $(".nav_part").removeClass("nav_bg")
      }


    });
    // back to top
    $(".back_to_top").click(function(){
      $('html, body').animate({
        scrollTop:0
      }, 2000)
    });
    
// mixitup part
    var mixer = mixitup('.portfolio_item');


    // testiomnail part 
    $('.testiomnial').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:".test_slide_one",
        nextArrow:".test_slide_tow",
        autoplay: true,
        autoplaySpeed: 2000,
      });

  // service part 


});