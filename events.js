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

