

$(function () {

    if ($('.testimonials__slider-list').length) {
        $('.testimonials__slider-list').slick({
            arrow: false,
            autoplay: true,
            speed: 700,
            autoplaySpeed: 2000,
            fade: true,
            cssEase: 'linear'
        });
    }

    if($('.tour__slider-list').length) {
        $('.tour__slider-button-list').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            focusOnSelect: true,
            asNavFor: '.tour__slider-list'
        });

        $('.tour__slider-list').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            fade: true,
            asNavFor: '.tour__slider-button-list'
        });
    }

    if($('.trusted__list').length) {
        $('.trusted__list').slick({
            slidesToShow: 5,
            slidesToScroll: 2,
            autoplay: false,
            autoplaySpeed: 2000,
            dots: false,
            arrows: false
        })
    }
    if($('.customers__list').length) {
        $('.customers__list').slick({
            fade: true,
            cssEase: 'linear'
        })
    }
});