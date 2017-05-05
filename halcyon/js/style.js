$(document).ready(function(){
	$('#mm-menu-toggle').click(function(event) {
		$(this).addClass('hide');
		$('#body').addClass('mm-menu-open');
		$('.mm-menu-mask').addClass('active');
		$('.mm-menu').addClass('active');
		$('#wrapper').addClass('mm-menu-open');
	});

	$('.mm-menu-mask').click(function(event) {
		$('#mm-menu-toggle').removeClass('hide');
		$('.mm-menu-mask').removeClass('active');
		$('.mm-menu').removeClass('active');
		$('#wrapper').removeClass('mm-menu-open');
		$('#body').removeClass('mm-menu-open');
	});

	$('.slider').slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: true
	});
});


// var active = 0;

// $(document).ready(function(){
// 	function slide(e){
// 		e.preventDefault();
// 		$('#mm-menu-toggle').unbind();
// 		active++;
		
// 		if(active == 1){
// 			$('#mm-menu-toggle').removeClass('active').addClass('active');
// 			$('#mm-menu-toggle').bind('click', slide);
			
// 		}
// 		else{
// 			active = 0;
// 			$('#mm-menu-toggle').removeClass('active');
// 			$('#mm-menu-toggle').bind('click', slide);
// 		}
// 	}

// 	$('#mm-menu-toggle').bind('click', slide);
// });