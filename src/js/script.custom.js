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
            $('.wrapper').addClass('body-fixed');
            $('.overlay').addClass('overlay--active');

            $(this).attr('disabled', true);
        });

        $('.overlay').on('click touchstart', function() {
            nav.removeClass('nav--active');
            $('.wrapper').removeClass('body-fixed');
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
        let $offsetTop = $($href).offset().top;

        $('html, body').animate({
            scrollTop: $offsetTop
        })
     })
    

});