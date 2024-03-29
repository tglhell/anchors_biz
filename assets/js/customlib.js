$(function(){
	var option = {},
	slideLength = $('.portfolio-slide .swiper-slide').length;
	if (slideLength == 1) {
		option = {
			allowSlidePrev: false,
			allowSlideNext: false,
			// autoplay: false,
			loop: false,
			simulateTouch: false
		}
		$('.portfolio-slide [class*="swiper-button"]').hide();
	} else {
		option = {
			centeredSlides: true,
			// autoplay: {
			// 	delay: 4500,
			// 	disableOnInteraction: false,
			// },
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			loop: true,
			simulateTouch: false,
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			speed: 800,
		}
	}
	var pfSwiper = new Swiper('.portfolio-slide', option);
});