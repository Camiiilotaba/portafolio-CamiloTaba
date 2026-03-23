function handleToggleClick(e: Event): void {
  const target = e.target as HTMLElement;
  if (!target) return;

  const toggleBtn = target.closest('.toggle-description') as HTMLButtonElement | null;
  if (!toggleBtn) return;

  e.preventDefault();
  e.stopPropagation();

  const card = toggleBtn.closest('.project-card');
  if (!card) return;

  const shortDesc = card.querySelector('.description-short');
  const fullDesc = card.querySelector('.description-full');
  const toggleText = toggleBtn.querySelector('.toggle-text');

  if (!shortDesc || !fullDesc) return;

  const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
  const showText = toggleBtn.dataset.showText ?? 'View details';
  const hideText = toggleBtn.dataset.hideText ?? 'Hide details';

  requestAnimationFrame(() => {
    if (isExpanded) {
      fullDesc.classList.add('description-collapsing');
      fullDesc.classList.remove('description-expanded');

      setTimeout(() => {
        fullDesc.classList.add('description-collapsed');
        fullDesc.classList.remove('description-collapsing');
        shortDesc.classList.remove('hidden');
      }, 600);

      toggleBtn.setAttribute('aria-expanded', 'false');
      if (toggleText) toggleText.textContent = showText;
    } else {
      shortDesc.classList.add('hidden');
      fullDesc.classList.remove('description-collapsed');

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          fullDesc.classList.add('description-expanding');

          setTimeout(() => {
            fullDesc.classList.add('description-expanded');
            fullDesc.classList.remove('description-expanding');
          }, 10);
        });
      });

      toggleBtn.setAttribute('aria-expanded', 'true');
      if (toggleText) toggleText.textContent = hideText;
    }
  });
}

function initToggles(): void {
  document.addEventListener('click', handleToggleClick);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initToggles);
} else {
  initToggles();
}
