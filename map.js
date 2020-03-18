
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

function zoomin(){
	zoom = map.getZoom();
	map.setZoom(zoom+1)
}

function zoomout(){
	zoom = map.getZoom();
	map.setZoom(zoom-1)
}

function left(){
	map.panBy(-100,0)
}

function right(){
	map.panBy(100,0)
}

function up(){
	map.panBy(0,-100)
}

function down(){
	map.panBy(0,+100)
}