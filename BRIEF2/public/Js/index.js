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

document.getElementById("unifiedForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  // Capturar los datos del formulario
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries()); // Convierte FormData en un objeto JSON

  // Enviar los datos a Google Sheets usando fetch

  fetch("https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json(); // Verifica que la respuesta sea JSON
    })
    .then((result) => {
      if (result.status === "success") {
        alert("Formulario enviado exitosamente.");
      } else {
        alert("Hubo un problema al enviar el formulario: " + result.message);
      }
    })
    .catch((error) => {
      console.error("Error al enviar los datos:", error);
      alert(`Error: ${error.message}`);
    });
});
