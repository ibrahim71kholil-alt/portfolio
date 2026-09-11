/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("open");

        menuToggle.textContent =
            nav.classList.contains("open") ? "✕" : "☰";

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

    const elements =
        document.querySelectorAll("[data-en][data-bn]");

    elements.forEach(element => {

        if(language === "bn"){

            element.textContent =
                element.getAttribute("data-bn");

        }else{

            element.textContent =
                element.getAttribute("data-en");

        }

    });


    document.documentElement.lang = language;

    document.body.classList.toggle(
        "bangla",
        language === "bn"
    );


    /*
      Button shows the language
      that user can switch TO.
    */

    if(language === "en"){

        languageText.textContent = "বাংলা";

    }else{

        languageText.textContent = "English";

    }


    localStorage.setItem(
        "md-ibrahim-language",
        language
    );

}


/* First visit = English */

setLanguage(savedLanguage);


if(languageBtn){

    languageBtn.addEventListener("click", () => {

        const currentLanguage =
            localStorage.getItem("md-ibrahim-language") || "en";

        const nextLanguage =
            currentLanguage === "en" ? "bn" : "en";

        setLanguage(nextLanguage);

    });

}


/* ================= TOP BUTTON ================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        topBtn.classList.add("show");

    }else{

        topBtn.classList.remove("show");

    }

});


if(topBtn){

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}


/* ================= ACTIVE NAV ================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href") === "#" + current
        ){

            link.classList.add("active");

        }

    });

});


/* ================= FOOTER YEAR ================= */

const year = document.getElementById("year");

if(year){

    year.textContent =
        new Date().getFullYear();

}
