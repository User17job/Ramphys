// textBackDark
// Elementos del DOM que serán modificados con el cambio
const body = document.body;
const checkboxX = document.querySelector("#checkbox");
const navbar = document.querySelector("#navbar");
const backgroundd = document.querySelector(".backgroundColor");
const Links = document.querySelectorAll(".span");
const Linkss = document.querySelectorAll("a");

const titles = document.querySelectorAll(".title");
const Back = document.querySelectorAll(".Baki");

const subt = document.querySelectorAll(".subtitle");
const ContactText = document.querySelectorAll(".text-b");

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
    // window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      body.className = className;
    }, 1111);
  }
}

// Función para aplicar modo oscuro
function toDark() {
  navbar.style.backgroundColor = " #020617";
  body.style.backgroundColor = "#020617";
  body.style.color = "#f9fafb";
  body.style.fontFamily = "sans-serif";
  handleScroll("dark");
  backgroundd.style.display = "none";

  // Actualizar clases
  updateClasses(titles, "textBackDark", ["textBackLight", "textBackCrazy"]);
  updateClasses(Back, "BakiDark", ["BakiLight", "BakiCrazy"]);

  updateClasses(Links, "linksDark", ["linksLight", "linksCrazy"]);

  subt.forEach(
    (link) => (
      (link.style.color = "#f9fafb"), (link.style.fontFamily = "Fredoka")
    )
  );
  Links.forEach((link) => (link.style.color = "#f9fafb"));

  Linkss.forEach((link) => (link.style.color = "#f9fafb"));

  ContactText.forEach((mode) => (mode.style.color = "#f9fafb"));

  // rotateDiv.style.backgroundColor = "#036aa1";
}

// Función para aplicar modo claro
function toLight() {
  navbar.style.backgroundColor = " #f9fafb";

  body.style.backgroundColor = "#f9fafb";
  body.style.color = "#020617";
  body.style.fontFamily = "Graduate";
  backgroundd.style.display = "none";

  handleScroll("light");

  // Actualizar clases
  updateClasses(titles, "textBackLight", ["textBackDark", "textBackCrazy"]);
  updateClasses(Back, "BakiLight", ["BakiDark", "BakiCrazy"]);

  updateClasses(Links, "linksLight", ["linksDark", "linksCrazy"]);

  subt.forEach(
    (link) => (
      (link.style.color = "#0369a1"), (link.style.fontFamily = "Graduate")
    )
  );

  Linkss.forEach((link) => (link.style.color = "#020617"));

  if (window.innerWidth < 860) {
    Links.forEach((link) => (link.style.color = "#f9fafb"));
  } else {
    Links.forEach((link) => (link.style.color = "#020617"));
  }

  ContactText.forEach((mode) => (mode.style.color = "#f9fafb"));

  // rotateDiv.style.backgroundColor = "#020617";
}

// Función para aplicar modo loco
function toCrazy() {
  forCrazys();

  window.scrollTo({ top: 0, behavior: "smooth" });
  navbar.style.backgroundColor = " #ea580c";

  body.style.backgroundColor = "#ea580c";
  body.style.color = "#020617";
  body.style.fontFamily = "'Bangers', system-ui";
  backgroundd.style.display = "block";

  handleScroll("crazy");

  // Actualizar clases
  updateClasses(titles, "textBackCrazy", ["textBackDark", "textBackLight"]);

  updateClasses(Back, "BakiCrazy", ["BakiDark", "BakiLight"]);

  updateClasses(Links, "linksCrazy", ["linksDark", "linksLight"]);

  subt.forEach(
    (link) => (
      (link.style.color = "#f9fafb"),
      (link.style.fontFamily = "'Bangers', system-ui")
    )
  );

  Linkss.forEach((link) => (link.style.color = "#f9fafb"));

  ContactText.forEach((mode) => (mode.style.color = "#ea580c"));
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

function forCrazys() {
  document.querySelector("#container").style.visibility = "hidden";
  document.body.style.overflow = "hidden";
  overlay.classList.add("active");
  document.querySelector("#container").style.display = "block";
  document.querySelector("#container").classList.add("charge");
  //////
  //////
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
}

// Aplicar modo oscuro por defecto al cargar la página
document.addEventListener("DOMContentLoaded", toDark);

const modeSwitcherButtons = document.querySelectorAll(".mode-switcher-btn");

const themeFunctions = {
  light: toLight,
  dark: toDark,
  crazy: toCrazy,
};

modeSwitcherButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const themeMode = button.dataset.themeMode;

    // Remove all theme classes
    body.classList.remove("ms-light-theme", "ms-dark-theme", "ms-crazy-theme");

    // Add new theme class if not light theme
    if (themeMode !== "light") {
      body.classList.add(`ms-${themeMode}-theme`);
    }

    // Update active button state
    modeSwitcherButtons.forEach((btn) => {
      btn.classList.remove("ms-active");
    });
    button.classList.add("ms-active");

    // Call la función correspondiente al theme
    if (themeFunctions[themeMode]) {
      themeFunctions[themeMode]();
    }
  });
});
