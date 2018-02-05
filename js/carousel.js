$('.our-customer-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: '.comment-slider',
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '0',
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ]
});
$('.comment-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    asNavFor: '.our-customer-slider'
});
$('.task-slider').slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '0',
    responsive: [{
        breakpoint: 600,
        settings: {
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }]
});