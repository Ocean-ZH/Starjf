$(function(){
    /*banner*/
    var numBanner=0;
    var numBanner02=0;
    var timerBanner=null;
    $('.banner ul li').click(function(event) {
        $(this).addClass('current').siblings('li').removeClass('current');
        $('.banner ol').stop().animate({left:-$(this).index()*100+'%'},400);
        numBanner=$(this).index();
        numBanner02=$(this).index();
    });
    function bannerPlay(){
        numBanner++;
        numBanner02++;
        if(numBanner02>3){
            numBanner02=0;
        }
        if(numBanner>4){
            numBanner=1;
            $('.banner ol').css({left:0});
        }
        $('.banner ol').stop().animate({left:-numBanner*100+'%'},400)
        $('.banner ul li').eq(numBanner02).addClass('current').siblings('li').removeClass('current');
    }
    clearInterval(timerBanner);
    timerBanner=setInterval(bannerPlay,2500);

      $('.banner').hover(function() {
           clearInterval(timerBanner);
           $('.banner span.left,.banner span.right').stop().fadeIn(400);
       }, function() {
            timerBanner=setInterval(bannerPlay,2500);
            $('.banner span.left,.banner span.right').stop().fadeOut(400);
       });

      $('.banner span.right').click(function(event) {
          bannerPlay();
      });
      $('.banner span.left').click(function(event) {
            numBanner--;
            numBanner02--;
            if(numBanner02<0){
                numBanner02=3;
            }
            if(numBanner<0){
                numBanner=3;
                $('.banner ol').css({left:'-400%'});
            }
            $('.banner ol').stop().animate({left:-numBanner*100+'%'},400)
            $('.banner ul li').eq(numBanner02).addClass('current').siblings('li').removeClass('current');
      });

    /*热点消息*/
    var numHN=0;
    var timerHN=null;
    function hotNews(){
        numHN++;
        if(numHN>2){
            numHN=0;
        }
        $('.hot_news p').fadeOut(400).removeClass('current').eq(numHN).show().css({top:24,opacity:0}).animate({top:0,opacity:1},400);
    }
    timerHN=setInterval(hotNews,3000);
    
    /*投资项目*/
    $('.invest-top li').click(function(event) {
        /*var investTab=$(this).index();*/
        $(this).addClass('current').siblings('li').removeClass('current');
        $('.invest table').eq($(this).index()).addClass('current').siblings('table').removeClass('current');
    });

    $('.info tr').hover(function() {
        if ($(this).index()!=0) {
            $(this).addClass('current').siblings('tr').removeClass('current');
        };
    }, function() {
        $(this).removeClass('current');
    });
})