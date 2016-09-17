$(document).ready(function (){
	$(".landing_page_button").click(function (){
    	$('html, body').animate({
        	scrollTop: $("#coffee-parallax-view").offset().top
        }, 1000);
  	});
});





$(document).ready(function() {
	$('.parallax-window').parallax({imageSrc: 'images/store-front.jpg'});
	// $('.parallax-window').parallax({imageSrc: 'images/typewritter.jpeg'})
	// $('.parallax-window').parallax({imageSrc: 'images/phone.jpeg'});
});