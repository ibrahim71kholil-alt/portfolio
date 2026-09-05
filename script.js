// script.js

// ভাষা পরিবর্তন (Language Toggle) করার ফাংশন
const langToggle = document.getElementById('lang-toggle');

langToggle.addEventListener('click', () => {
    // Body ট্যাগে 'bangla-mode' ক্লাস যুক্ত বা বাতিল করবে
    document.body.classList.toggle('bangla-mode');
    
    // বাটনের টেক্সট পরিবর্তন করবে
    if(document.body.classList.contains('bangla-mode')) {
        langToggle.innerText = 'English';
    } else {
        langToggle.innerText = 'বাংলা';
    }
});

// মোবাইলের জন্য মেনু টগল ফাংশন
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

// মেনু থেকে কোনো লিংকে ক্লিক করলে মেনু অটোমেটিক বন্ধ হবে
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});
