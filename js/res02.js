$(function () {
    ////////////////////////////////////////////////

    $('.mopen').on('click', function () {
        $('nav').toggleClass('on')
    });

    $('nav>ul>li>a').on('click', function (e) {
        if ($('nav').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('ul').stop().slideUp();
        }
    });

    $(window).on('resize', function () {
        $('nav').removeClass('on');
        $('nav ul ul').removeAttr('style')
    })




    $('.slide').slick({
        arrows: false,
    })



    ///////////////////////////////////////////////
})