
document.addEventListener("DOMContentLoaded", () => {

  // Menu mobile
  const menuButton = document.querySelector("#menu-button");
  const navigation = document.querySelector("#navigation");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      navigation.classList.toggle("active");
    });
  }

  // Message de bienvenue
  console.log("Bienvenue dans NOCTURNE 🌙");

  // Boutons des boutiques
  document.querySelectorAll(".boutique-button").forEach(button => {
    button.addEventListener("click", () => {
      const link = button.dataset.link;

      if (link) {
        window.open(link, "_blank", "noopener,noreferrer");
      }
    });
  });

});
