jQuery.event.add(window, 'load', function () {
	var showMainList = $('[ir] > li'),
	winWid = $(window).width(),
	winHgt = $(window).height(),
	scrTop = $('.btn-scroll-top'),
	aniItem = setTimeout;

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
			} else {
				if (winWid > 767) {
					$(this).parent().css('right', '58px');
				} else {
					$(this).parent().css({'right':'0', 'height':'60px'});
				}
			}
		}
	});

	$('html, body').click(function(e){
		var tarItem = $('.nav .btn-menu, .nav .btn-menu *, .nav .menu, .nav .menu *');
		if(!$(e.target).is(tarItem)) {
			$('.nav').removeClass('on');
			if (winWid > 767) {
				$('.nav.full').css('right', '58px');
			} else {
				$('.nav.full').css({'right':'0', 'height':'60px'});
			}
		}
	});

	$(window).scroll(function () {
		var scrPos = $(this).scrollTop(),
		scrPosSum = $(document).height() - $(window).height() - $('.footer').height();
		if (scrPos > 0) {
			$('.header').addClass('scroll');
			scrTop.addClass('active');
		} else {
			$('.header').removeClass('scroll');
			scrTop.removeClass('active');
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

	$(window).on('orientationchange', function () {
		var orientation = window.orientation;
		if (orientation == 90 || orientation == -90) {
			location.reload();
		} else {
			location.reload();
		} 
	});

	function irInsert() {
		$('[ir]').each(function (index) {
			var iNum = showMainList.length, _this = $(this);
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
			}, 1200);
		});
	}

	aniItem(function () {
		irInsert();
	}, 50);

	// Opinion to be excluded from the design side
	// if (winWid > 767) {
	// 	$('<div class="mouse">').appendTo('body');
	// 	var mouseX = -50, mouseY = -50;
	// 	var xp = 0, yp = 0;
	
	// 	$('html, body').on('mousemove', function (e) {
	// 		mouseX = e.pageX - 30;
	// 		mouseY = e.pageY - 30;
	// 	});
	
	// 	setInterval(function () {
	// 		xp += ((mouseX - xp) / 6);
	// 		yp += ((mouseY - yp) / 6);
	// 		$('.mouse').css({top:yp + 'px', left:xp + 'px'});
	// 	}, 10);
	
	// 	$('a, button, [class*="swiper-button"], .swiper-pagination-bullet, .main-step-navi li').on('mouseleave mouseenter', function(e){
	// 		e.preventDefault();
	// 		if (e.type == 'mouseleave') {
	// 			$('.mouse').removeClass('hover');
	// 		} else {
	// 			$('.mouse').addClass('hover');
	// 		}
	// 	});
	// }
});
