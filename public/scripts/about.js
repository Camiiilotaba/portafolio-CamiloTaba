document.addEventListener("DOMContentLoaded", () => {
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
    });
  
    document.querySelectorAll('.skill-card, .stat-card').forEach((card) => {
      observer.observe(card);
    });
  
    document.querySelectorAll('.skill-card a').forEach((link, index) => {
      link.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          link.click();
        }
  
        const links = document.querySelectorAll('.skill-card a');
        if (e.key === 'ArrowRight' && links[index + 1]) {
          e.preventDefault();
          links[index + 1].focus();
        }
        if (e.key === 'ArrowLeft' && links[index - 1]) {
          e.preventDefault();
          links[index - 1].focus();
        }
      });
    });
  
    document.addEventListener('astro:before-preparation', () => {
      observer.disconnect();
    });
  });
  