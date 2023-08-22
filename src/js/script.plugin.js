

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
              infinite: false,
              draggable: true,
              arrows: false,
              dots: true,
              centerMode: true,
              centerPadding: '200px',
              initialSlide: 0,
            }
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              draggable: true,
              arrows: false,
              dots: true,
              centerMode: true,
              centerPadding: '140px',
              initialSlide: 0,
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              draggable: true,
              arrows: false,
              dots: true,
              centerMode: true,
              centerPadding: '50px',
              initialSlide: 0,
            }
          },
        ]
    })
  }    
  // ===== END: SLICK - PRICING PAGE PLAN CARDS =====




  // ===== HOMEPAGE USE-CASES =====
  if($('.js-useCases__list').length) {

    $('.js-useCases__list').slick({ // see setupSlider () in scripts.custom.js
        lazyLoad: 'ondemand',
        slidesToShow: 4, 
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
              breakpoint: 1300,
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
              breakpoint: 990,
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
              }
            },
        ]
    })
  }    
  // ===== END: SLICK - HOMEPAGE USE-CASES =====



  // ===== END: SLICK - DEMOS ON /DEMO =====
  if($('.js-demo__list').length) {

    $('.js-demo__list').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3, 
        slidesToScroll: 1,
        infinite: true, 
        autoplay: false,
        autoplaySpeed: 8000,
        draggable: true,
        dots: true,
        arrows: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 8000,
                draggable: true,
                dots: true,
                arrows: true,
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
              }
            },
        ]
    })
  }    
  // ===== END: SLICK - DEMOS ON /DEMO =====



});



