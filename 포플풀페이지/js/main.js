$(function () {
    /////////////////////////////////////////////////////// 







    $('#myWork').fullpage({
        anchors: ['page01', 'page02', 'page03', 'page04', 'page05'],
        afterLoad: function (origin, destination, direction, trigger) {
            console.log(destination.index) // 0,1,2,3
            $('.section').eq(destination.index).addClass('on').siblings().removeClass('on');
            $('nav li').eq(destination.index).addClass('on').siblings().removeClass('on');
            if (destination.index == 4) {
                $('footer address').addClass('color');
            } else {
                $('footer address').removeClass('color');
            }
        },
    });



















    /////////////////////////////////////////////////////
});