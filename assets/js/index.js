jQuery.event.add(window, 'load', function () {
	var alignSize = parseInt($('.footer-cont').css('max-width')),
	posItem = $('.portfolio-list li'),
	slideAutoHgt = $('.portfolio-slide .main-slide-outer, .portfolio-top-outer'),
	brChk = $('.portfolio-list-box .pf-desc br'),
	mainSwpChk = $('.main-swiper .swiper-pagination-bullet,' +
	'.main-swiper [class*="swiper-button"');

	$(window).resize(function () {
		if (winW > 767) {
			slideHgt();
		}
		pfItemHgt();
		txtBrChk();
	});

	mainSwpChk.on('click', function () {
		clearInterval(swiperIdxChk);
		setTimeout(function () {
			slideStart();
		}, 0);
	});

	$('[class*="swiper-button"], .swiper-pagination-bullet').on('click', function () {
		if (!$(this).hasClass('swiper-pagination-bullet')) {
			slideIndex();
		} else {
			var bltIdx = $(this).index() + 1;
			$('.swiper-pagination-num').text('0' + bltIdx);
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
		swiperIdxChk = setInterval(function () {
			$('.main-swiper .swiper-button-next').trigger('click');
			slideIndex();
		}, 4500);
	}
	setTimeout(function() {
		slideStart();
	}, 2000);

	function pfItemHgt() {
		setTimeout(function () {
			var dHgt = posItem.outerHeight(true) * 5;
			posItem.parent().css('height', dHgt);
		}, 0);
	}
	pfItemHgt();

	function slideHgt() {
		pfHgt = $(window).height();
		slideAutoHgt.css('height', pfHgt);
	}
	slideHgt();

	function txtBrChk() {
		winW = $(window).width();
		if (winW <= alignSize) {
			brChk.hide();
		} else {
			brChk.show();
		}
	}
	txtBrChk();
});
