$(document).ready(function() {
    function resetButtons() {
        $('.btn-tag').removeClass('btn-clicked').addClass('btn-brand');
    }

    // Event listener 
    $('.btn-tag').click(function() {
        resetButtons();
        $(this).removeClass('btn-brand').addClass('btn-clicked');
        let sectionToShow;
        if ($(this).text().trim() === "Why choose us") {
            sectionToShow = "#why-choose-us";
        } else if ($(this).text().trim() === "How we work") {
            sectionToShow = "#how-we-work";
        } else if ($(this).text().trim() === "Our Mission") {
            sectionToShow = "#our-mission";
        }

        $(".content-section").stop(true, true).fadeOut(500, function() {});

        $(sectionToShow).stop(true, true).fadeIn(500);
    });
});



$(document).ready(function() {
    //Owl
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })

    $('#projects-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            1200: {
                items: 4,
                margin: 8,
            }
        }
    })

    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    })


    $(".project").hover(function() {
        $(this).children(".content").css("background-color", "white");
        $(this).children(".content").children("p").show();
        $(this).children(".content").children("h5").css("color", "black")
        var src = $(this).children(".content").children("img").attr("src")
        var newSrc = src.replaceAll('w', '')
        $(this).children(".content").children("img").attr("src", newSrc)

    }, function() {
        $(this).children(".content").css("background-color", "transparent");
        $(this).children(".content").children("p").hide()
        $(this).children(".content").children("h5").css("color", "white")
        var src = $(this).children(".content").children("img").attr("src")
        var newSrc = src.replaceAll('.png', 'w.png')
        $(this).children(".content").children("img").attr("src", newSrc)
    });
});