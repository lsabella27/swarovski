$(document).ready(function () {

    //dp
    $(".dp2, .dp2_bg").hide();


    $(".gnb>li").mouseenter(function () {
        let pos = $(this).position().left;
        let barW = $(this).find("a").width();
        console.log(barW);
        $(".gnb_bar").stop().animate({
            "left": pos,
            "width": barW,
        });
        $(".dp2,.dp2_bg").stop().slideDown();
    });

    $(".gnb>li").mouseleave(function () {
        let pos = $(this).position().left;
        let barW = $(this).find("a").width();
        console.log(barW);
        $(".gnb_bar").stop().animate({
            "left": pos,
            "width": 0,
        });
        $(".dp2,.dp2_bg").stop().slideUp();
    });

    $(".gnb>li").mouseenter(function () {
        $(".swan").stop().fadeOut();
    });
    $("nav").mouseleave(function () {
        $(".swan").stop().fadeIn();
    });



    //lan 언어선택 영역
    $(".lan").hide();
    $(".earth").click(function () {
        $(".lan").stop().slideToggle();
    });


    //search 검색창 영역
    $(".search").hide();
    $(".btn_search").click(function () {
        $(".search").slideDown();
    })
    $(".search_close").click(function () {
        $(".search").slideUp();
    })


    const mv = new Swiper('.mv', {
        // 옵션
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        direction: "vertical",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: "bullets",
        },

    });

    const best_list = new Swiper('.best_list', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000, // 슬라이드 넘어가는 속도 ms
        slidesPerView: 5,
        spaceBetween: 80,
        scrollbar: {
            el: ".swiper-scrollbar",

        },
    });

    // movie
    $(".tiktok_play").hide();
    $(".btn_play").click(function () {
        $(".tiktok_play").fadeIn();
    })

    $(".movie_close").click(function () {
        $(".tiktok_play").fadeOut();
    })


    const insta_list = new Swiper('.insta_list', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000, // 슬라이드 넘어가는 속도 ms
        slidesPerView: 1,
        effect: "cube",
        loop: true,
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 5,
        },
    });


});
