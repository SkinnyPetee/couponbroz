$(document).ready(function(){
  $('.hamburger-wrapper a').click(function(){

    $('.sidebar').toggleClass('active');
  });


  $('.cross').click(function(){
    $('.sidebar').removeClass('active');
  });

});
