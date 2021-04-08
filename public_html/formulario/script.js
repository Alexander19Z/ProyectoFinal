<script>
 var x = document.getElementById("demo");

 function getLocation() {
   if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
    x.innerHTML = "Este navegador no admite la geolocalización.";
    }
   }

 function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
    }
    
    function showError(error) {
    switch(error.code) {
     case error.PERMISSION_DENIED:
      x.innerHTML = "El usuario denegó la solicitud de geolocalización."
      break;
     case error.POSITION_UNAVAILABLE:
      x.innerHTML = "La información de ubicación no está disponible."
      break;
     case error.TIMEOUT:
      x.innerHTML = "Se agotó el tiempo de espera de la solicitud para obtener la ubicación del usuario."
      break;
     case error.UNKNOWN_ERROR:
      x.innerHTML = "Un error desconocido ocurrió."
      break;
     }
    }
    
    function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";

    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
   }
   </script>
