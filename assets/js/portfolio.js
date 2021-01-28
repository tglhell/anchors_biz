jQuery.event.add(window, 'load', function () {
	var posArr = [],
	ptSwpBox = $('.portfolio-swiper-box'),
	alignSize = parseInt($('.footer-cont').css('max-width')),
	ftwVal = $('body').css('font-weight') / 4,
	addMgn = ftwVal * 2,
	pageDownBtn = $('.btn-portfolio-in'),
	posItem = $('.portfolio-list li'),
	posItemLength = posItem.length,
	slideAutoHgt = $('.portfolio-slide a, .portfolio-top-outer'),
	headerOur = $('.header'),
	headerOurCnt = $('.header-cont'),
	brChk = $('.portfolio-list-box .pf-desc br'),
	btnMoreItem = $('.portfolio-list-box .btn-more'),
	navBtnMenu = $('.nav .btn-menu'),
	toggleClass = $('.btn-toggle');

	$(window).resize(function () {
		if (winW > 767) {
			slideHgt();
		}
		pfItemHgt();
		txtBrChk();
	});

	pageDownBtn.click(function () {
		$('html, body').stop().animate({ scrollTop: pfHgt }, addMgn * 3, 'easeInQuart');
		setTimeout(function(){
			headerOurCnt.find('.h-logo img').attr('src', '/anchors/assets/images/common/img_header_logo.png');
			navBtnMenu.removeClass('other');
		}, 650);
	});

	$(window).scroll(function () {
		var scrPos = $(this).scrollTop(),
		actPos = $('.portfolio-list-outer').offset().top;
		if (scrPos > actPos) {
			headerOur.addClass('scroll');
			headerOurCnt.find('.h-logo img').attr('src', '/anchors/assets/images/common/img_header_logo.png');
			navBtnMenu.removeClass('other');
			ptSwpBox.css('position', 'absolute');
		} else {
			headerOur.removeClass('scroll');
			headerOurCnt.find('.h-logo img').attr('src', '/anchors/assets/images/common/img_header_logo2.png');
			navBtnMenu.addClass('other');
			ptSwpBox.css('position', 'fixed');
		}

		for (var i = 0; i < posItemLength; i++) {
			var thisPos = posItem.eq(i).offset().top;
			posArr.push(thisPos);

			if (scrPos > posArr[i] - pfHgt + ftwVal) {
				posItem.eq(i).find('a').removeClass('on').removeAttr('ir').attr('ir-idx', (i + 6));
			} else {
				posItem.eq(i).find('a').addClass('on').removeAttr('ir-idx').attr('ir', '');
			}
		}

		if (scrPos > 0) {
			$('.portfolio-top-outer').addClass('dim');
		} else {
			$('.portfolio-top-outer').removeClass('dim');
		}
	});

	btnMoreItem.click(function () {
		posItem.removeClass('disabled');
		posItem.parent().css('height', 'auto');
		$(this).parent().hide();
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
