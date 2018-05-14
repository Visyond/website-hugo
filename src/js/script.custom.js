$(function () {

    /**
     *
     * dropdown navigation
     *
     */

    function navLinkDropdown (e) {
        let link = $('.nav__item').has('.dropdown-menu-wrap').find('.nav__link');
        let parent = $('.nav__item').has('.dropdown-menu-wrap').find('.nav__link').find('span').after('<i class="material-icons dropdown-arrow">arrow_drop_down</i>');

        link.on('click', function (e) {
            e.preventDefault();
            let href = $(this).attr('href');
            $(href).toggleClass('dropdown-toggle--active');
        });

        $(document).on('click', function (e) {
            let parent = $('.nav__item');
            for (let i = 0; i < parent.length; i++) {
                let link = $(parent[i]).has('.dropdown-menu-wrap').find('.nav__link');
                if (!link.is(e.target) && link.has(e.target).length === 0) {
                    let href = link.attr('href');
                    $(href).removeClass('dropdown-toggle--active');
                }
            }
        })
    }
    navLinkDropdown();

    /**
     *
     * Responsive menu
     *
     */

    function responsiveNav() {
        let nav = $('.nav');
        let btn = $('.responsive-btn');
        btn.on('click', function() {
            nav.toggleClass('nav--active');
            $('body').addClass('body-fixed');
            $('.overlay').addClass('overlay--active');

            $(this).attr('disabled', true);
        });

        $('.overlay').on('click touchstart', function() {
            nav.removeClass('nav--active');
            $('body').removeClass('body-fixed');
            $('.overlay').removeClass('overlay--active');
            btn.removeAttr('disabled');
        });
    }
    responsiveNav();
    /**
     *
     * Modal
     *
     */

    (function () {
        if ($('.modal-btn').length) {
            $('.modal-btn').on('click', function (e) {
                e.preventDefault();
                var dataAttr = $(this).data('modal');
                var dataSrc = $(this).data('src');

                $(dataAttr).addClass('banner-modal--active');
                $('.banner-modal__container').append(`<iframe width="100%" src="${dataSrc}" height="500" frameborder="0" allowfullscreen></iframe>`);
                $('body, html').addClass('body-fixed');

                $('.banner-modal__close, .banner-modal').on('click', closeModal);
            });

            function closeModal() {
                if ($(this) !== $('iframe')) {
                    $('.banner-modal').removeClass('banner-modal--active');
                    $('body, html').removeClass('body-fixed');
                    $('.banner-modal__close, .banner-modal').off('click', closeModal);
                    $('.banner-modal__container > iframe').remove();
                }
            }
        }
    })();

    if($('.landing-featured__item').length) {

        var pb = 0;
        for (let i = 0; i < $('.landing-featured__list-comment-item').length; i++) {

            if (pb < $('.landing-featured__list-comment-item').eq(i).height()) {
                pb = $('.landing-featured__list-comment-item').eq(i).height() + 200;
         30 }
        }
        $('.landing-featured').css('padding-bottom', pb);
        $('.landing-featured__list-comment-item:first-child').css('opacity', 1)
        $('.landing-featured__item > img').hover(function () {
            var idx = $(this).parent().index();
            console.log(idx);
            $('.landing-featured__list-comment-item').css('opacity', 0);
            $('.landing-featured__list-comment-item').eq(idx).css('opacity', 1);
        }, function () {
            var idx = $(this).parent().index();
            $('.landing-featured__list-comment-item').eq(idx).css('opacity', 0);
            $('.landing-featured__list-comment-item').eq(0).css('opacity', 1);
        })
    }

    /**
     *
     *
     * Slowly navigation
     *
     *
     */


     $('.sub-heading__nav-link').on('click', function(e) {
        e.preventDefault();

        let $href = $(this).attr('href');
        let $offsetTop = $($href).offset().top - 110;

        $('html, body').animate({
            scrollTop: $offsetTop
        }, 500)
     })




     //=====COPYRIGHT=====

     function addCopyright() {
       const copyright = document.querySelector('.js-copyright');
       const date = new Date();

       if(copyright) {
         copyright.innerHTML = `2011-${date.getFullYear()} &copy; Visyond. All rights reserved`
       }
     }

     addCopyright();






     //=====POPUP WITH YOUTUBE VIDEO=====
     function watchVideo(btn, popup) {
       const closePopup = document.querySelector('.js-popup-close');
       const srcIframe = popup.querySelector('p').innerHTML;
       let srcPart = srcIframe.slice(srcIframe.lastIndexOf('/') + 1);

       popup.children[0].removeChild(popup.querySelector('p'));

       // console.log(srcPart);

       const iframeBlock = document.createElement('iframe');
       iframeBlock.setAttribute('width', '894');
       iframeBlock.setAttribute('height', '500');
       iframeBlock.setAttribute('src', `https://www.youtube.com/embed/${srcPart}?autoplay=1&rel=0`);
       iframeBlock.setAttribute('frameborder', '0');
       iframeBlock.setAttribute('allow', 'autoplay; encrypted-media');
       iframeBlock.setAttribute('allowfullscreen', 'allowfullscreen');


       function removeIframe() {
         popup.children[0].removeChild(popup.querySelector('iframe'));
       }

       function createIframe() {
         popup.children[0].appendChild(iframeBlock);
       }


       btn.addEventListener('click', e => {
         popup.classList.add('popup--show');
         createIframe();
       });

       popup.addEventListener('click', e => {
         if(e.target === e.currentTarget || e.target === closePopup) {
           popup.classList.remove('popup--show');
           removeIframe();
         }
       })
     };

     if(document.querySelector('.js-btn-video') && document.querySelector('.js-popup')) {
       const videoBtn = document.querySelector('.js-btn-video');
       const videoPopup = document.querySelector('.js-popup');

       watchVideo(videoBtn, videoPopup);
     }






     //=====LOGO TRUSTED SLIDER=====

     function logoSlide() {
       let slidersBlock = document.querySelector(`.js-slider`);
       let sliders = slidersBlock.children;
       const slidersNumber = sliders.length;
       let count = 0;
       let step = sliders[0].offsetWidth;

       let sliderInterval = setInterval(() => {
         if(document.documentElement.clientWidth > 800) {
           step = sliders[0].offsetWidth;
           sliders = slidersBlock.children;
           slidersBlock = document.querySelector('.js-slider')
           let cloneNode = sliders[count].cloneNode(true);
           slidersBlock.appendChild(cloneNode);
           count++;
           slidersBlock.style.transform = `translateX(-${step * count}px)`;
         }
         else {
           for(let i = slidersBlock.children.length - 1; i > 0 ; i--) {
             if(i >= slidersNumber) {
               slidersBlock.removeChild(slidersBlock.children[i]);
             }
           }
           count = 0;
           slidersBlock.style.transform = `translateX(-${step * count}px)`;
         }

       }, 5000);

       window.addEventListener('resize', () => {
         step = sliders[0].offsetWidth;
       });
     }

     if(document.querySelector('.js-slider')) {
       logoSlide();
     }






     //=====POPUP INFO IMAGES====

     function PopupInfoImages() {
       this.mainBlock = document.querySelector('.js-image-block');
       this.images = this.mainBlock.querySelectorAll('img:first-child');

       this._createPopup = (src) => {
         const popup = document.createElement('div');
         const video = document.createElement('video');
         const source = document.createElement('source');
         video.setAttribute('autoplay', 'autoplay');
         source.setAttribute('src', src);
         popup.classList.add('popup');
         video.appendChild(source);
         popup.appendChild(video);
         this.mainBlock.appendChild(popup);

         setTimeout( () => {
           popup.style.opacity = 1;
         }, 500);
         // let opacityStep = 0;
         //
         // let opacityInt = setInterval(() => {
         //   if(opacityStep < 1) {
         //     popup.style.opacity = opacityStep;
         //     opacityStep = opacityStep + .1;
         //   }
         //   else {
         //     clearInterval(opacityStep);
         //   }
         // }, 20);

         popup.addEventListener('click', e => {
           popup.parentNode.removeChild(popup);
         });
       }

       this.mainBlock.addEventListener('click', e => {
         for(let i = 0; i < this.images.length; i++) {
          if(e.target === this.images[i]) {
            console.log(this.images[i].dataset.src);
            this._createPopup(this.images[i].dataset.src);
          };
        };
      });
    };

     if(document.querySelector('.js-image-block')) {
       const newPopup = new PopupInfoImages();
     }
});
