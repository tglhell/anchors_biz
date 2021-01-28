jQuery.event.add(window, 'load', function () {
	var alignSize = parseInt($('.footer-cont').css('max-width')),
	posItem = $('.portfolio-list li'),
	slideAutoHgt = $('.portfolio-slide a, .portfolio-top-outer'),
	brChk = $('.portfolio-list-box .pf-desc br'),
	toggleClass = $('.btn-toggle');

	$(window).resize(function () {
		if (winW > 767) {
			slideHgt();
		}
		pfItemHgt();
		txtBrChk();
	});

	toggleClass.click(function () {
		if (!$(this).hasClass('active')) {
			$(this).addClass('active');
			$('.portfolio-swiper-box').removeClass('off').addClass('on');
		} else {
			$(this).removeClass('active');
			$('.portfolio-swiper-box').removeClass('on').addClass('off');
		}
	});

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
