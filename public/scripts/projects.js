// Intersection Observer para animaciones al hacer scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Observar todas las tarjetas de proyecto
document.querySelectorAll('.project-card').forEach((card) => {
  observer.observe(card);
});

// Mejorar la navegación por teclado
document.querySelectorAll('.project-card').forEach((card) => {
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const firstLink = card.querySelector('a');
      if (firstLink) {
        e.preventDefault();
        firstLink.click();
      }
    }
  });
});

// Funcionalidad de expansión de detalles
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {
    const toggleBtn = card.querySelector(".toggle-description");
    const shortDesc = card.querySelector(".description-short");
    const fullDesc = card.querySelector(".description-full");
    const toggleText = card.querySelector(".toggle-text");
    const toggleIcon = toggleBtn?.querySelector("svg");

    if (toggleBtn && shortDesc && fullDesc) {
      toggleBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";

        if (isExpanded) {
          // Collapse
          fullDesc.classList.add("hidden");
          shortDesc.classList.remove("hidden");
          toggleBtn.setAttribute("aria-expanded", "false");
          if (toggleText) toggleText.textContent = "Ver detalles";
          toggleIcon?.classList.remove("rotate-180");
        } else {
          // Expand
          shortDesc.classList.add("hidden");
          fullDesc.classList.remove("hidden");
          toggleBtn.setAttribute("aria-expanded", "true");
          if (toggleText) toggleText.textContent = "Ocultar detalles";
          toggleIcon?.classList.add("rotate-180");
        }
      });
    }
  });
});