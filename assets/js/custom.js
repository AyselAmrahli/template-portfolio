// ************CUSTOM JS**********//
"use strict"; //:DDDDD

// Sub menu js
$('.nav-item').on('mouseover',function(){
	$(this).children('.sub-menu').slideDown();
});

$('.nav-item').on('mouseleave',function(){
	$(this).children('.sub-menu').slideUp();
});

// Clear message text
$('#clear-message').on('click',function(e){
	e.preventDefault();
	$('#message').val('');
});


// animation
if($(window).width() > 767){
	$('#mission-section').appear(function(){
  $('.mission-section-wrapper').each(function(){
  	$(this).addClass('animated fadeInRight');
  })
});
};

 // scroll-up
$("#scroll-up").on("click",scrollTop);

function scrollTop() {
	$("body").stop().animate({"scrollTop":$("#section-header").offset().top},1000,"swing");
	$("#scroll-up").fadeOut('slow');
}
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $("#scroll-up").fadeIn('slow');
    } else {
      $("#scroll-up").fadeOut('1000');
    }
  });

// owl carousel set
 $('.owl-blog-article').owlCarousel({
  items:1,
  nav:true,
  navText: ["<i class='fa fa-angle-left fa-4x'></i>","<i class='fa fa-angle-right fa-4x'></i>"]
 });

 $('.about-slider-owl').owlCarousel({
  items:3,
  dots: true
 });