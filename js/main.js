$(document).ready(function (){
	$(".landing_page_button").click(function (){
    	$('html, body').animate({
        	scrollTop: $("#coffee-parallax-view").offset().top
        }, 1000);
  	});
  	$("#menu-button").click(function (){
    	$('html, body').animate({
        	scrollTop: $("#menu-section").offset().top
        }, 1000);
  	});
});





$(document).ready(function() {
	// $('.parallax-window').parallax({imageSrc: 'images/about-photo.jpg' imageSrc: 'images/menu.jpg'});
	// $('.parallax-window').parallax({imageSrc: 'images/phone.jpeg'});

});