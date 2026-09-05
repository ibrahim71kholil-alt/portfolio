// script.js

const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    if (navLinks.classList.contains('active')) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

