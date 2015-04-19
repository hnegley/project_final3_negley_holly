$(document).ready(function() {

      $.backstretch("images/yellow.jpg");

      $("#sticker").sticky({ topSpacing: 0, center:true, className:"hey" });

      $('#map_canvas').googleMaps({
        latitude: 33.6625,
        longitude: -95.5477
        });

      function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
          center: new google.maps.LatLng(33.6625, -95.5547),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
            }
         var map = new google.maps.Map(mapCanvas, mapOptions)
            }
        google.maps.event.addDomListener(window, 'load', initialize);

});


