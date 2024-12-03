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
  e.preventDefault(); // Evita el envío predeterminado del formulario

  // Capturar los datos del formulario
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries()); // Convertir FormData en un objeto JSON

  // Validar que los campos obligatorios estén completos
  const requiredFields = ["fullName", "email", "phone", "companyName"];
  for (const field of requiredFields) {
    if (!data[field] || data[field].trim() === "") {
      alert(`El campo ${field} es obligatorio.`);
      return;
    }
  }

  // Validar el formato del correo electrónico
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(data.email)) {
    alert("Por favor, introduce un correo válido.");
    return;
  }

  // Validar el formato del teléfono (opcional, puedes personalizar el patrón)
  const phonePattern = /^\+?[0-9\s-]{7,15}$/;
  if (!phonePattern.test(data.phone)) {
    alert("Por favor, introduce un número de teléfono válido.");
    return;
  }

  // Asignar valores predeterminados a los campos opcionales
  const optionalFieldsDefaults = {
    currentWebsite: "No especificado",
    projectType: "General",
    projectDescription: "No se proporcionó una descripción.",
    pageCount: "Sin definir",
    contentPrepared: "No especificado",
    specificFunctionalities: "No especificado",
    brandMission: "No especificado",
    targetAudience: "No especificado",
    brandLogoIdeas: "No especificado",
    colorPalette: "No especificado",
    budget: "Por definir",
    projectTimeline: "Por definir",
    paymentTerms: "No especificado",
    paymentMethod: "No especificado",
  };

  // Completar los datos opcionales con valores predeterminados si están vacíos
  Object.keys(optionalFieldsDefaults).forEach((field) => {
    if (!data[field] || data[field].trim() === "") {
      data[field] = optionalFieldsDefaults[field];
    }
  });

  // Mostrar los datos en la consola para depuración
  console.log("Datos enviados:", data);

  // Indicador visual en el botón de envío
  const submitButton = document.querySelector("#submitButton");

  if (submitButton) {
    submitButton.disabled = true; // Desactiva el botón mientras se envía
    submitButton.textContent = "Enviando..."; // Cambia el texto del botón
  }

  // Enviar los datos a Google Sheets usando fetch
  fetch(
    "https://script.google.com/macros/s/AKfycbzeGXtzUbsF7eI3MfZtpvCtzqzRt_yWRHhkView8-ILBWOKmdAOOXRL3kt7msjY5kTt/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json(); // Verifica que la respuesta sea JSON
    })
    .then((result) => {
      if (result.status === "success") {
        alert("Formulario enviado exitosamente.");
        e.target.reset(); // Limpiar el formulario después del envío
      } else {
        const errorMessage = result.message || "Hubo un error inesperado.";
        alert(`Hubo un problema al enviar el formulario: ${errorMessage}`);
      }
    })
    .catch((error) => {
      console.error("Error al enviar los datos:", error);
      alert(`Error: ${error.message}`);
    })
    .finally(() => {
      if (submitButton) {
        submitButton.disabled = false; // Habilita el botón nuevamente
        submitButton.textContent = "Enviar"; // Restaura el texto del botón
      }
    });
});
