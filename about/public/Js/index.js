// tooltips
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
// responsive menu
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("menu-active");
    document.querySelector(".navLInks").style.opacity = "100%";
  } else {
    document.body.classList.remove("menu-active");
    document.querySelector(".navLInks").style.opacity = "0%";
  }
});

// scroll nav changes
let change = 5;
const navb = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  if (this.document.body.className == "crazy") {
    if (window.scrollY > 150) {
      navb.classList.add("scrolledCrazy");
      navb.style.position = "fixed";
      if (navb.classList == "scrolledDark") {
        navb.classList.remove("scrolledDark");
      }
      if (navb.classList == "scrolledLight") {
        navb.classList.remove("scrolledLight");
      }
    } else {
      navb.classList.remove("scrolledCrazy");
      navb.style.opacity = "100%";
      navb.style.position = "relative";
    }
  }

  if (this.document.body.className == "dark") {
    if (window.scrollY > 150) {
      navb.classList.add("scrolledDark");
      navb.style.position = "fixed";

      if (navb.classList == "scrolledCrazy") {
        navb.classList.remove("scrolledCrazy");
      }
      if (navb.classList == "scrolledLight") {
        navb.classList.remove("scrolledLight");
      }
    } else {
      navb.classList.remove("scrolledDark");
      navb.style.opacity = "100%";
      navb.style.position = "relative";
    }
  }

  if (this.document.body.className == "light") {
    if (window.scrollY > 150) {
      navb.classList.add("scrolledLight");
      navb.style.position = "fixed";

      if (navb.classList == "scrolledCrazy") {
        navb.classList.remove("scrolledCrazy");
      }
      if (navb.classList == "scrolledDark") {
        navb.classList.remove("scrolledDark");
      }
    } else {
      navb.classList.remove("scrolledLight");
      navb.style.opacity = "100%";
      navb.style.position = "relative";
    }
  }
});

// Go Up button
const goUp = document
  .querySelector(".goUpButton")
  .addEventListener("click", goUpp);

function goUpp() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
goUpp();
// Función para comprobar si el elemento está en la vista
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 && // Parte superior del elemento está en la vista
    rect.left >= 0 && // Parte izquierda del elemento está en la vista
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) && // Parte inferior del elemento en la vista
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) // Parte derecha del elemento en la vista
  );
}

// Función para ocultar y mostrar elementos al hacer scroll
function handleScroll() {
  const elements = document.querySelectorAll(".showA");
  elements.forEach((el) => {
    if (!isElementInViewport(el)) {
      el.classList.add("hidden"); // Añade la clase 'hidden' si el elemento no está en vista
    } else {
      el.classList.remove("hidden"); // Remueve la clase si el elemento está en vista
    }
  });
}

// Escuchar el evento scroll
window.addEventListener("scroll", handleScroll);

// Llamar a la función al cargar la página para manejar los elementos visibles
document.addEventListener("DOMContentLoaded", handleScroll);
