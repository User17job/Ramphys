// elementos del dom que seran modificados con el cambio
const forDark = document.getElementById("Dark");
const forLight = document.getElementById("Light");
const forCrazy = document.getElementById("Crazy");
// textBackDark
// Elementos del DOM que serán modificados con el cambio
const body = document.body;
const checkboxX = document.querySelector("#checkbox");
const navbar = document.querySelector("#navbar");
const backgroundd = document.querySelector(".backgroundColor");
const Links = document.querySelectorAll(".span");
const Linkss = document.querySelectorAll("a");

const footLinks = document.querySelectorAll(".footerLink");
const modeBtn = document.querySelectorAll(".dropdown-item");
const modeC = document.querySelector(".dropdown-menu");
const btns = document.querySelectorAll(".Btnss");

const titles = document.querySelectorAll(".title");
const Back = document.querySelectorAll(".Baki");

const subt = document.querySelectorAll(".subtitle");

const texto = document.querySelector(".text");
const ContactText = document.querySelectorAll(".text-b");

const duoCArdItem = document.querySelectorAll(".duoCArdItem");

const services = document.querySelector(".services");

const branding = document.querySelectorAll(".Colaborationslogos");

const foot = document.querySelector("#footer ");

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

  navbar.style.backgroundColor = " #020617";
  body.style.backgroundColor = "#020617";
  body.style.color = "#f9fafb";
  body.style.fontFamily = "sans-serif";
  handleScroll("dark");
  backgroundd.style.display = "none";

  // Actualizar clases
  updateClasses(titles, "textBackDark", ["textBackLight", "textBackCrazy"]);
  updateClasses(btns, "navbuttonDark", ["navbuttonLight", "navbuttonCrazy"]);
  updateClasses(Back, "BakiDark", ["BakiLight", "BakiCrazy"]);
  updateClasses(duoCArdItem, "cardDark", ["cardLight", "cardCrazy"]);

  subt.forEach((element) => {
    element.style.fontFamily = "Graduate";
    element.style.color = "#f9fafb";
  });

  modeC.style.backgroundColor = "#020617";

  Links.forEach((link) => (link.style.color = "#f9fafb"));

  Linkss.forEach((link) => (link.style.color = "#f9fafb"));

  modeBtn.forEach((mode) => (mode.style.color = "#f9fafb"));
  ContactText.forEach((mode) => (mode.style.color = "#f9fafb"));

  texto.style.color = "#f9fafb";

  window.scrollTo({ top: 0, behavior: "smooth" });

  branding.forEach(
    (mode) =>
      (mode.style.backgroundImage =
        "radial-gradient(#020617 15%, transparent 60%, rgba(0, 0, 0, 0) 100%)")
  );

  document
    .querySelectorAll("section")
    .forEach((secs) => secs.classList.remove("animados"));

  foot.style.backgroundColor = "#036aa12e";
  footLinks.forEach((fLinks) => {
    fLinks.style.color = "#f9fafb";
  });
}

// Función para aplicar modo claro
function toLight() {
  if (checkboxX.checked) {
    checkboxX.checked = false;
  }
  navbar.style.backgroundColor = " #f9fafb";

  body.style.backgroundColor = "#f9fafb";
  body.style.color = "#020617";
  body.style.fontFamily = "Graduate";
  backgroundd.style.display = "none";

  handleScroll("light");

  // Actualizar clases
  updateClasses(titles, "textBackLight", ["textBackDark", "textBackCrazy"]);
  updateClasses(btns, "navbuttonLight", ["navbuttonDark", "navbuttonCrazy"]);
  updateClasses(Back, "BakiLight", ["BakiDark", "BakiCrazy"]);
  updateClasses(duoCArdItem, "cardLight", ["cardDark", "cardCrazy"]);

  subt.forEach((element) => {
    element.style.fontFamily = "Fredoka";
    element.style.color = "#020617";
  });

  modeC.style.backgroundColor = "#f9fafb";

  Linkss.forEach((link) => (link.style.color = "#020617"));
  if (window.innerWidth < 860) {
    Links.forEach((link) => (link.style.color = "#f9fafb"));
  } else {
    Links.forEach((link) => (link.style.color = "#020617"));
  }

  modeBtn.forEach((mode) => (mode.style.color = "#020617"));

  texto.style.color = "#020617";
  ContactText.forEach((mode) => (mode.style.color = "#f9fafb"));

  window.scrollTo({ top: 0, behavior: "smooth" });

  branding.forEach(
    (mode) =>
      (mode.style.backgroundImage =
        "radial-gradient(#f4f6ff 15%, transparent 60%, rgba(0, 0, 0, 0) 100%)")
  );

  document
    .querySelectorAll("section")
    .forEach((secs) => secs.classList.remove("animados"));

  foot.style.backgroundColor = "#02061733";
  footLinks.forEach((fLinks) => {
    fLinks.style.color = "#020617";
  });
}

// Función para aplicar modo loco
function toCrazy() {
  if (checkboxX.checked) {
    checkboxX.checked = false;
  }
  navbar.style.backgroundColor = " #ea580c";

  body.style.backgroundColor = "#ea580c";
  body.style.color = "#020617";
  body.style.fontFamily = "'Bangers', system-ui";
  backgroundd.style.display = "block";

  handleScroll("crazy");

  // Actualizar clases
  updateClasses(titles, "textBackCrazy", ["textBackDark", "textBackLight"]);
  updateClasses(btns, "navbuttonCrazy", ["navbuttonDark", "navbuttonLight"]);
  updateClasses(Back, "BakiCrazy", ["BakiDark", "BakiLight"]);
  updateClasses(duoCArdItem, "cardCrazy", ["cardDark", "cardLight"]);

  subt.forEach((element) => {
    element.style.fontFamily = "'Bangers', system-ui";
    element.style.color = "#f9fafb";
  });

  modeC.style.backgroundColor = "#ea580c";

  Linkss.forEach((link) => (link.style.color = "#f9fafb"));
  Links.forEach((link) => (link.style.color = "#f9fafb"));

  modeBtn.forEach((mode) => (mode.style.color = "#f9fafb"));

  texto.style.color = "#f9fafb";

  ContactText.forEach((mode) => (mode.style.color = "#ea580c"));

  window.scrollTo({ top: 0, behavior: "smooth" });

  //

  branding.forEach(
    (mode) =>
      (mode.style.backgroundImage =
        "radial-gradient(#ea580c 15%, transparent 60%, rgba(0, 0, 0, 0) 100%)")
  );

  document
    .querySelectorAll("section")
    .forEach((secs) => secs.classList.add("animados"));
  foot.style.backgroundColor = "#ea5a0c5d";
  footLinks.forEach((fLinks) => {
    fLinks.style.color = "#15da15";
  });
}

// Crear un overlay en el body que oscurecerá el contenido
const overlay = document.createElement("div");
overlay.id = "overlay";
overlay.innerHTML = `
    <div class="cargando">
      <div class="loaderr">
          <div class="load-inner load-one"></div>
          <div class="load-inner load-two"></div>
          <div class="load-inner load-three"></div>
        <span class="textCharge">Loading...</span>
      </div>
    </div>
`;
document.body.appendChild(overlay);

forCrazy.addEventListener("click", () => {
  document.querySelector("#container").style.visibility = "hidden";
  document.body.style.overflow = "hidden";
  overlay.classList.add("active");
  document.querySelector("#container").style.display = "block";
  document.querySelector("#container").classList.add("charge");

  // Agregar la clase de desvanecimiento
  const chargingElement = document.querySelector(".charging");
  chargingElement.classList.add("fade-out");
  setTimeout(() => {
    document.querySelector("#container").style.visibility = "visible";
    chargingElement.style.display = "none";
  }, 2000);
  setTimeout(() => {
    overlay.classList.remove("active");
  }, 2500);
  setTimeout(() => {
    document.body.style.overflow = "scroll";
  }, 2800);
});

// Event listeners para aplicar los modos
forDark.addEventListener("click", toDark);
forLight.addEventListener("click", toLight);
forCrazy.addEventListener("click", toCrazy);

// Aplicar modo oscuro por defecto al cargar la página
document.addEventListener("DOMContentLoaded", toDark);
