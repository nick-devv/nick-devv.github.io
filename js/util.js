function close(){
    // .wrap-pop-up .wrap .close
    $('.wrap-pop-up').fadeOut();
    if (typeof(Storage) !== 'undefined') {
      sessionStorage.setItem('pop-up', 'fechou');
    } else {
      console.log('Desculpe! Web Storage não suportado.')
    }
}

function toggle(){
  // .toggle a
  $('nav').toggleClass('active');
}

if ($(window).width() <= 768) {
  function footer(){
    // footer .map .container ul li.title a
    $(this).parent().parent().toggleClass('active');
  }
}

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
    if ($(window).width() <= 992) {
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