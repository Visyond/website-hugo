
$(function () {
    window.$ = $;


    //===== DYNAMIC TOP TITLE ======
    if(document.getElementById("js-dynamicTitle") != null){
        var pageTopTitle = document.getElementById("js-dynamicTitle");
        var initialText = pageTopTitle.innerHTML;
        var initialColor = $("#js-dynamicTitle").css("color");
        var titlesCounter = 0;
        var titleChangeDelay = 4000;
        var inst = setInterval(updateTitle, titleChangeDelay);
        
        var newTitles = [
            ["what-if and risk analysis", "#ffa946"],
            ["interactive reporting", "#0086ff"],
            ["predictive dashboards", "#ffa946"],
            [initialText, initialColor],
        ];
        
        function updateTitle() {
            $("#js-dynamicTitle").css({"color": "#fff"});
          
            setTimeout(function() {
            pageTopTitle.innerHTML = newTitles[titlesCounter][0];
            $("#js-dynamicTitle").css({"color": newTitles[titlesCounter][1]});
            
            titlesCounter++;
          
            if (titlesCounter >= newTitles.length) {
              titlesCounter = 0;
            }
          }, 850);
        }
    }
   //===== END: DYNAMIC TOP TITLE ======


   //===== DROPDOWN NAVIGATION ======
    function navLinkDropdown (e) {
        let link = $('.nav__item').has('.dropdown-menu-wrap').find('.nav__link');
        let parent = $('.nav__item').has('.dropdown-menu-wrap').find('.nav__link').find('span').after('<i class="material-icons dropdown-arrow">arrow_drop_down</i>');

        link.on('click', function (e) {
            e.preventDefault();
            let href = $(this).attr('href');
            $(this).addClass('nav__link--active');
            $(href).toggleClass('dropdown-toggle--active');
        });

        $(document).on('click', function (e) {
            let parent = $('.nav__item');
            for (let i = 0; i < parent.length; i++) {
                let link = $(parent[i]).has('.dropdown-menu-wrap').find('.nav__link');
                if (!link.is(e.target) && link.has(e.target).length === 0) {
                    let href = link.attr('href');
                    $(href).removeClass('dropdown-toggle--active');
                    link.removeClass('nav__link--active')
                }
            }
        })
    }
    navLinkDropdown();
    //===== END: DROPDOWN NAVIGATION ======





    //===== RESPONSIVE MENU ======
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
            $('.overlay').removeClass("overlay--active");
            $(".overlay").empty();

        });
    }
    responsiveNav();
    //===== END: RESPONSIVE MENU ======






    //=====HEXUP=====
    //=====FIXED HEADER ADD BACKGROUND COLOR WHEN SCROLLED=====
    function scrolledHeader(){
        const distanceY = window.pageYOffset || document.documentElement.scrollTop;
        let shrinkOn = 20;
        const homeHeader = document.querySelector('.homeHeader');
        let header = document.querySelector('.hexHeader');
        if( homeHeader ) {
            header = homeHeader;
            shrinkOn = 70;
            if (screen.width < 1200) { shrinkOn = 30 }
        }
        if(header){
            if (distanceY > shrinkOn) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }
    }
    (function () {
        scrolledHeader();
        window.addEventListener('scroll', function() {
            scrolledHeader();
        });
    })();

    function hexDropdown (e) {
        let link = $('.hexNav__item').has('.dropdown-menu-wrap').find('.hexNav__link');
        let parent = $('.hexNav__item').has('.dropdown-menu-wrap').find('.hexNav__link').find('span').after('<i class="material-icons dropdown-arrow">arrow_drop_down</i>');

        link.on('click', function (e) {
            e.preventDefault();
            let href = $(this).attr('href');
            $(this).addClass('hexNav__link--active');
            $(href).toggleClass('dropdown-toggle--active');
        });

        $(document).on('click', function (e) {
            let parent = $('.hexNav__item');
            for (let i = 0; i < parent.length; i++) {
                let link = $(parent[i]).has('.dropdown-menu-wrap').find('.hexNav__link');
                if (!link.is(e.target) && link.has(e.target).length === 0) {
                    let href = link.attr('href');
                    $(href).removeClass('dropdown-toggle--active');
                    link.removeClass('hexNav__link--active')
                }
            }
        })
    }
    hexDropdown();
    function mobileNav() {
        let nav = $('.hexNav');
        let btn = $('#menu-toggle');
        let overlay = $('.overlay');
        btn.on('click', function() {
            nav.toggleClass('nav--active');
            $('body').toggleClass('body-fixed');
            overlay.toggleClass('overlay--active');
        });

        overlay.on('click touchstart', function() {
            nav.removeClass('nav--active');
            $('body').removeClass('body-fixed');
            overlay.removeClass('overlay--active');
            btn.removeAttr('disabled');
            overlay.empty();
        });
    }
    mobileNav();


    //=====Toggle opening of benefits lists=====
    (function () {
        let toggles = $('.enterSections__benefits--title');
        toggles.each(function () {
            $(this).click(function () {
                $(this).toggleClass('opened');
            })
        });
    })();

    (function () {
        let toggles = $('.enterSections__benefits2--title');
        toggles.each(function () {
            $(this).click(function () {
                $(this).toggleClass('opened');
            })
        });
    })();

    (function () {
        let toggles = $('.enterSections__benefits3--title');
        toggles.each(function () {
            $(this).click(function () {
                $(this).toggleClass('opened');
            })
        });
    })(); 
    
    //=====Toggle opening of FAQ sections =====
    (function () {
        let toggles = $('.faqSection--title');
        toggles.each(function () {
            $(this).click(function () {
                $(this).toggleClass('opened');
            })
        });
    })();

        //=====Toggle opening of demo video lists=====
        (function () {
            let toggles = $('.demoExpandingSection');
            toggles.each(function () {
                $(this).click(function () {
                    $(this).toggleClass('opened');
                })
            });
        })();

    //=====HEXUP END=====


    // ===== SLOW, SMOOTH NAVIGATION (TOP MENU) =====
    $('.sub-heading__nav-link').on('click', function(e) {
        e.preventDefault();

        let $href = $(this).attr('href');
        let $offsetTop = $($href).offset().top - 110;

        $('html, body').animate({
            scrollTop: $offsetTop
        }, 500)
    })
    // ===== END: SLOW, SMOOTH NAVIGATION (TOP MENU) =====



    // ===== COPYRIGHT =====
    function addCopyright() {
        const copyrights = $('.js-copyright');
        const date = new Date();
        if(copyrights) {
            copyrights.each(function () {
                $(this).html(function(  ) {
                    return '2011-' + date.getFullYear() + '&copy; Visyond. All rights reserved.'
                });
            })
        }
    }

    addCopyright();
    // ===== END: COPYRIGHT =====    




    // ===== DEMO PAGE VIDEO POPUP WITH BUTTON =====
    function demoVideoPopup(btn, popup, closePopup, closePopupRequestDemo, closePopupSignUp) {
        const srcIframe = popup.querySelector('p').innerHTML;
        let srcPart = srcIframe.slice(srcIframe.lastIndexOf('/') + 1);

        popup.children[0].removeChild(popup.querySelector('p'));

        const iframeBlock = document.createElement('iframe');
        iframeBlock.setAttribute('width', '889');
        iframeBlock.setAttribute('height', '501');
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
            var tt = e.target;
            e.preventDefault();
            popup.classList.add('popup--show');
            createIframe();
        });

        popup.addEventListener('click', e => {
            e.preventDefault();
            if(e.target === e.currentTarget || e.target === closePopup) {
                popup.classList.remove('popup--show');
                removeIframe();
            }
        })
        
        closePopupRequestDemo.addEventListener('click', e => {
            e.preventDefault();
            if(e.target === e.currentTarget || e.target === closePopupRequestDemo) {
                popup.classList.remove('popup--show');
                removeIframe();
                document.getElementById('request').scrollIntoView();
            }
        })

        closePopupSignUp.addEventListener('click', e => {
            e.preventDefault();
            if(e.target === e.currentTarget || e.target === closePopupSignUp) {
                popup.classList.remove('popup--show');
                removeIframe();
                window.location.href='/accounts/signup/';
            }
        })

    }

    function watchDemoVideo(videoBtn) {
        const videoSpan = videoBtn.querySelector('span');
        const videoPopup = videoBtn.querySelector('div');
        const closePopup = videoBtn.querySelector('.js-popup-close');
        const closePopupRequestDemo = videoBtn.querySelector('.js-popup-close-request');
        const closePopupSignUp = videoBtn.querySelector('.js-popup-close-signup');
        demoVideoPopup(videoSpan, videoPopup, closePopup, closePopupRequestDemo, closePopupSignUp);
    }

    var demoPageButton = [];

    var demoSections = document.querySelectorAll('.demoSection__body--img-wrap');
    for (var i = 0; i<demoSections.length; i++) {
        demoPageButton[i] = (demoSections[i].querySelector('.btn-demoVideo'));
        watchDemoVideo(demoPageButton[i]);
    }    
    // ===== END: DEMO PAGE VIDEO POPUP WITH BUTTON =====


    // ===== PRODUCT VIDEO TABS =====
    $(function() {
        $("div.tabs-product__caption").on("click", ".tabs-product__caption--container:not(.active)", function() {
 
            var tab = $(this);
            var allContent = tab.closest("div.tabs-product__container").find("div.tabs-product__content");
            var activeContent = allContent.eq($(this).index());
 
            // switching tabs
            tab.addClass("active"); // active tab
            tab.siblings().removeClass("active"); // deactivate other tabs
            allContent.removeClass("active").css({ display: "none", opacity: "0"}); // hiding inactive content
            activeContent.addClass("active").css({ display: "flex"}); // showing active content
 
            // smooth content transition when switching tabs
            setTimeout(function () { 
                activeContent.css({
                    opacity: "1", 
                    transition: "opacity 0.5s ease-in-out" 
                }) 
            }, 0);
 
            // showing description inside the active tab
            tab.children("div.tabs-product__caption--title").addClass("opened");
 
            // hiding descriptions in non-active tabs
            tab.siblings().children().removeClass("opened");
 
            // starting and pausing vids
            videoPlayback();
        });
    });
     // ===== END: PRODUCT VIDEO TABS =====    



    // ===== PLAY/PAUSE VIDEOS IF NOT IN VIEWPORT =====     
    function videoPlayback () {
        var videos = $("video");

        videos.each(function () {
           //avoid race condition between play() and pause()
           var isPlaying = $(this).currentTime > 0 
                           && !$(this).paused 
                           && !$(this).ended 
                           && $(this).readyState > $(this).HAVE_CURRENT_DATA;

           // checking class, viewport and status
           var isReady = $(this).hasClass('lazy-video') 
                         && percentVisible(this) > 0.5
                         && !isPlaying;

           // handling product vids differently because they occupy the same space              
           var isProductVideo = $(this).hasClass('tabs-product__content--video')
           var isProductVideoActive = $(this).parent().hasClass('active');

           // autoplaying all normal videos but only active product videos
           if (isReady && (!isProductVideo || (isProductVideo && isProductVideoActive))) { 
               this.play();
            }
            else {
               this.load();
            }
        });
    }

    $(window).on('load resize scroll', videoPlayback);
    // ===== END: PLAY/PAUSE VIDEOS IF NOT IN VIEWPORT =====    


    // ===== VIEWPORT CHECK =====
    // Returns a float between 0 and 1 representing the percentage of the element argument is in the window viewport
    var percentVisible = function (elem) {
        var bound = elem.getBoundingClientRect()
        if(bound.y < 0) {
            // element is above viewport
            return Math.max(0, 1+bound.y/elem.offsetHeight)
        }
        else if(bound.y + elem.offsetHeight > window.innerHeight) {
            // element is below viewport
            return Math.max(0, (window.innerHeight-bound.y)/elem.offsetHeight)
        }
        else {
            return 1.0;
        }
    };
    // ===== END: VIEWPORT CHECK =====
    
    
    // ===== ADD/REMOVE VIDEO CONTROLS =====        
    // turn off all controls on page load, and add event listeners for mouse hover over videos to toggle controls
     window.onload = function() {
         var all_videos = document.getElementsByTagName("video");
         for(var i = 0; i < all_videos.length; i++) {
             all_videos[i].controls = false;
             all_videos[i].onmouseover = function() {
                 this.controls = true;
             }
           all_videos[i].onmouseout = function() {
                this.controls = false;
             }
         }
     }
     // ===== END: ADD/REMOVE VIDEO CONTROLS =====     




     
    // ===== LOGO TRUSTED SLIDER =====
    function logoSlide() {
        let slidersBlock = document.querySelector(`.js-slider`);
        let sliders = slidersBlock.children;
        const slidersNumber = sliders.length;
        let count = 0;
        let step = sliders[0].offsetWidth;
        let pause = false;

        let sliderInterval = setInterval(() => {
            if(!pause) {
                step = sliders[0].offsetWidth;
                sliders = slidersBlock.children;
                slidersBlock = document.querySelector('.js-slider')
                let cloneNode = sliders[count].cloneNode(true);
                slidersBlock.appendChild(cloneNode);
                count++;
                slidersBlock.style.transform = `translateX(-${step * count}px)`;
            }
        }, 4000);

        window.addEventListener('blur', () => {
            pause = true;
        })

        window.addEventListener('focus', () => {
            pause = false;
        })

        window.addEventListener('resize', () => {
            step = sliders[0].offsetWidth;
        });
    }

    if(document.querySelector('.js-slider')) {
        logoSlide();
    }
    // ===== END: LOGO TRUSTED SLIDER =====



    // ===== COOKIES =====
    function getCookies() {
        const cookiesBlock = document.querySelector('.cookies');
        const cookiesYes = cookiesBlock.querySelector('.cookies__yes');

        if(!localStorage.getItem('agree')) {
            cookiesBlock.classList.add('cookies--show');
        }

        cookiesYes.addEventListener('click', () => {
            localStorage.setItem('agree', true);
            cookiesBlock.classList.remove('cookies--show');
        });
    }

    if(document.querySelector('.cookies')) {
        getCookies();
    }
    // ===== END: COOKIES =====



    // ===== TABS + SLICK CAROUSEL FOR USE-CASES =====
    (function($) {
        $(function() {
            setupSlider();
            $('ul.tabs__control').on('click', 'li:not(.active)', clickTab);
        });
    })(jQuery);    

    function clickTab () {
        $(this).addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');

        setupSlider();
    }

    function setupSlider () {
        if($('.js-useCases__list').length) {
            var maxDisplayNum= 5; 
            var activeSlides = $('.js-useCases__list.active .content-card').length;
            
            $('.js-useCases__list').slick('refresh'); //refreshing slick carousel (see in script.plugin.js)

            if (activeSlides > 4 ){
                $('.js-useCases__list.active').slick("slickSetOption", "slidesToShow", maxDisplayNum, true);
                $('.js-useCases__list.active').slick("slickSetOption", "dots", true, true);
            }
            else {
                $('.js-useCases__list.active').slick("slickSetOption", "slidesToShow", activeSlides, true);
                $('.js-useCases__list.active').slick("slickSetOption", "dots", false, true);
            }

            $('.js-useCases__list').slick('refresh'); //refreshing slick carousel (see in script.plugin.js)
        }
    }
    // ===== END: TABS + SLICK CAROUSEL FOR USE-CASES =====


});



