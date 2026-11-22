
// ==============================
// NOCTURNE - SCRIPT PRINCIPAL
// ==============================

// MENU MOBILE

const menuButton = document.getElementById("menu-button");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("active");

    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.textContent = isOpen ? "✕" : "☰";
});

// FERMER LE MENU APRÈS UN CLIC

navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
    });
});

// ANIMATIONS AU DÉFILEMENT

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});

// ANNÉE AUTOMATIQUE

document.getElementById("year").textContent =
    new Date().getFullYear();

// BOUTIQUES PARTENAIRES

document.querySelectorAll(".boutique-button").forEach(button => {

    button.addEventListener("click", (event) => {

        const link = button.getAttribute("href");

        if (!link || link === "#") {
            event.preventDefault();
            alert("Cette boutique sera bientôt disponible.");
        }

    });

});

console.log("☾ NOCTURNE est lancé !");
