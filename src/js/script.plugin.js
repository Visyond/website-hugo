

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
            arrows: false,
            responsive: [
                {
                  breakpoint: 1366,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                  }
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                  }
                },
                {
                  breakpoint: 691,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                  }
                },
            ]
        })
    }
    if($('.js-testimonials').length) {
        $('.js-testimonials').slick({
            fade: true,
            cssEase: 'linear',
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnFocus: false,
            pauseOnHover: false,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    dots: true,
                    arrows: false,
                  }
                },
            ]
        })
    }

    /*
    if($('.js-zoom').length) {
        $('.js-zoom').elevateZoom({
          zoomType: "lens",
          lensShape: "square",
          lensSize: "250",
          borderColour: "#0086ff"
        });
    }
    */
});