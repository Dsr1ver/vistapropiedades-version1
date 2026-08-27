// --- DATOS DE LAS PROPIEDADES (Con múltiples fotos para el slider) ---
const propiedades = [
  {
    id: 1,
    titulo:
      "Hemosa casa en arriendo muy cerca de Bahía Inglesa, sector tranquilo.",
    tipo: "arriendo",
    sector: "Bahía Inglesa",
    precio: "-",
    imagenes: [
      "imagenes/propiedadesnelly/arriendos/bahía inglesa/1/1.png",
      "imagenes/propiedadesnelly/arriendos/bahía inglesa/1/2.jpeg",
      "imagenes/propiedadesnelly/arriendos/bahía inglesa/1/3.jpeg",
      "imagenes/propiedadesnelly/arriendos/bahía inglesa/1/4.jpeg",
    ],
    desc: "Se arrienda casa con excelente ubicación: solo 3 minutos de Bahía Inglesa. Puede ser totalmente amoblada o también semiamoblada, a gusto del cliente. Tiene 3 dormitorios impecables, 2 baños modernos con ducha incluida para mayor seguridad de las personas, una hermosa living comedor como se ve en la foto. También tiene patio amplio. Está en un sector tranquilo.",
    ubicacion: "Bahía Inglesa",
    piezas: "3 Dormitorios, living comedor, cocina",
    banos: 1,
    patio: "Sí, amplio",
    estacionamiento: "No",
  },
  {
    id: 2,
    titulo: "Departamentos en Mirador de Charito en arriendo, Caldera",
    tipo: "arriendo",
    sector: "Caldera",
    precio: "$-",
    imagenes: [
      "imagenes/propiedadesnelly/arriendos/caldera/1/1.png",
      "imagenes/propiedadesnelly/arriendos/caldera/1/2.png",
      "imagenes/propiedadesnelly/arriendos/caldera/1/3.png",
      "imagenes/propiedadesnelly/arriendos/caldera/1/4.png",
    ],
    desc: "Departamentos cómodos al alcance de tu mano, cuentan con 3 dormitorios donde 2 de ellos son para dos personas y 1 es individual y tiene un gran clóset, 2 baños con ducha y shower door, ventilación natural, un living comedor amplio para 6 personas, y cuenta con cocina equipada.También, tienen una amplia terraza y vista al mar. Todo esto a pasos del supermercado, plaza, restaurantes, parque, puerto, colegios y terminal de buses.",
    ubicacion: "Caldera",
    piezas: 3,
    banos: 2,
    patio: "Terraza",
    estacionamiento: "No",
  },
  {
    id: 3,
    titulo: "Gran casa de dos pisos en arriendo en Caldera.",
    tipo: "arriendo",
    sector: "Caldera",
    precio: "$-",
    imagenes: [
      "imagenes/propiedadesnelly/arriendos/caldera/2/1.jpeg",
      "imagenes/propiedadesnelly/arriendos/caldera/2/2.jpeg",
      "imagenes/propiedadesnelly/arriendos/caldera/2/3.jpeg",
    ],
    desc: "La casa cuenta con 4 dormitorios de gran amplitud, también tiene 2 baños, living comedor, cocina comedor, patio y estacionamiento. Nótese que donde la casa es grande, caben dos comedores. Tiene buena disposición para recibir visitas, pues se accede desde el living, si se continúa se llega a la cocina comedor y las habitaciones no quedan a la vista. Cuenta con buena iluminación, natural. El living, comedor y cocina están dispuestos en orden para acceder de forma rápida. Cuenta con estacionamiento. Se arrienda por año corrido. ",
    ubicacion: "Caldera",
    piezas: "4 dormitorios, living comedor, cocina",
    banos: "2 baños",
    patio: "Sí",
    estacionamiento: "Espacio amplio",
  },
  {
    id: 4,
    titulo: "Departamento en el centro de Caldera en arriendo",
    tipo: "arriendo",
    sector: "Caldera",
    precio: "$-",
    imagenes: [
      "imagenes/propiedadesnelly/arriendos/caldera/3/1.jpeg",
      "imagenes/propiedadesnelly/arriendos/caldera/3/2.jpeg",
      "imagenes/propiedadesnelly/arriendos/caldera/3/3.jpeg",
      "imagenes/propiedadesnelly/arriendos/caldera/3/4.jpeg",
      "imagenes/propiedadesnelly/arriendos/caldera/3/5.jpeg",
    ],
    desc: "Impecable departamento en arriendo, tiene 2 dormitorios de buen tamaño, con iluminación natural y camas incluidas. Tiene un baño muy grande que incluso tiene 2 lavamanos. Cuenta con un moderno living comedor cocina, abierto para mayor luminosidad y sociabilidad. Tiene un cómodo sillón para relajarse, mesa acorde al tamaño de la habitación y redonda para mayor confort. Se incluye una isla de cocina con barra integrada para preparar alimentos o para sentarse a comer.",
    ubicacion: "Caldera",
    piezas: "dos piezas, living comedor, cocina",
    banos: 1,
    patio: "No",
    estacionamiento: "No",
  },
  {
    id: 5,
    titulo: "Acogedor departamento en el centro de Caldera en arriendo",
    tipo: "arriendo",
    sector: "Caldera",
    precio: "-",
    imagenes: [
      "imagenes/propiedadesnelly/arriendos/caldera/4/1.jpeg",
      "imagenes/propiedadesnelly/arriendos/caldera/4/2.jpeg",
      "imagenes/propiedadesnelly/arriendos/caldera/4/3.jpeg",
      "imagenes/propiedadesnelly/arriendos/caldera/4/4.jpeg",
    ],
    desc: "Acogedor departamento que tiene una gran ubicación central en Caldera. Tiene 2 dormitorios de buen tamaño, con luz natural y piso flotante. Tiene una moderna cocina comedor, un living con sillón grande, mucha luz natural y buena ventilación. También el baño que tiene es de buen tamaño, con una ducha grande y cómoda. Además, la decoración del sitio es bonita y todo está impecable.",
    ubicacion: "Centro, Caldera",
    piezas: "dos dormitorios, living comedor, cocina",
    banos: 1,
    patio: "No",
    estacionamiento: "Sin estacionamiento",
  },
  {
    id: 6,
    titulo: "Hermosa casa en arriendo en centro de Caldera, 3 dormitorios",
    tipo: "arriendo",
    sector: "Caldera",
    precio: "$-",
    imagenes: [
      "imagenes/propiedadesnelly/arriendos/caldera/5/1.jpeg",
      "imagenes/propiedadesnelly/arriendos/caldera/5/2.jpeg",
      "imagenes/propiedadesnelly/arriendos/caldera/5/3.jpeg",
    ],
    desc: "Se arrienda casa con muy buena ubicación, pues está en el centro de Caldera. Viene totalmente amoblada para mayor comodidad y que no debas molestarte en comprar muebles o tener que rearmarlos. Cuenta con 3 dormitorios de muy buen tamaño, bien decorados y privados, ideales para un buen descanso. El dormitorio principal tiene baño en suite. El living comedor y cocina es amplio, con diseño moderno, trae varios muebles para ordenar bien el área y tiene la ventaja de mejorar la sociabilidad. El comedor que se incluye es para 6 personas, ideal para familias numerosas, trabajadores o roomies. Tiene 2 baños de buen tamaño, ambos con ducha para así tener menos riesgos de accidentes.  Si quieres arrendar esta hermosa casa u obtener más información sin compromiso, ¡escríbeme al WhatsApp!",
    ubicacion: "Caldera",
    piezas: "3 Dormitorios, Living comedor y Cocina",
    banos: "2 Baños",
    patio: "No",
    estacionamiento: "No",
  },
  {
    id: 7,
    titulo: "Precioso departamento en arriendo en pleno centro de Caldera",
    tipo: "arriendo",
    sector: "Caldera",
    precio: "-",
    imagenes: [
      "imagenes/propiedadesnelly/arriendos/caldera/6/1.jpeg",
      "imagenes/propiedadesnelly/arriendos/caldera/6/2.jpeg",
      "imagenes/propiedadesnelly/arriendos/caldera/6/3.jpeg",
      "imagenes/propiedadesnelly/arriendos/caldera/6/5.jpeg",
    ],
    desc: "Se arrienda departamento muy bien decorado, amoblado, con estacionamiento y muy buena ubicación, porque está en el centro de Caldera. Tiene una hermosa terraza con espectacular vista al mar, se incluye una parrilla y mesa con sillas para comer asado afuera, ya sea con el calor del sol o con el brillo de las estrellas. El living cocina comedor integrado es muy grande, con tendencia moderna, buena sociabilización y con una iluminación natural excelente.  Ideal para quienes disfrutan de espacios abiertos y acogedores donde compartir con familia y/o amigos. Se incluye un bar para mayor disfrute. También cuenta con 2 dormitorios de tamaño amplio, se incluyen clósets de gran tamaño. Posee 2 baños de buen tamaño, uno con ducha y el otro con tina, para que puedas elegir si tomar un baño corto y enérgico o uno largo y relajante. Háblame al WhatsApp y aprovecha este arriendo mensual o arriendo diario en Caldera. ",
    ubicacion: "Caldera",
    piezas: "2 Dormitorios, Cocina y Living Comedor",
    banos: "2 Baños",
    patio: "Terraza con vista al mar",
    estacionamiento: "Sí",
  },
  {
    id: 8,
    titulo:
      "Hermoso departamento en arriendo en el centro de Caldera, piso uno.",
    tipo: "arriendo",
    sector: "Caldera",
    precio: "$-",
    imagenes: [
      "imagenes/propiedadesnelly/arriendos/caldera/7/1.jpeg",
      "imagenes/propiedadesnelly/arriendos/caldera/7/2.jpeg",
      "imagenes/propiedadesnelly/arriendos/caldera/7/3.jpeg",
      "imagenes/propiedadesnelly/arriendos/caldera/7/4.jpeg",
    ],
    desc: "Este departamento cuenta con una muy buena ubicación, está en un primer piso para mayor comodidad de acceso, ideal para quienes quieren evitar usar escaleras. Cuenta con estacionamiento, lo que no es tan fácil de encontrar en un departamento. Tiene un diseño moderno de espacios comunes con amplitud de vista y con buena iluminación natural, lo que crea un ambiente ideal para compartir con familia o amistades. Posee 2 dormitorios con clóset, muy buena iluminación natural, ideales para un buen descanso. Posee 2 baños de buen tamaño, ambos con ducha y shower door para mayor comodidad e higiene. ¿Te interesa este departamento? Escríbeme hoy mismo al WhatsApp y te cuento más detalles.",
    ubicacion: "Caldera",
    piezas: "2 dormitorios, living comedor y cocina",
    banos: "2",
    patio: "No",
    estacionamiento: "Sí",
  },

  {
    id: 9,
    titulo: "Se arrienda departamento en playa Loreto, frente al mar",
    tipo: "arriendo",
    sector: "Otros sectores",
    precio: "$-",
    imagenes: [
      "imagenes/propiedadesnelly/arriendos/otros sectores/loreto/1/1.jpeg",
      "imagenes/propiedadesnelly/arriendos/otros sectores/loreto/1/2.jpeg",
      "imagenes/propiedadesnelly/arriendos/otros sectores/loreto/1/3.jpeg",
      "imagenes/propiedadesnelly/arriendos/otros sectores/loreto/1/4.jpeg",
      "imagenes/propiedadesnelly/arriendos/otros sectores/loreto/1/5.jpeg",
    ],
    desc: "El departamento tiene 2 habitaciones, baño con ducha, balcón y cocina comedor. Está ubicado frente al mar, por lo que la vista es espectacular. Se puede arrendar por meses o diario.",
    ubicacion: "Loreto",
    piezas: "2 dormitorios, living comedor y cocina",
    banos: "1",
    patio: "Balcón",
    estacionamiento: "No",
  },

  {
    id: 10,
    titulo:
      "Se arrienda o vende casa en Calderilla. Casa muy grande, 7 dormitorios y estacionamiento para varios vehículos.",
    tipo: "arriendo",
    sector: "Otros sectores",
    precio: "$-",
    imagenes: [
      "imagenes/propiedadesnelly/arriendos/otros sectores/Calderilla/Casa Calderilla 1/1.png",
      "imagenes/propiedadesnelly/arriendos/otros sectores/Calderilla/Casa Calderilla 1/2.jpeg",
      "imagenes/propiedadesnelly/arriendos/otros sectores/Calderilla/Casa Calderilla 1/3.jpeg",
      "imagenes/propiedadesnelly/arriendos/otros sectores/Calderilla/Casa Calderilla 1/4.jpeg",
    ],
    desc: "La casa cuenta con 7 maravillosos dormitorios de gran amplitud, ideal para familias numerosas, con trabajo en casa, empresas que necesiten alojar trabajadores o personas que simplemente disfruten de tener mucho espacio. Tiene 2 baños, un gran living comedor cocina, cuyo tamaño va acorde al número de personas que pueden vivir en casa. También cuenta con un quincho y estacionamiento amplio para varios vehículos. La ubicación es ideal, pues es tranquilo, queda a solo pasos de la playa, e igualmente queda cerca de playa Loreto y de Caldera.",
    ubicacion: "Calderilla",
    piezas: "7 Dormitorios, living comedor, cocina y quincho",
    banos: "2 baños",
    patio: "Si",
    estacionamiento: "Sí, muy amplio",
  },

  {
    id: 11,
    titulo:
      "Se arrienda o vende casa en Calderilla. Casa muy grande, 7 dormitorios y estacionamiento para varios vehículos.",
    tipo: "venta",
    sector: "Otros sectores",
    precio: "$6.000 UF",
    imagenes: [
      "imagenes/propiedadesnelly/arriendos/otros sectores/Calderilla/Casa Calderilla 1/1.png",
      "imagenes/propiedadesnelly/arriendos/otros sectores/Calderilla/Casa Calderilla 1/2.jpeg",
      "imagenes/propiedadesnelly/arriendos/otros sectores/Calderilla/Casa Calderilla 1/3.jpeg",
      "imagenes/propiedadesnelly/arriendos/otros sectores/Calderilla/Casa Calderilla 1/4.jpeg",
    ],
    desc: "La casa cuenta con 7 maravillosos dormitorios de gran amplitud, ideal para familias numerosas, con trabajo en casa, empresas que necesiten alojar trabajadores o personas que simplemente disfruten de tener mucho espacio. Tiene 2 baños, un gran living comedor cocina, cuyo tamaño va acorde al número de personas que pueden vivir en casa. También cuenta con un quincho y estacionamiento amplio para varios vehículos. La ubicación es ideal, pues es tranquilo, queda a solo pasos de la playa, e igualmente queda cerca de playa Loreto y de Caldera.",
    ubicacion: "Calderilla",
    piezas: "7 Dormitorios, living comedor, cocina y quincho",
    banos: "2 baños",
    patio: "Si",
    estacionamiento: "Sí, muy amplio",
  },

  {
    id: 12,
    titulo:
      "Se vende gran casa en Caldera, tiene 4 dormitorios, living, patio y estacionamiento separados. ",
    tipo: "venta",
    sector: "Caldera",
    precio: "$-",
    imagenes: [
      "imagenes/propiedadesnelly/ventas/caldera/1/casa caldera 1.0.jpg",
      "imagenes/propiedadesnelly/ventas/caldera/1/casa caldera 1.1.jpg",
      "imagenes/propiedadesnelly/ventas/caldera/1/casa caldera 1.2.jpg",
      "imagenes/propiedadesnelly/ventas/caldera/1/casa caldera 1.3.jpg",
      "imagenes/propiedadesnelly/ventas/caldera/1/casa caldera 1.4.jpg",
      "imagenes/propiedadesnelly/ventas/caldera/1/casa caldera 1.5.jpg",
    ],
    desc: " Se vende casa en Caldera con 4 dormitorios de muy buen tamaño, baño con ducha para mayor seguridad. Living y cocina comedor con suelo de baldosas para mayor higiene. También cuenta con un patio amplio y un estacionamiento separado con hermoso portón de madera. ",
    ubicacion: "Caldera",
    piezas: "4 Dormitorios, living comedor y cocina ",
    banos: "1 baño",
    patio: "Si, amplio",
    estacionamiento: "Sí",
  },

  {
    id: 13,
    titulo:
      "Se vende casa esquina de un solo piso, tiene estacionamiento, 3 dormitorios, sector tranquilo.  ",
    tipo: "venta",
    sector: "Caldera",
    precio: "$-",
    imagenes: [
      "imagenes/propiedadesnelly/ventas/caldera/2 esquina/2.0.jpg",
      "imagenes/propiedadesnelly/ventas/caldera/2 esquina/2.1.jpg",
      "imagenes/propiedadesnelly/ventas/caldera/2 esquina/2.2.jpg",
      "imagenes/propiedadesnelly/ventas/caldera/2 esquina/2.3.jpg",
      "imagenes/propiedadesnelly/ventas/caldera/2 esquina/2.4.jpg",
      "imagenes/propiedadesnelly/ventas/caldera/2 esquina/2.5.jpg",
    ],
    desc: "Acogedora casa de un piso en la ciudad de Caldera, ubicada en sector tranquilo. La disposición es buena para recibir visitas, pues cuenta con 3 dormitorios a los que se accede desde un pasillo, tiene un baño amplio con ventilación natural y buena iluminación. El living, comedor y cocina están dispuestos en orden para acceder de forma rápida. Cuenta con estacionamiento. ",
    ubicacion: "Caldera",
    piezas: "3 Dormitorios, living comedor y cocina ",
    banos: "1 baño",
    patio: "Si, amplio",
    estacionamiento: "Sí",
  },

  {
    id: 14,
    titulo:
      "Se vende casa de gran tamaño cuenta con 3 dormitorios, 2 baños, estacionamiento, 2 bodegas. ",
    tipo: "venta",
    sector: "Caldera",
    precio: "$-",
    imagenes: [
      "imagenes/propiedadesnelly/ventas/caldera/3/3.0.jpg",
      "imagenes/propiedadesnelly/ventas/caldera/3/3.1.jpg",
      "imagenes/propiedadesnelly/ventas/caldera/3/3.2.jpg",
      "imagenes/propiedadesnelly/ventas/caldera/3/3.3.png",
      "imagenes/propiedadesnelly/ventas/caldera/3/3.4.jpg",
    ],
    desc: "La casa en general tiene buena iluminación natural, posee 3 dormitorios amplios con closet. También tiene 2 baños grandes y ducha para seguridad. Tanto el living comedor como la cocina tienen un gran tamaño. Incluso se puede tener una oficina. Cuenta con 1 estacionamiento y 2 bodegas, lo que le da un plus. La propiedad tiene 142 m2 construidos y se encuentra cercana a colegios. ",
    ubicacion: "Caldera",
    piezas: "3 Dormitorios, living comedor, cocina y bodega ",
    banos: "2 baños",
    patio: "Si",
    estacionamiento: "Sí",
  },

  {
    id: 15,
    titulo:
      "Se vende casa de 90 m2 construida en gran terreno de 293 m2. Posee una maravillosa vista al mar y está ubicada en zona céntrica",
    tipo: "venta",
    sector: "Caldera",
    precio: "$-",
    imagenes: [
      "imagenes/propiedadesnelly/ventas/caldera/4/casa 4.0.jpg",
      "imagenes/propiedadesnelly/ventas/caldera/4/casa 4.1.jpg",
      "imagenes/propiedadesnelly/ventas/caldera/4/casa 4.2.jpg",
      "imagenes/propiedadesnelly/ventas/caldera/4/casa 4.3.jpg",
      "imagenes/propiedadesnelly/ventas/caldera/4/casa 4.4.jpg",
    ],
    desc: "Casa construida sobre un gran terreno con preciosa vista al mar en Caldera. La casa mide 90 m2 y el terreno es de 293 m2. La ubicación es inmejorable: Isla Lenox, sector céntrico y patrimonial de la ciudad. Posee 3 dormitorios, living comedor, gran estacionamiento donde caben al menos 2 vehículos grandes, 1 baño con ducha, cocina y una terraza semi techada, ideal para relajarse.",
    ubicacion: "Caldera",
    piezas: "3 Dormitorios, living comedor, cocina y terraza ",
    banos: "1 baño",
    patio: "Si",
    estacionamiento: "Sí, amplio",
  },

  {
    id: 16,
    titulo:
      "Se vende casa en Caldera cerca de Bahía Inglesa: 3 habitaciones, estacionamiento. Cercana a negocios, colegios y locomoción ",
    tipo: "venta",
    sector: "Caldera",
    precio: "$-",
    imagenes: [
      "imagenes/propiedadesnelly/ventas/caldera/5/5.0.png",
      "imagenes/propiedadesnelly/ventas/caldera/5/casa 5.1.jpg",
      "imagenes/propiedadesnelly/ventas/caldera/5/casa 5.2.jpg",
      "imagenes/propiedadesnelly/ventas/caldera/5/casa 5.3.jpg",
      "imagenes/propiedadesnelly/ventas/caldera/5/casa 5.4.jpg",
    ],
    desc: "Se vende casa con muy buena ubicación. Está cercana a locomoción, colegios y negocios. Además, está a tan solo 10 minutos de Bahía Inglesa, lugar top de la región de Atacama. Posee 3 dormitorios, uno de ellos se puede utilizar como oficina si se desea.  Living comedor es de buen tamaño y con buena iluminación. La cocina está separada.  Tiene 1 baño con ducha, lo que es ideal para tener menos riesgos de accidentes.  Cuenta con bodega de gran tamaño para mantener el orden.",
    ubicacion: "Caldera",
    piezas: "3 Dormitorios, living comedor, cocina y bodega ",
    banos: "1 baño",
    patio: "Si",
    estacionamiento: "Sí",
  },

  {
    id: 17,
    titulo: "Se vende terreno a 3 minutos de Bahía Inglesa",
    tipo: "venta",
    sector: "Bahía Inglesa",
    precio: "$-",
    imagenes: [
      "imagenes/propiedadesnelly/ventas/bahía inglesa/1/terreno bahia 1.0.jpg",
      "imagenes/propiedadesnelly/ventas/bahía inglesa/1/terreno bahia 1.1.jpg",
    ],
    desc: "Terreno ubicado a solo 3 minutos de Bahía Inglesa, tiene un tamaño de 400 m2. Está totalmente cerrado con panderetas. Se encuentra ubicado en sector tranquilo y seguro.",
    ubicacion: "Bahía Inglesa",
    piezas: "- ",
    banos: "-",
    patio: "-",
    estacionamiento: "-",
  },

  {
    id: 18,
    titulo:
      "Se venden terrenos en sector Chamonate (Lote 8A-18 y Lote 8A-19), cerca de la ciudad de Copiapó. ",
    tipo: "venta",
    sector: "Copiapó",
    precio: "$-",
    imagenes: [
      "imagenes/propiedadesnelly/ventas/copiapó/lomas de chamonate/opcion 1/1.0.jpg.png",
      "imagenes/propiedadesnelly/ventas/copiapó/lomas de chamonate/opcion 1/1.1.png",
    ],
    desc: "Superficie por cada terreno de 5000 m2. Loteo ubicado en la intersección de las Rutas C-327 camino hacia Mina Galleguillos y C-357 camino hacia Cerro Imán. En ambos casos hay factibilidad de acceso a tener electricidad. ",
    ubicacion: "Copiapó",
    piezas: "- ",
    banos: "-",
    patio: "-",
    estacionamiento: "-",
  },

  {
    id: 19,
    titulo:
      "Se venden terrenos en sector Chamonate (Lote 8A-9 y Lote 8A-10), cerca de la ciudad de Copiapó. ",
    tipo: "venta",
    sector: "Copiapó",
    precio: "$-",
    imagenes: [
      "imagenes/propiedadesnelly/ventas/copiapó/lomas de chamonate/opcion 2/2.1..png",
      "imagenes/propiedadesnelly/ventas/copiapó/lomas de chamonate/opcion 2/2.2.png",
    ],
    desc: "Superficie Lote 8A-10: 5000m2 y Superficie Lote 8A-9: 6939,19m2. Loteo ubicado en la intersección de las Rutas C-327 camino hacia Mina Galleguillos y C-357 camino hacia Cerro Imán. En ambos casos hay factibilidad de acceso a tener electricidad.",
    ubicacion: "Copiapó",
    piezas: "- ",
    banos: "-",
    patio: "-",
    estacionamiento: "-",
  },

  {
    id: 20,
    titulo:
      "Se vende casa muy grande y hermosa, ubicada en Calderilla, queda cerca de playas Bahía Inglesa y Loreto sur ",
    tipo: "venta",
    sector: "Otros sectores",
    precio: "$-",
    imagenes: [
      "imagenes/propiedadesnelly/ventas/otros sectores/1/1.1.jpg",
      "imagenes/propiedadesnelly/ventas/otros sectores/1/Casa Grande Calderilla Sur 1.0.jpg",
    ],
    desc: "Se vende casa de dos pisos muy grande y hermosa, ubicada en Calderilla en un sector tranquilo. Queda cerca de playas Bahía Inglesa y Loreto sur. La casa tiene 6 dormitorios con buena iluminación y de gran tamaño. Tiene 2 baños, living comedor de buen tamaño, cocina y cuenta con 3 estacionamientos. Tiene un patio grande y quincho. ",
    ubicacion: "Calderilla, cerca de Loreto sur",
    piezas: "6",
    banos: "2",
    patio: "Sí, y Quincho",
    estacionamiento: "Sí, amplio",
  },

  {
    id: 21,
    titulo:
      "Se vende parcela en Valle Fértil, a solo 5 minutos de la carretera, tiene piscina y pozo. ",
    tipo: "venta",
    sector: "Otros sectores",
    precio: "$-",
    imagenes: [
      "imagenes/propiedadesnelly/ventas/otros sectores/2 valle fertil/2.0.jpg",
      "imagenes/propiedadesnelly/ventas/otros sectores/2 valle fertil/2.1.jpg",
      "imagenes/propiedadesnelly/ventas/otros sectores/2 valle fertil/2.2.jpg",
      "imagenes/propiedadesnelly/ventas/otros sectores/2 valle fertil/2.3.jpg",
      "imagenes/propiedadesnelly/ventas/otros sectores/2 valle fertil/2.4.jpg",
      "imagenes/propiedadesnelly/ventas/otros sectores/2 valle fertil/2.5.jpg",
      "imagenes/propiedadesnelly/ventas/otros sectores/2 valle fertil/2.6.jpg",
    ],
    desc: "En venta parcela ubicada en Valle Fértil, a solo 5 minutos de la carretera, cercana al aeropuerto Desierto de Atacama, también al sector de Piedra Colgada. Tiene un radier de 180 m2, piscina, pozo de agua, bomba y fosa instalada para conectar. También tiene árboles como se aprecia en las fotografías.",
    ubicacion: "Calderilla, cerca de Loreto sur",
    piezas: "-",
    banos: "-",
    patio: "Sí",
    estacionamiento: "Sí, amplio",
  },

  {
    id: 22,
    titulo:
      "Se vende parcela con casa y piscina en San Pedro, ubicada en la avenida principal",
    tipo: "venta",
    sector: "Otros sectores",
    precio: "$-",
    imagenes: [
      "imagenes/propiedadesnelly/ventas/otros sectores/3 San Pedro casa azul/1.jpeg",
      "imagenes/propiedadesnelly/ventas/otros sectores/3 San Pedro casa azul/2.jpeg",
      "imagenes/propiedadesnelly/ventas/otros sectores/3 San Pedro casa azul/3.jpeg",
      "imagenes/propiedadesnelly/ventas/otros sectores/3 San Pedro casa azul/4.jpeg",
      "imagenes/propiedadesnelly/ventas/otros sectores/3 San Pedro casa azul/5.jpeg",
      "imagenes/propiedadesnelly/ventas/otros sectores/3 San Pedro casa azul/6.jpeg",
    ],
    desc: "En venta casa en parcela de 6800 m2, está ubicada en San Pedro, en la avenida principal. Queda cerca del aeropuerto Desierto de Atacama. La casa es sólida, entra mucha luz natural y es amplia, cuenta con 3 dormitorios, 1 baño con ducha, cocina y un gran comedor. Incluye diversos árboles como olivos, membrillo, limonero, almendro, parras, entre otros. También tiene una piscina estructural, sobre una terraza.",
    ubicacion: "San Pedro",
    piezas: "3 dormitorios, cocina y gran comedor (además de una piscina)",
    banos: "1 baño",
    patio:
      "Sí, además de muchos árboles como membrillo, limonero, olivos, etc.",
    estacionamiento: "Sí, amplio",
  },

  {
    id: 23,
    titulo:
      "Se vende parcela con 2 casas ubicada en San Pedro de 1,8 hectáreas.",
    tipo: "venta",
    sector: "Otros sectores",
    precio: "$-",
    imagenes: [
      "imagenes/propiedadesnelly/ventas/otros sectores/4 San Pedro parcela con 2 casas/1.jpeg",
      "imagenes/propiedadesnelly/ventas/otros sectores/4 San Pedro parcela con 2 casas/2.jpeg",
      "imagenes/propiedadesnelly/ventas/otros sectores/4 San Pedro parcela con 2 casas/3.jpeg",
      "imagenes/propiedadesnelly/ventas/otros sectores/4 San Pedro parcela con 2 casas/4.jpeg",
      "imagenes/propiedadesnelly/ventas/otros sectores/4 San Pedro parcela con 2 casas/5.jpeg",
      "imagenes/propiedadesnelly/ventas/otros sectores/4 San Pedro parcela con 2 casas/6.jpeg",
      "imagenes/propiedadesnelly/ventas/otros sectores/4 San Pedro parcela con 2 casas/7.jpeg",
      "imagenes/propiedadesnelly/ventas/otros sectores/4 San Pedro parcela con 2 casas/8.jpeg",
      "imagenes/propiedadesnelly/ventas/otros sectores/4 San Pedro parcela con 2 casas/9.jpeg",
      "imagenes/propiedadesnelly/ventas/otros sectores/4 San Pedro parcela con 2 casas/10.jpeg",
    ],
    desc: "En venta dos casas en parcela de 18000 m2 (1,8 hectáreas), está ubicada en San Pedro. Queda cerca del aeropuerto Desierto de Atacama. Cuenta con agua (pozo) y luz. Una de las casas tiene baño con ducha.",
    ubicacion: "San Pedro",
    piezas: "Consultar detalles",
    banos: "Consultar detalles",
    patio: "Sí",
    estacionamiento: "Sí, amplio",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const propiedad = propiedades.find((p) => p.id === id);

  if (propiedad) {
    document.title = `${propiedad.titulo} | Nelly Villalobos Propiedades`;

    // Inyección de contenido general
    document.getElementById("titulo").innerText = propiedad.titulo;
    document.getElementById("descripcion").innerText = propiedad.desc;
    document.getElementById("precio").innerText = propiedad.precio;

    // Ficha técnica
    document.getElementById("det-ubicacion").innerText = propiedad.ubicacion;
    document.getElementById("det-piezas").innerText = propiedad.piezas;
    document.getElementById("det-banos").innerText = propiedad.banos;
    document.getElementById("det-patio").innerText = propiedad.patio;
    document.getElementById("det-estacionamiento").innerText =
      propiedad.estacionamiento;

    // --- LÓGICA DEL SLIDER MANUAL DE FOTOS ---
    let indiceActual = 0;
    const imgElement = document.getElementById("imagen-slider");
    const btnPrev = document.getElementById("sliderPrev");
    const btnNext = document.getElementById("sliderNext");
    const indicadorContador = document.getElementById("slider-counter");

    function actualizarSlider() {
      imgElement.src = propiedad.imagenes[indiceActual];

      // --- ALT DINÁMICO PARA EL SEO ---
      imgElement.alt = `${propiedad.titulo} - Imagen ${indiceActual + 1}`;

      if (indicadorContador) {
        indicadorContador.innerText = `${indiceActual + 1} / ${propiedad.imagenes.length}`;
      }

      // Si solo hay 1 foto, ocultamos las flechas para que no estorben
      if (propiedad.imagenes.length <= 1) {
        if (btnPrev) btnPrev.style.display = "none";
        if (btnNext) btnNext.style.display = "none";
        if (indicadorContador) indicadorContador.style.display = "none";
      }
    }

    // Inicializar primera foto
    actualizarSlider();

    // Eventos de los botones manuales
    if (btnNext) {
      btnNext.addEventListener("click", () => {
        indiceActual = (indiceActual + 1) % propiedad.imagenes.length;
        actualizarSlider();
      });
    }

    if (btnPrev) {
      btnPrev.addEventListener("click", () => {
        indiceActual =
          (indiceActual - 1 + propiedad.imagenes.length) %
          propiedad.imagenes.length;
        actualizarSlider();
      });
    }

    // --- WHATSAPP DINÁMICO CON LA PROPIEDAD ---
    const whatsappBtn = document.getElementById("whatsapp-btn");
    if (whatsappBtn) {
      const telefono = "56992245912";

      const tituloPropiedad = propiedad.titulo;
      const urlPagina = window.location.href;

      const mensaje = `Hola Nelly, me interesa esta propiedad: *${tituloPropiedad}*. Puedes verla aquí: ${urlPagina}`;
      const mensajeCodificado = encodeURIComponent(mensaje);

      whatsappBtn.href = `https://wa.me/${telefono}?text=${mensajeCodificado}`;
    }

    // Datos estructurados SEO
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "Product",
      name: propiedad.titulo,
      image: window.location.origin + "/" + propiedad.imagenes[0],
      description: propiedad.desc,
      offers: {
        "@type": "Offer",
        priceCurrency: "CLP",
        price: propiedad.precio.replace(/[^0-9]/g, ""),
      },
    });
    document.head.appendChild(script);
  } else {
    document.getElementById("detalle-contenido").innerHTML =
      "<h1>Propiedad no encontrada</h1><p>Lo sentimos, la propiedad que buscas no existe o fue eliminada.</p><a href='home.html' class='btn-primary'>Volver al Inicio</a>";
  }
});
