/**
 * Created by Administrator on 2016/2/7.
 */

function slide(item,time,speed){
    /*�Զ�����*/
    var length = $('.slided').length;
    //console.log(length)
    var timer;
    /*�Զ�����*/
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
    /*�����¼�*/
    function animate (getNum){
        $('.slided').hide().css({opacitp:0.5,zIndex:0});
        $('.slided').eq(getNum).show().stop().animate({opacity:1,zIndex:8},speed).addClass('banAnimate');
    }
    /*���Ұ�ť����л��¼�*/
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
    /*�����С�����¼�*/
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
    /*���Ұ�ť*/
    $('.prev').click(slidePrev);
    $('.next').click(slideNext);
}
slide(0,3000,500)
