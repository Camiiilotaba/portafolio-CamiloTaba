document.addEventListener("DOMContentLoaded", () => {
  const languageSelect = document.getElementById("language-select");

  languageSelect.addEventListener("change", (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === "") {
      window.location.href = "http://localhost:4321"; 
    } else {
      window.location.href = selectedValue;
    }
  });
});
