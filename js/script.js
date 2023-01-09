jQuery(document).ready(function(){

    var card = $('.card');

    card.click(function(){
       $(this).toggleClass('is-flipped');
    });

      // Mobile Menu
      $("#openmenu").click(function (event) {
        event.preventDefault();
        $("#nav").animate({
           'left': 0
        }, 500);
     });
     $("#closemenu").click(function (event) {
        event.preventDefault();
        $("#nav").animate({
           'left': '-320px'
        }, 500);
     });
     $(".menu li a").on("click", function (event) {
        event.preventDefault();
        $("#nav").animate({
           'left': '-320px'
        }, 500);
     });
      // Scroll Menu
    $(".menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
           top = $(id).offset().top;
        $('body,html').animate({
           scrollTop: top
        }, 1500);
     });


}); // ready