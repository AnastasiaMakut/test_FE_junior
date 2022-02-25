$(window).scroll(function () {
	$('header').toggleClass('scroll', $(this).scrollTop() > 10);
});

$(document).ready(function () {
	$('.slider').slick({
		dots: true,
		autoplay: true
	})
});