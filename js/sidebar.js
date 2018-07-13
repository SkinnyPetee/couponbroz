$(document).ready(function(){
  $('.hamburger-wrapper a').click(function(){

    $('.sidebar').toggleClass('active');


  });


  $('.cross').click(function(){
    $('.sidebar').removeClass('active');

  });


  $('.coupon-box a').click(function(){
    $('.coup-act-modal').addClass('fire');
    $('.supreme-container').addClass('is-blurred');
    $('.supreme-container').addClass('in-active');
  });

  $('.cross-wrapper-2 .fa-times').click(function(){
    $('.coup-act-modal').removeClass('fire');
    $('.supreme-container').removeClass('is-blurred');
    $('.supreme-container').removeClass('in-active');

  });

});
