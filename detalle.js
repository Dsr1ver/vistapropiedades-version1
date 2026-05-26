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
  },
  {
    id: 2,
    titulo: "Departamento Frente al Mar Caldera",
    tipo: "arriendo",
    sector: "Caldera",
    precio: "$450.000",
    img: "imagenes/casa2.jpg",
    desc: "Departamento moderno con vista al mar en Caldera. Ideal para disfrutar el verano.",
  },
  {
    id: 3,
    titulo: "Sitio Amplio Bahía Inglesa",
    tipo: "venta",
    sector: "Bahía Inglesa",
    precio: "$80.000.000",
    img: "imagenes/casa3.jpg",
    desc: "Sitio privilegiado en Bahía Inglesa, perfecto para proyecto vacacional.",
  },
  {
    id: 4,
    titulo: "Casa Sector Palomar Copiapó",
    tipo: "arriendo",
    sector: "Copiapó",
    precio: "$380.000",
    img: "imagenes/casa4.jpg",
    desc: "Casa acogedora en sector residencial de Palomar, ideal para familias.",
  },
  {
    id: 5,
    titulo: "Cabaña Amoblada Caldera Centro",
    tipo: "arriendo",
    sector: "Caldera",
    precio: "$250.000",
    img: "imagenes/casa5.jpg",
    desc: "Cabaña completamente amoblada en el centro de Caldera.",
  },
  {
    id: 6,
    titulo: "Sitio Turístico Bahía Inglesa",
    tipo: "venta",
    sector: "Bahía Inglesa",
    precio: "$120.000.000",
    img: "imagenes/casa6.jpg",
    desc: "Excelente oportunidad de inversión en zona de alta plusvalía turística.",
  },
  {
    id: 7,
    titulo: "Sitio Turístico Bahía Inglesa",
    tipo: "venta",
    sector: "Bahía Inglesa",
    precio: "$120.000.000",
    img: "imagenes/casa7.jpg",
    desc: "Terreno con vista inmejorable, ideal para casa de descanso.",
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
    document.title = `${propiedad.titulo} | Vista Propiedades en Atacama`;

    // Inyección de contenido
    document.getElementById("titulo").innerText = propiedad.titulo;
    document.getElementById("imagen").src = propiedad.img;
    document.getElementById("imagen").alt = propiedad.titulo;
    document.getElementById("precio").innerText = "Precio: " + propiedad.precio;
    document.getElementById("descripcion").innerText = propiedad.desc;

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
        price: propiedad.precio.replace(/[^0-9]/g, ""), // Limpia el precio a solo números
      },
    });
    document.head.appendChild(script);
  } else {
    document.getElementById("detalle-propiedad").innerHTML =
      "<h1>Propiedad no encontrada</h1>";
  }
});
