var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoieGVsZWNoYSIsImEiOiJja3lpeDl2YnIyZ3Z3Mm5uMHFqZHZzd3JoIn0.rijVtBx79_xWHiJgDc41iA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Volcanes',
    subtitle: 'Algunos de los principales volcanes activos de la Tierra',
    byline: 'Xenia Lecha Mora - Master SIG UPC',
    footer: 'Source: Wikipedia',
    chapters: [
        {
            id: 'volcan1',
            alignment: 'left',
            hidden: false,
            title: 'Eyjafjallajökull, Islandia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Eyjafjallaj%C3%B6kull_first_crater_20100329.jpg',
            description: 'También conocido como Eyjafjöll,2​ o Eyjafjalla,3​ es un volcán situado al norte de Skógar, en la región de Suðurland, al sur de Islandia.4​ Tiene entre 1651 m y 1666 m de altitud,​ y ha estado moderadamente activo en los últimos 8000 años.',
            location: {
                center: [-19.62, 63.63],
                zoom: 13.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },{
            id: 'volcan2',
            alignment: 'right',
            hidden: false,
            title: 'Monte Vesubio, Italia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Cr%C3%A1ter_del_Vesubio.jpg',
            description: 'Es un volcán activo del tipo vesubiano situado frente a la bahía de Nápoles y a unos nueve kilómetros de distancia de la ciudad de Nápoles. Se encuentra en la ciudad metropolitana de Nápoles, perteneciente a la región italiana de la Campania. Tiene una altura máxima de 1281 m s. n. m. y se alza al sur de la cadena principal de los Apeninos.',
            location: {
                center: [14.42555555, 40.82138888],
                zoom: 14.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'volcan3',
            alignment: 'left',
            hidden: false,
            title: 'Monte Etna, Italia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/EtnaAvi%C3%B3.JPG',
            description: 'El Etna es un volcán activo en la costa este de Sicilia, en el territorio de la Ciudad metropolitana de Catania, Italia. Tiene alrededor de 3357 metros de altura, aunque esta varía debido a las constantes erupciones. Es el volcán activo con mayor altura de la placa Euroasiática, el primero en referencia a la Europa geográfica y la montaña más alta de Italia al sur de los Alpes. El Etna cubre un área de 1190 km², con una circunferencia basal de 140 kilómetros.',
            location: {
                center: [14.993391951512372, 37.75198820510628],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'volcan4',
            alignment: 'right',
            hidden: false,
            title: 'Kīlauea, Hawái',
            image: 'https://i.blogs.es/490df5/kilauea/1366_2000.jpg',
            description: 'El Kīlauea (en hawaiano: /tiːlɐwˈwɛjə/) es un volcán en escudo, el más reciente y activo de los cinco que conforman la isla de Hawái. Es uno de los volcanes más activos de la Tierra. Las coladas más antiguas, submarinas, han sido datadas con una antigüedad de cerca de 300 000 años.3​ Emergió sobre el mar hace unos 70 000 años. Es el segundo volcán más reciente formado sobre el punto caliente de Hawái y el actual centro eruptivo de la cadena de montes submarinos Hawái-Emperador. El más reciente es el monte submarino Lōʻihi situado a 35 km de la línea de la costa sureste.',
            location: {
                center: [-155.27552501594727, 19.407499221870502],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'volcan5',
            alignment: 'left',
            hidden: false,
            title: 'Monte Katmai, Alaska',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Katmai_Crater_1980.jpg/544px-Katmai_Crater_1980.jpg',
            description: 'El monte Katmai es un gran estratovolcán (volcán compuesto) situado al sur de la península de Alaska, ubicado dentro del Parque Nacional y Reserva Katmai. Tiene aproximadamente 6,3 millas (10 km) de diámetro y una caldera central ocupada por un lago de 2 por 3 millas (3,2 por 4,8 km) de tamaño aproximadamente, formada durante la erupción del Novarupta en 1912. El borde de la caldera alcanza una elevación máxima de 6,716 pies (2.047 m). En 1975, la superficie del lago del cráter estaba a una altura aproximada de 4220 pies (1286 m), y la elevación estimada del piso de la caldera era de 3400 pies (1040 m) aproximadamente. La montaña está ubicada en el distrito de la isla de Kodiak, muy cerca de su frontera con el distrito del lago y la península.',
            location: {
                center: [ -154.99766348465326, 58.25319365419484],
                zoom: 13,
                pitch: 60,
                bearing: -90
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'volcan6',
            alignment: 'right',
            hidden: false,
            title: 'Sakurajaima, Japon',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Kagoshima_and_Sakurajima.jpg',
            description: 'El Sakurajima (桜島?) es un volcán (estratovolcán) activo y antigua isla (actualmente está unida a la de Kyūshū) de Japón, situado en el sur de la isla de Kyūshū, en la prefectura de Kagoshima. Se encuentra en la parte de la bahía de Kagoshima conocida como bahía de Nishikie.1​Hasta 1914, Sakurajima era una isla, pero debido a una gran erupción, la enorme cantidad de lava que soltó se solidificó y unió la isla con la península de Ōsumi.2​ La actividad volcánica todavía continúa: aún emite grandes coladas de ceniza volcánica.',
            location: {
                center: [130.65950741729964, 31.580520534525338],
                zoom: 15,
                pitch: 60,
                bearing: -120
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'volcan7',
            alignment: 'left',
            hidden: false,
            title: 'Hunga Tonga-Hunga Haʻapai, Tonga',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Tonga_Volcano_Eruption_2022-01-15_0410Z_to_0550Z.gif/440px-Tonga_Volcano_Eruption_2022-01-15_0410Z_to_0550Z.gif',
            description: 'El <b>Hunga Tonga-Hunga Haʻapai</b> fue un volcán situado unos 30 kilómetros al sureste de Fonuafoʻou, una isla que forma parte de la nación de Tonga. En diciembre de 2015, el volcán entró en erupción por segunda vez en cinco años, formando una nueva superficie de tierra emergida entre dos islas anteriormente formadas por el mismo volcán. La isla está formada principalmente por la acumulación de roca magmática fragmentada. Inicialmente, las previsiones estimaban que la isla desaparecería al cabo de unos meses. Sin embargo, un estudio de la NASA afirma que su existencia podría prolongarse entre seis y treinta años, siendo así "la primera isla de este tipo que persiste «en la era del satélite moderno»". Esta resistencia tiene un posible origen en la mezcla entre rocas y aguas cálidas, que da lugar a una sustancia llamada toba. La reciente y especialmente violenta erupción de este volcán ha producido un tsunami que ha impactado a las islas del país insular y ha generado también un maremoto en Fiyi además de otros países con costas en el Pacífico.',
            location: {
                center: [-175.38766796201423, -20.532691269506003],
                zoom: 15,
                pitch: 60,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
