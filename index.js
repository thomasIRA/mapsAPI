let map;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    const mtlLatLng = { lat: 45.508888, lng: -73.561668 }

    /**
     * définir la map -> new Map(élément HTML, Objet config)
     */
    map = new Map(document.getElementById("map"), {
        center: mtlLatLng,
        zoom: 13, //13 ça donne ~~ moitié de mtl
    });

    /**
     * les image utilisées, 
     * voir https://developers.google.com/maps/documentation/javascript/markers
     * pour toutes les options concernant la mod d'un marqueur
     */
    const icon = "./marker.svg";
    const icon2 = "./marker2.svg";


    /**
     * option 1
     * définir le marqueur perso, appartient à l'api google.maps
     * et le placer dans la map défini plus haut
     */
    marker1 = new google.maps.Marker({

        position: mtlLatLng, // ici, le centre de la map

        map: map, // la map définie plus haut

        title: 'marqueur 1', //pas oblig

        icon: icon //ici on demande d'utiliser l'icon défini pluis haut
    })

    /**
     * option 2
     * placer le marqueur manuellement, peut être utile si on veut réagir aux actions
     */
    marker2 = new google.maps.Marker({
        position: { lat: 45.55, lng: -73.6 },
        title: 'marqueur 2', 
        icon: icon2
    })

    /* placer le marqueur */
    marker2.setMap(map)
}

/* init */
initMap();