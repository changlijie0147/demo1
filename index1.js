/**
 * Created by Administrator on 2016/2/7.
 */

function slide(item,time,speed){
    /*自动播放*/
    var length = $('.slided').length;
    //console.log(length)
    var timer;
    /*自动播放*/
    function autoPlay() {
        clearTimeout(timer);
        item++;
        if (item == length) {
            item = 0;
            animate(item);
        }else{
            animate(item);
        }
        spanCur(item);
        timer = setTimeout(autoPlay, time);
    }
    timer = setTimeout(autoPlay, time);
    /*动画事件*/
    function animate (getNum){
        $('.slided').hide().css({opacitp:0.5,zIndex:0});
        $('.slided').eq(getNum).show().stop().animate({opacity:1,zIndex:8},speed).addClass('banAnimate');
    }
    /*左右按钮点击切换事件*/
    function slidePrev(e){
        e.preventDefault();
        if(!$('.slided').is(':animated')){
            if (item == 0) {
                item = length-1;
                animate(item);
            } else {
                item--;
                animate(item);
            }
            spanCur(item);
        }
    }
    function slideNext(e){
        e.preventDefault();
        if(!$('.slided').is(':animated')){
            if (item == length-1) {
                item = 0;
                animate(item);
            } else {
                item++;
                animate(item);
            }
            spanCur(item);
        }
    }
    /*下面的小方块事件*/
    function spanCur(cur){
        $(".item").children().removeClass("current");
        $(".item").children().eq(cur).addClass("current");
    }
    $(".item").children().on('click',function(e){
        e.preventDefault();
        clearTimeout(timer);
        $(".item").children().removeClass("current");
        $(this).addClass("current");
        item = $(this).index()-1;
        console.log(item)
        if (item <= length) {
            autoPlay(item);
        }
    })
    /*左右按钮*/
    $('.prev').click(slidePrev);
    $('.next').click(slideNext);
}
slide(0,3000,500)
