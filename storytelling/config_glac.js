var config = {
    style: 'mapbox://styles/xelecha/ckzv8nzca000x14p81xvrnoqq',
    accessToken: 'pk.eyJ1IjoieGVsZWNoYSIsImEiOiJja3lpeDl2YnIyZ3Z3Mm5uMHFqZHZzd3JoIn0.rijVtBx79_xWHiJgDc41iA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Glaciares',
    subtitle: 'Breve recorrido por algunos de los glaciares más espectaculares de la Tierra',
    byline: 'Xenia Lecha Mora - Master SIG UPC',
    footer: 'Fuentes: GLIMS - NASA - SCAR - Wikipedia',
    chapters: [
        {
            id: 'glaciar1',
            alignment: 'left',
            hidden: false,
            title: 'Vatnajökull, Islandia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Vatnaj%C3%B6kull.jpeg',
            description: '<p><b>Vatnajökull</b> es el mayor glaciar de Islandia y el segundo de Europa. Cubre un area de 8.100 km² al sudeste del país y corresponde a más del 8 por ciento de la superficie total de la isla. Es el mayor glaciar de Europa en volumen (unos 3.000 km³) y el segundo en área, sólo superado por <a href="https://es.wikipedia.org/wiki/Austfonna">Austfonna</a> en <a href="https://es.wikipedia.org/wiki/Nordaustlandet">Nordaustlandet</a>, en el archipiélago de las <a href="https://es.wikipedia.org/wiki/Svalbard">Svalbard</a> (Noruega).</p><p>El <b>Vatnajökull</b> ha experimentado un continuo retroceso, posiblemente debido al calentamiento global y a la reciente actividad volcánica en el área. En 1980 tenía 8.300 km² mientras que en 1958, 8.538 km².</p>',
            location: {
                center: [-17.294702860760264, 64.25913036599823],
                zoom: 9,
                pitch: 60,
                bearing: -50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'glaciar2',
            alignment: 'right',
            hidden: false,
            title: 'Aletsch, Suiza',
            image: 'https://cdn.getyourguide.com/img/tour/5cd516b88e7ea.jpeg/98.jpg',
            description: '<p>El glaciar <b>Aletsch</b> o Gran Glaciar Aletsch (en alemán: Grosser Aletschgletscher) es el glaciar más grande de los Alpes, con 23 km de longitud y más de 120 km² de superfície. Localizado en el suroeste de Suiza, en el cantón de <a href="https://es.wikipedia.org/wiki/Cant%C3%B3n_del_Valais">Valais</a>, dentro del espacio <a href="https://es.wikipedia.org/wiki/Jungfrau-Aletsch-Bietschhorn">Jungfrau-Aletsch-Bietschhorn</a>, fue declarado Patrimonio de la Humanidad por la Unesco en 2001.</p><p>Los orígenes del glaciar <b>Aletsch</b> se sitúan en los 4.000 m de altura en la cara sur del macizo del Jungfrau, donde se generan separadas tres grandes lenguas, que confluyen algo más abajo en la denominada Plaza de la Concordia (Konkordiaplatz), una extensión de unos 6 km² que se considera propiamente el inicio del glaciar.</p><p>Debido a su gran tamaño, el glaciar <b>Aletsch</b> es relativamente inmune a las fluctuaciones climáticas a corto plazo. Mientras muchos otros glaciares avanzaron de finales de los 70 a principios de los 80, el glaciar <b>Aletsch</b> apenas reaccionó, como tampoco ha reaccionado al calentamiento posterior. Aún así, en los últimos años sí está sufriendo las consecuencias de las elevadas temperaturas y está en claro retroceso, igual que el resto de los glaciares alpinos.</p>',
            location: {
                center: [8.132318767445213, 46.52829513810475],
                zoom: 11,
                pitch: 70,
                bearing: -100
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'glaciar3',
            alignment: 'left',
            hidden: false,
            title: 'Lambert, Antártida',
            image: 'https://media.nationalgeographic.org/assets/photos/000/313/31385.jpg',
            description: '<p>El glaciar <b>Lambert</b> es un glaciar de la <a href="https://es.wikipedia.org/wiki/Ant%C3%A1rtida_Oriental">Antártida Oriental</a>. Con 100 km de ancho, más de 400 km de largo y cerca de 2.500 m de profundidad figura en el Libro Guinness de los récords como el glaciar más grande del mundo. Drena el 8% de la capa de hielo de la Antártida al este y al sur de las montañas Prince Charles y fluye hacia el norte a la <a href="https://es.wikipedia.org/wiki/Barrera_de_hielo_Amery">Barrera de hielo Amery</a>. Fluye en parte de la fosa tectónica Graben y sale del continente en la <a href="https://es.wikipedia.org/wiki/Bah%C3%ADa_Prydz">bahía Prydz</a>.</p><p>Este glaciar es importante en el estudio del cambio climático porque cambios muy pequeños en el clima pueden tener consecuencias significativas en el flujo interno de hielo del glaciar. La mayor parte de los estudios en el glaciar se realizan mediante teledetección debido a las durísimas condiciones climatológicas del área. Tanto es así que ni siquiera existen registros SIG bien definidos de su perímetro, ni en el <a href="https://lastrescrisis.blogspot.com/2014/09/inventario-mundial-glaciares.html">inventario Randolph</a> ni en la base de datos <a href="http://www.glims.org/">GLIMS</a>.</p>',
            location: {
                center: [77.12273559162513, -73.71934403152554],
                zoom: 4,
                pitch: 60,
                bearing: -190
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'glaciar4',
            alignment: 'right',
            hidden: false,
            title: 'Hubbard, Alaska',
            image: 'https://travelingcanucks.com/wp-content/uploads/2019/09/alaska-cruise-0006.jpg',
            description: '<p>El <b>Hubbard</b> es un glaciar situado entre las <a href="https://es.wikipedia.org/wiki/Monta%C3%B1as_San_El%C3%ADas">Montañas San Elías</a> en Alaska (Estados Unidos) y el <a href="https://es.wikipedia.org/wiki/Yuk%C3%B3n">Territorio de Yukón</a> (Canadá).</p><p>Desde su origen en el Territorio de Yukón el glaciar se extiende 122 km hasta la <a href="https://en.wikipedia.org/wiki/Disenchantment_Bay">bahía de Disenchantment</a> y la <a href="https://es.wikipedia.org/wiki/Bah%C3%ADa_de_Yakutat">bahía de Yakutat</a>, convirtiéndolo en el glaciar más largo en Alaska con terminación en el agua. Su fachada mide más de 10 km.</p><p><video autoplay=true controls loop=true width="370"><source src="https://svs.gsfc.nasa.gov/vis/a010000/a013400/a013492/Hubbard_1972_2019_8fps_1080p.webm" type="video/webm"></video></p><p>En este timelapse (parte de un <a href="https://svs.gsfc.nasa.gov/13492">estudio de glaciares de Alaska</a> realizado a lo largo de 48 años por NASA) se pueden observar los movimientos del Hubbard de 1972 a 2019.</p>',
            location: {
                center: [-139.12069459382542, 60.073361723687036],
                zoom: 9,
                pitch: 60,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'glaciar5',
            alignment: 'left',
            hidden: false,
            title: 'Fedchenko, Tajikistan',
            image: 'https://centralasia-adventures.com/image/new/main-slider/fedchenko_glacier.html.jpg',
            description: '<p>El glaciar <b>Fedchenko</b> (en ruso: Федченко ледник) es un gran glaciar en las montañas de <a href="https://en.wikipedia.org/wiki/Pamir_Mountains">Pamir</a>, del centro-norte de <a href="https://en.wikipedia.org/wiki/Gorno-Badakhshan_Autonomous_Region">Gorno-Badakhshan</a>, en el país asiático de Tajikistán.</p><p> El glaciar es largo y estrecho, extiendiéndose en la actualidad a lo largo de 77 kilómetros (48 millas) y abarcando más de 700 kilómetros cuadrados (270 millas cuadradas).</p><p> Es el glaciar más largo del mundo fuera de las regiones polares.</p><p><img src="https://eoimages.gsfc.nasa.gov/images/imagerecords/78000/78967/fedchenko_tm5_2011275_lrg.jpg" style="transform:rotate(180deg);" /></p>',
            location: {
                center: [72.44752631703845, 39.00617061686797],
                zoom: 10,
                pitch: 60,
                bearing: 100
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'glaciar6',
            alignment: 'right',
            hidden: false,
            title: 'Brüggen, Chile',
            image: 'https://revistaenfoque.cl/wp-content/uploads/2016/10/GLACIAR-PIO-XI-1-960x768.jpg',
            description: '<p>El glaciar Pío XI, también conocido como <b>Brüggen</b> o Ana María, se ubica en la <a href="https://es.wikipedia.org/wiki/Regi%C3%B3n_de_Magallanes_y_de_la_Ant%C3%A1rtica_Chilena">Región de Magallanes</a>, en la zona austral de Chile. Forma parte del conjunto de glaciares que se desprenden del <a href="https://es.wikipedia.org/wiki/Campo_de_hielo_patag%C3%B3nico_sur">Campo de Hielo Sur</a>, siendo el mayor de todos ellos y de Sudamérica con sus 1265 km² de superficie. Su parte frontal tiene una anchura aproximada de 7 km y su altura alcanza los 75 metros.</p><p>Esta enorme masa de hielo fue descrita por primera vez por Juan Ladrilleros en 1557, pero sería el sacerdote Alberto de Agostini, en su viaje de exploración de 1945, quien bautizaria definitivamente el enigmático glaciar como Pío XI.</p><p>Afortunadamente, el Brüggen es otro de los glaciares que avanza a pesar del cambio climático. Se estima que de 1945 a hoy, el glaciar ha tenido un aumento neto de 126 km².</p>',
            location: {
                center: [-73.79144754657536, -49.45489837578567],
                zoom: 9,
                pitch: 50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'glaciar7',
            alignment: 'left',
            hidden: false,
            title: 'Franz Josef, Nueva Zelanda',
            image: 'https://rainforest.nz/wp-content/uploads/2020/05/resizedimage300200-Rainforest-Frans-Joseph-Glacier.jpg',
            description: '<p><b>Franz Josef</b> (Ka Roimata o Hinehukatere en maorí) es un glaciar de 12 km de largo ubicado en el <a href="https://es.wikipedia.org/wiki/Parque_nacional_Westland">Parque nacional Westland</a> en la costa oeste de la Isla Sur de Nueva Zelanda. Junto con el Glaciar Fox 20 km al sur, es el único en bajar de los <a href="https://es.wikipedia.org/wiki/Alpes_del_Sur">Alpes del Sur</a> a menos de 300 metros sobre el nivel del mar, en medio del verdor y frondosidad de un bosque templado lluvioso.</p><p>El área que rodea a los dos glaciares es parte de <a href="https://es.wikipedia.org/wiki/Te_Wahipounamu">Te Wahipounamu</a>, un parque catalogado como Patrimonio de la Humanidad. El río que emerge de la terminal del glaciar <b>Franz Josef</b> se conoce como el río <a href="https://en.wikipedia.org/wiki/Waiho_River">Waiho</a>.</p><p>Después de haber retrocedido varios kilómetros entre los años 1940 y 1980, el glaciar entró en una fase de avance en 1984 (ver figura), avanzando en ocasiones a un ritmo espectacular (para los estándares glaciales) de 70 cm al día.</p><p><img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Franz_Jozef_Glacier_NZ_fig13.gif" /></p><p>El avance se mantuvo hasta 2008, pero desde entonces el <b>Franz Josef</b> ha entrado en una fase de rápido retroceso debido al calentamiento global, como la mayoría de los glaciares de Nueva Zelanda.</p>',
            location: {
                center: [170.2166315622821, -43.4220848140082],
                zoom: 12,
                pitch: 70,
                bearing: 60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
