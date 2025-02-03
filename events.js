// Hamburger menu

const hamburger = document.getElementById("hamburger");
const externalLinks = document.getElementById("external-links")
const menu = document.getElementById("menu");
const header = document.querySelector("header");
const identification = document.getElementById("identification")
const line = document.querySelector("hr")

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


// Scroll functions

window.addEventListener("scroll", function () {
    let header = this.document.querySelector("header");
    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
    let whatsappButton = this.document.getElementById("whatsapp-button");
    if(this.window.scrollY > 400 && this.window.scrollY <2000) {
        whatsappButton.style.opacity = "1";
        whatsappButton.style.visibility = "visible";
    } else {
        whatsappButton.style.opacity = "0";
        whatsappButton.style.visibility = "hidden";
    }
})

