jQuery.event.add(window, 'load', function () {
	var alignSize = parseInt($('.footer-cont').css('max-width')),
	posItem = $('.portfolio-list li'),
	slideAutoHgt = $('.portfolio-slide .main-slide-outer, .portfolio-top-outer'),
	brChk = $('.portfolio-list-box .pf-desc br');

	$(window).resize(function () {
		if (winW > 767) {
			slideHgt();
		}
		pfItemHgt();
		txtBrChk();
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
