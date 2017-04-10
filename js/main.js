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
    $("#contactLink").click(function (){
      $('html, body').animate({
          scrollTop: $("#contactSection").offset().top
        }, 1000);
    });
    $("#charityLink").click(function (){
      $('html, body').animate({
          scrollTop: $("#charitySection").offset().top
        }, 1000);
    });

});
