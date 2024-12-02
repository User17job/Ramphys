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

document
  .getElementById("unifiedForm")
  .addEventListener("submit", function (event) {
    if (!this.checkValidity()) {
      event.preventDefault(); // Evita el envío si la validación falla
      this.reportValidity(); // Muestra los cuadros de diálogo nativos
      return; // Detiene la ejecución
    }

    event.preventDefault(); // Evita el envío tradicional del formulario

    const formData = new FormData(this); // Obtiene los datos del formulario
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Realiza la solicitud POST al servidor
    fetch("/save-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Convierte los datos a formato JSON
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al guardar los datos.");
        }
        return response.text();
      })
      .then((message) => {
        console.log(message); // Muestra el mensaje de éxito

        // Resetea el formulario
        document.getElementById("unifiedForm").reset();

        // Redirige a otra página
        window.location.href = "/gracias.html"; // Cambia a la página que desees
      })
      .catch((error) => {
        console.error(error);
        alert("Hubo un error al guardar los datos. Intenta nuevamente.");
      });
  });
