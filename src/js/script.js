// slick slider

$(document).ready(function() {
    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// Аккордеон

let acc = document.querySelectorAll('.info_accordion');
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


//preloader
$(window).on('load', function() {
    $('#preloader').fadeOut().end().delay(1000).fadeOut('slow');
});


// модальное окно

$('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');

});
$('.modal_close').on('click', function() {
    $('.overlay, #consultation, #thanks').fadeOut('slow');
});

$(window).on('click', function(e) {
    if (e.target.classList.contains('overlay')) {
        $('.overlay, #consultation, #thanks').fadeOut('slow');
    }
});

function validateForms(form) {
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            email: {
                required: true,
                email: true
            },
            checkbox: {
                required: true,
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введите {0} символа!")
            },
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введен адрес почты"
            },
            checkbox: ""
        }
    });
}



validateForms('#consultation form');
validateForms('#form');

// Masked

$('input[name=phone]').mask("+7 (999) 999-99-99");




//Ajax 

$('form').submit(function(e) {
    e.preventDefault();
    if (!$(this).valid()) {
        return;
    }
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});



// Smooth scroll and pageup 

$(window).scroll(function() {
    if ($(this).scrollTop() > 1000 && $(this).width() > 600) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href=#up]").click(function() {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" }, 1000);
    return false;
});

$(function() {
    $("a[href^='#']").click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" }, 2000);
        return false;
    });
});





new WOW().init();


function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burger-menu__link');
    let overlay = menu.find('.burger-menu__overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    }
}
burgerMenu('.burger-menu');

let scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    let nav = document.getElementById('nav');
    if (scrolled) {
        nav.classList.add('navigation');
    } else {
        nav.classList.remove('navigation');
    }

};

$(window).on('load resize', function() {
    if ($(window).width() < 1200) {
        $('.promo_information:not(.slick-initialized)').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 2,
            arrows: false,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        });
    } else {
        $(".promo_information.slick-initialized").slick("unslick");
    }

    if ($(window).width() < 1200) {
        $('.course-slider:not(.slick-initialized)').slick({
            variableWidth: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        });
    } else {
        $(".course-slider.slick-initialized").slick("unslick");
    }
});


$(window).on('load resize', function() {
    if ($(window).width() < 1200) {
        $('.video-slider:not(.slick-initialized)').slick({
            variableWidth: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            }]
        });
    } else {
        $(".video-slider.slick-initialized").slick("unslick");
    }

    if ($(window).width() < 520) {
        $('.course_tabs:not(.slick-initialized)').slick({
            variableWidth: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }]
        });
    } else {
        $(".course_tabs.slick-initialized").slick("unslick");
    }
    if ($(window).width() < 1200) {
        $('.study_wrapper:not(.slick-initialized)').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            infinite: false,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: true
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: true
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true
                    }
                }
            ]
        });
    } else {
        $(".study_wrapper.slick-initialized").slick("unslick");
    }
});

$(document).ready(function() {
    $('.course-gallery').slick({
        variableWidth: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


//cookie
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
let cookiecook = getCookie("cookiecook"),
    cookiewin = document.getElementsByClassName('cookie_notice')[0];
// проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
if (cookiecook != "no") {
    // показываем    
    cookiewin.style.display = "block";
    // закрываем по клику
    document.getElementById("cookie_close").addEventListener("click", function() {
        cookiewin.style.display = "none";
        // записываем cookie на 1 день, с которой мы не показываем окно
        let date = new Date;
        date.setDate(date.getDate() + 1);
        document.cookie = "cookiecook=no; path=/; expires=" + date.toUTCString();
    });
}

// another menu 

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu_link'),
        hamburger = document.getElementById('nav-icon1'),
        phone = document.querySelector('.phone'),
        headerLabel = document.querySelector('.header_label');

    let body = document.querySelector('body');
    hamburger.addEventListener('click', function() {
        this.classList.toggle('open');
        if (phone.classList.toggle('block')) {
            phone.style.display = 'none';
        } else {
            phone.style.display = 'block';
        }
        if (headerLabel.classList.toggle('block')) {
            headerLabel.style.display = 'none';
        } else {
            headerLabel.style.display = 'block';
        }
        if (menu.classList.toggle('none')) {
            body.style.overflow = 'hidden';
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
            body.style.overflow = 'visible';
        }
    });

    $(window).on('load resize', function() {
        hamburger.addEventListener('click', () => {
            if ($(window).width() < 768) {
                if (!phone.classList.contains('none')) {
                    phone.style.display = 'none';
                }
            }
        });
    });
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('menu_active');
            hamburger.classList.toggle('hamburger_active');
        });
    });

});


// Accordeon 

$(document).ready(function() {
    $('.seo_detail').click(function(event) {
        if ($('.seo_wrapper').hasClass('one')) {
            $('.seo_detail').not($(this)).removeClass('active');
            $('.seo_text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

// 2gis 

let map;
DG.then(function() {
    map = DG.map('map', {
        center: [55.596051, 37.167112],
        zoom: 14,
        scrollWheelZoom: true
    });

    mapicon = DG.icon({
        iconUrl: 'icons/main/footer/marker.png',
        iconAnchor: [32, 64],
        popupAnchor: [0, 24],
        className: 'map-icon',
    });
    DG.marker([55.597307, 37.176086], { icon: mapicon }).addTo(map).bindPopup('<div class="map-popup"><h2>Клининговая компания</h2><br/>Россия, Москва, улица <p>советская дом 19</p><br/></b></div>');
});

// Tabs

let tabsBtn = document.querySelectorAll('.course_tab');
let tabsItems = document.querySelectorAll('.course_inner');

tabsBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });

            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
});