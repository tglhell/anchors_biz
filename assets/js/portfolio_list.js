jQuery.event.add(window, 'load', function () {
    var $projectMenu = $('.portfolio-tab-menu li'),
        $projectCont = $('.portfolio-tab-list'),
        $projectList = $('.portfolio-tab-list li'),
        projectListLen = $projectList.length;
        listMargin = $projectList.css('margin-top'),
        listMargin = listMargin.split('px'),
        listMargin = listMargin[0],
        listMargin = parseFloat(listMargin),
        projectContH = $projectList.height()+listMargin,
        aniItem = setTimeout,
        speed = 300;

	$projectMenu.on('click',function(){
        var $thisCate = $(this).data('cate'),
            $projectCate = $('.portfolio-tab-list li'+'[data-cate='+$thisCate+']'),
            projectCateLen = $projectCate.length;

        $projectMenu.removeClass('on');
        $(this).addClass('on');
        $projectCont.attr('ir-group-idx','');
        $projectList.removeClass('active');
        $projectList.css('display','none');
        
        if ($thisCate == 'all') {
            $projectCont.height(projectContH*projectListLen/2);
            aniItem(function() {
                $projectList.css('display','block');
                aniItem(function() {
                    for (i=0; i <= projectListLen; i++) {
                        $(function(i) {
                            aniItem(function() {
                                $projectList.eq(i).addClass('active');
                            },speed*i);
                        }(i));
                    }
                },speed);  
            },speed); 
        } else {
            if (projectCateLen%2 == 0){
                $projectCont.height((projectContH*projectCateLen)/2);               
            } else {
                $projectCont.height((projectContH*(projectCateLen+1))/2);
            }

            aniItem(function() {               
                $projectCate.css('display','block');
                aniItem(function() {               
                    for (i=0; i <= projectCateLen; i++) {
                        $(function(i) {
                            aniItem(function() {
                                $projectCate.eq(i).addClass('active');
                            },speed*i);
                        }(i));
                    }
                },speed); 
            },speed); 
        }
    })
});
