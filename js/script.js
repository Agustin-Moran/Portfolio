
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
