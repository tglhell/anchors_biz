jQuery.event.add(window, 'load', function () {
	var showMainList = $('[ir] > li'),
	winWid = $(window).width(),
	winHgt = $(window).height(),
	scrTop = $('.btn-scroll-top'),
	aniItem = setTimeout,
	logoChk = $('.header-cont .h-logo').find('img').attr('src'),
	toggleClass = $('.btn-toggle');

	$('.nav .btn-menu').on('click', function (e) {
		e.preventDefault();
		$(this).closest('.nav').toggleClass('on');
		if ($(this).parent().hasClass('full')) {
			if ($(this).parent().hasClass('on')) {
				if (winWid > 767) {
					$(this).parent().css('right', '0');
				} else {
					$(this).parent().css({'right':'0', 'height':winHgt});
				}
				$('body').addClass('n-scroll');
				$('.header-cont').find('.h-logo img').attr('src', '/anchors_biz/assets/images/common/img_header_logo2.png');
			} else {
				if (winWid > 767) {
					$(this).parent().css('right', '0');
				} else {
					$(this).parent().css({'right':'0', 'height':'60px'});
				}
				$('body').removeAttr('class');
				$('.header-cont').find('.h-logo img').attr('src', logoChk);
			}
		}
	});

	$(window).scroll(function () {
		var scrPos = $(this).scrollTop(),
		scrPosSum = $(document).height() - $(window).height() - $('.footer').height();
		if (scrPos > 0) {
			$('.header').addClass('scroll');
			scrTop.addClass('active');
			if (scrPos > scrPosSum) {
				scrTop.css({'bottom':(scrPos - scrPosSum) + 20, 'transition':'none'});
			} else {
				scrTop.attr('style', 'bottom:20px !important;transition:none;');
			}
		} else {
			$('.header').removeClass('scroll');
			scrTop.removeClass('active').removeAttr('style');
		}

		if ($('.main').length == 0) {
			if (scrPos >= scrPosSum) {
				$('.wrap').addClass('side-fixed');
			} else {
				$('.wrap').removeClass('side-fixed');
			}
		}
	});

	scrTop.click(function(){
		$('html, body').animate({ scrollTop: '0' }, '0');
		$(this).blur();
	});

	// $(window).on('orientationchange', function () {
	// 	var orientation = window.orientation;
	// 	if (orientation == 90 || orientation == -90) {
	// 		location.reload();
	// 	} else {
	// 		location.reload();
	// 	} 
	// });

	toggleClass.click(function () {
		if (!$(this).hasClass('active')) {
			$(this).addClass('active');
			$('.portfolio-swiper-box').removeClass('off').addClass('on');
		} else {
			$(this).removeClass('active');
			$('.portfolio-swiper-box').removeClass('on').addClass('off');
		}
	});

	function irInsert() {
		$('[ir]').each(function (index) {
			iNum = showMainList.length, _this = $(this);
			if (_this.children().is('li')) {
				_this.removeAttr('ir').attr('ir-group-idx', (index + 1));
			} else {
				if (!$(this).hasClass('on')) {
					_this.removeAttr('ir').attr('ir-idx', (index + 1));
				}
			}
			aniItem(function () {
				for (i = 0; i <= iNum; i++) {
					$(function (i) {
						aniItem(function () {
							showMainList.eq(i).addClass('active');
						}, 300 * i);
					}(i));
				}
			}, 2000);
			if ($('.pf-list-wrap').length == 1) {
				aniItem(function () {
					for (i = 0; i <= iNum; i++) {
						$(function (i) {
							aniItem(function () {
								showMainList.eq(i).addClass('active');
							}, 300 * i);
						}(i));
					}
				}, 1000);
			}
		});
	}

	aniItem(function () {
		irInsert();
	}, 50);
});