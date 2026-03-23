function initHeroAnimations(): void {
  const heroSection = document.querySelector('.hero-section');
  if (heroSection instanceof HTMLElement) {
    heroSection.style.opacity = '1';
    heroSection.style.transform = 'translateY(0)';
  }

  const techPills = document.querySelectorAll('.tech-pill');
  techPills.forEach((pill, index) => {
    if (pill instanceof HTMLElement) {
      setTimeout(() => {
        pill.style.opacity = '1';
        pill.style.transform = 'translateY(0)';
      }, index * 100);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeroAnimations);
} else {
  initHeroAnimations();
}
