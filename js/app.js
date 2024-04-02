$(document).ready(function() {
    // Function to reset buttons to their primary state
    function resetButtons() {
        $('.btn').removeClass('btn-clicked').addClass('btn-brand');
    }

    // Event listener for mouse click on the buttons
    $('.btn').click(function() {
        // Reset all buttons to primary state
        resetButtons();
        // Change the clicked button to the 'clicked' state
        $(this).removeClass('btn-brand').addClass('btn-clicked');

        // Determine which section to show
        let sectionToShow;
        if ($(this).text().trim() === "Why choose us") {
            sectionToShow = "#why-choose-us";
        } else if ($(this).text().trim() === "How we work") {
            sectionToShow = "#how-we-work";
        } else if ($(this).text().trim() === "Our Mission") {
            sectionToShow = "#our-mission";
        }

        // Ensure all animations stop before starting new ones to avoid queue build-up
        // And use 'stop(true, true)' to clear the queue and complete the current animation immediately.
        $(".content-section").stop(true, true).fadeOut(500, function() {
            // This callback function will be called once for each matching element, leading to multiple calls
            // Therefore, it's better to use fadeOut on all sections together, but fadeIn only the target section outside this callback
        });

        // Correctly fade in the new section without waiting for all fadeOut operations to complete
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