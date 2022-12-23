
$(function () {
    window.$ = $;


    //===== DYNAMIC TOP TITLE ======
    if(document.getElementById("js-dynamicTitle") != null){
        var pageTopTitle = document.getElementById("js-dynamicTitle");
        var initialText = pageTopTitle.innerHTML;
        var initialColor = $("#js-dynamicTitle").css("color");
        var secondColor = '#ffa773';
        var titlesCounter = 0;
        var titleChangeDelay = 4000;
        var inst = setInterval(updateTitle, titleChangeDelay);
        
        var newTitles = [
            ["what-if & risk analysis", secondColor],
            ["interactive reporting", "#0086ff"],
            ["predictive dashboards", secondColor],
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
    // ===== END: COPYRIGHT =====    demoVideoLink




    // ===== YOUTUBE VIDEO POPUP WITH BUTTONS =====

    //Find all video buttons
    var videoButtons = document.querySelectorAll('.play-video-button');
    for (var i = 0; i<videoButtons.length; i++) {
        prepareYoutubeFrame(videoButtons[i]);
    }

    function prepareYoutubeFrame(btn) {
        const srcIframe = btn.querySelector('p').innerHTML; // full video link is in <p> inside a button
        let srcPart = srcIframe.slice(srcIframe.lastIndexOf('/') + 1); // get video ID

        btn.removeChild(btn.querySelector('p')); // removing <p> so the link is not rendered on page

        const youtubeFrame = document.createElement('iframe');
        youtubeFrame.setAttribute('width', '889');
        youtubeFrame.setAttribute('height', '500');
        youtubeFrame.setAttribute('src', `https://www.youtube.com/embed/${srcPart}?autoplay=1&rel=0`);
        youtubeFrame.setAttribute('frameborder', '0');
        youtubeFrame.setAttribute('allow', 'autoplay; encrypted-media');
        youtubeFrame.setAttribute('allowfullscreen', 'allowfullscreen');

        // Creating popup with the video and controls when clicking play button
        btn.addEventListener('click', e => {
            e.preventDefault();
            createVideoOverlay (youtubeFrame);
        });
    }


    function createVideoOverlay (youtubeFrame) {
        // Create the popup container
        let popup = document.createElement("div");
        popup.classList.add("ht-top__popup", "js-popup", "popup--show");

        // Create wrap for the video
        let iframeWrap = document.createElement("div");
        iframeWrap.classList.add("ht-top__iframe-wrap");

        // Create the close button
        let closeButton = document.createElement("button");
        closeButton.classList.add("ht-top__popup-close", "js-popup-close");

        // Add the close button in the wrap
        iframeWrap.appendChild(closeButton);

        // Add the youtube in the wrap
        iframeWrap.appendChild(youtubeFrame);

        // Create the button container in the wrap
        let buttonContainer = document.createElement("div");
        buttonContainer.classList.add("demoPopupButtonContainer");

        // Create the first button
        let requestButton = document.createElement("a");
        requestButton.classList.add("btn-demoPopupCTA", "js-popup-close-request");
        requestButton.textContent = "Onboarding Call";

        // Create the second button
        let signupButton = document.createElement("a");
        signupButton.classList.add("btn-demoPopupCTA", "js-popup-close-signup");
        signupButton.textContent = "Get Started";

        // Add the buttons to the button container
        buttonContainer.appendChild(requestButton);
        buttonContainer.appendChild(signupButton);

        // Add the inner div and button container to the main div
        popup.appendChild(iframeWrap);
        popup.appendChild(buttonContainer);

        // Append the main div to the document body
        document.body.appendChild(popup);

        // Close and remove the popup
        closeButton.addEventListener('click', e => {
            e.preventDefault();
            if(e.target === e.currentTarget || e.target === closePopup) {
                document.body.removeChild(popup);
            }
        })

        // Close and scroll to booking section
        requestButton.addEventListener('click', e => {
            e.preventDefault();
            if(e.target === e.currentTarget || e.target === requestButton) {
                document.body.removeChild(popup);

                // on /demo, scroll to request section instead of opening it
                if (window.location.href.indexOf("/demo") > -1 ) {
                    document.getElementById('request').scrollIntoView();
                }
                else {
                    window.open('/demo/#request', '_self')
                }
            }
        })

        // Close and go to signup
        signupButton.addEventListener('click', e => {
             e.preventDefault();
             if(e.target === e.currentTarget || e.target === signupButton) {
                document.body.removeChild(popup);
                window.open('/accounts/signup/', '_blank');
             }
         })
    }
    // ===== END: YOUTUBE VIDEO POPUP WITH BUTTONS =====





    

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
            var maxDisplayNum= 4; 
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



