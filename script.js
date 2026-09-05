// script.js

// ১. ভাষা পরিবর্তন (Language Toggle) করার ফাংশন
const langToggle = document.getElementById('lang-toggle');

if (langToggle) {
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
}

// ২. মোবাইলের জন্য মেনু ওপেন/ক্লোজ ফাংশন
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // মেনু আইকন পরিবর্তন (X এবং = এর মাঝে)
        if (navLinks.classList.contains('active')) {
            menuBtn.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
}

// ৩. মেনু থেকে কোনো লিংকে ক্লিক করলে মেনু অটোমেটিক বন্ধ হবে
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});
