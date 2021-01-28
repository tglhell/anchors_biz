$(function () {
	let moveType = 0;
	let moveSpeed = 50000;
	let moveWork = false;
	let movePause = false;

	function mainScrSd() {
		let tkSlide = $('.main-scr-list');
		let tkChk = $('.main-scr-outer');
		let tkSlidePos = $('.main-scr-list').css('left').replace(/[^-\d\.]/g, '');
		let tkitemFirst = $('.main-scr-list li:first-child');

		if (!tkChk.hasClass('type-vertical')) {
			tkWidth = $('.main-scr-list').width();
			tkitemW = $('.main-scr-list li').width();
			tkSlide.css({ 'left': tkSlidePos });
		} else {
			tkWidth = $('.main-scr-list').height();
			tkitemW = $('.main-scr-list li').height();
			tkSlide.css({ 'top': tkSlidePos });
		}
		if (moveWork == false) {
			if (moveType == 0) {
				if (!tkChk.hasClass('type-vertical')) {
					tkSlide.css('left', tkSlidePos);
					tkSlide.animate({ left: -tkitemW }, {
						duration: moveSpeed, easing: "linear", step: function () {
							if (movePause == true) {
								tkSlide.stop();
							}
						},
						complete: function () {
							tkSlide.append("<li>" + tkitemFirst.html() + "</li>");
							tkitemFirst.remove();
							tkSlide.css('left', '0');
							mainScrSd();
						}
					});
				} else {
					tkSlide.css('top', tkSlidePos);
					tkSlide.animate({ top: tkitemW }, {
						duration: moveSpeed, easing: "linear", step: function () {
							if (movePause == true) {
								tkSlide.stop();
							}
						},
						complete: function () {
							tkSlide.append("<li>" + tkitemFirst.html() + "</li>");
							tkitemFirst.remove();
							tkSlide.css('top', '0');
							mainScrSd();
						}
					});
				}
			}
		}
	}
	mainScrSd();

	$(window).on('resize', function(){
		itemLengthChk();
	});

	function itemLengthChk() {
			let itemLeng = $('.main-scr-list li').length;
			if ($(window).width() < 8000) {
				if (itemLeng < 4) {
					for (i = 0; i < 3; i++) {
						$('.main-scr-list').append('<li><img src="/anchors/assets/images/index/img_slg_vertical.png" alt="anything is possible"></li>');
					}
				}
			} else {
				if (itemLeng == 1) {
					for (i = 0; i < 7; i++) {
						$('.main-scr-list').append('<li><img src="/anchors/assets/images/index/img_slg_vertical.png" alt="anything is possible"></li>');
					}
				}
				if (itemLeng == 4) {
					for (i = 0; i < 4; i++) {
						$('.main-scr-list').append('<li><img src="/anchors/assets/images/index/img_slg_vertical.png" alt="anything is possible"></li>');
					}
				}
			}
		}
		itemLengthChk();
});