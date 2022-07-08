$(document).ready(() => {
    $('.carousel-videos-first').slick({
        dots: false,
        prevArrow: '.slider-prev-first',
        nextArrow: '.slider-next-first',
        arrows: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1105,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 846,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    })
    $('.carousel-videos-second').slick({
        dots: false,
        prevArrow: '.slider-prev-second',
        nextArrow: '.slider-next-second',
        arrows: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1105,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 846,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    })
})