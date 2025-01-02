// header

$(document).ready(function(){
  $('.header__burger').click(function(){
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
  });
});

$(document).ready(function(){
  $(".header__link").click(function(){
      if ($(window).width() < 767){
      $('.header__menu').hide();
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').removeClass('lock');
  }
  }); 
  $(".header__logo").click(function(){
      if ($(window).width() < 767){
      $('.header__menu').hide();
      $('.header__burger, .header__menu').removeClass('active');
      $('body').removeClass('lock');
  }
  });
  $(".header__burger, .header__link, .header__logo").click(function(){
      $('.header__menu').show(); 
  });
}); 


$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $(".header, .header__link, .phone__mobile__desktop, .whatsapp").addClass("active");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $(".header, .header__link, .phone__mobile__desktop, .whatsapp").removeClass("active");
      }
  });
});

// header