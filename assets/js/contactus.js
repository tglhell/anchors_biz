$(function(){
	var autoHgtItem = $('.contact-us-list, .map-info-box');

	function listHgt () {
		imgHgt = parseInt($('.contact-us-mid .outer-img').outerHeight());
		autoHgtItem.css('height', imgHgt);
	}
	listHgt ();
	
	$(window).resize(function(){
		setTimeout(function(){
			listHgt ();
		}, 700);
	});
});