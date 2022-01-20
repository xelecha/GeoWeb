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
            description: 'También conocido como <b>Eyjafjöll</b> o <b>Eyjafjalla</b>, es un volcán situado al norte de <a href="https://es.wikipedia.org/wiki/Sk%C3%B3gar">Skógar</a>, en la región de <a href="https://es.wikipedia.org/wiki/Su%C3%B0urland">Suðurland</a>, al sur de Islandia. Tiene entre 1651 m y 1666 m de altitud, y ha estado moderadamente activo en los últimos 8000 años.',
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
            image: 'https://lh5.googleusercontent.com/p/AF1QipMoR2arO5WeUYHpJakzBmXYelhyJ4g5zpNMPfzK=w408-h322-k-no',
            description: '<p>Es un volcán activo del tipo vesubiano situado frente a la <a href=https://es.wikipedia.org/wiki/Golfo_de_N%C3%A1poles">bahía de Nápoles</a> y a unos nueve kilómetros de distancia de la ciudad de Nápoles. Se encuentra en la <a href="https://es.wikipedia.org/wiki/Ciudad_metropolitana_de_N%C3%A1poles">Ciudad metropolitana de Nápoles</a>, perteneciente a la región italiana de la Campania. Tiene una altura máxima de 1281 m s. n. m. y se alza al sur de la cadena principal de los <a href="https://es.wikipedia.org/wiki/Apeninos">Apeninos</a>.</p><p>Es famoso por su erupción del 24 agosto del año 79, en la que fueron sepultados varios núcleos urbanos, entre ellos las ciudades de <a href="https://es.wikipedia.org/wiki/Pompeya">Pompeya</a> y parte de <a href="https://es.wikipedia.org/wiki/Herculano">Herculano</a>.</p>',
            location: {
                center: [14.430965781560618, 40.82254404371828],
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
            description: 'El <b>Etna</b> es un volcán activo en la costa este de <a href="https://es.wikipedia.org/wiki/Sicilia">Sicilia</a>, en el territorio de la <a href="https://es.wikipedia.org/wiki/Ciudad_metropolitana_de_Catania">Ciudad metropolitana de Catania</a>, Italia. Tiene alrededor de 3357 metros de altura, aunque esta varía debido a las constantes erupciones. Es el volcán activo con mayor altura de la <a href="https://es.wikipedia.org/wiki/Placa_Euroasi%C3%A1tica">placa Euroasiática</a>, el primero en referencia a la Europa geográfica y la montaña más alta de Italia al sur de los Alpes. El Etna cubre un área de 1190 km², con una circunferencia basal de 140 kilómetros.',
            location: {
                center: [14.992104524832374, 37.75117360504398],
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
            description: '<p>El <b>Kīlauea</b> es un <a href="https://es.wikipedia.org/wiki/Volc%C3%A1n_en_escudo">volcán en escudo</a>, el más reciente y activo de los cinco que conforman la isla de Hawái. Es uno de los volcanes más activos de la Tierra. Las coladas más antiguas, submarinas, han sido datadas con una antigüedad de cerca de 300 000 años. Emergió sobre el mar hace unos 70 000 años.</p><p> Es el segundo volcán más reciente formado sobre el punto caliente de Hawái y el actual centro eruptivo de la cadena de montes submarinos Hawái-Emperador. El más reciente es el monte submarino <a href="https://es.wikipedia.org/wiki/L%C5%8D%CA%BBihi">Lōʻihi</a> situado a 35 km de la línea de la costa sureste.</p>',
            location: {
                center: [-155.27762802605537, 19.40458454960629],
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
            description: '<p>El <a href="https://es.wikipedia.org/wiki/Monte_Katmai">Monte Katmai</a> es un gran estratovolcán (volcán compuesto) situado al sur de la península de Alaska, ubicado dentro del <a href="https://es.wikipedia.org/wiki/Parque_nacional_y_reserva_Katmai">Parque Nacional y Reserva Katmai</a>. Tiene aproximadamente 6,3 millas (10 km) de diámetro y una caldera central ocupada por un lago de 2 por 3 millas (3,2 por 4,8 km) de tamaño aproximadamente, formada durante la erupción del <a href="https://es.wikipedia.org/wiki/Novarupta">Novarupta</a> en 1912. El borde de la caldera alcanza una elevación máxima de 6,716 pies (2.047 m).</p><p> En 1975, la superficie del lago del cráter estaba a una altura aproximada de 4220 pies (1286 m), y la elevación estimada del piso de la caldera era de 3400 pies (1040 m) aproximadamente. La montaña está ubicada en el distrito de la <a href="https://es.wikipedia.org/wiki/Isla_Kodiak">isla de Kodiak</a>, muy cerca de su frontera con el distrito del lago y la península.</p>',
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
            description: '<p>El <b>Sakurajima</b> (桜島) es un estratovolcán y antigua isla (actualmente está unido a la isla de <a href="https://es.wikipedia.org/wiki/Ky%C5%ABsh%C5%AB">Kyūshū</a>) activo de Japón, situado en el sur de la isla de Kyūshū, en la <a href="https://es.wikipedia.org/wiki/Prefectura_de_Kagoshima">prefectura de Kagoshima</a>. Se encuentra en la parte de la bahía de Kagoshima conocida como bahía de Nishikie.</p><p> Hasta 1914, Sakurajima era una isla, pero debido a una gran erupción, la enorme cantidad de lava que soltó se solidificó y unió la isla con la <a href="https://es.wikipedia.org/wiki/Pen%C3%ADnsula_de_%C5%8Csumi">península de Ōsumi</a>. La actividad volcánica todavía continúa: aún emite grandes coladas de ceniza volcánica.</p>',
            location: {
                center: [130.65776776028605, 31.5828193603316],
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
            image: 'https://www.thehamdenjournal.com/wp-content/uploads/2022/01/Hunga-Tonga-Island-Obliterated-%E2%80%93-NASA-Satellites-Capture-Massive-Blast.gif',
            description: '<p>El <b>Hunga Tonga-Hunga Haʻapai</b> fue un volcán situado unos 30 kilómetros al sureste de <a href=https://es.wikipedia.org/wiki/Fonuafo%27ou> Fonuafoʻou</a> , una isla que forma parte de la nación de <a href="https://es.wikipedia.org/wiki/Tonga">Tonga</a>. En diciembre de 2015, el volcán entró en erupción por segunda vez en cinco años, formando una nueva superficie de tierra emergida entre dos islas anteriormente formadas por el mismo volcán. La isla está formada principalmente por la acumulación de roca magmática fragmentada. Inicialmente, las previsiones estimaban que la isla desaparecería al cabo de unos meses. Sin embargo, un estudio de la NASA afirma que su existencia podría prolongarse entre seis y treinta años, siendo así "la primera isla de este tipo que persiste en la era del satélite moderno". Esta resistencia posiblemente se origine en la mezcla entre rocas y aguas cálidas, que da lugar a una sustancia llamada toba.</p><p>La <a href="https://es.wikipedia.org/wiki/Erupci%C3%B3n_del_Hunga_Tonga_de_2022">reciente y especialmente violenta erupción</a> de este volcán ha producido un tsunami que ha impactado a las islas del país insular y ha generado también un maremoto en Fiyi además de otros países con costas en el Pacífico.',
            location: {
                center: [-175.38166109851198, -20.54101801735869],
                zoom: 14,
                pitch: 60,
                bearing: 120
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
