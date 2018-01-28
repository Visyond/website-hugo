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
            console.log($(this));
            e.preventDefault();
            let href = $(this).attr('href');
            $(href).toggleClass('dropdown-toggle--active');
        });

        $(document).on('click', function (e) {
            if (!link.is(e.target) && link.has(e.target).length === 0) {
                let href = link.attr('href');
                $(href).removeClass('dropdown-toggle--active');
            }
        })
    }
    navLinkDropdown();

    /**
     * 
     * dropdown navigation
     * 
     */

    (function () {
        if ($('.modal-btn').length) {
            $('.modal-btn').on('click', function (e) {
                e.preventDefault();
                var dataAttr = $(this).data('modal');
                $(dataAttr).addClass('banner-modal--active');
                $('body, html').addClass('body-fixed');

                $('.banner-modal__close, .banner-modal').on('click', closeModal);
            });

            function closeModal() {
                if ($(this) !== $('iframe')) {
                    $('.banner-modal').removeClass('banner-modal--active');
                    $('body, html').removeClass('body-fixed');
                    $('.banner-modal__close, .banner-modal').off('click', closeModal);
                }
            }
        }
    })();

    if($('.landing-featured__item').length) {

        var pb = 0;
        for (let i = 0; i < $('.landing-featured__list-comment-item').length; i++) {
            
            if (pb < $('.landing-featured__list-comment-item').eq(i).height()) {
                pb = $('.landing-featured__list-comment-item').eq(i).height() + 300;
         30 }
        }
        $('.landing-featured').css('padding-bottom', pb);
        $('.landing-featured__list-comment-item:first-child').css('opacity', 1)
        $('.landing-featured__item > img').hover(function () {
            var idx = $(this).parent().index();
            console.log(idx);
            $('.landing-featured__list-comment-item').eq(idx).css('opacity', 1);
        }, function () {
            var idx = $(this).parent().index();
            $('.landing-featured__list-comment-item').eq(idx).css('opacity', 0);
        })
    }
    

});