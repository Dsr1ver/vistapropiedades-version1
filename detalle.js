// --- DATOS DE LAS PROPIEDADES (Con múltiples fotos para el slider) ---
const propiedades = [
  {
    id: 1,
    titulo: "Casa en Caldera con 4 Dormitorios y Estacionamiento",
    tipo: "venta",
    sector: "Caldera",
    precio: "-",
    // Arreglo de fotos para el slider de esta propiedad
    imagenes: [
      "imagenes/propiedadesnelly/caldera/1/casa caldera 1.0.jpg",
      "imagenes/propiedadesnelly/caldera/1/casa caldera 1.1.jpg",
      "imagenes/propiedadesnelly/caldera/1/casa caldera 1.2.jpg",
      "imagenes/propiedadesnelly/caldera/1/casa caldera 1.3.jpg",
    ],
    desc: "Acogedora casa de un piso en la ciudad de Caldera, ubicada en sector tranquilo. La disposición es buena para recibir visitas, pues cuenta con 3 dormitorios a los que se accede desde un pasillo, tiene un baño amplio con ventilación natural y buena iluminación. El living, comedor y cocina están dispuestos en orden para acceder de forma rápida. Cuenta con estacionamiento.",
    ubicacion: "Caldera",
    piezas: 3,
    banos: 1,
    patio: "Sí, amplio",
    estacionamiento: "Sí",
  },
  {
    id: 2,
    titulo: "Venta casa en Caldera esquina",
    tipo: "venta",
    sector: "Caldera",
    precio: "$-",
    imagenes: [
      "imagenes/propiedadesnelly/caldera/2 esquina/2.8.jpg",
      "imagenes/propiedadesnelly/caldera/2 esquina/2.0.jpg",
      "imagenes/propiedadesnelly/caldera/2 esquina/2.1.jpg",
      "imagenes/propiedadesnelly/caldera/2 esquina/2.2.jpg",
      "imagenes/propiedadesnelly/caldera/2 esquina/2.3.jpg",
    ],
    desc: "Casa en caldera",
    ubicacion: "Caldera",
    piezas: 3,
    banos: 1,
    patio: "Si, Amplio",
    estacionamiento: "2 vehículos",
  },
  {
    id: 3,
    titulo: "Casa en caldera 3",
    tipo: "venta",
    sector: "Caldera",
    precio: "$-",
    imagenes: [
      "imagenes/propiedadesnelly/caldera/3/3.0.jpg",
      "imagenes/propiedadesnelly/caldera/3/3.4.jpg",
      "imagenes/propiedadesnelly/caldera/3/3.6.jpg",
      "imagenes/propiedadesnelly/caldera/3/3.8.jpg",
    ],
    desc: "Sitio privilegiado en Caldera, perfecto para proyecto vacacional.",
    ubicacion: "Bahía Inglesa",
    piezas: "N/A (Terreno)",
    banos: "N/A",
    patio: "Amplio terreno completo",
    estacionamiento: "Espacio múltiple",
  },
  {
    id: 4,
    titulo: "Casa Caldera 4",
    tipo: "arriendo",
    sector: "Caldera",
    precio: "$-",
    imagenes: [
      "imagenes/propiedadesnelly/caldera/4/casa 4.0.jpg",
      "imagenes/propiedadesnelly/caldera/4/casa 4.1.jpg",
      "imagenes/propiedadesnelly/caldera/4/casa 4.3.jpg",
      "imagenes/propiedadesnelly/caldera/4/casa 4.4.jpg",
    ],
    desc: "Casa acogedora en sector residencial de Caldera, ideal para familias.",
    ubicacion: "Caldera",
    piezas: 3,
    banos: 1,
    patio: "Sí, trasero techado",
    estacionamiento: "1 vehículo",
  },
  {
    id: 5,
    titulo: "Cabaña Amoblada Caldera Centro",
    tipo: "arriendo",
    sector: "Caldera",
    precio: "$250.000",
    imagenes: [
      "imagenes/propiedadesnelly/caldera/5/casa 5.0.jpg",
      "imagenes/propiedadesnelly/caldera/5/casa 5.1.jpg",
      "imagenes/propiedadesnelly/caldera/5/casa 5.2.jpg",
      "imagenes/propiedadesnelly/caldera/5/casa 5.3.jpg",
    ],
    desc: "Cabaña completamente amoblada en el centro de Caldera.",
    ubicacion: "Centro, Caldera",
    piezas: 1,
    banos: 1,
    patio: "Compartido",
    estacionamiento: "Sin estacionamiento",
  },
  {
    id: 6,
    titulo: "Sitio Turístico Bahía Inglesa",
    tipo: "venta",
    sector: "Bahía Inglesa",
    precio: "$120.000.000",
    imagenes: ["imagenes/casa6.jpg"],
    desc: "Excelente oportunidad de inversión en zona de alta plusvalía turística.",
    ubicacion: "Bahía Inglesa",
    piezas: "N/A",
    banos: "N/A",
    patio: "Sitio eriazo plano",
    estacionamiento: "Sí",
  },
  {
    id: 7,
    titulo: "Sitio Turístico Bahía Inglesa",
    tipo: "venta",
    sector: "Bahía Inglesa",
    precio: "$120.000.000",
    imagenes: ["imagenes/casa7.jpg"],
    desc: "Terreno con vista inmejorable, ideal para casa de descanso.",
    ubicacion: "Bahía Inglesa",
    piezas: "N/A",
    banos: "N/A",
    patio: "Terreno en pendiente suave",
    estacionamiento: "Sí",
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
      // Reemplaza los X con tu número real de teléfono (ej: 56912345678)
      const telefono = "569XXXXXXXX";

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
