/*global $,location*/
(function () {
    'use strict';

    function onBlogSectionClick () {
        var section = $(this);
        var url = section.data('href');
        var location;
        if (url) location = url;
    }

    var clientTalk = 1;

    function toggleRecomendationsLeft () {
        --clientTalk;
        if (clientTalk <= 0) clientTalk = 3;
        toggleRecomendations();
    }

    function toggleRecomendationsRight () {
        ++clientTalk;
        if (clientTalk >= 4) clientTalk = 1;
        toggleRecomendations();
    }

    function toggleRecomendations () {
        $('.clientsTalk .talk').addClass('hidden');
        $('.clientsTalk .talk.client_' + clientTalk).removeClass('hidden');
    }

    function subscribe (e) {
        e.preventDefault();
        $('.subscribeForm').addClass('hidden');
    }

    var stickyOffset = $('.mainMenuBar').offset().top;

    function stickMenuOnScroll () {
        var selector = '.mainMenuBar';
        if (!$('.startHomePage').length > 0) {
            selector += ', .topMenu';
        }
        var sticky = $(selector);
        var scroll = $(window).scrollTop();


        // if (scroll > stickyOffset && !$('.siteMenu a.visible-xs').is(':visible')) { }
        if (scroll > stickyOffset) {
            sticky.addClass('fixed');
        } else {
            sticky.removeClass('fixed');
        }
    }

    $(function () {

        /* Redirection to Visyond plan page */
        $('.infinitePlan,.edgePlan').click(onBlogSectionClick);

        /* Redirection to Visyond blog page */
        $('.blogSection_1,.blogSection_2,.blogSection_3').click(onBlogSectionClick);

        /* Switcing client recomendations */
        $('.clientsTalk .leftButton').click(toggleRecomendationsLeft);
        $('.clientsTalk .rightButton').click(toggleRecomendationsRight);

        /*  Working out site visitor subscription on V-news */
        $('form#subscribeForm').submit(subscribe);

        /* Stick menu bar to the top of page */
        $(window).scroll(stickMenuOnScroll);
    });

})();

$(function(){
    // MOBILE NAV START
    $('.js-mobile-nav').on('click', function(){
        $('.page-header__nav-items').toggleClass('opened');
        $('.mainMenu').toggleClass('opened');
        $('.navigation-mobile__link').toggleClass('close');
    });
    $('.navigation-mobile__link').click(function(e){
        e.preventDefault();
    });
    // MOBILE NAV END




    var myPlayerInfinite = $('.infinitePopup  .popup__video iframe');
	var myPlayerEdge = $('.edgePopup .popup__video iframe');
    //VIDEO POPUP OPEN
    $('.js-popup-infinite').click(function(){
        var popup = $('.popup.infinitePopup');
        popup.stop().fadeIn(150);
        popup.addClass('opened');
        myPlayerInfinite.each(function(){
          this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*')
        });
    });
    $('.js-popup-edge').click(function(){
        var popup = $('.popup.edgePopup');
		if(!popup.length) 
			return false;
        popup.stop().fadeIn(150);
        popup.addClass('opened');
        myPlayerEdge.each(function(){
          this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*')
        });
    });
    //VIDEO POPUP CLOSE
    var close = function(){
        $('.popup').fadeOut(150);
        myPlayerEdge.each(function(){
          this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
        });
		myPlayerInfinite.each(function(){
          this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
        });

    }
    $('.popup__close').click(function(){
        close();
    });
    $(document).keyup(function(e) {
      if (e.keyCode === 27){
        close();
      }
    });
    $(document).mouseup(function (e){
        if (!$('.popup.opened').length == 0){
            var div = $(".popup__inner");
            if (!div.is(e.target) 
                && div.has(e.target).length === 0) { 
                close();
            }
        }
    });

    $('.priceTable td, .priceTable th').hover(function() {
        var className = $(this).attr('class');
        if (className != 'service') {
            $('.priceTable').find('.' + className).addClass('selected');
        }
    }, function() {
        $('.priceTable .selected').removeClass('selected');
    });

    $('.teamPageItem').hover(function() {
        $(this).css({zIndex: 5});
        $(this).find('.teamItemModal').stop().fadeIn(300);
    }, function() {
        $(this).css({zIndex: 1});
        $(this).find('.teamItemModal').stop().fadeOut(150);
    });

    if ($('#map1').length > 0) {
        var latLng1 = {lat: 55.759672, lng: 37.575082};
        var opts1 = {
        zoom: 16,
        center: latLng1,
        scrollwheel: false,
        disableDoubleClickZoom: false,
        draggable: true,
        keyboardShortcuts: true,
        mapTypeControl: true,
        zoomControl: true,
        scaleControl: true,

        mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                {
                    featureType: "all",
                    stylers:
                        [
                            {"saturation":0},
                            {"hue":"#e7ecf0"}
                        ]
                },
                {
                    featureType:"road",
                    stylers:
                        [
                            {"saturation":-70}
                        ]
                },
                {
                    featureType:"water",
                    stylers:
                        [
                            {"visibility":"simplified"},
                            {"saturation":-60}
                        ]
                }
            ]
        };

        var map1 = new window.google.maps.Map(document.getElementById("map1"), opts1);

        var marker = new google.maps.Marker({
            position: latLng1,
            map: map1,
            icon: 'images/ico-map-1.png'
        });
    }

    if ($('#map2').length > 0) {
        var latLng2 = {lat: 51.525581, lng: -0.083709};
        var opts2 = {
        zoom: 16,
        center: latLng2,
        scrollwheel: false,
        disableDoubleClickZoom: false,
        draggable: true,
        keyboardShortcuts: true,
        mapTypeControl: true,
        zoomControl: true,
        scaleControl: true,

        mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                {
                    featureType: "all",
                    stylers:
                        [
                            {"saturation":0},
                            {"hue":"#e7ecf0"}
                        ]
                },
                {
                    featureType:"road",
                    stylers:
                        [
                            {"saturation":-70}
                        ]
                },
                {
                    featureType:"water",
                    stylers:
                        [
                            {"visibility":"simplified"},
                            {"saturation":-60}
                        ]
                }
            ]
        };

        var map2 = new window.google.maps.Map(document.getElementById("map2"), opts2);

        var marker = new google.maps.Marker({
            position: latLng2,
            map: map2,
            icon: 'images/ico-map-2.png'
        });
    }

    if ($('.priceSliderHeader').length > 0) {
        var priceSliders = $('.priceSliderHeader');
        $(priceSliders).click(function() {
            var item = $(this).parent().find('.priceSliderContent');
            if ($(item).is(':visible')) {
                $(item).slideUp(300);
            } else {
                $(item).slideDown(300);
            }
        });
    }

});

$(document).ready(function(){

    var myPlayer = $('.popup__video iframe');
    //VIDEO POPUP OPEN
    $('.js-video').click(function(){
        var popup = $('.popup');
        popup.stop().fadeIn(150);
        popup.addClass('opened');
        myPlayer.each(function(){
            this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*')
        });
    });
    //VIDEO POPUP CLOSE
    var close = function(){
        $('.popup').fadeOut(150);

        // var iframe = $('iframe'),
        // 		src = iframe.attr('src');
        // iframe.attr('src', 0);
        // iframe.attr('src', src);

        myPlayer.each(function(){
            this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
        });

    }
    $('.popup__close').click(function(){
        close();
    });
    $(document).keyup(function(e) {
        if (e.keyCode === 27){
            close();
        }
    });
    $(document).mouseup(function (e){
        if (!$('.popup.opened').length == 0){
            var div = $(".popup__inner");
            if (!div.is(e.target)
                && div.has(e.target).length === 0) {
                close();
            }
        }
    });

    //SLICK SLIDER
    // testimonials
    // $('.js-slick-nav-test').slick({
    //   slidesToShow: 6,
    //   slidesToScroll: 1,
    //   vertical: true,
    //   initialSlide: 2,
    //   verticalSwiping: true,
    //   focusOnSelect: true,
    //   asNavFor: '.js-slick-test'
    // });
    if ($('.js-slick-test').length > 0) {
        $('.js-slick-test').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            pauseOnFocus: false,
            pauseOnHover: false,
            // asNavFor: '.js-slick-nav-test',
            autoplay: true,
            autoplaySpeed: 6000,
            dots: false,
            fade: true
        });
    }

    // product tour
    if ($('.js-slick-nav-tour').length > 0) {
        $('.js-slick-nav-tour').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            focusOnSelect: true,
            asNavFor: '.js-slick-tour'
        });
    }
    if ($('.js-slick-tour').length > 0) {
        $('.js-slick-tour').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.js-slick-nav-tour',
            dots: false,
            arrows: true,
            fade: true
        });
    }
    //SLICK SLIDER END

});


$(window).on('load', function(){
    $('.page-preloader').fadeOut(400);
});

function colorHeaderNav(){
    var scroll = $(window).scrollTop(),
        firstSectionHeight = $('.banner').height();
    if (scroll >= firstSectionHeight) {
        $('.mainMenuBar .mainMenuWrapper').addClass('grey');
    } else{
        if ($('.mainMenuBar .mainMenuWrapper.grey').length != 0){
            $('.mainMenuBar .mainMenuWrapper').removeClass('grey');
        }
    }
}

$(function(){
    colorHeaderNav();
});
$(window).scroll(colorHeaderNav);
$(window).resize(colorHeaderNav);
