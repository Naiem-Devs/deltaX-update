(function($) {
  "use strict";


  $(document).on("scroll", function(){

    if ($(document).scrollTop() > 100){
      $(".header-area").addClass("shrink");
    } else {
      $(".header-area").removeClass("shrink");
    }
    
  });
  
 // menu 
 $('.siteBar-btn').click( function (event){ 
    event.preventDefault()
    $(this).toggleClass('active');   
    $('.mobile-menu').toggleClass('siteBar');   
    $('body').toggleClass('overflow-hidden');   
  }); 


    // owlCarousel
    $(".reviwe__slider").owlCarousel({
      loop: true,
      margin: 30,
      items: 2,
      navText: [
        '<i class="angle-left"><img src="assets/img/all-icons/left-arrow.png" alt=""></i>',
        '<i class="angle-right"><img src="assets/img/all-icons/right-arrow.png" alt=""></i>'
      ],
      nav: true,
      smartSpeed: 1000,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        767: {
          items: 2
        },
        992: {
          items: 2
        }
      }
    });


  // page Animation
  AOS.init({
    mirror: true,
    duration: 1500,
    initClassName: 'aos-init',
    once: true,
  });

  // data-aos="fade-up" 
  // data-aos-delay="300" 

 
})(jQuery);
