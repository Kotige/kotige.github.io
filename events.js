// Hamburger menu

const hamburger = document.getElementById("hamburger");
const externalLinks = document.getElementById("external-links");
const menu = document.getElementById("menu");
const header = document.querySelector("header");
const identification = document.getElementById("identification");
const line = document.querySelector("hr");
const menuLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
    header.classList.toggle("active");
    menu.classList.toggle("active");
    externalLinks.classList.toggle("active");
    identification.classList.toggle("active");
    hamburger.classList.toggle("active");
    line.classList.toggle("active");

    const icon = hamburger.querySelector("i");
    if (menu.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-times");
    } else {
        icon.classList.replace("fa-times", "fa-bars");
    }
});

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        header.classList.remove("active");
        menu.classList.remove("active");
        externalLinks.classList.remove("active");
        identification.classList.remove("active");
        hamburger.classList.remove("active");
        line.classList.remove("active");

        const icon = hamburger.querySelector("i");
        icon.classList.replace("fa-times", "fa-bars");
    });
});


// Scroll functions

window.addEventListener("scroll", function () {
    let header = this.document.querySelector("header");
    let hrLine = this.document.querySelector("hr")
    if (window.scrollY > 20) {
        header.classList.add("scrolled");
        hrLine.classList.add("scrolled-hr")
    } else {
        header.classList.remove("scrolled");
        hrLine.classList.remove("scrolled-hr");
    }
    let whatsappButton = this.document.getElementById("whatsapp-button");
    if(this.window.scrollY > 300 && this.window.scrollY <2100) {
        whatsappButton.classList.add("visible");
    } else {
        whatsappButton.classList.remove("visible");
    }
})

