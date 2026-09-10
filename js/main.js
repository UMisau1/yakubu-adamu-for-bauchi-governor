/* ==========================================
   YAKUBU CAMPAIGN WEBSITE
   main.js
========================================== */


/* ==========================================
   PAGE LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.classList.add("loader-hidden");

        setTimeout(() => {

            loader.remove();

        }, 600);

    }

});


/* ==========================================
   STICKY NAVBAR
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("sticky");

    } else {

        navbar.classList.remove("sticky");

    }

});


/* ==========================================
   MOBILE MENU
========================================== */

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

/* ==========================================
   BACK TO TOP
========================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
   SCROLL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(

".section-title,.card,.news-card,.gallery-item,.event-card,.contact-card,.benefit-card"

);

const revealOnScroll = () => {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < trigger) {

            element.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);
/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters = document.querySelectorAll("[data-counter]");

const startCounter = (counter) => {

    const target = parseInt(counter.getAttribute("data-counter"));

    const speed = 200;

    let count = 0;

    const updateCounter = () => {

        const increment = Math.ceil(target / speed);

        if (count < target) {

            count += increment;

            if (count > target) count = target;

            counter.innerText = count.toLocaleString();

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target.toLocaleString();

        }

    };

    updateCounter();

};

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* ==========================================
   CURRENT YEAR
========================================== */

const year = document.getElementById("currentYear");

if (year) {

    year.textContent = new Date().getFullYear();

}


/* ==========================================
   PREVENT EMPTY LINKS
========================================== */

document.querySelectorAll('a[href="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

    });

});


/* ==========================================
   END OF MAIN.JS
========================================== */
