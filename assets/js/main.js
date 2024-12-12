/************* Table of contents *************/
/**** Add fixed header ****/
/**** Toggle active ****/
/**** Animate text slider ****/
/**** Active testimonials image ****/
/**** Active project home four ****/
/**** Swiper obj ****/
/**** Projects style center home4 ****/
/**** Compare projects home1 ****/
/**** Active menu tab ****/
/**** Click load more btn ****/
/**** FAQs ****/
/**** Generate calendar for the current month ****/
/**** Navigate to the previous or next month ****/
/**** Rate product ****/
/**** Quantity product ****/
/**** Remove product ****/
/**** Countdown time ****/
/**** Counter ****/
/**** popup ****/
/**** animate  ****/


; (function (win, $) {
    const calendar = $('#calendar');
    const daysContainer = $('.days');
    const monthName = $('.calendar_date');
    const timePicker = $('.time_picker');
    const itemsPerRow = 7; // days in row (grid 7 cols)

    let currentDate = new Date();
    let calendarHeight = calendar.outerHeight();

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

    // Toggle active
    const handleToggleButtonClicked = function() {
        $('.btn_toggle').on('click', function(e) {
            if($(this).hasClass('menu_sub_link')) {
                e.preventDefault()
            }
            $(this).toggleClass('active');
        })
    }

    // Animate text slider
    const animateTextSlider = function(swiper) {
        let activeIndex = swiper.realIndex
        const $sectionTit = $('.swiper-slide[data-swiper-slide-index="' + activeIndex + '"]').find('.section_tit');

        if ($sectionTit.length > 0) {
            // save origin content if not save
            if (!$sectionTit.data('text')) {
                $sectionTit.data('text', $sectionTit.text().trim());
            }
    
            const rawText = $sectionTit.data('text'); // get origin content
            $sectionTit.empty(); // remove old content
    
            // seperate content to character
            const words = rawText.split(' ');
    
            words.forEach((word, index) => {
                const wordWrapper = $('<span>'); // create <span> parent
    
                // create <span> for each character
                word.split('').forEach(char => {
                    const charSpan = $('<span>').text(char === " " ? "\u00A0" : char);
                    wordWrapper.append(charSpan); // add charSpan to wordWrapper
                });
    
                // add <span> include characters to element have title
                $sectionTit.append(wordWrapper);
    
                // if not last character, add space between text
                if (index < words.length - 1) {
                    $sectionTit.append(' '); // add space between text
                }
            });
    
            // apply animate for each character
            let totalCharCount = 0;
            $sectionTit.find('span span').each(function () {
                const $charSpan = $(this);
    
                // add and remove class 'show' for each character
                setTimeout(() => {
                    $charSpan.addClass('show'); // add class 'show' for each character
                }, totalCharCount * 35); // 35ms delay each character
    
                totalCharCount++; // increase index
            });
        }
    }

    // Active testimonials image
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

    // Active project home four
    const activeProjectThree = function(swiper) {
        let activeIndex = swiper.realIndex
        
        $('.projects_thumb_item').each(function() {
            if($(this).attr('data-swiper-slide-index') == activeIndex) {
                let dataProject = $(this).attr('data-project')
                $('.projects_link').removeClass('active')
                $(".projects_link[data-project=" + dataProject + "]").addClass('active')
            }
        })

        $('.projects_link').hover(function () {
            var index = $(this).closest('.projects_item').index();
            swiper.slideTo(index)
        });
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
            autoplay: {
                delay: 5000,
            },
        },
        CHOOSE_US_SWIPER: {
            loop: true,
            allowTouchMove: true,
            slidesPerView: 1,
            spaceBetween: 16,
            autoplay: {
                delay: 3500,
            },
            breakpoints: {
                640: {
                    loop: false,
                    allowTouchMove: false,
                    slidesPerView: 2,
                    grid: {
                        rows: 2,
                    },
                    spaceBetween: 30,
                    autoplay: false,
                },
            },
        },
        TESTIMONIAL_SWIPER: {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 40,
            pagination: {
                clickable: true,
                el: ".testimonials.style-filter .swiper-pagination"
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
        TESTIMONIAL_SWIPER_THREE: {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 40,
            pagination: {
                clickable: true,
                el: ".testimonials_swiper_three+.swiper-pagination"
            },
        },
        TEAM_SWIPER: {
            loop: true,
            allowTouchMove: true,
            slidesPerView: 1,
            spaceBetween: 16,
            autoplay: {
                delay: 3000,
            },
            breakpoints: {
                1024: {
                    loop: false,
                    allowTouchMove: false,
                    slidesPerView: 2,
                    grid: {
                        rows: 2,
                    },
                    spaceBetween: 30,
                    autoplay: false,
                },
            },
        },
        TEAM_SWIPER_THREE: {
            loop: true,
            allowTouchMove: true,
            slidesPerView: 1,
            spaceBetween: 16,
            autoplay: {
                delay: 3000,
            },
            breakpoints: {
                450: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                1280: {
                    loop: false,
                    allowTouchMove: false,
                    slidesPerView: 4,
                    spaceBetween: 30,
                    autoplay: false,
                },
            },
        },
        BANNER_SWIPER: {
            spaceBetween: 0,
            centeredSlides: true,
            speed: 3000,
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
        PROJECTS_SWIPER_THREE: {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoplay: {
                delay: 3000
            },
            speed: 600,
            effect: "fade",
        },
        SERVICES_SWIPER_FOUR: {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
                clickable: true,
                el: ".services.style-four .swiper-pagination"
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
                2200: {
                    slidesPerView: 5,
                    spaceBetween: -60,
                },
            },
        },
        PRODUCT_SWIPER_THUMB: {
            spaceBetween: 0,
            slidesPerView: 1,
        },
        PRODUCT_SWIPER_LIST: {
            spaceBetween: 10,
            slidesPerView: 4,
            watchSlidesProgress: true,
        },
    }

    // Swiper obj
    var setSwipers = function() {
        const sliderSwiperObj = new Swiper('.slider_swiper', {
            ...SWIPER_OPTIONS.SLIDER_SWIPER,
            effect: 'fade',
            speed: 600,
            on: {
                init: function() {
                    animateTextSlider(this)
                },
                slideChangeTransitionStart: function() {
                    animateTextSlider(this)
                },
            }
        });
        const sliderSwiperTwoObj = new Swiper('.slider_swiper_two', {
            ...SWIPER_OPTIONS.SLIDER_SWIPER,
            on: {
                init: function() {
                    animateTextSlider(this)
                },
                slideChangeTransitionStart: function() {
                    animateTextSlider(this)
                },
            }
        });
        const sliderSwiperThreeObj = new Swiper('.slider_swiper_three', {
            ...SWIPER_OPTIONS.SLIDER_SWIPER,
            effect: "creative",
            speed: 800,
            creativeEffect: {
                prev: {
                shadow: true,
                origin: "left center",
                translate: ["-5%", 0, -200],
                rotate: [0, 100, 0],
                },
                next: {
                origin: "right center",
                translate: ["5%", 0, -200],
                rotate: [0, -100, 0],
                },
            },
            on: {
                init: function() {
                    animateTextSlider(this)
                },
                slideChangeTransitionStart: function() {
                    animateTextSlider(this)
                },
            }
        });
        const chooseUsSwiperObj = new Swiper('.choose_us_swiper', SWIPER_OPTIONS.CHOOSE_US_SWIPER);
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
        const testimonialsSwiperThreeObj = new Swiper('.testimonials_swiper_three', SWIPER_OPTIONS.TESTIMONIAL_SWIPER_THREE);
        const teamSwiperObj = new Swiper('.team_swiper', SWIPER_OPTIONS.TEAM_SWIPER);
        const teamSwiperThreeObj = new Swiper('.team_swiper_three', SWIPER_OPTIONS.TEAM_SWIPER_THREE);
        const bannerSwiperObj = new Swiper('.banner_swiper', SWIPER_OPTIONS.BANNER_SWIPER);
        const brandSwiperObj = new Swiper('.brand_swiper', SWIPER_OPTIONS.BRAND_SWIPER);
        const projectsSwiperObj = new Swiper('.projects_swiper', SWIPER_OPTIONS.PROJECTS_SWIPER);
        const projectsSwiperThreeObj = new Swiper('.projects.style-three .projects_thumb_swiper', {
            ...SWIPER_OPTIONS.PROJECTS_SWIPER_THREE,
            on: {
                init: function() {
                    activeProjectThree(this)
                },
                slideChangeTransitionStart: function() {
                    activeProjectThree(this)
                },
            }
        });
        const servicesSwiperObj = new Swiper('.services.style-three .services_swiper', SWIPER_OPTIONS.PROJECTS_SWIPER);
        const servicesSwiperFourObj = new Swiper('.services.style-four .services_swiper', SWIPER_OPTIONS.SERVICES_SWIPER_FOUR);
        const productSwiperListObj = new Swiper('.product_swiper_list', SWIPER_OPTIONS.PRODUCT_SWIPER_LIST);
        const productSwiperThumbObj = new Swiper('.product_swiper_thumb', {
            ...SWIPER_OPTIONS.PRODUCT_SWIPER_THUMB,
            thumbs: {
                swiper: productSwiperListObj,
            },
        });
    }

    // Projects style center home4
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

    // Active project home four
    const activeProcess = function() {
        $('.process_item').hover(function () {
            var processIndex = $(this).index();
            $('.process_item').removeClass('active')
            
            for (let index = 1; index <= $('.process_item').length; index++) {
                if(index <= processIndex) {
                    $('.process_item').eq(index - 1).addClass('active');
                }
            }

            $('.process_line_progress').css('height', (processIndex - 1) * (100 / 3) + '%')
        });

        $('.process_list').on('mouseleave', function () {
            $('.process_item').removeClass('active')
            $('.process_line_progress').css('height', 0)
        })
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

    // Click load more btn
    const handleClickLoadMore = function () {
        $(".js_btn_load_more").on('click', function () {
            // show loading
            $('.tab_panel.active').addClass('loading');

            setTimeout(function () {
                // remove loading
                $('.tab_panel.active').removeClass('loading');
            }, 500)
        })
    }

    // FAQs
    const handleFaqs = function () {
        $(".faqs_btn").on('click', function () {
            $(this).closest('.faqs_item').toggleClass('active').siblings('.faqs_item').removeClass('active');
            $(this).closest('.faqs_item').find('.answer').slideToggle(300)
            $(this).closest('.faqs_item').siblings('.faqs_item').find('.answer').slideUp(300);
        })
    }

    // Generate calendar for the current month
    const generateCalendar = function(date) {
        const year = date.getFullYear(); // Get year
        const month = date.getMonth(); // Get month index (0 = January, 11 = December)
    
        // First day in month (1st) (index: 0 = Sunday, 1 = Monday, ... , 6: Saturday)
        let firstDay = new Date(year, month, 1).getDay();
    
        // Adjust so that Monday is the first day (default is Sunday)
        // If the first day is Sunday (getDay() === 0), set firstDay = 6 (Sunday will be the last day).
        firstDay = (firstDay === 0) ? 6 : firstDay - 1;
    
        daysContainer.empty();
        monthName.text(date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }));
    
        // Add blank element before firstDay
        for (let i = 0; i < firstDay; i++) {
            daysContainer.append('<li></li>');
        }
    
        // month + 1: next month.
        // 0: last day of before month.
        // getDate(): days in month
        const lastDate = new Date(year, month + 1, 0).getDate();
        
        // Add days in month
        for (let day = 1; day <= lastDate; day++) {
            const currentDate = new Date(year, month, day);
            const isSunday = currentDate.getDay() === 0; // check Sunday
    
            // Create a new day button
            const buttonElement = $(`<button class="day_btn w-full h-full py-6 heading6 text-center duration-300 hover:bg-orange hover:bg-opacity-10">${day}</button>`);
    
            // If Sunday, add class disabled
            if (isSunday) {
                buttonElement.addClass('disabled').attr('disabled', true);
            }
    
            // Add evt click for <button> (not Sunday)
            if (!isSunday) {
                buttonElement.on('click', function(){
                    if(buttonElement.hasClass('selected')) {
                        buttonElement.removeClass('selected');
                        timePicker.addClass('hidden');
                        daysContainer.find('li').css('margin-top', 0); // Reset margin-top
                        calendar.removeAttr('style'); // Reset height
                    } else {
                        selectedDate = currentDate;
                        $('.days .day_btn').removeClass('selected');
                        calendar.removeAttr('style'); // Reset height
                        buttonElement.addClass('selected');
                        timePicker.removeClass('hidden');

                        // Specifies the row elements immediately below the selected date
                        const dayItems = daysContainer.find('li');
                        const clickedIndex = dayItems.index(buttonElement.closest('li'));
                        const currentRow = Math.floor((clickedIndex + 1) / itemsPerRow); // Hàng hiện tại
                        const totalRows = Math.ceil(dayItems.length / itemsPerRow); // Tổng số hàng

                        // Reset margin-top for all elements
                        dayItems.css('margin-top', 0);

                        // Height for calendar
                        calendarHeight = calendar.outerHeight()
                        calendar.css('height', calendarHeight + timePicker.outerHeight() + 'px')
    
                        // Position for time_picker
                        let pickerPosition = buttonElement[0].getBoundingClientRect().top - calendar[0].getBoundingClientRect().top + buttonElement.outerHeight()
                        timePicker.css('top', pickerPosition + 'px')

                        // Apply margin-top for next row
                        if (currentRow < totalRows - 1) {
                            const nextRowStartIndex = (currentRow + 1) * itemsPerRow;
                            const nextRowEndIndex = nextRowStartIndex + itemsPerRow;
                
                            for (let i = nextRowStartIndex; i < nextRowEndIndex; i++) {
                                $(dayItems[i]).css('margin-top', timePicker.outerHeight());
                            }
                        }
                    }
                });
            }
    
            // Attach the <button> to <li>
            const dayElement = $('<li class="day_item"></li>').append(buttonElement);
            daysContainer.append(dayElement);
        }
    }

    // Navigate to the previous or next month
    $('.btn_prev_month').click(() => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        generateCalendar(currentDate);
        $('.days .day_btn').removeClass('selected');
        timePicker.addClass('hidden');
        daysContainer.find('li').css('margin-top', 0); // Reset margin-top
        calendar.removeAttr('style'); // Reset height
    });

    $('.btn_next_month').click(() => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        generateCalendar(currentDate);
        $('.days .day_btn').removeClass('selected');
        timePicker.addClass('hidden');
        daysContainer.find('li').css('margin-top', 0); // Reset margin-top
        calendar.removeAttr('style'); // Reset height
    });

    // Rate product
    const handleRate = function () {
        var selectedRating = 0;

        // Handle mouse enter (hover) event
        $('.user_rating .star').on('mouseenter', function () {
            var rating = $(this).data('value');
            highlightStars(rating);
        });

        // Handle mouse leave event
        $('.user_rating .list_rate').on('mouseleave', function () {
            highlightStars(selectedRating);
        });

        // Handle click event
        $('.user_rating .star').on('click', function () {
            selectedRating = $(this).data('value');
            highlightStars(selectedRating);
        });

        // Function to highlight stars
        function highlightStars(rating) {
            $('.user_rating .star').each(function () {
                var starValue = $(this).data('value');
                if (starValue <= rating) {
                    $(this).css('color', '#f2b201');
                } else {
                    $(this).css('color', '#e4e4e4');
                }
            });
        }

        // Handle form submission
        $('#form-review .form').on('submit', function (e) {
            if (selectedRating === 0) {
                e.preventDefault(); // Prevent form submission
                alert('Please select your rating before submit the comment.');
            } else {
                $('#form-review .form').append('<input type="hidden" name="rating" value="' + selectedRating + '">');
            }
        });
    }

    // Quantity product
    const handleQuantityProduct = function () {
        // increase quantity
        $('.btn_increase_quantity').on('click', function() {
            const productItem = $(this).closest('.product_item')
            const quantityForm = $(this).closest('.quantity_form')
            let currentPrice = Number(productItem.find('.product_price span').text())
            let currentQuantity = Number(quantityForm.find('.quantity').text())
            productItem.find('.product_total_price span').text((currentQuantity + 1) * currentPrice);
            quantityForm.find('.quantity').text(currentQuantity + 1);

            // Check btn decrease
            if (currentQuantity + 1 > 1) {
                quantityForm.find('.btn_decrease_quantity').attr('disabled', false);
            }
        })

        // decrease quantity
        $('.btn_decrease_quantity').on('click', function() {
            const productItem = $(this).closest('.product_item')
            const quantityForm = $(this).closest('.quantity_form')
            let currentPrice = Number(productItem.find('.product_price span').text())
            let currentQuantity = Number(quantityForm.find('.quantity').text())

            if (currentQuantity > 1) {
                productItem.find('.product_total_price span').text((currentQuantity - 1) * currentPrice);
                quantityForm.find('.quantity').text(currentQuantity - 1);
                
                if (currentQuantity - 1 === 1) {
                    $(this).attr('disabled', true);
                }
            }
        })
    }

    // Remove product
    const handleRemoveProduct = function () {
        $('.btn_remove_product').on('click', function() {
            $(this).closest('.product_item').remove()
        })
    }

    // Countdown time
    const countDownTime = function (hours, minutes, seconds, infinite) {
        // Set time to countdown
        var duration = (hours * 60 * 60) + (minutes * 60) + (seconds); // change to seconds

        var timer = setInterval(function () {
            var hoursLeft = Math.floor(duration / 3600);
            var minutesLeft = Math.floor((duration % 3600) / 60);
            var secondsLeft = duration % 60;

            // Show time
            $('.countdown_time .hour').text(hoursLeft / 10 < 1 ? '0' + hoursLeft : hoursLeft);
            $('.countdown_time .minute').text(minutesLeft / 10 < 1 ? '0' + minutesLeft : minutesLeft);
            $('.countdown_time .second').text(secondsLeft / 10 < 1 ? '0' + secondsLeft : secondsLeft);

            // decrease time
            duration--;

            if (duration < 0) {
                if (infinite === true) {
                    // reset countdown
                    countDownTime(hours, minutes, seconds, infinite);
                } else {
                    // stop countdown
                    clearInterval(timer);
                }
            }
        }, 1000);
    }

    // Counter
    const handleCounter = function() {
        // check element in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }

        // run counter
        $('.counter_number').each(function () {
            const $this = $(this);
            const target = parseFloat($this.text());
            const decimalPlaces = Number.isInteger(target) ? 0 : 1;

            if (isInViewport(this) && !$this.hasClass('counted')) {
                const countUp = new CountUp(this.id, 0, target, decimalPlaces, 3, {
                    duration: 3,
                    separator: ',',
                });

                if (!countUp.error) {
                    countUp.start();
                    $this.addClass('counted'); // run 1 time
                } else {
                    console.error(countUp.error);
                }
            }
        });
    }

    // popup
    const openPopup = function() {
        $('.js_btn_open_popup').on('click', function(){
            // prevent scroll
            $('body').addClass('scroll_locked');
            const popup = $(this).attr('data-popup');
            $('.popup').addClass('open');
            $('.popup_item').removeClass('open');
            $('#' + popup).addClass('open');
        })
    }

    const closePopup = function() {
        $('.popup, .js_btn_close_popup').on('click', function(){
            // prevent scroll
            $('body').removeClass('scroll_locked');
            $('.popup, .popup_item').removeClass('open');
            
            // pause video iframe youtube 
            $('.popup_video iframe')[0]?.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
        })

        $('.popup_item').on('click', function(e){
            e.stopPropagation()
        })
    }

    // animate 
    function handleInteraction() {
        $('.animate').each(function() {
            var itemTop = $(this).offset().top;
            if($(win).scrollTop() >= itemTop - .9 * $(win).innerHeight()){
                $(this).addClass('show');
            }
        });
    }

    $(win).scroll(function () {
        handleFixedHeader()
        handleCounter()
        handleInteraction()
    }).scroll();

    $(win).on('load', function () {
        if($('.cart').length > 0) {
            countDownTime(0, 5, 0, true)
        }
        handleFixedHeader()
        handleToggleButtonClicked()
        setSwipers()
        projectsSlideFour()
        activeProcess()
        handleCompareProject()
        handleActiveTab()
        handleClickLoadMore()
        handleFaqs()
        generateCalendar(currentDate);
        handleRate()
        handleQuantityProduct()
        handleRemoveProduct()
        openPopup()
        closePopup()
        handleInteraction()
    });
})(window, window.jQuery);