// Función que redirige a la página de compra
function redirigirCompra() {
    window.location.href = 'https://tupagina.com/compra'; // Reemplaza esta URL con la URL real de la página de compra
}

// Asignando la función al botón de llamada a la acción
document.getElementById('ctaButton').addEventListener('click', redirigirCompra);
document.getElementById('ctaButton2').addEventListener('click', redirigirCompra);

// Función para el desplazamiento suave
function smoothScroll(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del enlace

    const targetId = event.currentTarget.getAttribute("href"); // Obtiene el atributo href del enlace
    const targetPosition = document.querySelector(targetId).offsetTop; // Calcula la posición de la sección destino
    const startPosition = window.pageYOffset; // Obtiene la posición de inicio (actual)
    const distance = targetPosition - startPosition; // Calcula la distancia entre la posición actual y la destino
    const duration = 1000; // Duración del desplazamiento en milisegundos
    let start = null;

    function animationStep(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const ease = Math.min(progress / duration, 1); // Calcula la cantidad de progreso
        window.scrollTo(0, startPosition + distance * ease); // Desplaza la ventana a la nueva posición
        if (progress < duration) window.requestAnimationFrame(animationStep); // Continúa la animación hasta completarla
    }

    window.requestAnimationFrame(animationStep); // Inicia la animación
}

// Asignando la función a los enlaces de navegación
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', smoothScroll);
});

// Mostrar u ocultar el botón de "Volver Arriba" basado en el desplazamiento
window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('backToTop');
    if (window.pageYOffset > 300) { // Mostrar el botón después de desplazar 300px
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Funcionalidad del botón de "Volver Arriba"
document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
