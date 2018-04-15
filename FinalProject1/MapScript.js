function initMap() {
    var CARSA = {lat: 48.468017, lng: -123.310967};
    var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: CARSA
        });
    var marker = new google.maps.Marker({
          position: CARSA,
          map: map
		});
    }
