function addRutas() {

    var url = 'datos/rutas.geojson';
    map.addSource('rutas', { type: 'geojson', data: url});

         map.addLayer({
    'id': 'route',
    'type': 'line',
    'source': 'rutas',
    'layout': {
    'line-join': 'round',
    'line-cap': 'round'
    },
    'paint': {
    'line-color': '#ff11cc',
    'line-width': 3
    }
    });

} //fin funcion

function zoomToRutas(valores) {

    var coord = valores.split("/");

    map.flyTo({
            center: [coord[2], coord[1]],
            zoom: coord[0]
        });

    } //fin funcion

