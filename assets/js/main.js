// Table of contents
/**** Swiper Obj ****/


; (function (win, $) {
    // Add fixed header
    const handleFixedHeader = function () {
        const header = $("#header")

        if (window.scrollY > 400) {
            header.addClass("is_fixed");
            $('.scroll_to_top_btn').addClass("active");
        } else {
            header.removeClass("is_fixed");
            $('.scroll_to_top_btn').removeClass("active");
        }
    }

    const activeTestimonials = function(swiper) {
        let activeIndex = swiper.realIndex
        
        $('.testimonials_item').each(function() {
            if($(this).attr('data-swiper-slide-index') == activeIndex) {
                let dataTestimonials = $(this).attr('data-testimonials')
                $('.testimonials_img').removeClass('active')
                $(".testimonials_img[data-testimonials=" + dataTestimonials + "]").addClass('active')
            }
        })
    }

    const SWIPER_OPTIONS = {
        SLIDER_SWIPER: {
            loop: true,
            slidesPerView: 1,
            pagination: {
                clickable: true,
                el: ".slider .swiper-pagination"
            },
            navigation: {
                prevEl: ".slider .btn_prev",
                nextEl: ".slider .btn_next",
            },
        },
        TESTIMONIAL_SWIPER: {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 40,
            pagination: {
                clickable: true,
                el: ".testimonials .swiper-pagination"
            },
        },
        TESTIMONIAL_SWIPER_TWO: {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                prevEl: ".testimonials .btn_prev",
                nextEl: ".testimonials .btn_next",
            },
            breakpoints: {
                576: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                1440: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        },
        BANNER_SWIPER: {
            spaceBetween: 0,
            centeredSlides: true,
            speed: 5000,
            autoplay: {
                delay: 1,
            },
            loop: true,
            slidesPerView: "auto",
            allowTouchMove: false,
            disableOnInteraction: true,
        },
        BRAND_SWIPER: {
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            slidesPerView: 2,
            spaceBetween: 40,
            breakpoints: {
                576: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 60,
                },
                1280: {
                    slidesPerView: 5,
                    spaceBetween: 70,
                },
                1440: {
                    slidesPerView: 6,
                    spaceBetween: 80,
                },
            },
        },
        PROJECTS_SWIPER: {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 16,
            pagination: {
                clickable: true,
                el: ".swiper .swiper-pagination"
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
                1440: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
        },
        SERVICES_SWIPER_FOUR: {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
                clickable: true,
                el: ".swiper .swiper-pagination"
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    spaceBetween: -20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: -20,
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: -40,
                },
                1840: {
                    slidesPerView: 4,
                    spaceBetween: -60,
                },
            },
        },
    }

    // swiper obj
    var setSwipers = function() {
        const sliderSwiperObj = new Swiper('.slider_swiper', SWIPER_OPTIONS.SLIDER_SWIPER);
        const testimonialsSwiperObj = new Swiper('.testimonials_swiper', {
            ...SWIPER_OPTIONS.TESTIMONIAL_SWIPER,
            on: {
                init: function() {
                    activeTestimonials(this)
                },
                slideChange: function() {
                    activeTestimonials(this)
                }
            }
        });
        const testimonialsSwiperTwoObj = new Swiper('.testimonials_swiper_two', SWIPER_OPTIONS.TESTIMONIAL_SWIPER_TWO);
        const bannerSwiperObj = new Swiper('.banner_swiper', SWIPER_OPTIONS.BANNER_SWIPER);
        const brandSwiperObj = new Swiper('.brand_swiper', SWIPER_OPTIONS.BRAND_SWIPER);
        const projectsSwiperObj = new Swiper('.projects_swiper', SWIPER_OPTIONS.PROJECTS_SWIPER);
        const servicesSwiperObj = new Swiper('.services_swiper', SWIPER_OPTIONS.PROJECTS_SWIPER);
        const servicesSwiperFourObj = new Swiper('.services.style-four .services_swiper', SWIPER_OPTIONS.SERVICES_SWIPER_FOUR);
    };

    // projects hover home3
    const handleHoverProjectsThree = function () {
        $('.projects_link').hover(
            function () {
                // When hover, add class
                var index = $(this).closest('.projects_item').index();
                $('.projects_link').removeClass('active');
                $(this).addClass('active');
                $('.projects_thumb_item').removeClass('active');
                // $('.projects_thumb_item').css('display', 'none');
                $('.projects_thumb_item').eq(index).addClass('active');
                // $('.projects_thumb_item').eq(index).fadeIn();
            },
            // function () {
            //     // When leave hover, remove class
            //     var index = $(this).index();
            //     $(this).removeClass('active');
            //     $('.projects_thumb_item').eq(index).removeClass('active');
            // }
        );
    }

    // projects style center home4
    const projectsSlideFour = function () {
        $('.projects_slick').slick({
            dots: true,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 3,
            touchThreshold: 100,
            swipe: true,
            swipeToSlide: true,
            speed: 500,
            centerMode: true,
            centerPadding: '200px',
            pauseOnFocus: false,
            pauseOnHover: false,
            pauseOnDotsHover: false,
            infinite: true,
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '16px',
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '50px',
                    }
                },
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '150px',
                    }
                },
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '200px',
                    }
                },
                {
                    breakpoint: 1700,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '300px',
                    }
                },
                {
                    breakpoint: 2100,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '490px',
                    }
                },
            ]
        });
    }

    // Compare projects home1
    const handleCompareProject = function() {
        $('.comparison_ipt').on('input', function(){
            $(this).closest('.projects_item').find('.comparison_btn').css('left', $(this).val() + "%")
            $(this).closest('.projects_item').find('.projects_divisor').css('width', $(this).val() + "%")
        })
    }

    // Active menu tab
    const handleActiveTab = function () {
        $(".tab_btn").each(function () {
            if ($(this).hasClass("active")) {
                let indicator = $(this).closest('.menu_tab').find(".indicator");
                if (indicator.length > 0) {
                    indicator.css('width', $(this)[0].getBoundingClientRect().width + "px")
                    indicator.css('left', $(this)[0].getBoundingClientRect().left - $(this)[0].closest('.menu').getBoundingClientRect().left + "px")
                }
            }
        })

        $('.tab_btn').on('click', function () {
            // Find parent section include menu, tabs
            const $section = $(this).closest('.section, .category_list, .tag_list, .pagination_list');

            // active menu
            if ($section.length > 0) {
                $section.find('.tab_btn').removeClass('active');
                $(this).addClass('active');

                // change indicator
                $(".tab_btn").each(function () {
                    if ($(this).hasClass("active")) {
                        let indicator = $(this).closest('.menu_tab').find(".indicator");
                        if (indicator.length > 0) {
                            indicator.css('width', $(this)[0].getBoundingClientRect().width + "px")
                            indicator.css('left', $(this)[0].getBoundingClientRect().left - $(this)[0].closest('.menu').getBoundingClientRect().left + "px")
                        }
                    }
                })

                // change aria-selected menu
                $section.find('.tab_btn').attr('aria-selected', 'false')
                $(this).attr('aria-selected', 'true')

                // show loading
                $section.find('.tab_panel.active').addClass('loading');

                // active tabs
                const $ariaControl = '#' + $(this).attr('aria-controls');

                setTimeout(function () {
                    $($ariaControl).addClass('active').siblings().removeClass('active');

                    // change aria-hidden tabs
                    $section.find('.tab_panel').attr('aria-hidden', 'true');
                    $($ariaControl).attr('aria-hidden', 'false');

                    // remove loading
                    $section.find('.tab_panel.active').removeClass('loading');
                }, 200)
            }
        })
    }

    // FAQs
    const handleFaq = function () {
        $(".faqs_btn").on('click', function () {
            $(this).closest('.faqs_item').toggleClass('active').siblings('.faqs_item').removeClass('active');
            $(this).closest('.faqs_item').find('.answer').slideToggle(300)
            $(this).closest('.faqs_item').siblings('.faqs_item').find('.answer').slideUp(300);
        })
    }

    $(win).scroll(function () {
        handleFixedHeader()
    }).scroll();

    $(win).on('load', function () {
        handleFixedHeader()
        setSwipers()
        handleHoverProjectsThree()
        projectsSlideFour()
        handleCompareProject()
        handleActiveTab()
        handleFaq()
    });
})(window, window.jQuery);