var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 59.3498092, lng: 18.0684758},
	zoom: 25,
	mapTypeId: 'satellite',
	disableDefaultUI: true
  });
}

function tiltMap(){
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 59.329319, lng: 18.069632},
		zoom: 25,
		mapTypeId: 'satellite',
		disableDefaultUI: true
	  });
	  map.setTilt(45);
}