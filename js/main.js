$(function () {
    /////////////////////////////////////////////////////// 

    // topBanner 2022.03.17 최종수정 JJAMMIN 
    // $('css선택자').on('이벤트' , 할일)

    function topbannerHandler() {
        $('.topBanner').slideUp();
    }

    $('.topBanner i ').on('click', topbannerHandler);


    // *** 각각의 스라이드에 애니메이션...
    ////////////////////////////////////////////////////


    $('.mainVisualSlide').on('init reInit afterChange', function (e, s, c) {
        //console.log(s.slideCount, c); //1,2,0;
        $('.mainVisualLink li').eq(c).addClass('on').siblings().removeClass('on')
        let current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');

        let num = c ? c + 1 : 1;
        $('.mainVisual  .slideNum').text(
            "0" + num + "/0" + s.slideCount
        )
    });


    $('.mainVisualSlide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        //dots: true,
        // prevArrow: '<i class="xi-arrow-left s_left"></i>',
        // nextArrow: '<i class="xi-arrow-right s_right"></i>'
    });


    $('.slideArrows i:first-child').on('click', function () {
        $('.mainVisualSlide').slick('slickPrev');
    });
    $('.slideArrows i:last-child').on('click', function () {
        $('.mainVisualSlide').slick('slickNext');
    });

    $('.mainVisualLink li').on('click', function () {
        let idx = $(this).index(); // 0,1,2
        $('.mainVisualSlide').slick('slickGoTo', idx);
    });

    //$('.mainVisualSlide figure').eq(1).addClass('on');
    // //전체 슬라이드에서 class를 떄고 지금 스라이드에 class 붙이는 일

    // $('.mainVisualSlide').on('afterChange', function (s, i, c) {
    //     //c => 0,1,2
    //     $('.mainVisualSlide figure').removeClass('on')
    //     $('.mainVisualSlide figure').eq(c + 1).addClass('on');
    // });




    $('.movieBtn i:first-child').on('click', function () {
        $('#adMovie').trigger('play');
    });
    $('.movieBtn i:last-child').on('click', function () {
        $('#adMovie').trigger('pause');
    });


    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/iTsj9xZS4q4',
        containment: '.bgMovie',
        autoPlay: true,
        mute: true,
        startAt: 0,
        opacity: 1,
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('.uBtn i:first-child').on('click', function () {
        $('#bgndVideo').YTPPlay();
    });

    $('.uBtn i:last-child').on('click', function () {
        $('#bgndVideo').YTPPause();
    });



















    /////////////////////////////////////////////////////
});