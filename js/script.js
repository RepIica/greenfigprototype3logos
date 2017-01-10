$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		navigation : false,
		slideSpeed : 300,
		paginationSpeed: 400,
		singleItem: true,
		autoPlay : true,
		stopOnHover : true,
		pagination : false
	});
});
function initMap() {

        var uluru = {lat: 40.653213, lng: -74.002794};

        var map = new google.maps.Map(document.getElementById('map'), {

          zoom: 18,

          center: uluru

        });

        var marker = new google.maps.Marker({

          position: uluru,

          map: map

        });

      }
$("#hide").click(function(){
    $("h3").hide();
});