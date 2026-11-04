
/* =========================================
   1. MENÚ RESPONSIVE
========================================= */

// Seleccionar elementos del menú
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

const navLinks = document.querySelectorAll('.nav-link');

// Abrir y cerrar menú
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar menú al seleccionar una sección
navLinks.forEach(link => {

    link.addEventListener('click', () => {

        navMenu.classList.remove('active');

    });

});


/* =========================================
   2. ANIMACIONES AL HACER SCROLL
========================================= */

// Seleccionar elementos que tendrán animaciones
const revealElements = document.querySelectorAll(
    '.section-heading, ' +
    '.about-text, ' +
    '.about-info, ' +
    '.skill-card, ' +
    '.project-card, ' +
    '.contact-card'
);

// Activar las animaciones
document.body.classList.add('js-enabled');

// Configuración del observador
const observerOptions = {
    threshold: 0.15
};

// Crear observador
const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            // Mostrar elemento
            entry.target.classList.add('visible');

            // Evitar repetir la animación
            observer.unobserve(entry.target);

        }

    });

}, observerOptions);


// Aplicar animaciones a los elementos
revealElements.forEach((element, index) => {

    // Agregar clase de animación
    element.classList.add('reveal');

    // Agregar retrasos a las tarjetas
    if (element.classList.contains('skill-card')) {

        element.classList.add(`delay-${(index % 3) + 1}`);

    }

    // Observar elemento
    observer.observe(element);

});


/* =========================================
   3. CERRAR MENÚ AL HACER CLIC FUERA
========================================= */

document.addEventListener('click', (event) => {

    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {

        navMenu.classList.remove('active');

    }

});
/* =========================================
   4. EFECTO DE ESCRITURA (TYPEWRITER)
========================================= */

const typingText = document.querySelector('.typing-text');

const professions = [
    'Frontend Developer',
    'Full Stack Developer',
    'Backend Developer',
    'Técnico Programador'
];

let professionIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {
    const currentProfession = professions[professionIndex];

    if (deleting) {
        typingText.textContent = currentProfession.substring(
            0,
            characterIndex--
        );
    } else {
        typingText.textContent = currentProfession.substring(
            0,
            characterIndex++
        );
    }

    let speed = deleting ? 50 : 100;

    if (!deleting && characterIndex === currentProfession.length + 1) {
        deleting = true;
        speed = 1500;
    } else if (deleting && characterIndex < 0) {
        deleting = false;
        characterIndex = 0;

        professionIndex++;

        if (professionIndex >= professions.length) {
            professionIndex = 0;
        }

        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

if (typingText) {
    typeEffect();
}