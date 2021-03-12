jQuery.event.add(window, 'load', function () {
	$('.pf-tab-list a').on('click', function (e){
		e.preventDefault();
		const _thisLabel = $(this).text();
		const _thisContItemList = $('.pf-cont-list').find('li');
		const _thisContItemLabel = _thisContItemList.parent().find('li' + '[data-label=' + _thisLabel + ']');
		let _thisContItemListLeng = _thisContItemList.length;
		let _thisContItemLabelLeng = _thisContItemLabel.length;
		$(this).closest('li').addClass('on').siblings().removeClass('on');
		if (_thisLabel == 'All') {
			_thisContItemList.removeClass('active');
			setTimeout(function (){
				_thisContItemList.removeAttr('class');
			}, 750);
			_thisContItemList.animate({'overflow':'visible'}, 800, function (){
				for (i = 0; i <= _thisContItemListLeng; i++) {
					$(function (i) {
						setTimeout(function () {
							_thisContItemList.eq(i).addClass('active');
						}, i * 300)
					}(i));
				}
			});
		} else {
			_thisContItemList.removeClass('active');
			setTimeout(function (){
				_thisContItemList.addClass('hide');
				_thisContItemLabel.removeAttr('class');
			}, 750);
			_thisContItemList.animate({'overflow':'visible'}, 800, function (){
				for (i = 0; i <= _thisContItemLabelLeng; i++) {
					$(function (i) {
						setTimeout(function () {
							_thisContItemLabel.eq(i).addClass('active');
						}, i * 300)
					}(i));
				}
			});
		}
	});
});