//Wow js 
new WOW().init();






// Owlcar example 1 start
var owl = $('#bannerSlider');
owl.owlCarousel({
    loop: true,
    nav: true,
    navText: ["prev..", "next.."],
    margin: 15,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        960: {
            items: 1
        },
        1200: {
            items: 1,
            slideBy: 1
        }
    }
});
// Owlcar example 1 end

// Owlcar example 1 start
var owl = $('#owl-demo-2');
owl.owlCarousel({
    loop: true,
    nav: true,
    center: true,
    autoplay: true,
    navText: ["prev..", "next.."],
    margin: 15,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        960: {
            items: 3
        },
        1200: {
            items: 3,
            slideBy: 1
        }
    }
});
// Owlcar example 1 end

