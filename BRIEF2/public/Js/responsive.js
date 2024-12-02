function updateDivClassOnResize() {
  const targetDiv = document.querySelector(".navLInks"); // Cambia 'miDiv' al ID de tu div

  function checkViewportSize() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (viewportWidth < 860 && viewportHeight < 555) {
      targetDiv.classList.add("nuevaClase");
    } else {
      targetDiv.classList.remove("nuevaClase");
    }
  }

  // Llama a la función cuando se carga la página
  checkViewportSize();

  // Escucha los cambios en el tamaño de la ventana
  window.addEventListener("resize", checkViewportSize);
}

// Llama a la función
updateDivClassOnResize();
