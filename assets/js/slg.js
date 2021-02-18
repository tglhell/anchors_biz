$(function () {
	let moveType = 0;
	let moveSpeedW = 50000;
	let moveSpeedH = 70000;
	let wSize = 8000;
	let moveWork = false;
	let movePause = false;
	let acsSlide = $('.main-scr-list');
	let acsChk = $('.main-scr-outer');
	let acsSlidePos = $('.main-scr-list').css('left').replace(/[^-\d\.]/g, '');
	let acsitemFirst = $('.main-scr-list li:first-child');
	let acsItemLeng = acsSlide.find('li').length;

	function mainScrSd() {
		if (!acsChk.hasClass('type-vertical')) {
			acsitemW = $('.main-scr-list li').width();
			acsSlide.css({ 'left': acsSlidePos });
		} else {
			acsitemH = $('.main-scr-list li').height();
			acsSlide.css({ 'top': acsSlidePos });
		}
		if (moveWork == false) {
			if (moveType == 0) {
				if (!acsChk.hasClass('type-vertical')) {
					acsSlide.css('left', acsSlidePos);
					acsSlide.animate({ left: -acsitemW }, {
						duration: moveSpeedW, easing: 'linear', step: function () {
							if (movePause == true) {
								acsSlide.stop();
							}
						},
						complete: function () {
							acsSlide.append('<li>' + acsitemFirst.html() + '</li>');
							acsitemFirst.remove();
							acsSlide.css('left', '0');
							mainScrSd();
						}
					});
				} else {
					acsSlide.css('top', acsSlidePos);
					acsSlide.animate({ top: acsitemH }, {
						duration: moveSpeedH, easing: 'linear', step: function () {
							if (movePause == true) {
								acsSlide.stop();
							}
						},
						complete: function () {
							acsSlide.append('<li>' + acsitemFirst.html() + '</li>');
							acsitemFirst.remove();
							acsSlide.css('top', '0');
							mainScrSd();
						}
					});
				}
			}
		}
	}
	mainScrSd();

	// $('.nav .btn-menu').click(function(){
	// 	if (!$(this).parent().hasClass('on')){
	// 		acsSlide.stop();
	// 	} else {
	// 		mainScrSd();
	// 	}
	// });

	$(window).on('resize', function(){
		itemLengthChk();
	});

	function itemLengthChk() {
		if ($(window).width() < wSize) {
			if (acsItemLeng < 4) {
				for (i = 0; i < 3; i++) {
					acsSlide.append('<li>' + acsitemFirst.html() + '</li>');
				}
			}
		} else {
			if (acsItemLeng == 1) {
				for (i = 0; i < 7; i++) {
					acsSlide.append('<li>' + acsitemFirst.html() + '</li>');
				}
			}
			if (acsItemLeng == 4) {
				for (i = 0; i < 4; i++) {
					acsSlide.append('<li>' + acsitemFirst.html() + '</li>');
				}
			}
		}
	}
	itemLengthChk();
});