// window.addEventListener("load", function () {
//   console.log(
//     "Todos los elementos de la página han sido completamente cargados."
//   );
// Aquí puedes ejecutar tu lógica

window.sr = ScrollReveal();

//   sr.reveal('.text-center')

sr.reveal(".serviceTitle");
sr.reveal(".serviceItem", {
  // duration: 1000,
  // origin: "top",
  // distance: "100px",
  // reset: true,
});
sr.reveal(".projectsTitle", {
  duration: 2000,
  origin: "top",
  distance: "100px",
  reset: true,
});
sr.reveal(".projectFigure");

sr.reveal(".stackOptions", {
  duration: 2500,
  origin: "right",
  distance: "150px",
});

sr.reveal(".about", {
  duration: 2500,
  origin: "left",
  distance: "150px",
  reset: true,
});
sr.reveal(".blog1", {
  duration: 1200,
  origin: "bottom",
  distance: "250px",
  delay: 0, // Aparece inmediatamente
});
// Blog
sr.reveal(".blog2", {
  duration: 1250,
  origin: "right",
  distance: "350px",
  delay: 200, // Retraso de 200 ms después del primero
});
sr.reveal(".blog3", {
  duration: 1250,
  origin: "left",
  distance: "350px",
  delay: 400, // Retraso de 400 ms después del primero
});
sr.reveal(".blog4", {
  duration: 1250,
  origin: "left",
  distance: "350px",
  delay: 600, // Retraso de 600 ms
});
sr.reveal(".blog5", {
  duration: 1250,
  origin: "left",
  distance: "350px",
  delay: 800, // Retraso de 800 ms
});
sr.reveal(".blog6", {
  duration: 1250,
  origin: "left",
  distance: "350px",
  delay: 1000, // Retraso de 1000 ms
});
sr.reveal(".blog7", {
  duration: 1250,
  origin: "top",
  distance: "350px",
  delay: 1200, // Retraso de 1200 ms
});
sr.reveal(".blog8", {
  duration: 1250,
  origin: "top",
  distance: "350px",
  delay: 1400, // Retraso de 1400 ms
});

sr.reveal(".ContactData", {
  duration: 2200,
  origin: "top",
  distance: "150px",
  reset: true,
});
sr.reveal(".contact-form", {
  duration: 2200,
  origin: "bottom",
  distance: "150px",
  reset: true,
});
// });
