$(document).ready(function(){
	$('#mm-menu-toggle').click(function(event) {
		$(this).addClass('hide');
		$('#body').addClass('mm-menu-open overflow');
		$('.mm-menu-mask').addClass('active');
		$('.mm-menu').addClass('active');
		$('#wrapper').addClass('mm-menu-open');
	});

	$('.mm-menu-mask').click(function(event) {
		$('#mm-menu-toggle').removeClass('hide');
		$('.mm-menu-mask').removeClass('active');
		$('.mm-menu').removeClass('active');
		$('#wrapper').removeClass('mm-menu-open');
		$('#body').removeClass('mm-menu-open overflow');
	});

	$('.slider').slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: true
	});

	
});