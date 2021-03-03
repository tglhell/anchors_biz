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
	let acsItemFirst = $('.main-scr-list li:first-child');
	let acsItemLeng = acsSlide.find('li').length;

	function mainScrSd() {
		if (!acsChk.hasClass('type-vertical')) {
			acsItemW = $('.main-scr-list li').width();
			acsSlide.css({ 'left': acsSlidePos });
		} else {
			acsItemH = $('.main-scr-list li').height();
			acsSlide.css({ 'top': acsSlidePos });
		}
		if (moveWork == false) {
			if (moveType == 0) {
				if (!acsChk.hasClass('type-vertical')) {
					acsSlide.css('left', acsSlidePos);
					acsSlide.animate({ left: -acsItemW }, {
						duration: moveSpeedW, easing: 'linear', step: function () {
							if (movePause == true) {
								acsSlide.stop();
							}
						},
						complete: function () {
							acsSlide.append('<li>' + acsItemFirst.html() + '</li>');
							acsItemFirst.remove();
							acsSlide.css('left', '0');
							mainScrSd();
						}
					});
				} else {
					acsSlide.css('top', acsSlidePos);
					acsSlide.animate({ top: acsItemH }, {
						duration: moveSpeedH, easing: 'linear', step: function () {
							if (movePause == true) {
								acsSlide.stop();
							}
						},
						complete: function () {
							acsSlide.append('<li>' + acsItemFirst.html() + '</li>');
							acsItemFirst.remove();
							acsSlide.css('top', '0');
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
		if ($(window).width() < wSize) {
			if (acsItemLeng < 4) {
				for (i = 0; i < 3; i++) {
					acsSlide.append('<li>' + acsItemFirst.html() + '</li>');
				}
			}
		} else {
			if (acsItemLeng == 1) {
				for (i = 0; i < 7; i++) {
					acsSlide.append('<li>' + acsItemFirst.html() + '</li>');
				}
			}
			if (acsItemLeng == 4) {
				for (i = 0; i < 4; i++) {
					acsSlide.append('<li>' + acsItemFirst.html() + '</li>');
				}
			}
		}
	}
	itemLengthChk();
});