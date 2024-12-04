// tooltips
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

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

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyHXkmNGDqz2B9ww67lBsnj0gItJbBf53ELYlz3Yb9OcRG4C4kMbanqfh-bI6dtBEQ/exec";

const form = document.getElementById("unifiedForm");
const submitButton = document.getElementById("submitButton");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (submitButton.textContent === "Enviando...") {
    submitButton.disabled = true; // Desactiva el botón
    submitButton.textContent = "Enviando..."; // Cambia el texto del botón
    return; // Evita procesar si ya está enviando
  }

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => response.json())
    .then((data) => {
      if (data.result === "success") {
        alert("Formulario enviado con éxito. Gracias.");
        form.reset(); // Limpia el formulario después de enviar
      } else {
        alert(`Error al enviar el formulario: ${data.error}`);
      }
    })
    .catch((error) => {
      alert(`Hubo un error al enviar el formulario: ${error.message}`);
    })
    .finally(() => {
      submitButton.disabled = false;
    });
});
