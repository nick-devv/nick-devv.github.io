$(document).ready(function() {
    if (sessionStorage.getItem("pop-up")) {
      $('.wrap-pop-up').remove();
    }
    $('#main-banner ul').slick({
        arrows: true,
        dots: true,
        prevArrow: '.arrows .prev',
        nextArrow: '.arrows .next'
    });
    $('.prateleira ul').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true,
        dots: false,
        prevArrow: '.arrows.prat .prev',
        nextArrow: '.arrows.prat .next',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
    });
    $(".wrap-pop-up .wrap .close").on("click", function() {
        $('.wrap-pop-up').fadeOut();
        if (typeof(Storage) !== "undefined") {
          // Store
          sessionStorage.setItem("pop-up", "fechou");
        } else {
          console.log('Desculpe! Web Storage não suportado.')
        }
    });
    $(".toggle a").on("click", function() {
        $('nav').toggleClass('active');
    });
    $("footer .map .container ul li.title a").on("click", function() {
      $(this).parent().parent().toggleClass('active');
    });
    var isMobile = $(window).width() <= 768,
        isTablet = $(window).width() <= 992,
        isDesktop = $(window).width() >= 1024,
        isDesktopMed = $(window).width() >= 1200,
        isDesktopMax = $(window).width() >= 1400;

    if (isTablet) {
        $('.thumbs ul').slick({
            infinite: true,
            autoplay: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            dots: false,
            variableWidth: false,
            responsive: [
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
        });
    }
});