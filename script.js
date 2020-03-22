$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip()
	AOS.init();
	$(window).scroll(function(){
    	$(".arrow").css("opacity", 1 - $(window).scrollTop() / 250);
  	});

  	$('#scroll-hit').click(function() {
	    $('html, body').animate({
        	scrollTop: $("#scroll-target").offset().top
    	}, 1000);
  	});
});