// DATOS DE LAS PROPIEDADES (Ejemplos optimizados para SEO técnico)
const propiedades = [
  {
    id: 1,
    titulo: "Casa Sector Centro Copiapó",
    tipo: "venta",
    sector: "Copiapó",
    precio: "$150.000.000",
    img: "https://via.placeholder.com/400x250/f4f7f6/0A3C6E?text=Propiedad+1",
  },
  {
    id: 2,
    titulo: "Departamento Frente al Mar Caldera",
    tipo: "arriendo",
    sector: "Caldera",
    precio: "$450.000",
    img: "https://via.placeholder.com/400x250/f4f7f6/0A3C6E?text=Propiedad+2",
  },
  {
    id: 3,
    titulo: "Sitio Amplio Bahía Inglesa",
    tipo: "venta",
    sector: "Bahía Inglesa",
    precio: "$80.000.000",
    img: "https://via.placeholder.com/400x250/f4f7f6/0A3C6E?text=Propiedad+3",
  },
  {
    id: 4,
    titulo: "Casa Sector Palomar Copiapó",
    tipo: "arriendo",
    sector: "Copiapó",
    precio: "$380.000",
    img: "https://via.placeholder.com/400x250/f4f7f6/0A3C6E?text=Propiedad+4",
  },
  {
    id: 5,
    titulo: "Cabaña Amoblada Caldera Centro",
    tipo: "arriendo",
    sector: "Caldera",
    precio: "$250.000",
    img: "https://via.placeholder.com/400x250/f4f7f6/0A3C6E?text=Propiedad+5",
  },
  {
    id: 6,
    titulo: "Sitio Turístico Bahía Inglesa",
    tipo: "venta",
    sector: "Bahía Inglesa",
    precio: "$120.000.000",
    img: "https://via.placeholder.com/400x250/f4f7f6/0A3C6E?text=Propiedad+6",
  },
];

// ELEMENTOS DEL DOM
const contenedor = document.getElementById("lista-propiedades");
const tipoFiltro = document.getElementById("tipoFiltro");
const sectorFiltro = document.getElementById("sectorFiltro");

// FUNCIÓN PARA RENDERIZAR LAS PROPIEDADES (Usa tags semánticos)
function renderizar(lista) {
  if (lista.length === 0) {
    contenedor.innerHTML =
      '<p class="no-properties">No se encontraron propiedades con esos criterios.</p>';
    return;
  }

  contenedor.innerHTML = lista
    .map(
      (p) => `
        <article class="property-card" data-tipo="${p.tipo}" data-sector="${p.sector}">
            <img src="${p.img}" alt="${p.titulo} en Atacama">
            <div class="property-card-content">
                <p class="property-type">${p.tipo}</p>
                <h3>${p.titulo}</h3>
                <p class="property-meta">Sector: ${p.sector} | Precio: ${p.precio}</p>
                <a href="#" class="btn-primary">Ver Detalle</a>
            </div>
        </article>
    `,
    )
    .join("");
}

// FUNCIÓN DE FILTRADO
function filtrar() {
  const filtrado = propiedades.filter((p) => {
    return (
      (tipoFiltro.value === "todos" || p.tipo === tipoFiltro.value) &&
      (sectorFiltro.value === "todos" || p.sector === sectorFiltro.value)
    );
  });
  renderizar(filtrado);
}

// EVENTOS DE FILTRADO
tipoFiltro.addEventListener("change", filtrar);
sectorFiltro.addEventListener("change", filtrar);

// SIMULACIÓN BÁSICA DEL CARRUSEL (Solo cambia imagen y puntos)
const hero = document.querySelector(".hero-section");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Imágenes de ejemplo para el carrusel
const backgroundImages = [
  "imagenes/hero_imagen.jpg", // Tu imagen original
  "imagenes/hero_imagen_2.jpg", // Reemplaza por otra foto
  "imagenes/hero_imagen_3.jpg",
  "imagenes/hero_imagen_4.jpg",
];

let currentIndex = 0;

function updateCarousel(index) {
  if (backgroundImages[index]) {
    hero.style.backgroundImage = `url('${backgroundImages[index]}')`;
    // Actualizar puntos
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }
}

prevBtn.addEventListener("click", () => {
  currentIndex =
    currentIndex > 0 ? currentIndex - 1 : backgroundImages.length - 1;
  updateCarousel(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex =
    currentIndex < backgroundImages.length - 1 ? currentIndex + 1 : 0;
  updateCarousel(currentIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel(currentIndex);
  });
});

// CARGA INICIAL
renderizar(propiedades); // Cargar todas las propiedades al inicio
