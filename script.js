document.addEventListener("DOMContentLoaded", () => {
  // --- DATOS DE LAS PROPIEDADES ---
  const propiedades = [
    {
      id: 1,
      titulo: "Casa en Caldera con 4 dormitorios y estacionamiento",
      tipo: "venta",
      sector: "Caldera",
      precio: "$-",
      img: "imagenes/propiedadesnelly/caldera/1/casa caldera 1.0.jpg",
    },
    {
      id: 2,
      titulo: "Casa en caldera esquina",
      tipo: "venta",
      sector: "Caldera",
      precio: "$-",
      img: "imagenes/propiedadesnelly/caldera/2 esquina/2.8.jpg",
    },
    {
      id: 3,
      titulo: "Casa Caldera 3",
      tipo: "venta",
      sector: "Caldera",
      precio: "$-",
      img: "imagenes/propiedadesnelly/caldera/3/3.0.jpg",
    },
    {
      id: 4,
      titulo: "Casa Caldera 4",
      tipo: "arriendo",
      sector: "Caldera",
      precio: "$380.000",
      img: "imagenes/propiedadesnelly/caldera/4/casa 4.0.jpg",
    },
    {
      id: 5,
      titulo: "Cabaña Amoblada Caldera Centro",
      tipo: "arriendo",
      sector: "Caldera",
      precio: "$250.000",
      img: "imagenes/propiedadesnelly/caldera/5/casa 5.0.jpg",
    },
    {
      id: 6,
      titulo: "Casa Caldera N°6",
      tipo: "venta",
      sector: "Bahía Inglesa",
      precio: "$120.000.000",
      img: "imagenes/propiedadesnelly/caldera/6/10.jpeg",
    },

    {
      id: 7,
      titulo: "Casa Caldera N°7",
      tipo: "venta",
      sector: "Bahía Inglesa",
      precio: "$120.000.000",
      img: "imagenes/propiedadesnelly/caldera/7/1.jpeg",
    },
    {
      id: 8,
      titulo: "Casa Esquina Copiapó",
      tipo: "venta",
      sector: "Copiapó",
      precio: "$120.000.000",
      img: "imagenes/casa1.jpg",
    },

    {
      id: 9,
      titulo: "Casa Lomas de Chamonate",
      tipo: "venta",
      sector: "Copiapó",
      precio: "$120.000.000",
      img: "imagenes/propiedadesnelly/copiapó/lomas de chamonate/opcion 2/2.2.png",
    },

    {
      id: 10,
      titulo: "Casa Calderilla N°10",
      tipo: "venta",
      sector: "Bahía Inglesa",
      precio: "$120.000.000",
      img: "imagenes/propiedadesnelly/otros sectores/1/1.1.png",
    },

    {
      id: 11,
      titulo: "Valle Fertil N°11",
      tipo: "venta",
      sector: "Copiapo",
      precio: "$120.000.000",
      img: "imagenes/propiedadesnelly/otros sectores/2 valle fertil/2.0.jpg",
    },

    {
      id: 12,
      titulo: "San Pedro N°12",
      tipo: "venta",
      sector: "Copiapo",
      precio: "$120.000.000",
      img: "imagenes/propiedadesnelly/otros sectores/3 San Pedro casa azul/1.jpeg",
    },

    {
      id: 13,
      titulo: "San Pedro N° 13",
      tipo: "venta",
      sector: "Copiapo",
      precio: "$120.000.000",
      img: "imagenes/propiedadesnelly/otros sectores/4 San Pedro parcela con 2 casas/1.jpeg",
    },

    {
      id: 14,
      titulo: "Terreno Bahía N°14",
      tipo: "venta",
      sector: "Bahía Inglesa",
      precio: "$120.000.000",
      img: "imagenes/propiedadesnelly/bahía inglesa/1/terreno bahia 1.0.jpg",
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

  // (renderizar, filtrar, carrusel, etc.)

  // --- NUEVO: LÓGICA MENÚ HAMBURGUESA ---
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".main-nav");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  // --- CARGA INICIAL ---
  renderizar(propiedades);
});
