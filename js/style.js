$(document).ready(function () {

	setInterval(function () {
		$("html").removeClass("loading");
	}, 6500);


	$('#back-to-top').on('click', function (e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: 0
		}, 700);
	});
});