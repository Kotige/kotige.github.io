window.addEventListener("scroll", function () {
    let header = this.document.querySelector("header");
    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled")
    }
})