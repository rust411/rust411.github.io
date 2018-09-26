$(document).ready(function(){
$(".on_off_btn").change(function () {
    if ($(this).is(':checked')) 
        $(this).parent().parent().parent().find('.security_img').attr('src', 'images/s_on.jpg');
    else
       $(this).parent().parent().parent().find('.security_img').attr('src', 'images/s_off.jpg');
});


// scroll top
if ($('.scroll_top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.scroll_top').addClass('show');
            } else {
                $('.scroll_top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('.scroll_top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

// scroll down
if ($(window).width() >= 768) {
  $('.scroll_down a').click(function(){
   $('html, body').animate({ scrollTop: $( $(this).attr('href') ).offset().top - 70 }, 800);
   return false;
});
}else{
  $('.scroll_down a').click(function(){
   $('html, body').animate({ scrollTop: $( $(this).attr('href') ).offset().top - 70 }, 800);
   return false;
});
}

// scroll down
if ($(window).width() >= 768) {
  $('.page_header .scroll_down a').click(function(){
   $('html, body').animate({ scrollTop: $( $(this).attr('href') ).offset().top - 0 }, 800);
   return false;
});
}




// menu toggle
  $(".menu_toggle").click(function(){
    $("body").addClass("menu_opened");
  });
  $(".close_menu").click(function(){
    $("body").removeClass("menu_opened");
  });
  



// Menu Fixed 
var fixmenu = $('.main_header').offset();      
$(window).scroll(function() {     
    var currentScroll = $(window).scrollTop(); 
    if (currentScroll >= 3) {           
        $('.main_header').addClass('fixed'); 
    } 
    else {        
    $('.main_header').removeClass('fixed'); 
    }
});


  


  


  

   $('.team_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    arrows: true,
    vertical: false,
    centerMode: false,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,

            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
  }); 

if ($(window).width() < 768) {
   $('.q_list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    arrows: false,
    vertical: false,
    centerMode: false,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 2000
  }); 
}

   $('.why_wifi_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      arrows: true,
      vertical: false,
      centerMode: false,
      focusOnSelect: true,
      autoplay: false,
      fade:false,
      autoplaySpeed: 4000
    });

   $('.iphone_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      arrows: false,
      vertical: false,
      centerMode: false,
      focusOnSelect: true,
      autoplay: false,
      fade:true,
      autoplaySpeed: 4000
    }); 

 $('.faq_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      arrows: true,
      vertical: false,
      centerMode: false,
      focusOnSelect: true,
      autoplay: false,
      fade:false,
      autoplaySpeed: 4000
    }); 

  
   

  $('.tabgroup > div').hide();
$('.tabgroup > div:first-of-type').show();
$('.tabs a').click(function(e){
  e.preventDefault();
    var $this = $(this),
        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();
}) 
   
});