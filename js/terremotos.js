function terremotosGeonamesToGeoJSON(respuestaGeonames){

    var geoJSON ={
        "type": "FeatureCollection",
        "features": []
    };

    for (var i =0; i < respuestaGeonames.earthquakes.length; i++){

        geoJSON.features.push(
            {
                "type": "Feature",
                "properties": {"magnitude":respuestaGeonames.earthquakes[i].magnitude,
                                "datetime":respuestaGeonames.earthquakes[i].datetime },
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    respuestaGeonames.earthquakes[i].lng,
                    respuestaGeonames.earthquakes[i].lat
                  ]
                }
              }
        );

    } //fin loop

    return geoJSON;

    } //fin funcion

function generarPeticionTerremotos() {

        var peticion = 'https://secure.geonames.org/earthquakesJSON?' +
            'north=' + map.getBounds()._ne.lat + '&' +
            'south=' + map.getBounds()._sw.lat + '&' +
            'east=' + map.getBounds()._ne.lng + '&' +
            'west=' + map.getBounds()._sw.lng + '&' +
            'maxRows=70&' +
            'minMagnitude=3&' +
            'username=masterupc&';
            //date : 'yyyy-MM-d
    
        enviarPeticion(peticion).then(function (respuestaGeonames) {
    
            var geoJSON = terremotosGeonamesToGeoJSON(respuestaGeonames);
    
            if (!map.getSource("terremotos_source")) {
    
        map.addSource("terremotos_source", {
                    type: "geojson",
                    data: geoJSON
                });
    
                map.addLayer({
                    'id': 'terremotos',
                    'type': 'circle',
                    'source': 'terremotos_source',
                    'paint': {
                        'circle-color': [
                            'interpolate',
                            ['linear'],
                            ['get', 'magnitude'],
                            3, '#ebe709',
                            5, '#eb1809',
                            7, '#ef4bf2',
                            8, '#800080',
                        ],
                        'circle-opacity': 0.75,
                        'circle-radius': [
                            'interpolate',
                            ['linear'], ['get', 'magnitude'],
                            3, 8,
                            5, 16,
                            8, 32
                        ]
                    }
                });
    
                map.addLayer({
                    'id': 'terremotos-textos',
                    'type': 'symbol',
                    'source': 'terremotos_source',
                    'layout': {
                        'text-field': [                            
                            'format', ['get', 'magnitude'],                               
                        ],
                        'text-size': 10
                    },
                    'paint': {
                        'text-color': 'rgba(255,255,255,1)'
                    }
                });
    
    
            } else {
    
                map.getSource("terremotos_source").setData(geoJSON);
    
            }
    
        });
    
} // fin funcion    