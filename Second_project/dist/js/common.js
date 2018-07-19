'use strict';
$(document).ready(function () {
    let $burger = $('.burger');
    $burger.on('click', function () {
        $(this).toggleClass('burger_open');
        let $nav = $('.nav');
        let $navBar = $('.navBar');
        let $navBarItem = $('.navBar__item');
        let $headerNavigation = $('.header__navigation');
        $nav.toggleClass('nav_open');
        $navBar.toggleClass('navBar_open');
        $navBarItem.toggleClass('navBar__item_open');
        $headerNavigation.toggleClass('header__navigation_openMenu');
    });
    let $tabsLink = $('.tabs__link'),
        $tabsActive = 'tabs__link_active',
        $galleryCont = $('.gallery__content');
    $tabsLink.on('click', function () {
        $galleryCont.hide();
        $('.tabs').find('.' + $tabsActive).removeClass($tabsActive);
        $tabsLink.removeClass($tabsActive);
        $(this).addClass($tabsActive);
        event.preventDefault();
        $galleryCont.filter(this.hash).show();
    });
    $tabsLink.filter(':first').on('click', function () {
        $galleryCont.show();
    });
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.sliderArr__prev'),
        nextArrow: $('.sliderArr__next'),
        asNavFor: '.sliderNav',
        infinite: true

    });
    $('.sliderNav').slick({
        slidesToShow: 9,
        slidesToScroll: 1,
        asNavFor: '.slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        arrows: false,
        draggable: false,
        responsive: [
            {
                breakpoint: 1601,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true

                }
            },
            {
                breakpoint: 1390,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true


                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true

                }
                           }
            ],

    });

});