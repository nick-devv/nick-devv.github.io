$(document).ready(function() {
    // no click do botão fechar do pop-up, fecha-o e salva a informação no 
    //storage da sessão aberta do navegador, que é limpo quando este é fechado
    $(".wrap-pop-up .wrap .close").on("click", function() {
      $('.wrap-pop-up').fadeOut();
      if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("pop-up", "fechou");
      } else {
        console.log('Desculpe! Web Storage não suportado.')
      }
    });
    //remove o pop up caso o identifique o localstorage salvo
    if (sessionStorage.getItem("pop-up")) {
      $('.wrap-pop-up').remove();
    }
    //slick do banner principal
    $('#main-banner ul').slick({
        arrows: true,
        dots: true,
        prevArrow: '.arrows .prev',
        nextArrow: '.arrows .next'
    });
    //slick da prateleira
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
    if ($(window).width() <= 992) {
        // ativa o slick das areas de thumbs no mobile 

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
        
        // abre e fecha o menu no mobile 
        $(".toggle a").on("click", function() {
          $('nav').toggleClass('active');
        });
        
        //abre e fecha menus do footer no mobile
        $("footer .map .container ul li.title a").on("click", function() {
          $(this).parent().parent().toggleClass('active');
        });
    }
});