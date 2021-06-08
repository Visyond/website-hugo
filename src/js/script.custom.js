
$(function () {
    window.$ = $;

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
            $('.overlay').removeClass("overlay--active");
            $(".overlay").empty();

        });
    }
    responsiveNav();


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
        const copyrights = $('.js-copyright');
        const date = new Date();
        if(copyrights) {
            copyrights.each(function () {
                $(this).html(function(  ) {
                    return '2011-' + date.getFullYear() + '&copy; Visyond. All rights reserved'
                });
            })
        }
    }

    addCopyright();






    //=====POPUP WITH YOUTUBE VIDEO=====
    function watchVideo(btn, popup, closePopup) {
        //const closePopup = document.querySelector('.js-popup-close');
        const srcIframe = popup.querySelector('p').innerHTML;
        let srcPart = srcIframe.slice(srcIframe.lastIndexOf('/') + 1);

        popup.children[0].removeChild(popup.querySelector('p'));

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
    };

    function watchVideo5(videoBtn) {
        const videoSpan = videoBtn.querySelector('span');
        const videoPopup = videoBtn.querySelector('div');
        const closePopup = videoBtn.querySelector('.js-popup-close');
        watchVideo(videoSpan, videoPopup, closePopup);
    }

    if(document.querySelector('.js-btn-video3') && document.querySelector('.js-popup3')) {
        const videoBtn3 = document.querySelector('.js-btn-video3');
        const videoPopup3 = document.querySelector('.js-popup3');
        const closePopup3 = document.querySelector('.js-popup-close3');
        watchVideo(videoBtn3, videoPopup3, closePopup3);

    }

    if(document.querySelector('.js-btn-video2') && document.querySelector('.js-popup2')) {
        const videoBtn2 = document.querySelector('.js-btn-video2');
        const videoPopup2 = document.querySelector('.js-popup2');
        const closePopup2 = document.querySelector('.js-popup-close2');
        watchVideo(videoBtn2, videoPopup2, closePopup2);

    }

    var btn5 = [];

    var blocks5 = document.querySelectorAll('.home-info__block');
    for (var i = 0; i<blocks5.length; i++) {
        btn5[i] = (blocks5[i].querySelector('.btn-video4'));
        watchVideo5(btn5[i]);
    }

    var btn6 = [];

    var blocks6 = document.querySelectorAll('.enterSections__block');
    for (var i = 0; i<blocks6.length; i++) {
        btn6[i] = (blocks6[i].querySelector('.btn-video4'));
        watchVideo5(btn6[i]);
    }

    // DEMO PAGE VID - NEW
    var wrap, demoPageSection;
    var button = [];
    var i, x, y;
     
    wrap = document.querySelectorAll(".homeHex-provides__img-wrap"); //getting all nodes under this class
     
    for (i = 0; i < wrap.length; i++) {
        //wrap[i].style.backgroundColor = "red"; //setting all instances of wrap class red
        console.log('Wraps detected: ' + wrap.length);
        console.log('i (first) = ' + i);

        demoPageSection = (wrap[i].querySelectorAll('.demoVideoButton'));
        console.log('demoPageSection length: ' + demoPageSection.length);
        console.log('Buttons detected: ' + demoPageSection.length);
      
        for (x = 0; x < demoPageSection.length; x++) {
            //demoPageSection [x].style.backgroundColor = "blue";
            console.log('x (second) = ' + x);

            button [x] = demoPageSection[x].querySelector('.btn-video4');
            watchVideo5(button[x]);
            //button [x].style.backgroundColor = "green";
            //console.log('Video detected: ' + button.length);  
        }
      }




    // DEMO PAGE VID - HIDE TEMP
    /* var demoPageButton = [];

    var blocks7 = document.querySelectorAll('.demoVideoButton');
    for (var i = 0; i<blocks7.length; i++) {
        demoPageButton[i] = (blocks7[i].querySelector('.btn-video4'));
        watchVideo5(demoPageButton[i]);
    } */


    // ===== AUTOPLAY VIDEO =====
    if(document.querySelector('.js-background-video')) {
        const video = document.querySelector('.js-background-video');
        video.addEventListener('canplay', () => {
            video.play();
        })
    }


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
    
    
    // Toggle Video Play/Pause on Scroll Event
    window.onscroll = function() {
        var all_videos = document.getElementsByTagName("video");     
        for(var i = 0; i < all_videos.length; i++) {
            if(all_videos[i].classList.contains("scroll_toggle") && percentVisible(all_videos[i]) > 0.5) {
                all_videos[i].play();
            }
            else {
                all_videos[i].pause();
            }
        }
    }

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
    

    //=====LOGO TRUSTED SLIDER=====

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
        }, 5000);

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






    //=====POPUP INFO IMAGES====

    function PopupInfoImages() {
        this.mainBlock = document.body;
        this.images = this.mainBlock.querySelectorAll('.js-img-wrap img');
        this.typeImages = ['png', 'jpg', 'gif'];
        this.typeVideos = ['mp4', 'webm'];

        // Add hover for all image with attr data-src
        for(let i = 0; i < this.images.length; i++) {
            if(this.images[i].dataset.src) {
                this.images[i].classList.add('info__block-img-pointer');
            }
        }

        function getMediaType(fileName) {
            var r = 'image';
            var ext = fileName.slice(fileName.lastIndexOf('.')+1);
            if ( ext === 'mp4' || ext === 'webm') r = 'video';
            return r;
        };

        // ch, hw - container's size, ih, iw - image size
        function getMediaHeight(ch, cw, ih, iw) {
            if ( (cw / ch) > (iw / ih)) {
                return ch; }
                else {
                let scale = cw / iw;
                return ih * scale;
            };
        };

        // Create popup with content
        this._createPopup = (src, href, title, descr, alt) => {
            var prevSlideIndex=0;
            if(src) {
                const sliderArray = src.split('::');
                const sliderAlt = alt.split('::');
                const sliderHrefs = href.split('::');
                const popup = document.createElement('div');
                popup.classList.add('popup');
                const typeFile =  src.slice(src.lastIndexOf('.') + 1);
                const sliderTitles = title.split('::');
                const sliderDescrs = descr.split('::');
                const listWrap = document.createElement('div');
                const sliderList = document.createElement('ul');
                const prevBtn = document.createElement('button');
                const nextBtn = document.createElement('button');
                const closeBtn = document.createElement('button');
                const linkBtn = document.createElement('a');
                const visibilityBtn = document.createElement('button');
                const btnWrap = document.createElement('div');
                var sliderImage;
                var sliderElementsArray = [];

                prevBtn.classList.add('js-prev');
                nextBtn.classList.add('js-next');
                closeBtn.classList.add('js-close');
                btnWrap.classList.add('js-btn-wrap');
                linkBtn.classList.add('js-link');
                linkBtn.setAttribute('target', '_blank');
                linkBtn.setAttribute('href', sliderHrefs[0]);
                if(!sliderHrefs[0]) {
                    linkBtn.classList.add('js-link--hide');
                }
                visibilityBtn.classList.add('js-visibility');
                prevBtn.innerHTML = '<i class="material-icons">navigate_before</i>';
                nextBtn.innerHTML = '<i class="material-icons">navigate_next</i>';
                visibilityBtn.innerHTML = '<i class="material-icons">visibility</i>';
                linkBtn.innerHTML = '?';
                closeBtn.innerHTML = '<i class="material-icons">close</i>';

                function getVideoElementProcessor(i, divi, imgi) {
                    return function (e) {
                        divi.appendChild(imgi);
                        sliderElementsArray[i].ih = e.target.videoHeight;
                        sliderElementsArray[i].iw = e.target.videoWidth;
                        console.log('e', Date.now());
                        showBtn();
                    }
                }

                for(let i = 0; i < sliderArray.length; i++) {
                    sliderElementsArray.push({li: {}, img: {}, ih: 0, iw: 0});
                    const sliderItem = document.createElement('li');
                    const sliderItemDiv = document.createElement('div');
                    const sliderImageDiv = document.createElement('div');
                    const sliderTitle = document.createElement('h3');
                    const sliderDescr = document.createElement('p');
                    sliderTitle.innerHTML = sliderTitles[i];
                    sliderDescr.innerHTML = sliderDescrs[i];
                    if (getMediaType(sliderArray[i]) === 'image') { // if image
                        sliderImage = document.createElement('img');
                        sliderImage.setAttribute('src', sliderArray[i]);
                        sliderImage.naturalHeight2 = sliderImage.naturalHeight;
                        sliderImage.naturalWidth2 = sliderImage.naturalWidth;
                        sliderImage.onload = ((ii, sliderItemi, sliderItemDivi) => {
                            return (e) => {
                                sliderElementsArray[ii].ih = e.target.naturalHeight;
                                sliderElementsArray[ii].iw = e.target.naturalWidth;
                                sliderItemi.appendChild(sliderItemDivi);
                                resizeImage(ii);
                            }
                        })(i, sliderImageDiv, sliderImage);

                    } else { // if video
                        sliderImage = document.createElement('video');
                        sliderImage.setAttribute('src', sliderArray[i]);
                        //sliderImage.setAttribute('autoplay', 'autoplay');
                        sliderImage.loop = true;
                        console.log('b', Date.now());
                        sliderImage.addEventListener('loadeddata', getVideoElementProcessor(i, sliderImageDiv, sliderImage));
                    };
                    console.log('a', Date.now());
                    //sliderElementsArray.push({li: sliderItem, img: sliderImage, ih: 0, iw: 0});
                    sliderElementsArray[i].li = sliderItem;
                    sliderElementsArray[i].img = sliderImage;
                    /*
                    if (getMediaType(sliderArray[i]) === 'image') {
                        sliderElementsArray[i].ih = sliderImage.naturalHeight;
                        sliderElementsArray[i].iw = sliderImage.naturalWidth;
                    }
*/
                    sliderImage.setAttribute('alt', (sliderAlt[i] || 'image'));


                    sliderTitles[i] && sliderItemDiv.appendChild(sliderTitle);
                    sliderItemDiv.appendChild(sliderImageDiv);
                    sliderImageDiv.style.justifyContent = "center";
                    sliderImageDiv.style.display = "flex";
                    sliderImageDiv.style["flex-direction"] = "row";
                    //sliderImageDiv.appendChild(sliderImage);
                    sliderDescrs[i] && sliderItemDiv.appendChild(sliderDescr);
                    sliderList.appendChild(sliderItem);
                    sliderItem.appendChild(sliderItemDiv);

                }; // i < sliderArray.length;


                listWrap.appendChild(sliderList);
                listWrap.appendChild(prevBtn);
                listWrap.appendChild(btnWrap);
                btnWrap.appendChild(closeBtn);
                //btnWrap.appendChild(linkBtn);
                listWrap.appendChild(nextBtn);
                popup.appendChild(listWrap);
                this.mainBlock.appendChild(popup);

                (sliderList.querySelector('h3')
                || sliderList.querySelector('p'));
                //&& btnWrap.appendChild(visibilityBtn); //don't want visibility button displayed
                let countSlide = 0;

                function resizeImage(count) {

                    let li = sliderElementsArray[count].li;
                    let img = sliderElementsArray[count].img;

                    let ch = window.innerHeight * 0.6;
                    let cw = window.innerWidth * 0.9;
                    /*
                    let ih = img.naturalHeight2;
                    let iw = img.naturalWidth2;
                    */
                    let ih = sliderElementsArray[count].ih;
                    let iw = sliderElementsArray[count].iw;
                    console.log('img', img);
                    console.log(ih, iw);
                    let h = getMediaHeight(ch, cw, ih, iw);
                    img.style.height = '' + h + 'px';
                    img.style.width= '' + iw * h / ih + 'px';

                    console.log(img.naturalHeight2);
                };



                function resize2() {
                    resizeImage(countSlide);
                }

                //window.addEventListener('resize', resize2);




                // operation with slider
                function showBtn() {
                    if(countSlide === 0) {
                        prevBtn.style.display = 'none';
                    }
                    else {
                        prevBtn.style.display = 'block';
                    }

                    if(countSlide === sliderArray.length - 1) {
                        nextBtn.style.display = 'none';
                    }
                    else {
                        nextBtn.style.display = 'block';
                    }

                    const widthSlide = listWrap.getBoundingClientRect().width;
                    sliderList.style.transform = `translateX(-${countSlide * widthSlide}px)`;
                    const prevSliderElement = sliderList.children[prevSlideIndex];
                    const currSliderElement = sliderList.children[countSlide];
                    var prevMediaElement = prevSliderElement.querySelector('video');
                    var currMediaElement = currSliderElement.querySelector('video');
                    if (prevMediaElement) prevMediaElement.pause();
                    if (currMediaElement) currMediaElement.play();
                    resize2();
                }

                function showLink(href) {
                    linkBtn.setAttribute('href', href);
                    if(href) {
                        linkBtn.classList.remove('js-link--hide');
                    } else {
                        linkBtn.classList.add('js-link--hide');
                    }
                };

                showBtn();
                //setTimeout(showBtn, 3000);

                nextBtn.addEventListener('click', () => {
                    prevSlideIndex = countSlide;
                    if(countSlide < sliderArray.length - 1) {
                        countSlide++;
                        showBtn();
                        showLink(sliderHrefs[countSlide]);
                    }
                });


                prevBtn.addEventListener('click', () => {
                    prevSlideIndex = countSlide;
                    if(countSlide > 0) {
                        countSlide--;
                        showBtn();
                        showLink(sliderHrefs[countSlide]);
                    }
                });

                window.onkeydown = function(e) {
                    if(e.keyCode === 39 && popup) {
                        if(countSlide < sliderArray.length - 1) {
                            countSlide++;
                            showBtn();
                            showLink(sliderHrefs[countSlide]);
                        }
                    }
                    if(e.keyCode === 37 && popup) {
                        if(countSlide > 0) {
                            countSlide--;
                            showBtn();
                            showLink(sliderHrefs[countSlide]);
                        }
                    }
                };

                closeBtn.addEventListener('click', () => {
                    popup.parentNode.removeChild(popup);
                });

                popup.addEventListener('click', e => {
                    if(e.target === e.currentTarget) {
                        popup.parentNode.removeChild(popup);
                    }
                });

                document.onkeydown = function(e) {
                    if(e.keyCode === 27 && popup) {
                        popup.parentNode.removeChild(popup);
                    }
                }

                window.addEventListener('resize', () => {
                    showBtn();
                });

                let visibilityInd = true;

                //  Hidden/Show title and description
                visibilityBtn.addEventListener('click', () => {
                    if(visibilityInd) {
                        visibilityBtn.children[0].innerHTML = 'visibility_off';
                        const h3 = popup.querySelectorAll('h3');
                        const p = popup.querySelectorAll('p');

                        for(const par of p) {
                            par.classList.add('hidden');
                        }

                        for(const title of h3) {
                            title.classList.add('hidden');
                        }
                    }
                    else {
                        visibilityBtn.children[0].innerHTML = 'visibility';
                        const h3 = popup.querySelectorAll('h3');
                        const p = popup.querySelectorAll('p');

                        for(const par of p) {
                            par.classList.remove('hidden');
                        }

                        for(const title of h3) {
                            title.classList.remove('hidden');
                        }
                    }
                    visibilityInd = !visibilityInd;
                })




                setTimeout( () => {
                    popup.style.opacity = 1;
                });

                resizeImage(countSlide);
                
            } // if (src)
        } // this.createPopup
        if(document.querySelector('.show-slides')) {
            $(".show-slides").click(e => {
                const img = $(e.currentTarget).find("img").get(0);

                const src = $(img).attr("data-src").slice(0, -2);
                const href = $(img).attr("data-href").slice(0, -2);
                const title= $(img).attr("data-title").slice(0, -2);
                const descr = $(img).attr("data-descr").slice(0, -2);
                const alt = $(img).attr("data-alt").slice(0, -2);

                this._createPopup(src, href, title, descr, alt);
            })
        }

    }; // popupInfoImages

    if(document.querySelector('.js-img-wrap')) {
        const newPopup = new PopupInfoImages();
    }



    //=====COOKIES=====

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




    //=====FORM=====

    function customizeForm() {
        const form = document.querySelector('.js-form');
        const inputs = form.querySelectorAll('input');

        for(const input of inputs) {
            input.addEventListener('focus', () => {
                input.nextElementSibling.classList.add('an5th__form-label--active');
            });

            input.addEventListener('blur', () => {
                if(input.value.length === 0) {
                    input.nextElementSibling.classList.remove('an5th__form-label--active');
                }
            });
        }
    }

    document.querySelector('.js-form') && customizeForm();


    //=====TARGET BLANK======

    function addTargetBlank(classBlock) {
        if(document.querySelector(classBlock)) {
            const block = document.querySelector(classBlock);
            const links = block.querySelectorAll('a');

            for(const link of links) {
                link.setAttribute('target', '_blank');
            }
        }
    }

    addTargetBlank('.target-blank');




    //=====Visible Info when Hover On Navigation Link=====

    function linkHover(blockId, blockName) {
        const block = document.querySelector(`#${blockId}`);
        const title = block.querySelector('.dropdown__info-title').innerHTML;
        const descr = block.querySelector('.dropdown__info-descr').innerHTML;
        const showBlock = document.querySelector(`#${blockId} .dropdown__info`);

        block.addEventListener('mouseover', e => {
            if(e.target.tagName === 'A' && e.target.dataset.image && e.target.dataset.descr) {
                const showTitle = document.createElement('h3');
                showTitle.classList.add('dropdown__info-title');
                showTitle.innerHTML = e.target.innerHTML;
                const showImage = document.createElement('img');
                showImage.classList.add('dropdown__info-img');
                showImage.setAttribute('src', e.target.dataset.image);
                const showDescr = document.createElement('div');
                showDescr.classList.add('dropdown__info-descr');
                showDescr.innerHTML = e.target.dataset.descr;
                showBlock.innerHTML = '';
                showBlock.appendChild(showTitle);
                showBlock.appendChild(showImage);
                showBlock.appendChild(showDescr);
            }
        })

        block.addEventListener('mouseout', e => {
            if(e.target.tagName === 'A' && e.target.dataset.image && e.target.dataset.descr) {
                const showTitle = document.createElement('h3');
                showTitle.classList.add('dropdown__info-title');
                showTitle.innerHTML = title;
                const showDescr = document.createElement('div');
                showDescr.classList.add('dropdown__info-descr');
                showDescr.innerHTML = descr;

                showBlock.innerHTML = '';
                showBlock.appendChild(showTitle);
                showBlock.appendChild(showDescr);
            }
        })
    };

    linkHover('features-toggle', 'Features');
    linkHover('solutions-toggle', 'Solutions');

    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    if (isIE) {
        var cover = document.querySelector('.cover-video--content');
        cover.style.top = '0px'; // left: 200px;';
        cover.style.left = '0px';
    }

    var prevRatio = 0;
    function onresize2() {
        var ratio = window.innerWidth / window.innerHeight;
        var els = document.querySelectorAll(".video-wrapper");
        var border = 1.6;
        border = 2180 / 1244;
        var changed = false;
        if (prevRatio === 0) changed = true;
        if ( (ratio > border) && (prevRatio  < border)) changed = true;
        if ( (ratio < border) && (prevRatio  > border)) changed = true;
        if (changed) {
            if (border > ratio) {
                for (var i = 0; i < els.length; i++) {
                    els[i].style.width = null;
                    els[i].style.height = "calc(100vh - 20px)";
                }
            } else {
                for (var i = 0; i < els.length; i++) {
                    els[i].style.height = null;
                    els[i].style.width = "100%";
                    //els[i].style.height = "calc(100vh + 70px);";
                }

            }

        } // changed
        prevRatio = ratio;
        els[1].style.width = "100%";
        if (window.innerWidth < 900) {
            els[1].style.height = null;
        } else {
            els[1].style.height = "calc(100vh - 20px)";
        }

        els[0].style.width = null;
        els[0].style.height = null;

    }; // onresize2
    onresize2();
    window.addEventListener("resize", onresize2);


});
