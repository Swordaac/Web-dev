$(document).ready(function() {
    function resetButtons() {
        $('.btn').removeClass('btn-clicked').addClass('btn-brand');
    }

    $('.btn-tag').click(function() {
        resetButtons();
        $(this).removeClass('btn-brand').addClass('btn-clicked');

        let sectionToShow = "";
        switch ($(this).text().trim()) {
            case "Why choose us":
                sectionToShow = "#why-choose-us";
                break;
            case "How we work":
                sectionToShow = "#how-we-work";
                break;
            case "Our Mission":
                sectionToShow = "#our-mission";
                break;
            default:
                // 如果没有匹配的case，可能不需要隐藏显示任何内容
                return; // 直接返回，不执行后面的fadeOut和fadeIn
        }

        $(".content-section").not(sectionToShow).stop(true, true).fadeOut(500);
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