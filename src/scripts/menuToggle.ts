// Asegurar que el código solo se ejecute en el cliente
if (typeof window !== "undefined") {
  // Función para alternar la visibilidad de un elemento
  const toggleVisibility = (element: HTMLElement | null): void => {
      if (element) {
          element.classList.toggle('hidden');
      }
  };

  // Esperar a que el DOM esté completamente cargado
  document.addEventListener("DOMContentLoaded", () => {
      const menuButton = document.getElementById('menuButton') as HTMLElement | null;
      const dropdownMenu = document.getElementById('dropdownMenu') as HTMLElement | null;
      
      const productButton = document.getElementById('productButton') as HTMLElement | null;
      const productMenu = document.getElementById('productMenu') as HTMLElement | null;
      
      const productMobileButton = document.getElementById('productMobileButton') as HTMLElement | null;
      const productMobileMenu = document.getElementById('productMobileMenu') as HTMLElement | null;

      menuButton?.addEventListener('click', () => toggleVisibility(dropdownMenu));
      productButton?.addEventListener('click', () => toggleVisibility(productMenu));
      productMobileButton?.addEventListener('click', () => toggleVisibility(productMobileMenu));
  });
}
