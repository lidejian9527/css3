$(function () {
    $('#box').fullpage({
        verticalCentered: false,
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        navigation: true,
        scrollingSpeed:1000,
        //插件页面结构初始化完毕
        afterRender: () => {
            $('.more').on('click',() => {
                $.fn.fullpage.moveSectionDown();
            });
            $('.section:nth-child(2) .sofa').on('animationend',function () {
                $('.section:nth-child(3) .sofa').show();
            });
        },
        //离开前
        onLeave: function (index,nextIndex,direction) {
            $('.more').fadeOut(100);
            if(index === 2 && nextIndex === 3){
                $('.section:nth-child(2)').find('.sofa').addClass('animated');
            }else 
            if(index === 3 && nextIndex === 4) {
                $('.section:nth-child(3) .sofa').addClass('animated-04');
            }else 
            if(index === 5 && nextIndex === 6) {
                $('.section:nth-child(5) .qb img:last-child').addClass('animated');
                $('.section:nth-child(6) .box').addClass('animated');
            }
        },
        //到达后
        afterLoad: function (link,index) {
            if(index != 8) {
                $('.more').fadeIn(100);
            }
            $('.section').eq(index-1).addClass('now');
        }

    });
})