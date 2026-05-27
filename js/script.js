/*
    Portfolio Website JavaScript
*/


// Navbar Background Change On Scroll
window.addEventListener('scroll', () => {

    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {

        navbar.style.background = '#0d1117';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';

    } else {

        navbar.style.background = 'rgba(13, 17, 23, 0.8)';
        navbar.style.boxShadow = 'none';

    }

});


// Close Mobile Navbar After Clicking A Link
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {

    link.addEventListener('click', () => {

        if (navbarCollapse.classList.contains('show')) {

            new bootstrap.Collapse(navbarCollapse).hide();

        }

    });

});


// Active Navbar Link On Scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {

    let currentSection = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {

            currentSection = section.getAttribute('id');

        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if (link.getAttribute('href') === `#${currentSection}`) {

            link.classList.add('active');

        }

    });

});


// Project Slider
const swiper = new Swiper('.projectSwiper', {

    loop: true,
    spaceBetween: 30,
    grabCursor: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {

        0: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
        },

        1200: {
            slidesPerView: 3,
        }

    }

});


// Typing Effect
const heroText = document.querySelector('.hero-text');

const textArray = [
    'Learning Cloud & DevOps',
    'Exploring AI & Machine Learning',
    'Building Modern Web Applications',
    'Learning Cybersecurity'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentText = textArray[textIndex];

    if (!isDeleting) {

        heroText.textContent = currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        heroText.textContent = currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            textIndex++;

            if (textIndex === textArray.length) {

                textIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);

}

typeEffect();


// Reveal Elements On Load
window.addEventListener('load', () => {

    document.body.classList.add('loaded');

});

