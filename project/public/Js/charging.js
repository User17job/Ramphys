document.body.style.overflow = "hidden";

const Logo = document.querySelector(".logo");
const figure = document.querySelector(".ChargingFigure");
const load = document.querySelector(".apsm");
const Loader = document.querySelector(".loaderr");

const variable = 1;
let local = localStorage.setItem("local", variable);

let local2 = localStorage.getItem("local");
if (local2 === "1") {
  load.classList.remove("loader");
  load.classList.add("loaderCLass");
  setTimeout(() => {
    Logo.style.opacity = "100%";
  }, 5000);
  setTimeout(() => {
    figure.style.transform = "scale(1.2)";
  }, 5450);
  setTimeout(() => {
    load.style.display = "none";
    Loader.style.display = "none";
  }, 5500);

  setTimeout(() => {
    // Mostrar el contenido principal y habilitar el scroll
    document.querySelector("#container").style.display = "block";
    document.querySelector("#container").classList.add("charge");

    // Agregar la clase de desvanecimiento
    const chargingElement = document.querySelector(".charging");
    chargingElement.classList.add("fade-out");

    // Esperar a que termine la animación de desvanecimiento antes de ocultar el elemento
    setTimeout(() => {
      chargingElement.style.display = "none"; // Ocultar el elemento
    }, 1000); // 1 segundo para coincidir con la duración de la transición
    document.body.style.overflow = "scroll";
  }, 5900); // 5 segundos antes de iniciar el proceso
} else {
  load.classList.add("loader");
  load.classList.remove("loaderCLass");
  setTimeout(() => {
    load.style.display = "none";
    Loader.style.display = "none";
  }, 7500);
  setTimeout(() => {
    Logo.style.opacity = "100%";
  }, 7000);
  setTimeout(() => {
    figure.style.transform = "scale(1.2)";
  }, 7450);

  setTimeout(() => {
    // Mostrar el contenido principal y habilitar el scroll
    document.querySelector("#container").style.display = "block";
    document.querySelector("#container").classList.add("charge");

    // Agregar la clase de desvanecimiento
    const chargingElement = document.querySelector(".charging");
    chargingElement.classList.add("fade-out");

    // Esperar a que termine la animación de desvanecimiento antes de ocultar el elemento
    setTimeout(() => {
      chargingElement.style.display = "none"; // Ocultar el elemento
    }, 1000); // 1 segundo para coincidir con la duración de la transición
    document.body.style.overflow = "scroll";
  }, 7900); // 5 segundos antes de iniciar el proceso
}
setTimeout(() => {
  // Mostrar el contenido principal y habilitar el scroll
  document.querySelector("#container").style.display = "block";
  document.querySelector("#container").classList.add("charge");

  // Agregar la clase de desvanecimiento
  const chargingElement = document.querySelector(".charging");
  chargingElement.classList.add("fade-out");

  // Esperar a que termine la animación de desvanecimiento antes de ocultar el elemento
  setTimeout(() => {
    chargingElement.style.display = "none"; // Ocultar el elemento
  }, 1000); // 1 segundo para coincidir con la duración de la transición
  document.body.style.overflow = "scroll";
}, 7900); // 5 segundos antes de iniciar el proceso
