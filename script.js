/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if(menuToggle && nav){

    menuToggle.addEventListener("click", () => {

        const isOpen = nav.classList.toggle("open");

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });


    document.querySelectorAll(".nav a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            menuToggle.textContent = "☰";

        });

    });

}


/* ================= LANGUAGE ================= */

const languageBtn = document.getElementById("languageBtn");
const languageText = document.getElementById("languageText");

const savedLanguage =
    localStorage.getItem("md-ibrahim-language") || "en";


function setLanguage(language){

    document.querySelectorAll("[data-en][data-bn]").forEach(element => {

        element.textContent =
            element.getAttribute(
                language === "bn" ? "data-bn" : "data-en"
            );

    });


    document.documentElement.lang = language;

    document.body.classList.toggle(
        "bangla",
        language === "bn"
    );


    if(languageText){

        languageText.textContent =
            language === "en" ? "বাংলা" : "English";

    }


    localStorage.setItem(
        "md-ibrahim-language",
        language
    );

}


setLanguage(savedLanguage);


if(languageBtn){

    languageBtn.addEventListener("click", () => {

        const current =
            localStorage.getItem("md-ibrahim-language") || "en";

        setLanguage(
            current === "en" ? "bn" : "en"
        );

    });

}


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-grid, .skill-card, .project-card, .contact-box"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});


if("IntersectionObserver" in window){

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if(entry.isIntersecting){

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold:0.12,
                rootMargin:"0px 0px -40px 0px"
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

}else{

    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}


/* ================= TOP BUTTON ================= */

const topBtn = document.getElementById("topBtn");

let ticking = false;


function updateScrollUI(){

    const scrollY = window.scrollY;

    if(topBtn){

        topBtn.classList.toggle(
            "show",
            scrollY > 500
        );

    }


    /* Active navigation */

    let current = "";

    document.querySelectorAll("section[id]").forEach(section => {

        const sectionTop =
            section.offsetTop - 160;

        if(scrollY >= sectionTop){

            current =
                section.getAttribute("id");

        }

    });


    document.querySelectorAll(".nav a").forEach(link => {

        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + current
        );

    });


    ticking = false;

}


window.addEventListener(
    "scroll",
    () => {

        if(!ticking){

            window.requestAnimationFrame(
                updateScrollUI
            );

            ticking = true;

        }

    },
    { passive:true }
);


if(topBtn){

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}


/* ================= FOOTER YEAR ================= */

const year = document.getElementById("year");

if(year){

    year.textContent =
        new Date().getFullYear();

}


/* ================= INITIAL SCROLL STATE ================= */

updateScrollUI();
