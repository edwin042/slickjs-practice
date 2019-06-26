$(document).ready(function(){
    $('.carousel').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '80px',
    prevArrow: '<img class="carousel-larr" src="images/carousel-larrow.png">',
    nextArrow: '<img class="carousel-rarr" src="images/carousel-rarrow.png">',
    responsive: [
        {
            breakpoint: 450,
            settings:{
                slidesToShow: 1,
                centerPadding: '30px',
            }
        },
        {
            breakpoint: 800,
            settings:{
                slidesToShow: 1,
                centerPadding: '30px',
            }
        }
    ]
    });
  });