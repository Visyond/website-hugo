

$(function () {

// ===== SLICK - PRICING PAGE PLAN CARDS =====
  if($('.js-pricing-cards').length) {
    $('.js-pricing-cards').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        draggable: false,
        dots: false,
        arrows: false,
        centerMode: false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              draggable: true,
              arrows: false,
              dots: true,
              centerMode: true,
              centerPadding: '200px',
              initialSlide: 2,
            }
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              draggable: true,
              arrows: false,
              dots: true,
              centerMode: true,
              centerPadding: '140px',
              initialSlide: 2,
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              draggable: true,
              arrows: false,
              dots: true,
              centerMode: true,
              centerPadding: '50px',
              initialSlide: 2,
            }
          },
        ]
    })
  }    
  // ===== END: SLICK - PRICING PAGE PLAN CARDS =====

  // ===== HOMEPAGE USE-CASES =====
  if($('.js-useCases__list').length) {

    /// @@@@@@@@@ TRY LAZYLOAD? Otherwise will be loading approx 20 icons right away

    $('.js-useCases__list').slick({ // see setupSlider () in scripts.custom.js
        slidesToShow: 1, 
        slidesToScroll: 1,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 8000,
        draggable: true,
        dots: true,
        arrows: true,
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: false,
                draggable: true,
                arrows: true,
                dots: true,
              }
            },
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
                draggable: true,
                arrows: true,
                dots: true,
              }
            },          
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                draggable: true,
                arrows: true,
                dots: true,
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                draggable: true,
                arrows: false,
                dots: true,
                centerMode: true,
                centerPadding: '50px',
                initialSlide: 2,
              }
            },
        ]
    })
  }    
  // ===== END: SLICK - HOMEPAGE USE-CASES =====
});