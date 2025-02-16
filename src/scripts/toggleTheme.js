document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle");
  const themeToggleButtonXL = document.getElementById("theme-toggle-xl");
  const sections = document.querySelectorAll("section");
  const html = document.documentElement;

  // Colores principales para el modo oscuro
  const defaultColors = {
    "home": "bg-gradient-to-b from-black via-emerald-950 to-black text-white",
    "projects": "bg-gradient-to-b from-black via-emerald-950 to-black text-white",
    "about": "bg-gradient-to-b from-black via-emerald-950 to-black text-white"
  };

  // Colores para el modo claro
  const lightColors = {
    "home": "bg-gradient-to-b from-black via-blue-500 to-blue-400 text-white",
    "projects": "bg-gradient-to-b from-blue-400 via-blue-400 to-blue-400 text-black",
    "about": "bg-gradient-to-b from-blue-400 via-blue-400 to-black text-black"
  };

  // Función para aplicar colores por defecto
  const applyDefaultColors = () => {
    sections.forEach((section) => {
      if (section.id in defaultColors) {
        section.className = defaultColors[section.id];
      }
    });
  };

  // Función para cambiar el tema
  const toggleTheme = () => {
    const isDark = html.classList.contains("dark");

    if (isDark) {
      // Cambiar a modo claro
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");

      // Cambiar los colores de las secciones al modo claro
      sections.forEach((section) => {
        if (section.id in lightColors) {
          section.className = lightColors[section.id];
        }
      });

      // Actualizar el texto del botón
      if (themeToggleButton) themeToggleButton.textContent = "🌙";
      if (themeToggleButtonXL) themeToggleButtonXL.textContent = "🌙";
    } else {
      // Cambiar a modo oscuro
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");

      // Cambiar los colores de las secciones al modo oscuro
      applyDefaultColors();

      // Actualizar el texto del botón
      if (themeToggleButton) themeToggleButton.textContent = "☀️";
      if (themeToggleButtonXL) themeToggleButtonXL.textContent = "☀️";
    }
  };

  // Aplicar el tema guardado en localStorage al cargar la página
  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
    applyDefaultColors();
    if (themeToggleButton) themeToggleButton.textContent = "☀️";
    if (themeToggleButtonXL) themeToggleButtonXL.textContent = "☀️";
  } else {
    html.classList.remove("dark");
    // Asegurarse de que los colores predeterminados estén en su lugar
    applyDefaultColors();
    if (themeToggleButton) themeToggleButton.textContent = "🌙";
    if (themeToggleButtonXL) themeToggleButtonXL.textContent = "🌙";
  }

  // Asignar el evento de clic a ambos botones
  if (themeToggleButton) themeToggleButton.addEventListener("click", toggleTheme);
  if (themeToggleButtonXL) themeToggleButtonXL.addEventListener("click", toggleTheme);
});
