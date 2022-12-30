$('.slider').slick({
    centerMode: false,
    // centerPadding: '60px',
    slidesToShow: 2,
    slidesToScroll: 1,
    Infinite: true,
    autoplay: true,
    autoplaySpeed: 1300,
    speed: 1000,
    cssEase: "cubic-bezier(0.175, 0.885, 0.32, 1.475)",
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
