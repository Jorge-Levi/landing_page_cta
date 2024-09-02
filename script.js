// Función que redirige a la página de compra
function redirigirCompra() {
  window.location.href = "https://tupagina.com/compra"; // Reemplaza esta URL con la URL real de la página de compra
}

// Asigna la función de redirección a los botones de llamada a la acción
document.getElementById("ctaButton").addEventListener("click", redirigirCompra);
document
  .getElementById("ctaButton2")
  .addEventListener("click", redirigirCompra);

// Función para mostrar u ocultar el menú en dispositivos móviles
document.getElementById("menuIcon").addEventListener("click", function () {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("show");
  this.classList.toggle("active"); // Añade la clase 'active' para animar el ícono de hamburguesa
});

// Cierra el menú al hacer clic en un enlace del menú
document.querySelectorAll("#navMenu li a").forEach((anchor) => {
  anchor.addEventListener("click", function () {
    const navMenu = document.getElementById("navMenu");
    const menuIcon = document.getElementById("menuIcon");
    navMenu.classList.remove("show");
    menuIcon.classList.remove("active");
  });
});

// Cierra el menú al hacer clic fuera del menú
document.addEventListener("click", function (event) {
  const navMenu = document.getElementById("navMenu");
  const menuIcon = document.getElementById("menuIcon");
  const isClickInside =
    navMenu.contains(event.target) || menuIcon.contains(event.target);

  if (!isClickInside && navMenu.classList.contains("show")) {
    navMenu.classList.remove("show");
    menuIcon.classList.remove("active");
  }
});

// Función para el desplazamiento suave al hacer clic en los enlaces de navegación
function smoothScroll(event) {
  event.preventDefault(); // Previene el comportamiento por defecto del enlace

  const targetId = event.currentTarget.getAttribute("href"); // Obtiene el atributo href del enlace
  const targetPosition = document.querySelector(targetId).offsetTop; // Calcula la posición de la sección destino
  const startPosition = window.pageYOffset; // Obtiene la posición de inicio (actual)
  const distance = targetPosition - startPosition; // Calcula la distancia entre la posición actual y la destino
  const duration = 1000; // Duración del desplazamiento en milisegundos
  let start = null;

  // Animación paso a paso para el desplazamiento suave
  function animationStep(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const ease = Math.min(progress / duration, 1); // Calcula la cantidad de progreso
    window.scrollTo(0, startPosition + distance * ease); // Desplaza la ventana a la nueva posición
    if (progress < duration) window.requestAnimationFrame(animationStep); // Continúa la animación hasta completarla
  }

  window.requestAnimationFrame(animationStep); // Inicia la animación
}

// Asigna la función de desplazamiento suave a los enlaces de navegación
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", smoothScroll);
});

// Mostrar u ocultar el botón de "Volver Arriba" basado en el desplazamiento
window.addEventListener("scroll", function () {
  const backToTopButton = document.getElementById("backToTop");
  if (window.pageYOffset > 300) {
    // Mostrar el botón después de desplazar 300px
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Funcionalidad del botón de "Volver Arriba"
document.getElementById("backToTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Animación de entrada para la sección de características
const features = document.querySelectorAll(".feature");

const revealFeatures = () => {
  features.forEach((feature) => {
    const windowHeight = window.innerHeight;
    const elementTop = feature.getBoundingClientRect().top;
    const revealPoint = 150; // Punto donde la animación se activará

    if (elementTop < windowHeight - revealPoint) {
      feature.classList.add("visible"); // Añade la clase para hacer visible la característica
    }
  });
};

// Activa la animación de las características al hacer scroll
window.addEventListener("scroll", revealFeatures);

// Carrusel de testimonios
let currentSlide = 0;

document.querySelector(".next").addEventListener("click", () => {
  const slides = document.querySelectorAll(".testimonial-card");
  currentSlide = (currentSlide + 1) % slides.length; // Avanza al siguiente testimonio
  updateSlider();
});

document.querySelector(".prev").addEventListener("click", () => {
  const slides = document.querySelectorAll(".testimonial-card");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Retrocede al testimonio anterior
  updateSlider();
});

// Función para actualizar la posición del carrusel
function updateSlider() {
  const slider = document.querySelector(".testimonial-slider");
  slider.style.transform = `translateX(-${currentSlide * 100}%)`; // Mueve el carrusel a la posición correcta
}
