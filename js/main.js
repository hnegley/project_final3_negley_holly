$(document).ready(function() {

      $('#map_canvas').googleMaps({
        latitude: 42.351505,
        longitude: -71.094455
        });

        $('#container').isotope({
        // options...
        itemSelector: '.item',
        masonry: {
        columnWidth: 200
        }
        });

}


