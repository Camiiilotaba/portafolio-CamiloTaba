function initAbout(): void {
  const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.skill-card, .stat-card').forEach((card) => {
    observer.observe(card);
  });

  // Keyboard navigation for skill cards
  const links = document.querySelectorAll('.skill-card a');
  links.forEach((link, index) => {
    link.addEventListener('keydown', (e) => {
      const keyEvent = e as KeyboardEvent;
      if (keyEvent.key === 'Enter' || keyEvent.key === ' ') {
        keyEvent.preventDefault();
        (link as HTMLElement).click();
      }

      if (keyEvent.key === 'ArrowRight' && links[index + 1]) {
        keyEvent.preventDefault();
        (links[index + 1] as HTMLElement).focus();
      }
      if (keyEvent.key === 'ArrowLeft' && links[index - 1]) {
        keyEvent.preventDefault();
        (links[index - 1] as HTMLElement).focus();
      }
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAbout);
} else {
  initAbout();
}
