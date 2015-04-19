$(document).ready(function() {

      $.backstretch("images/yellow.jpg");

      $("#sticker").sticky({ topSpacing: 0, center:true, className:"hey" });

      $('#map_canvas').googleMaps({
        latitude: 33.6625,
        longitude: -95.5477
        });

});


