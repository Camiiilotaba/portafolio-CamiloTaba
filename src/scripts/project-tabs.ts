// Case-study tabs (featured + compact cards).
// WAI-ARIA tabs pattern: click selects; Arrow keys/Home/End move focus
// with a roving tabindex within each tablist.
function initProjectTabs(): void {
  document.querySelectorAll<HTMLElement>('[data-tabs]').forEach((root) => {
    const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-tab-btn]'));
    const panels = Array.from(root.querySelectorAll<HTMLElement>('[data-tab-panel]'));

    function select(tab: HTMLButtonElement): void {
      const id = tab.getAttribute('data-tab-btn');
      tabs.forEach((t) => {
        const isActive = t === tab;
        t.setAttribute('aria-selected', String(isActive));
        t.tabIndex = isActive ? 0 : -1;
      });
      panels.forEach((p) => p.classList.toggle('hidden', p.getAttribute('data-tab-panel') !== id));
    }

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => select(tab));
      tab.addEventListener('keydown', (e: KeyboardEvent) => {
        let next = -1;
        if (e.key === 'ArrowRight') next = (index + 1) % tabs.length;
        else if (e.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
        else if (e.key === 'Home') next = 0;
        else if (e.key === 'End') next = tabs.length - 1;
        if (next === -1) return;
        e.preventDefault();
        tabs[next].focus();
        select(tabs[next]);
      });
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProjectTabs);
} else {
  initProjectTabs();
}
