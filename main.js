$(document).ready(function(){
  $.scrollIt({
    topOffset: -150
  });
  $(document).ready(function() {
    $("#news-slider").owlCarousel({
 
        margin: 15,
        pagination:false,
        navigationText:false,
        autoPlay:true,
        responsiveClass:true,
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 2
              },
              1000: {
                  items: 4
              }

          }
    });
});

$('.app-carousel').owlCarousel({
  loop: true,
  margin: 15,
  responsiveClass:true,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 2
      },
      1000: {
          items: 4
      }
  }
});
});