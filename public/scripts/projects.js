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