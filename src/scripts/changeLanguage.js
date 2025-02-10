document.addEventListener("DOMContentLoaded", () => {
    const languageSelect = document.getElementById("language-select");
  
    languageSelect.addEventListener("change", (event) => {
      const selectedValue = event.target.value;
      if (selectedValue !== "#") {
        window.location.href = selectedValue;
      }
    });
  });
  