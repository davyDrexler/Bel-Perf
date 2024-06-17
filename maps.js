function initMap() {
    const myLatLng = { lat: 47.62827, lng: 6.85137 };
    const map = new google.maps.Map(document.getElementById("map-container"), {
        zoom: 16,
        center: myLatLng,
    });

    const contentString = `
        <div id="content">
            <h1>Bel-Perf'auto</h1>
            <p><b>Adresse :</b> 1 Rue Molière, 90000 Belfort</p>
            <p><b>Horaires :</b> Lundi - Vendredi : 8h - 18h</p>
            <p><b>Téléphone :</b> +33 1 23 45 67 89</p>
        </div>
    `;

    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });

    const marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Bel-Perf'auto",
    });

    // Ouvrir l'info window automatiquement
    infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
    });

    marker.addListener("click", () => {
        // Redirection vers Google Maps avec un itinéraire prédéfini
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${myLatLng.lat},${myLatLng.lng}`);
    });
}

window.initMap = initMap;