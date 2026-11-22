
document.addEventListener("DOMContentLoaded", () => {

    // =================================
    // NOCTURNE — SCRIPT PRINCIPAL
    // =================================

    console.log("🌙 Bienvenue dans NOCTURNE");

    // MENU MOBILE
    const menuButton = document.querySelector("#menu-button");
    const navigation = document.querySelector("#navigation");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            navigation.classList.toggle("active");

            menuButton.setAttribute(
                "aria-expanded",
                navigation.classList.contains("active")
            );
        });
    }

    // FERMER LE MENU APRES UN CLIC
    if (navigation) {
        navigation.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navigation.classList.remove("active");

                if (menuButton) {
                    menuButton.setAttribute("aria-expanded", "false");
                }
            });
        });
    }

    // APPARITION DES ELEMENTS
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    document.querySelectorAll(".card, main h2, main p")
        .forEach(element => {
            element.classList.add("reveal");
            observer.observe(element);
        });

    // BOUTIQUES PARTENAIRES
    document.querySelectorAll(".boutique-button")
        .forEach(button => {

            button.addEventListener("click", () => {
                const link = button.dataset.link;

                if (link) {
                    window.open(
                        link,
                        "_blank",
                        "noopener,noreferrer"
                    );
                } else {
                    console.warn("Lien boutique manquant.");
                }
            });
        });

    // ANNEE AUTOMATIQUE DU FOOTER
    const year = document.querySelector("#year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});
