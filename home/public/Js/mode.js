// const forDark = document.getElementById("Dark");
// const forLight = document.getElementById("Light");
// const forCrazy = document.getElementById("Crazy");

// // elementos del dom que seran modificados con el cambio
// const body = document.body;
// const backgroundd = document.querySelector(".backgroundColor");
// const Linkss = document.querySelectorAll(".navLInks a ");
// const modeBtn = document.querySelectorAll(".dropdown-item");
// const modeC = document.querySelector(".dropdown-menu");
// const btns = document.querySelectorAll(".Btnss");

// const titles = document.querySelectorAll(".title");
// const Back = document.querySelectorAll(".Baki");

// const subt = document.querySelector(".subtitle");
// const texto = document.querySelector(".text");

// const rotateDiv = document.querySelector(".rotateDiv");

// const services = document.querySelector(".services");

// function updateTitleClasses(newClass, removeClasses = []) {
//   titles.forEach((title) => {
//     removeClasses.forEach((removeClass) => {
//       title.classList.remove(removeClass);
//     });
//     title.classList.add(newClass);
//   });
// }

// // Function to update button classes
// function updateBtnclasses(newClass, removeClasses = []) {
//   btns.forEach((button) => {
//     removeClasses.forEach((removeClass) => {
//       button.classList.remove(removeClass);
//     });
//     button.classList.add(newClass);
//   });
// }

// function updateBacksClasses(newClass, removeClasses = []) {
//   Back.forEach((backClass) => {
//     removeClasses.forEach((deleteCLass) => {
//       backClass.classList.remove(deleteCLass);
//     });
//     backClass.classList.add(newClass);
//   });
// }

// // Reusable function for scrolling behavior
// function handleScroll(className) {
//   if (window.scrollY < 25) {
//     body.className = className;
//   } else {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     setTimeout(() => {
//       body.className = className;
//     }, 1111);
//   }
// }

// // Function to apply dark mode
// function toDark() {
//   body.style.backgroundColor = "#020617";
//   body.style.fontFamily = "sans-serif";
//   handleScroll("dark");
//   backgroundd.style.display = "none";

//   // Update .title class
//   updateTitleClasses("textBackDark", ["textBackLight", "textBackCrazy"]);

//   updateBtnclasses("navbuttonDark", ["navbuttonLight", "navbuttonCrazy"]);

//   updateBacksClasses("BakiDark", ["BakiLight", "BakiCrazy"]);

//   subt.style.fontFamily = "Fredoka";
//   subt.style.color = "#f9fafb";
//   modeC.style.backgroundColor = "#020617";

//   Linkss.forEach((link) => (link.style.color = "#f9fafb"));
//   modeBtn.forEach((mode) => (mode.style.color = "#f9fafb"));

//   texto.style.color = "#f9fafb";

//   rotateDiv.style.backgroundColor = "#036aa1";

//   window.scrollTo({ top: 0, behavior: "smooth" });

//   if ((services.classList = "serviceLight")) {
//     services.classList.remove("serviceLight");
//   }
//   if ((services.classList = "serviceCrazy")) {
//     services.classList.remove("serviceCrazy");
//   }
//   services.classList.add("serviceDark");
// }
// toDark();

// // Apply dark mode
// forDark.addEventListener("click", toDark);

// // Function to apply light mode
// function toLight() {
//   body.style.backgroundColor = "#f9fafb";
//   body.style.color = "#020617";
//   body.style.fontFamily = "Graduate";
//   backgroundd.style.display = "none";

//   handleScroll("light");

//   // Update .title class
//   updateTitleClasses("textBackLight", ["textBackDark", "textBackCrazy"]);

//   updateBtnclasses("navbuttonLight", ["navbuttonDark", "navbuttonCrazy"]);

//   updateBacksClasses("BakiLight", ["BakiDark", "BakiCrazy"]);

//   subt.style.fontFamily = "Graduate";
//   subt.style.color = "#020617";
//   modeC.style.backgroundColor = "#f9fafb";

//   Linkss.forEach((link) => (link.style.color = "#020617"));
//   modeBtn.forEach((mode) => (mode.style.color = "#020617"));

//   texto.style.color = "#020617";

//   rotateDiv.style.backgroundColor = "#020617";

//   window.scrollTo({ top: 0, behavior: "smooth" });

//   if ((services.classList = "serviceDark ")) {
//     services.classList.remove("serviceDark ");
//   }
//   if ((services.classList = "serviceCrazy")) {
//     services.classList.remove("serviceCrazy");
//   }
//   services.classList.add("serviceLight");
// }

// // Apply light mode
// forLight.addEventListener("click", toLight);

// // Function to apply crazy mode
// function toCrazy() {
//   body.style.backgroundColor = "#ea580c";
//   body.style.color = "#020617";
//   body.style.fontFamily = "'Bangers', system-ui";
//   backgroundd.style.display = "block";

//   handleScroll("crazy");

//   updateTitleClasses("textBackCrazy", ["textBackDark", "textBackLight"]);

//   updateBtnclasses("navbuttonCrazy", ["navbuttonDark", "navbuttonLight"]);

//   updateBacksClasses("BakiCrazy", ["BakiDark", "BakiLight"]);

//   subt.style.fontFamily = "'Bangers', system-ui";
//   subt.style.color = "#020617";

//   modeC.style.backgroundColor = "#ea580c";

//   Linkss.forEach((link) => (link.style.color = "#f9fafb"));
//   modeBtn.forEach((mode) => (mode.style.color = "#f9fafb"));

//   texto.style.color = "#020617";

//   rotateDiv.style.backgroundColor = "#73ff00";

//   window.scrollTo({ top: 0, behavior: "smooth" });

//   if ((services.classList = "serviceDark ")) {
//     services.classList.remove("serviceDark ");
//   }
//   if ((services.classList = "serviceLight")) {
//     services.classList.remove("serviceLight");
//   }
//   services.classList.add("serviceDark serviceCrazy");
// }

// elementos del dom que seran modificados con el cambio
const forDark = document.getElementById("Dark");
const forLight = document.getElementById("Light");
const forCrazy = document.getElementById("Crazy");

// Elementos del DOM que serán modificados con el cambio
const body = document.body;
const checkboxX = document.querySelector("#checkbox");
const backgroundd = document.querySelector(".backgroundColor");
const Links = document.querySelectorAll(".navLInks a");
const Linkss = document.querySelectorAll("a");
const modeBtn = document.querySelectorAll(".dropdown-item");
const modeC = document.querySelector(".dropdown-menu");
const btns = document.querySelectorAll(".Btnss");

const titles = document.querySelectorAll(".title");
const Back = document.querySelectorAll(".Baki");

const subt = document.querySelector(".subtitle");
const texto = document.querySelector(".text");

const rotateDiv = document.querySelector(".rotateDiv");

const services = document.querySelector(".services");
const serviceName = document.querySelectorAll(".serviceName");
const serviceDesc = document.querySelector(".serviceDescription");

const aboutDiv = document.querySelector(".aboutUno");

const branding = document.querySelectorAll(".Colaborationslogos");

const layout = document.querySelector(".layout");

// Helper para actualizar las clases de múltiples elementos
function updateClasses(elements, newClass, removeClasses = []) {
  elements.forEach((element) => {
    removeClasses.forEach((removeClass) =>
      element.classList.remove(removeClass)
    );
    element.classList.add(newClass);
  });
}

// Función reutilizable para el comportamiento de desplazamiento
function handleScroll(className) {
  if (window.scrollY < 25) {
    body.className = className;
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      body.className = className;
    }, 1111);
  }
}

// Función para aplicar modo oscuro
function toDark() {
  if (checkboxX.checked) {
    checkboxX.checked = false;
  }
  body.style.backgroundColor = "#020617";
  body.style.color = "#f9fafb";
  body.style.fontFamily = "sans-serif";
  handleScroll("dark");
  backgroundd.style.display = "none";

  // Actualizar clases
  updateClasses(titles, "textBackDark", ["textBackLight", "textBackCrazy"]);
  updateClasses(btns, "navbuttonDark", ["navbuttonLight", "navbuttonCrazy"]);
  updateClasses(Back, "BakiDark", ["BakiLight", "BakiCrazy"]);
  updateClasses(serviceName, "serviceNameDark", [
    "serviceNameCrazy",
    "serviceNameLight",
  ]);

  subt.style.fontFamily = "Fredoka";
  subt.style.color = "#f9fafb";
  modeC.style.backgroundColor = "#020617";

  Linkss.forEach((link) => (link.style.color = "#f9fafb"));
  Links.forEach((link) => (link.style.color = "#f9fafb"));
  modeBtn.forEach((mode) => (mode.style.color = "#f9fafb"));

  texto.style.color = "#f9fafb";
  rotateDiv.style.backgroundColor = "#036aa1";

  window.scrollTo({ top: 0, behavior: "smooth" });

  // Actualizar clases de servicios
  services.classList.remove("serviceLight", "serviceCrazy");
  services.classList.add("serviceDark");
  serviceDesc.style.color = "#f9fafb";

  aboutDiv.style.backgroundColor = "#f4f6ff";
  aboutDiv.style.color = "#000000";

  branding.forEach(
    (mode) =>
      (mode.style.backgroundImage =
        "radial-gradient(#020617 15%, transparent 60%, rgba(0, 0, 0, 0) 100%)")
  );
  layout.style.backgroundImage =
    "linear-gradient(265deg, #020617 35%, #036aa136 100%)";
}

// Función para aplicar modo claro
function toLight() {
  if (checkboxX.checked) {
    checkboxX.checked = false;
  }
  body.style.backgroundColor = "#f9fafb";
  body.style.color = "#020617";
  body.style.fontFamily = "Graduate";
  backgroundd.style.display = "none";

  handleScroll("light");

  // Actualizar clases
  updateClasses(titles, "textBackLight", ["textBackDark", "textBackCrazy"]);
  updateClasses(btns, "navbuttonLight", ["navbuttonDark", "navbuttonCrazy"]);
  updateClasses(Back, "BakiLight", ["BakiDark", "BakiCrazy"]);
  updateClasses(serviceName, "serviceNameLight", [
    "serviceNameDark",
    "serviceNameCrazy",
  ]);

  subt.style.fontFamily = "Graduate";
  subt.style.color = "#020617";
  modeC.style.backgroundColor = "#f9fafb";

  Linkss.forEach((link) => (link.style.color = "#020617"));
  Links.forEach((link) => (link.style.color = "#020617"));
  modeBtn.forEach((mode) => (mode.style.color = "#020617"));

  texto.style.color = "#020617";
  rotateDiv.style.backgroundColor = "#020617";

  window.scrollTo({ top: 0, behavior: "smooth" });

  // Actualizar clases de servicios
  services.classList.remove("serviceDark", "serviceCrazy");
  services.classList.add("serviceLight");
  serviceDesc.style.color = "#020617";

  aboutDiv.style.backgroundColor = "#036aa1";
  aboutDiv.style.color = "#fff";

  branding.forEach(
    (mode) =>
      (mode.style.backgroundImage =
        "radial-gradient(#f4f6ff 15%, transparent 60%, rgba(0, 0, 0, 0) 100%)")
  );

  layout.style.backgroundImage =
    "linear-gradient(5deg, #5cc0f531 35%, #94a3b846 100%)";
}

// Función para aplicar modo loco
function toCrazy() {
  if (checkboxX.checked) {
    checkboxX.checked = false;
  }
  body.style.backgroundColor = "#ea580c";
  body.style.color = "#020617";
  body.style.fontFamily = "'Bangers', system-ui";
  backgroundd.style.display = "block";

  handleScroll("crazy");

  // Actualizar clases
  updateClasses(titles, "textBackCrazy", ["textBackDark", "textBackLight"]);
  updateClasses(btns, "navbuttonCrazy", ["navbuttonDark", "navbuttonLight"]);
  updateClasses(Back, "BakiCrazy", ["BakiDark", "BakiLight"]);
  updateClasses(serviceName, "serviceNameCrazy", [
    "serviceNameDark",
    "serviceNameLight",
  ]);

  subt.style.fontFamily = "'Bangers', system-ui";
  subt.style.color = "#020617";
  modeC.style.backgroundColor = "#ea580c";

  Linkss.forEach((link) => (link.style.color = "#f9fafb"));
  Links.forEach((link) => (link.style.color = "#f9fafb"));
  modeBtn.forEach((mode) => (mode.style.color = "#f9fafb"));

  texto.style.color = "#020617";
  rotateDiv.style.backgroundColor = "#73ff00";

  window.scrollTo({ top: 0, behavior: "smooth" });

  // Actualizar clases de servicios
  services.classList.remove("serviceDark", "serviceLight");
  services.classList.add("serviceDark", "serviceCrazy");
  serviceDesc.style.color = "#f9fafb";

  aboutDiv.style.backgroundColor = "#ea580c";
  aboutDiv.style.color = "#fff";

  branding.forEach(
    (mode) =>
      (mode.style.backgroundImage =
        "radial-gradient(#ea580c 15%, transparent 60%, rgba(0, 0, 0, 0) 100%)")
  );
  layout.style.backgroundImage =
    "linear-gradient(55deg, #ea580c 35%, #036aa136 100%)";
}

// Event listeners para aplicar los modos
forDark.addEventListener("click", toDark);
forLight.addEventListener("click", toLight);
forCrazy.addEventListener("click", toCrazy);

// Aplicar modo oscuro por defecto al cargar la página
document.addEventListener("DOMContentLoaded", toDark);
