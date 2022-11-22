function Map() {
    var location = {
        lat: 59.255880,
        lng: 11.097490
    };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}