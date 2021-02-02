jQuery.event.add(window, 'load', function () {
	var showMainList = $('[ir] > li'),
	winWid = $(window).width(),
	winHgt = $(window).height(),
	scrTop = $('.btn-scroll-top'),
	aniItem = setTimeout,
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
				clearInterval(swiperIdxChk);
			} else {
				if (winWid > 767) {
					$(this).parent().css('right', '58px');
				} else {
					$(this).parent().css({'right':'0', 'height':'60px'});
				}
				slideStart();
			}
		}
	});

	// $('html, body').click(function(e){
	// 	var tarItem = $('.nav .btn-menu, .nav .btn-menu *, .nav .menu, .nav .menu *');
	// 	if(!$(e.target).is(tarItem)) {
	// 		$('.nav').removeClass('on');
	// 		if (winWid > 767) {
	// 			$('.nav.full').css('right', '58px');
	// 		} else {
	// 			$('.nav.full').css({'right':'0', 'height':'60px'});
	// 		}
	// 	}
	// });

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
});
