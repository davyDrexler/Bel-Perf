function initMap() {
    var myLatLng = {lat: 47.628265771191835, lng: 6.848797977088819};
    var mapOptions = {
        zoom: 15,
        center: myLatLng
    };
    var map = new google.maps.Map(document.getElementById('map-container'), mapOptions);
    
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Adresse'
    });
}
