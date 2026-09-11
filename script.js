/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");

const nav = document.getElementById("nav");


menuToggle.addEventListener("click", function(){

    nav.classList.toggle("open");

    const icon = menuToggle.querySelector("i");

    icon.classList.toggle("fa-bars");

    icon.classList.toggle("fa-xmark");

});


/* Close menu after clicking */

document.querySelectorAll(".nav a").forEach(function(link){

    link.addEventListener("click", function(){

        nav.classList.remove("open");

    });

});


/* ================= DARK / LIGHT MODE ================= */

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("md-theme");


if(savedTheme === "light"){

    document.body.classList.add("light");

    themeToggle.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

}


themeToggle.addEventListener("click", function(){

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");


    localStorage.setItem(
        "md-theme",
        isLight ? "light" : "dark"
    );


    themeToggle.innerHTML = isLight

        ? '<i class="fa-solid fa-sun"></i>'

        : '<i class="fa-solid fa-moon"></i>';

});


/* ================= SCROLL ACTIVE MENU ================= */

const sections =
    document.querySelectorAll("section[id]");


const menuLinks =
    document.querySelectorAll(".nav a");


window.addEventListener("scroll", function(){

    let current = "";


    sections.forEach(function(section){

        const sectionTop =
            section.offsetTop - 180;


        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });


    menuLinks.forEach(function(link){

        link.classList.remove("active");


        if(
            link.getAttribute("href") ===
            "#" + current
        ){

            link.classList.add("active");

        }

    });

});


/* ================= REVEAL ANIMATION ================= */

const observer =
    new IntersectionObserver(

        function(entries){

            entries.forEach(function(entry){

                if(entry.isIntersecting){

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold:0.12
        }

    );


document
    .querySelectorAll(".reveal")
    .forEach(function(element){

        observer.observe(element);

    });


/* ================= BACK TO TOP ================= */

const topButton =
    document.getElementById("topButton");


window.addEventListener("scroll", function(){

    if(window.scrollY > 500){

        topButton.classList.add("show");

    }else{

        topButton.classList.remove("show");

    }

});


topButton.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
