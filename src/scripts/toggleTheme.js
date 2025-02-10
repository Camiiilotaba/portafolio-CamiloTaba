document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle");
    const html = document.documentElement;
  
    // Guardar el tema en localStorage
    if (localStorage.getItem("theme") === "dark") {
      html.classList.add("dark");
      themeToggleButton.textContent = "☀️";
    }
  
    themeToggleButton.addEventListener("click", () => {
      if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        localStorage.setItem("theme", "light");
        themeToggleButton.textContent = "🌙";
      } else {
        html.classList.add("dark");
        localStorage.setItem("theme", "dark");
        themeToggleButton.textContent = "☀️";
      }
    });
  });
  