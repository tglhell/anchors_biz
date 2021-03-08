jQuery.event.add(window, 'load', function () {
	$('.pf-tab-list a').on('click', function(e){
		e.preventDefault();
		const _this = $(this);
		const _thisLabel = _this.text();
		const _thisContItem = $('.pf-cont-list');
		const _thisContItemLabel = _thisContItem.find('li' + '[data-label=' + _thisLabel + ']');
		_this.closest('li').addClass('on').siblings().removeClass('on');
		if (_thisLabel == 'All') {
			_thisContItem.find('li').removeClass('hide');
		} else {
			_thisContItem.find('li').addClass('hide');
			_thisContItemLabel.removeClass('hide');
		}
	});
});