jQuery.event.add(window, 'load', function () {
	$('.portfolio-tab-menu li').on('click',function(){
        $('.portfolio-tab-menu li').removeClass('active');
        $(this).addClass('active');
    })
});
