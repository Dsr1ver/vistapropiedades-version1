document.addEventListener("DOMContentLoaded", () => {
  // --- DATOS DE LAS PROPIEDADES ---
  const propiedades = [
    {
      id: 1,
      titulo: "Se arrienda casa a solo 3 minutos de Bahía Inglesa",
      tipo: "arriendo",
      sector: "Bahía Inglesa",
      precio: "$-",
      img: "imagenes/propiedadesnelly/arriendos/bahía inglesa/1/1.png",
    },
    {
      id: 2,
      titulo: "Departamentos en Mirador de Charito en arriendo, Caldera",
      tipo: "arriendo",
      sector: "Caldera",
      precio: "$-",
      img: "imagenes/propiedadesnelly/arriendos/caldera/1/1.png",
    },
    {
      id: 3,
      titulo: "Gran casa de dos pisos en arriendo en Caldera.",
      tipo: "arriendo",
      sector: "Caldera",
      precio: "$-",
      img: "imagenes/propiedadesnelly/arriendos/caldera/2/1.jpeg",
    },
    {
      id: 4,
      titulo: "Departamento en el centro de Caldera en arriendo",
      tipo: "arriendo",
      sector: "Caldera",
      precio: "$-",
      img: "imagenes/propiedadesnelly/arriendos/caldera/3/1.jpeg",
    },
    {
      id: 5,
      titulo: "Acogedor departamento en el centro de Caldera en arriendo",
      tipo: "arriendo",
      sector: "Caldera",
      precio: "-",
      img: "imagenes/propiedadesnelly/arriendos/caldera/4/1.jpeg",
    },
    {
      id: 6,
      titulo: "Hermosa casa en arriendo en centro de Caldera, 3 dormitorios",
      tipo: "arriendo",
      sector: "Caldera",
      precio: "$-",
      img: "imagenes/propiedadesnelly/arriendos/caldera/5/1.jpeg",
    },

    {
      id: 7,
      titulo: "Precioso departamento en arriendo en pleno centro de Caldera",
      tipo: "arriendo",
      sector: "Caldera",
      precio: "$-",
      img: "imagenes/propiedadesnelly/arriendos/caldera/6/1.jpeg",
    },
    {
      id: 8,
      titulo:
        "Hermoso departamento en arriendo en el centro de Caldera, piso uno.",
      tipo: "arriendo",
      sector: "Caldera",
      precio: "$-",
      img: "imagenes/propiedadesnelly/arriendos/caldera/7/1.jpeg",
    },

    {
      id: 9,
      titulo: "Se arrienda departamento en playa Loreto, frente al mar",
      tipo: "arriendo",
      sector: "Otros sectores",
      precio: "$-",
      img: "imagenes/propiedadesnelly/arriendos/otros sectores/loreto/1/1.jpeg",
    },

    {
      id: 10,
      titulo: "Gran casa de dos pisos en arriendo en Caldera.",
      tipo: "arriendo",
      sector: "Otros sectores",
      precio: "$-",
      img: "imagenes/propiedadesnelly/arriendos/otros sectores/Calderilla/Casa Calderilla 1/1.png",
    },

    {
      id: 11,
      titulo: "Gran casa de dos pisos en arriendo en Caldera.",
      tipo: "venta",
      sector: "Otros sectores",
      precio: "$6.000 UF",
      img: "imagenes/propiedadesnelly/arriendos/otros sectores/Calderilla/Casa Calderilla 1/1.png",
    },

    {
      id: 12,
      titulo: "Se vende casa en Caldera con 4 dormitorios y estacionamiento",
      tipo: "venta",
      sector: "Caldera",
      precio: "$-",
      img: "imagenes/propiedadesnelly/ventas/caldera/1/casa caldera 1.0.jpg",
    },

    {
      id: 13,
      titulo: "Se vende acogedora casa esquina en Caldera.",
      tipo: "venta",
      sector: "Caldera",
      precio: "$-",
      img: "imagenes/propiedadesnelly/ventas/caldera/2 esquina/2.0.jpg",
    },

    {
      id: 14,
      titulo: "Se vende gran y hermosa casa en Caldera.",
      tipo: "venta",
      sector: "Caldera",
      precio: "$-",
      img: "imagenes/propiedadesnelly/ventas/caldera/3/3.0.jpg",
    },

    {
      id: 15,
      titulo: "Se vende casa con vistas al mar ",
      tipo: "venta",
      sector: "Caldera",
      precio: "$-",
      img: "imagenes/propiedadesnelly/ventas/caldera/4/casa 4.0.jpg",
    },

    {
      id: 16,
      titulo: "Se vende casa en Caldera, cerca de Bahía Inglesa ",
      tipo: "venta",
      sector: "Caldera",
      precio: "$-",
      img: "imagenes/propiedadesnelly/ventas/caldera/5/5.5.png",
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
    "imagenes/extras/hero1.jpg",
    "imagenes/extras/hero2.jpg",
    "imagenes/extras/hero3.jpg",
    "imagenes/extras/hero4.jpg",
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
