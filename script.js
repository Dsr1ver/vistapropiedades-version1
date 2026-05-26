document.addEventListener("DOMContentLoaded", () => {
  // --- DATOS DE LAS PROPIEDADES ---
  const propiedades = [
    {
      id: 1,
      titulo: "Casa Sector Centro Copiapó",
      tipo: "venta",
      sector: "Copiapó",
      precio: "$150.000.000",
      img: "imagenes/casa1.jpg",
    },
    {
      id: 2,
      titulo: "Departamento Frente al Mar Caldera",
      tipo: "arriendo",
      sector: "Caldera",
      precio: "$450.000",
      img: "imagenes/casa2.jpg",
    },
    {
      id: 3,
      titulo: "Sitio Amplio Bahía Inglesa",
      tipo: "venta",
      sector: "Bahía Inglesa",
      precio: "$80.000.000",
      img: "imagenes/casa3.jpg",
    },
    {
      id: 4,
      titulo: "Casa Sector Palomar Copiapó",
      tipo: "arriendo",
      sector: "Copiapó",
      precio: "$380.000",
      img: "imagenes/casa4.jpg",
    },
    {
      id: 5,
      titulo: "Cabaña Amoblada Caldera Centro",
      tipo: "arriendo",
      sector: "Caldera",
      precio: "$250.000",
      img: "imagenes/casa5.jpg",
    },
    {
      id: 6,
      titulo: "Sitio Turístico Bahía Inglesa",
      tipo: "venta",
      sector: "Bahía Inglesa",
      precio: "$120.000.000",
      img: "imagenes/casa6.jpg",
    },

    {
      id: 7,
      titulo: "Sitio Turístico Bahía Inglesa",
      tipo: "venta",
      sector: "Bahía Inglesa",
      precio: "$120.000.000",
      img: "imagenes/casa7.jpg",
    },
  ];

  // --- ELEMENTOS DEL DOM ---
  const contenedor = document.getElementById("lista-propiedades");
  const tipoFiltro = document.getElementById("tipoFiltro");
  const sectorFiltro = document.getElementById("sectorFiltro");

  // --- LÓGICA DE PROPIEDADES ---
  function renderizar(lista) {
    if (!contenedor) return;
    if (lista.length === 0) {
      contenedor.innerHTML =
        '<p class="no-properties">No se encontraron propiedades.</p>';
      return;
    }
    contenedor.innerHTML = lista
      .map(
        (p) => `
            <article class="property-card" data-tipo="${p.tipo}" data-sector="${p.sector}">
                <img src="${p.img}" alt="${p.titulo}">
                <div class="property-card-content">
                    <p class="property-type">${p.tipo}</p>
                    <h3>${p.titulo}</h3>
                    <p class="property-meta">Sector: ${p.sector} | Precio: ${p.precio}</p>
                    <a href="detalle.html?id=${p.id}" class="btn-primary">Ver Detalle</a>
                </div>
            </article>
        `,
      )
      .join("");
  }

  function filtrar() {
    const filtrado = propiedades.filter((p) => {
      return (
        (tipoFiltro.value === "todos" || p.tipo === tipoFiltro.value) &&
        (sectorFiltro.value === "todos" || p.sector === sectorFiltro.value)
      );
    });
    renderizar(filtrado);
  }

  if (tipoFiltro && sectorFiltro) {
    tipoFiltro.addEventListener("change", filtrar);
    sectorFiltro.addEventListener("change", filtrar);
  }

  // --- LÓGICA DEL CARRUSEL AUTOMÁTICO ---
  const hero = document.querySelector(".hero-section");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const backgroundImages = [
    "imagenes/hero1.jpg",
    "imagenes/hero2.jpg",
    "imagenes/hero3.jpg",
    "imagenes/hero4.jpg",
  ];

  let currentIndex = 0;

  // ... dentro de tu bloque DOMContentLoaded, donde defines updateCarousel:
  function updateCarousel(index) {
    if (hero && backgroundImages[index]) {
      // Usamos una nueva instancia de Image para "pre-cargar"
      const img = new Image();
      img.src = backgroundImages[index];
      img.onload = () => {
        hero.style.backgroundImage = `url('${backgroundImages[index]}')`;
      };

      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % backgroundImages.length;
    updateCarousel(currentIndex);
  }

  if (hero) {
    // Inicializar primera imagen
    updateCarousel(0);

    if (prevBtn)
      prevBtn.addEventListener("click", () => {
        currentIndex =
          currentIndex > 0 ? currentIndex - 1 : backgroundImages.length - 1;
        updateCarousel(currentIndex);
      });

    if (nextBtn) nextBtn.addEventListener("click", nextImage);

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel(currentIndex);
      });
    });

    setInterval(nextImage, 5000);
  }

  // --- CARGA INICIAL ---
  renderizar(propiedades);
});
