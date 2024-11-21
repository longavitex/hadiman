// Table of contents
/**** Swiper Obj ****/


; (function (win, $) {
    const calendar = $('#calendar');
    const daysContainer = $('.days');
    const monthName = $('.calendar_date');
    const dayPicker = $('.day_picker');
    const daySlotsContainer = $('.day_slots');

    let currentDate = new Date();
    let selectedDate = null;

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
        const testimonialsSwiperThreeObj = new Swiper('.testimonials_swiper_three', SWIPER_OPTIONS.TESTIMONIAL_SWIPER_THREE);
        const bannerSwiperObj = new Swiper('.banner_swiper', SWIPER_OPTIONS.BANNER_SWIPER);
        const brandSwiperObj = new Swiper('.brand_swiper', SWIPER_OPTIONS.BRAND_SWIPER);
        const projectsSwiperObj = new Swiper('.projects_swiper', SWIPER_OPTIONS.PROJECTS_SWIPER);
        const servicesSwiperObj = new Swiper('.services_swiper', SWIPER_OPTIONS.PROJECTS_SWIPER);
        const servicesSwiperFourObj = new Swiper('.services.style-four .services_swiper', SWIPER_OPTIONS.SERVICES_SWIPER_FOUR);
    };

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

    // projects hover home3
    const handleHoverProjectsThree = function () {
        $('.projects_link').hover(function () {
            // When hover, add class
            var index = $(this).closest('.projects_item').index();
            $('.projects_link').removeClass('active');
            $(this).addClass('active');
            $('.projects_thumb_item').removeClass('active');
            $('.projects_thumb_item').eq(index).addClass('active');
        });
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

    // Active menu tab
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

            // Create element `day_picker` for day
            const dayPickerElement = $(`
                <div class="day_picker p-5 bg-orange bg-opacity-10 hidden">
                    <h5 class="heading5 text-center">Available Appointments</h5>
                    <div class="day_slots flex flex-col gap-3 mt-3"></div>
                </div>
            `);
    
            // Add evt click for <button> (not Sunday)
            if (!isSunday) {
                buttonElement.on('click', function(){
                    selectedDate = currentDate;
                    $('.days .day_btn').removeClass('selected');
                    $('.days .day_picker').addClass('hidden');
                    buttonElement.addClass('selected');
                    dayPickerElement.removeClass('hidden');
                    showTimeSlots(dayPickerElement.find('.day_slots'));
                });
            }
    
            // Attach the <button> to <li>
            const dayElement = $('<li class="day_item"></li>').append(buttonElement).append(dayPickerElement);
            daysContainer.append(dayElement);
        }
    }

    // Show time slots for the selected date
    function showTimeSlots(container) {
        const slots = generateTimeSlots('08:00', '18:00', 60); // Thời gian từ 8:00 đến 18:00
        container.empty();
    
        slots.forEach((slot) => {
            const slotElement = $(`
                <div class="time_slots_item flex items-center justify-between p-2 bg-white">
                    <span>${slot}</span>
                    <span>1 time slots available</span>
                    <button class="btn">Booking</button>
                </div>
            `);
    
            slotElement.find('.booking_btn').click(() => {
                showBookingPopup(selectedDate, slot);
            });
    
            container.append(slotElement);
        });
    }

    // Generate time slots (e.g., 30-minute intervals)
    const generateTimeSlots = function(startTime, endTime, interval) {
        const slots = [];
        let [startHour, startMinute] = startTime.split(':').map(Number);
        const [endHour, endMinute] = endTime.split(':').map(Number);

        while (startHour < endHour || (startHour === endHour && startMinute < endMinute)) {
            const formatted = `${String(startHour).padStart(2, '0')}:${String(startMinute).padStart(2, '0')}`;
            slots.push(formatted);

            startMinute += interval;
            if (startMinute >= 60) {
                startMinute -= 60;
                startHour += 1;
            }
        }
        return slots;
    }

    // Navigate to the previous or next month
    $('.btn_prev_month').click(() => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        generateCalendar(currentDate);
    });

    $('.btn_next_month').click(() => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        generateCalendar(currentDate);
    });

    $(win).scroll(function () {
        handleFixedHeader()
    }).scroll();

    $(win).on('load', function () {
        handleFixedHeader()
        setSwipers()
        projectsSlideFour()
        handleCompareProject()
        handleHoverProjectsThree()
        handleActiveTab()
        handleClickLoadMore()
        handleFaqs()
        generateCalendar(currentDate);
    });
})(window, window.jQuery);