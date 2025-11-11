// Menú desplegable de catálogos
const catalogBtn = document.querySelector(".catalog-btn");
const optionsMenu = document.querySelector(".options");

catalogBtn.addEventListener("click", () => {
  optionsMenu.classList.toggle("show");
});

// Redirección de cada opción
document.querySelectorAll(".options div").forEach