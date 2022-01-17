function addEdificiosCapa() {

    map.addSource("edificios_source", {
        "type": "vector",
        "url": "mapbox://xelecha.3a4nmcio"  // Nuestor ID Tileset

    }); //fin map source


    map.addLayer({
    "id": "edificios",
    "type": "fill-extrusion",
    "source": "edificios_source",
    "source-layer": "construcciones-c14i2x", // Nuestro nombre Tileset
    "maxzoom": 21,
    "minzoom": 15,
   // "filter": [">", "numberOfFl", 0],
    "paint": {
        "fill-extrusion-color": [
            "interpolate", ["linear"], ["number", ["get", "numberOfFl"]],
            0, "#FFFFFF",
            1, "#e6b03d",
            3, "#e6b03d",
            6, "#3de66d",
            9, "#3de6b1",
            12, "#22ecf0",
            15, "#14b1fd",
            20, "#3d73e6",
            40, "#123a8f",
            60, "#ce2f7e",
            106, "#ff4d4d"

        ],
        "fill-extrusion-height": [
            "interpolate",
            ["linear"],
            ["zoom"],
            8, 0,
            12.5, 0,
            14, ["*", 1, ["to-number", ["get", "numberOfFl"]]],
            16, ["*", 1.5, ["to-number", ["get", "numberOfFl"]]],
            20, ["*", 2, ["to-number", ["get", "numberOfFl"]]]
        ],
        "fill-extrusion-opacity": 0.9
    }
}
//,"road-label"
);  

} //fin funcion
