/*=======================================================
                        owl-carousel
=======================================================*/
$(document).ready(function () {
    $(".header-owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: true
    });
});


/*=======================================================
                        owl-carousel
=======================================================*/
$(document).ready(function () {
    $(".feature-owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        dots: true,
        autoplay:true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});


/*=======================================================
                        work
=======================================================*/
$("#myDIV .btn").on("click", function () {
    $("#myDIV .btn").removeClass("active");
    $(this).addClass("active");
});

var mixer = mixitup('.work-sample');
// var mixer = mixitup(containerEl);
$(".snake").snakeify({
    speed: 200
});


/*=======================================================
                    team owl-carousel
=======================================================*/
$(document).ready(function () {
    $(".team-owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        dots: true,
        margin: 50,
        center: true,
        autoplay:true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});