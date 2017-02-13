$(function(){
    $('.aboutus-l ul li').click(function(event) {
        $(this).addClass('current').siblings('li').removeClass('current');
        $('.aboutus-r ul li').eq($(this).index()).addClass('current').siblings('li').removeClass('current');
    });
    var winH=$(window).height();
    var aboutLH=$('.aboutus-l').height(); 
    $(window).scroll(function(event) {
        var winST=$(window).scrollTop();
        var aboutMH=$('.aboutus-main').height();
        if((winST-170)>(aboutMH-aboutLH)){
            var nowtop=$('.aboutus-l').css('top');
            $('.aboutus-l').css({top:nowtop});
        }else if(winST>170){
            $('.aboutus-l').css({top:0});
        }
        else if(winST<170){
            $('.aboutus-l').css({top:170-winST});
        }
    });
})