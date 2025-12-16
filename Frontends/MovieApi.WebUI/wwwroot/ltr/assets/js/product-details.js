$(function() {
	"use strict";

    if ($('.similar-products').length) {
        var viewedSlider = $('.similar-products');

        viewedSlider.owlCarousel(
            {
                loop: true,
                margin: 30,
                autoplay: true,
                autoplayTimeout: 6000,
                nav: false,
                dots: false,
                responsive:{
                    0:{
                        items:1
                    },
                    576:{
                        items:2
                    },
                    768:{
                        items:2
                    },
                    1024:{
                        items:3
                    },
                    1366:{
                        items:4
                    }
                },
            });

        if ($('.owl_prev_item').length) {
            var prev = $('.owl_prev_item');
            prev.on('click', function () {
                viewedSlider.trigger('prev.owl.carousel');
            });
        }

        if ($('.owl_next_item').length) {
            var next = $('.owl_next_item');
            next.on('click', function () {
                viewedSlider.trigger('next.owl.carousel');
            });
        }
    }




    $('.product-gallery').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        nav:false,
        dots: false,
        thumbs: true,
        thumbsPrerendered: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
             }
          }
        })














});