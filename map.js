var map, currentPositionMarker
var kth = {lat: 59.3498092, lng: 18.0684758};
var sodermalm = {lat: 59.314112, lng: 18.066331};
var kungligaOperan = {lat: 59.329319, lng: 18.069632};
var cafeMarkersAndInfo = [];


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: kth,
	zoom: 16,
	mapTypeId: 'satellite',
	disableDefaultUI: true
  });
}

function tiltMap(){
	  map.setCenter(kungligaOperan)
	  map.setTilt(45);
}

function showCurrentPosition(){
	if (currentPositionMarker != null){
		currentPositionMarker.setMap(null);
	}
	currentPositionMarker = new google.maps.Marker({
		map: map,
		draggable: true,
		animation: google.maps.Animation.DROP
	});
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
		  var pos = {
			lat: position.coords.latitude,
			lng: position.coords.longitude
		  };

		  currentPositionMarker.setPosition(pos);
		  map.setCenter(pos);
		  map.setZoom(18);
		}, function() {
		  handleLocationError(true, currentPositionMarker, map.getCenter());
		});
	  } else {
		// Browser doesn't support Geolocation
		handleLocationError(false, currentPositionMarker, map.getCenter());
	  }
}	
function handleLocationError(browserHasGeolocation, currentPositionMarker, pos) {
	currentPositionMarker.setPosition(pos);
	currentPositionMarker.setContent(browserHasGeolocation ?
						  'Error: The Geolocation service failed.' :
						  'Error: Your browser doesn\'t support geolocation.');
}

// Sets the map on all markers in the array.
function addMarkersAndInfo(contentStrings, positions) {
	for (var i = 0; i < positions.length; i++) {
		var content = contentStrings[i];
		var infoWindow = new google.maps.InfoWindow();
		var image = {
			url: './images/rsz_coffee.png',
			size: new google.maps.Size(32, 32),
		}
		var marker = new google.maps.Marker({
			position: positions[i],
			map: map,
			animation: google.maps.Animation.DROP,
			icon: image
		});
		google.maps.event.addListener(marker, 'click', (function(marker, content) {  
			return function() {  
				infoWindow.setContent(content);  
				infoWindow.open(map, marker);  
			}  
		})(marker, content));  
		cafeMarkersAndInfo.push(marker)
	}
}

function setMapOnAll(map) {
	for (var i = 0; i < cafeMarkersAndInfo.length; i++) {
		cafeMarkersAndInfo[i].setMap(map);
	}
  }

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
	setMapOnAll(null);
}

function showCafePositions(){
	clearMarkers();
	var cafeSoderEspresso = {lat: 59.314613, lng: 18.071065};
	var cafeSoderEspressoContent = "<h1>Söder Espresso</h1>"+
								"<h2>En härlig träffpunkt på Söder</h2>"+
								"<p>Välkomna till oss, Kerstin och Youssef på Café Söder Espresso. Vi har varit i Söderhallarna sedan öppningen den 25 september 1992. Vi är ett café av kontinetal klass, där service och kvalitet kommer i första hand. Café Söder Espresso är en blandning mellan café och restaurang. Vi serverar även vin, cava och starköl. Njut på vår uteservering under sommarhalvåret.</p>";
	var cafeTartan = {lat: 59.319520, lng: 18.066557};
	var cafeTartanContent ="<h1>Tårtan Café</h1>"+
						"<p>Hornsgatan 32</br>"+
						"Öppet:  vardagar 8-18</br>"+
						"lördag  9-18   söndag 10-17</br>"+
						"Telefon: 08-641 79 0</p>";
	var cafeGiffi = {lat: 59.314689, lng: 18.034817};
	var cafeGiffiContent = "<h1>Café Giffi</h1>"+
						"<p>Det första Café Giffi slog upp portarna redan för 40 år sedan, mer specifikt 1977, och finns beläget på Hornsgatan 65 på Södermalm. Sedan dess har alltifrån klassiska smörgåsar till uppskattade bakverk serverats av oss. Inne i caféet har tiden stått still. Vi vill visa hur känslan på det anrika Söder en gång kändes, hur allt en gång såg ut. Detta skapar en atmosfär som skiljer sig från dagens många kaféer i närområdet. Då vi öppnar kl 5 och stänger 21 varje vardag passar Café Giffi allas scheman – oavsett om du är ute efter en supertidig frukost eller en sen kvällsfika.</p>";
	var cafeGranden = {lat: 59.312541, lng: 18.058380};
	var cafeGrandenContent = "<h1>Café Gränden</h1>"+
							"<p>Ett stenkast från Stockholms södra station hittar du oss. Vi har funnits sedan 1991 och har idag ett stort utbud av fantastiska sallader, smörgåsar, bakverk och goda maträtter. Vi bjuder catering bl.a. våra fräscha sallader, smörgåstårtor, italiensk buffé. Vi ordnar även kalas på lördagar. Vänliga hälsningar Sonia och personalen!</p>";
	var cafeString = {lat: 59.313350, lng: 18.082058};
	var cafeStringContent = "<h1>Café String</h1>" + 
						"<p>Vi har ett stort menyutbud med varma och kalla mackor, enklare varmrätter samt fräscha sallader. Vi erbjuder té i många olika smaker som avnjuts i enorma koppar. Utsökt kaffé av olika sorter serveras hos oss, du kan även välja en hel termos för dig och ditt sällskap. Frukostbuffén på helgerna är oerhört populär, vill du få plats på övervåningen så är det säkrast att vara här tidigt annars finns det ofta lediga platser på våran mysiga undervåning.</p>";
	map.setCenter(sodermalm);
	map.setZoom(13);
	addMarkersAndInfo([cafeSoderEspressoContent, cafeTartanContent, cafeGiffiContent, cafeGrandenContent, cafeStringContent], [cafeSoderEspresso, cafeTartan, cafeGiffi, cafeGranden, cafeString]);
}
