document.body.style.overflow = "hidden";

const Logo = document.querySelector(".logo");
const figure = document.querySelector(".ChargingFigure");
const load = document.querySelector(".apsm");
const Loader = document.querySelector(".loaderr");

const variable = 1;
localStorage.setItem("local", variable);
let local2 = localStorage.getItem("local");

// Add a flag to indicate when loading is complete
window.loadingComplete = false;

if (local2 === "1") {
  load.classList.remove("loader");
  load.classList.add("loaderCLass");

  setTimeout(() => (Logo.style.opacity = "100%"), 5000);
  setTimeout(() => (figure.style.transform = "scale(1.2)"), 5450);
  setTimeout(() => {
    load.style.display = "none";
    Loader.style.display = "none";
  }, 5500);

  setTimeout(() => {
    document.querySelector("#container").style.display = "block";
    document.querySelector("#container").classList.add("charge");

    const chargingElement = document.querySelector(".charging");
    chargingElement.classList.add("fade-out");

    setTimeout(() => {
      chargingElement.style.display = "none";
      document.body.style.overflow = "scroll";
      // Set flag when loading is complete
      window.loadingComplete = true;
      // Dispatch event when loading is complete
      window.dispatchEvent(new Event("loadingComplete"));
    }, 1000);
  }, 5900);
} else {
  load.classList.add("loader");
  load.classList.remove("loaderCLass");

  setTimeout(() => {
    load.style.display = "none";
    Loader.style.display = "none";
  }, 7500);
  setTimeout(() => (Logo.style.opacity = "100%"), 7000);
  setTimeout(() => (figure.style.transform = "scale(1.2)"), 7450);

  setTimeout(() => {
    document.querySelector("#container").style.display = "block";
    document.querySelector("#container").classList.add("charge");

    const chargingElement = document.querySelector(".charging");
    chargingElement.classList.add("fade-out");

    setTimeout(() => {
      chargingElement.style.display = "none";
      document.body.style.display = "scroll";
      // Set flag when loading is complete
      window.loadingComplete = true;
      // Dispatch event when loading is complete
      window.dispatchEvent(new Event("loadingComplete"));
    }, 1000);
  }, 7900);
}
