// --- DATOS DE LAS PROPIEDADES ---
const propiedades = [
  {
    id: 1,
    titulo: "Casa Sector Centro Copiapó",
    tipo: "venta",
    sector: "Copiapó",
    precio: "$150.000.000",
    img: "imagenes/casa1.jpg",
    desc: "Hermosa casa ubicada en el corazón de Copiapó, cercana a servicios y comercio.",
    ubicacion: "Centro, Copiapó",
    piezas: 3,
    banos: 2,
    patio: "Sí, amplio",
    estacionamiento: "1 vehículo",
  },
  {
    id: 2,
    titulo: "Departamento Frente al Mar Caldera",
    tipo: "arriendo",
    sector: "Caldera",
    precio: "$450.000",
    img: "imagenes/casa2.jpg",
    desc: "Departamento moderno con vista al mar en Caldera. Ideal para disfrutar el verano.",
    ubicacion: "Costanera, Caldera",
    piezas: 2,
    banos: 2,
    patio: "No (Balcón con vista al mar)",
    estacionamiento: "1 vehículo",
  },
  {
    id: 3,
    titulo: "Sitio Amplio Bahía Inglesa",
    tipo: "venta",
    sector: "Bahía Inglesa",
    precio: "$80.000.000",
    img: "imagenes/casa3.jpg",
    desc: "Sitio privilegiado en Bahía Inglesa, perfecto para proyecto vacacional.",
    ubicacion: "Bahía Inglesa",
    piezas: "N/A (Terreno)",
    banos: "N/A",
    patio: "Amplio terreno completo",
    estacionamiento: "Espacio múltiple",
  },
  {
    id: 4,
    titulo: "Casa Sector Palomar Copiapó",
    tipo: "arriendo",
    sector: "Copiapó",
    precio: "$380.000",
    img: "imagenes/casa4.jpg",
    desc: "Casa acogedora en sector residencial de Palomar, ideal para familias.",
    ubicacion: "El Palomar, Copiapó",
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
    img: "imagenes/casa5.jpg",
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
    img: "imagenes/casa6.jpg",
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
    img: "imagenes/casa7.jpg",
    desc: "Terreno con vista inmejorable, ideal para casa de descanso.",
    ubicacion: "Bahía Inglesa",
    piezas: "N/A",
    banos: "N/A",
    patio: "Terreno en pendiente suave",
    estacionamiento: "Sí",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  // 1. Obtener ID de la URL
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  // 2. Buscar propiedad
  const propiedad = propiedades.find((p) => p.id === id);

  // 3. Inyectar datos y SEO
  if (propiedad) {
    // Título dinámico para pestañas del navegador (SEO)
    document.title = `${propiedad.titulo} | Nelly Villalobos Propiedades`;

    // Inyección de contenido general
    document.getElementById("titulo").innerText = propiedad.titulo;
    document.getElementById("imagen").src = propiedad.img;
    document.getElementById("imagen").alt = propiedad.titulo;
    document.getElementById("descripcion").innerText = propiedad.desc;
    document.getElementById("precio").innerText = propiedad.precio;

    // Inyección de la ficha técnica elegante
    document.getElementById("det-ubicacion").innerText = propiedad.ubicacion;
    document.getElementById("det-piezas").innerText = propiedad.piezas;
    document.getElementById("det-banos").innerText = propiedad.banos;
    document.getElementById("det-patio").innerText = propiedad.patio;
    document.getElementById("det-estacionamiento").innerText =
      propiedad.estacionamiento;

    // 4. Datos Estructurados JSON-LD (SEO Profesional)
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "Product",
      name: propiedad.titulo,
      image: window.location.origin + "/" + propiedad.img,
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
