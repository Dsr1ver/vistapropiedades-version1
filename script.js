document.addEventListener("DOMContentLoaded", () => {
  // --- DATOS DE LAS PROPIEDADES ---
  const propiedades = [
    {
      id: 1,
      titulo: "Se arrienda casa a solo 3 minutos de Bahía Inglesa",
      tipo: "arriendo",
      sector: "Bahía Inglesa",
      precio: "$-",
      img: "imagenes/propiedadesnelly/arriendos/bahiainglesa/2.jpeg",
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
      img: "imagenes/propiedadesnelly/arriendos/caldera/2/3.jpeg",
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
      img: "imagenes/propiedadesnelly/arriendos/otros sectores/Calderilla/Casa Calderilla 1/5.jpeg",
    },

    {
      id: 11,
      titulo: "Gran casa de dos pisos en venta en Caldera.",
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
      img: "imagenes/propiedadesnelly/ventas/caldera/1/casa caldera 1.1.jpg",
    },

    {
      id: 13,
      titulo: "Se vende acogedora casa esquina en Caldera.",
      tipo: "venta",
      sector: "Caldera",
      precio: "$-",
      img: "imagenes/propiedadesnelly/ventas/caldera/2 esquina/2.8.jpg",
    },

    {
      id: 14,
      titulo: "Se vende gran y hermosa casa en Caldera.",
      tipo: "venta",
      sector: "Caldera",
      precio: "$-",
      img: "imagenes/propiedadesnelly/ventas/caldera/3/3.1.jpg",
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

    {
      id: 17,
      titulo: "Se vende terreno a 3 minutos de Bahía Inglesa ",
      tipo: "venta",
      sector: "Bahía Inglesa",
      precio: "$-",
      img: "imagenes/propiedadesnelly/ventas/bahia/1.jpg",
    },

    {
      id: 18,
      titulo:
        "Se venden terrenos en sector Chamonate (Lote 8A-18 y Lote 8A-19), cerca de la ciudad de Copiapó.  ",
      tipo: "venta",
      sector: "Copiapó",
      precio: "$-",
      img: "imagenes/propiedadesnelly/ventas/copiapo/lomas/opcion1/1.0.jpg.png",
    },

    {
      id: 19,
      titulo:
        "Se venden terrenos en sector Chamonate (Lote 8A-9 y Lote 8A-10), cerca de la ciudad de Copiapó.  ",
      tipo: "venta",
      sector: "Copiapó",
      precio: "$-",
      img: "imagenes/propiedadesnelly/ventas/copiapo/lomas/opcion2/2.2.png",
    },

    {
      id: 20,
      titulo:
        "Se vende casa muy grande y hermosa, ubicada en Calderilla, queda cerca de playas Bahía Inglesa y Loreto sur ",
      tipo: "venta",
      sector: "Otros sectores",
      precio: "$-",
      img: "imagenes/propiedadesnelly/ventas/otros sectores/1/1.1.png",
    },

    {
      id: 21,
      titulo:
        "Se vende parcela en Valle Fértil, a solo 5 minutos de la carretera, tiene piscina y pozo",
      tipo: "venta",
      sector: "Otros sectores",
      precio: "$-",
      img: "imagenes/propiedadesnelly/ventas/otros sectores/2 valle fertil/2.0.jpg",
    },

    {
      id: 22,
      titulo:
        "Se vende parcela con casa y piscina en San Pedro, ubicada en la avenida principal",
      tipo: "venta",
      sector: "Otros sectores",
      precio: "$-",
      img: "imagenes/propiedadesnelly/ventas/otros sectores/3 San Pedro casa azul/1.jpeg",
    },

    {
      id: 23,
      titulo:
        "Se vende parcela con 2 casas ubicada en San Pedro de 1,8 hectáreas.",
      tipo: "venta",
      sector: "Otros sectores",
      precio: "$-",
      img: "imagenes/propiedadesnelly/ventas/otros sectores/4 San Pedro parcela con 2 casas/1.jpeg",
    },
  ];

  // --- LÓGICA DE PREGUNTAS FRECUENTES (FAQ) ---
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      // Cierra las demás abiertas (opcional, para que solo una esté abierta a la vez)
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
      // Alterna el estado de la pregunta actual
      item.classList.toggle("active");
    });
  });

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
    const tipoSeleccionado = tipoFiltro.value.toLowerCase().trim();
    const sectorSeleccionado = sectorFiltro.value.toLowerCase().trim();

    const filtrado = propiedades.filter((p) => {
      const coincideTipo =
        tipoSeleccionado === "todos" ||
        p.tipo.toLowerCase().trim() === tipoSeleccionado;
      const coincideSector =
        sectorSeleccionado === "todos" ||
        p.sector.toLowerCase().trim() === sectorSeleccionado;

      return coincideTipo && coincideSector;
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

  function updateCarousel(index) {
    if (hero && backgroundImages[index]) {
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
