$(function(){
    $('.classify li').click(function(event) {
        $(this).addClass('current').siblings('li').removeClass('current');
    });
})