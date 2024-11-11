// Seleccionamos el elemento con la clase 'cursor'
const cursor = document.querySelector(".cursor");

// Escuchamos el movimiento del mouse
document.addEventListener("mousemove", (e) => {
  console.log("movimiento detectado!");
  // Establecer las coordenadas del mouse a la posición de la bolita
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});
