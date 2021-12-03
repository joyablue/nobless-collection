$(document).ready(function () {
    // visual swiper
    new Swiper('.sw-visual', {
        loop: true,
        speed: 3000,
        allowTouchMove: true,
        // effect: 'fade',
        // fadeEffect: {
        // 	crossFade: true,
        // },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: '.sw-prev-btn',
            nextEl: '.sw-next-btn',
        }
    });

    new Swiper('.sw-visual-2', {
        slidesPerView: "auto",
        // spaceBetween: 25,
        slidesPerGroup: 2,
        pagination: {
            el: '.sw-latest-pg',
            clickable: true,
        },
        navigation: {
            prevEl: '.sw-latest-prev',
            nextEl: '.sw-latest-next',
        },
        on: {
            slideChange: function () {}
        },
    });
});

window.addEventListener('load', function (e) {
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 2000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

})