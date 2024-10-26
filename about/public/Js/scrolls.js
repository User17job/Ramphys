window.addEventListener("load", function () {
  console.log(
    "Todos los elementos de la página han sido completamente cargados."
  );
  // Aquí puedes ejecutar tu lógica

  window.sr = ScrollReveal();

  sr.reveal(".presentation", {
    duration: 1000,
    origin: "top",
    distance: "100px",
    reset: true,
  });

  sr.reveal(".about", {
    duration: 2500,
    origin: "left",
    distance: "150px",
    reset: true,
  });

  sr.reveal(".contact-form", {
    duration: 2200,
    origin: "bottom",
    distance: "150px",
    reset: true,
  });
});
