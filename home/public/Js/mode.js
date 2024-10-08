const forDark = document.getElementById("Dark");
const forLight = document.getElementById("Light");
const forCrazy = document.getElementById("Crazy");

// elementos del dom que seran modificados con el cambio
const body = document.body;
const Links = document.querySelectorAll(".navLInks a ");
const modeBtn = document.querySelectorAll(".dropdown-item");
const modeC = document.querySelector(".dropdown-menu");
const btns = document.querySelectorAll(".Btnss");

const subt = document.querySelector(".subtitle");
const titles = document.querySelectorAll(".title");

// Function to handle class replacement for all .title elements
function updateTitleClasses(newClass, removeClasses = []) {
  titles.forEach((title) => {
    removeClasses.forEach((removeClass) => {
      title.classList.remove(removeClass);
    });
    title.classList.add(newClass);
  });
}

// Function to update button classes
function updateBtnclasses(newClass, removeClasses = []) {
  btns.forEach((button) => {
    removeClasses.forEach((removeClass) => {
      button.classList.remove(removeClass);
    });
    button.classList.add(newClass);
  });
}

// Reusable function for scrolling behavior
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

// Function to apply dark mode
function toDark() {
  body.style.backgroundColor = "#020617";
  body.style.fontFamily = "sans-serif";
  handleScroll("dark");

  // Update .title class
  updateTitleClasses("textBackDark", ["textBackLight", "textBackCrazy"]);

  updateBtnclasses("navbuttonDark", ["navbuttonLight", "navbuttonCrazy"]);

  subt.style.fontFamily = "Fredoka";
  subt.style.color = "#f9fafb";
  modeC.style.backgroundColor = "#020617";

  Links.forEach((link) => (link.style.color = "#f9fafb"));
  modeBtn.forEach((mode) => (mode.style.color = "#f9fafb"));
}
toDark();

// Apply dark mode
forDark.addEventListener("click", toDark);

// Function to apply light mode
function toLight() {
  body.style.backgroundColor = "#f9fafb";
  body.style.color = "#020617";
  body.style.fontFamily = "Graduate";
  handleScroll("light");

  // Update .title class
  updateTitleClasses("textBackLight", ["textBackDark", "textBackCrazy"]);

  updateBtnclasses("navbuttonLight", ["navbuttonDark", "navbuttonCrazy"]);

  subt.style.fontFamily = "Graduate";
  subt.style.color = "#020617";
  modeC.style.backgroundColor = "#f9fafb";

  Links.forEach((link) => (link.style.color = "#020617"));
  modeBtn.forEach((mode) => (mode.style.color = "#020617"));
}

// Apply light mode
forLight.addEventListener("click", toLight);

// Function to apply crazy mode
function toCrazy() {
  body.style.backgroundColor = "#ea580c";
  body.style.color = "#020617";
  body.style.fontFamily = "'Bangers', system-ui";
  handleScroll("crazy");

  // Update .title class
  updateTitleClasses("textBackCrazy", ["textBackDark", "textBackLight"]);

  updateBtnclasses("navbuttonCrazy", ["navbuttonDark", "navbuttonLight"]);

  subt.style.fontFamily = "'Bangers', system-ui";
  subt.style.color = "#020617";
  modeC.style.backgroundColor = "#ea580c";

  Links.forEach((link) => (link.style.color = "#f9fafb"));
  modeBtn.forEach((mode) => (mode.style.color = "#f9fafb"));
}

// Apply crazy mode
forCrazy.addEventListener("click", toCrazy);
