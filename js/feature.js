$(document).ready(function(){
    $('.icon-main-layout div span').hover(function() {
        let num = $(this).parent().index() + 1;
        $('.icon-main-layout div:nth-child(' + num + ') span').css('color', '#8BC34A');
        $(this).mouseleave(function() {
            $('.icon-main-layout div:nth-child(' + num + ') span').css('color', '#283238');
        });
    });
});