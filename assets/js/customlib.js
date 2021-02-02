$(function(){
	var option = {},
	slideLength = $('.portfolio-slide .swiper-slide').length,
	toggleClass = $('.btn-toggle');
	if (slideLength == 1) {
		option = {
			allowSlidePrev: false,
			allowSlideNext: false,
			autoplay: false,
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
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			speed: 800,
		}
	}
	var pfSwiper = new Swiper('.portfolio-slide', option);

	$('[class*="swiper-button"], .swiper-pagination-bullet').on('click', function(){
		if (!$(this).hasClass('swiper-pagination-bullet')) {
			slideIndex();
		} else {
			var bltIdx = $(this).index() + 1;
			$('.swiper-pagination-num').text('0' + bltIdx);	
		}
	});

	toggleClass.click(function () {
		if (!$(this).hasClass('active')) {
			$(this).addClass('active');
			$('.portfolio-swiper-box').removeClass('off').addClass('on');
			clearInterval(swiperIdxChk);
		} else {
			$(this).removeClass('active');
			$('.portfolio-swiper-box').removeClass('on').addClass('off');
			slideStart();
		}
	});

	function slideIndex() {
		var slideIdx = $('.swiper-pagination-bullet.swiper-pagination-bullet-active').index() + 1;
		var slideIdxLeng = $('.swiper-pagination-bullet').length;
		$('.swiper-pagination-num').text('0' + slideIdx);
		$('.swiper-pagination-num-total').text('0' + slideIdxLeng);
	}
	slideIndex();

	function slideStart() {
		swiperIdxChk = setInterval(function(){
			$('.swiper-button-next').trigger('click');
			slideIndex();
		}, 5000);
	}
	slideStart();
});