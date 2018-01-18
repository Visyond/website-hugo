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
    

});