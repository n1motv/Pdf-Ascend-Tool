  function toggleMenuIcon() {
    let menuIcon = document.getElementById("menu-icon");
    let navbar = document.getElementById("navbarPDF");

    if (navbar.classList.contains("show")) {
      menuIcon.setAttribute("data-lucide", "menu"); // Rechange en "menu" quand il se ferme
    } else {
      menuIcon.setAttribute("data-lucide", "x"); // Change en "X" quand le menu s'ouvre
    }
    lucide.createIcons(); // Met à jour l'icône avec Lucide
  }

  // Gère l'affichage des sections + fermeture du menu sur mobile
  function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active'));

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Ferme le menu burger après un clic sur un lien (sur mobile)
      let navbar = document.getElementById("navbarPDF");
      if (navbar.classList.contains("show")) {
        let toggler = document.querySelector(".navbar-toggler");
        toggler.click(); // Simule un clic pour fermer le menu
      }
    }
  }

  // Ajoute un écouteur d'événement Bootstrap pour détecter la fermeture du menu
  document.addEventListener("DOMContentLoaded", function () {
    let navbar = document.getElementById("navbarPDF");
    navbar.addEventListener("hidden.bs.collapse", function () {
      let menuIcon = document.getElementById("menu-icon");
      menuIcon.setAttribute("data-lucide", "menu"); // Remet l'icône en menu (3 lignes)
      lucide.createIcons(); // Rafraîchit l'icône
    });
  });

  // Affiche la section par défaut au chargement
  window.onload = function () {
    showSection('fusion');
    lucide.createIcons(); // Initialise les icônes Lucide
  };