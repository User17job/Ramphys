// Wait for loading to complete before initializing tooltips
function initializeTooltips() {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
}

// Only initialize tooltips after loading is complete
window.addEventListener("loadingComplete", () => {
  initializeTooltips();
});

// Configuración de servicios disponibles
const services = [
  { id: "DesignORDevWeb", name: "Diseño y Desarrollo Web" },
  { id: "Estilizacion", name: "Estilización Web" },
  { id: "Branding", name: "Creación de Marca" },
];

let selectedServices = []; // Almacena los servicios seleccionados

// Función para abrir el diálogo de selección de servicios
window.openServiceDialog = function () {
  Swal.fire({
    title: "<strong class='subt'>Selecciona el/los Servicio(s)</strong>",
    html: `
      <div class="service-grid">
        ${services
          .map(
            (service) => `
          <button 
            type="button"
            class="service-button subt ${
              selectedServices.includes(service.id) ? "selected" : ""
            }" 
            data-service-id="${service.id}"
          >
            ${service.name}
          </button>
        `
          )
          .join("")}
      </div>
    `,
    showCancelButton: true,
    confirmButtonText: "Confirmar",
    cancelButtonText: "Cancelar",
    width: "500px",
    allowOutsideClick: true,
    didOpen: () => {
      // Agregar event listeners a los botones después de que el diálogo se abre
      document.querySelectorAll(".service-button").forEach((button) => {
        button.addEventListener("click", function () {
          const serviceId = this.dataset.serviceId;
          toggleService(serviceId, this);
        });
      });
    },
    preConfirm: () => {
      if (selectedServices.length === 0) {
        Swal.showValidationMessage(
          "Por favor selecciona al menos un servicio."
        );
        return false;
      }
      return selectedServices;
    },
  }).then((result) => {
    if (result.isConfirmed) {
      handleServiceSelect(result.value);
    }
  });
};

// Función para alternar la selección de servicios
function toggleService(serviceId, button) {
  if (selectedServices.includes(serviceId)) {
    selectedServices = selectedServices.filter((id) => id !== serviceId);
    button.classList.remove("selected");
  } else {
    selectedServices.push(serviceId);
    button.classList.add("selected");
  }
}

// Función para manejar la selección de servicios
function handleServiceSelect(selected) {
  // Esconde todas las secciones de servicios
  document.querySelectorAll(".serv").forEach((section) => {
    section.style.display = "none";
  });

  // Muestra las secciones seleccionadas
  selected.forEach((serviceId) => {
    const section = document.getElementById(serviceId);
    if (section) {
      section.style.display = "block";
    }
  });

  // Actualiza el campo oculto con los servicios seleccionados
  document.getElementById("selectedServices").value = selected.join(",");
}

// Configuración del scroll del navbar
let change = 5;
const navb = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  if (this.document.body.className == "crazy") {
    handleNavbarScroll("Crazy");
  } else if (this.document.body.className == "dark") {
    handleNavbarScroll("Dark");
  } else if (this.document.body.className == "light") {
    handleNavbarScroll("Light");
  }
});

function handleNavbarScroll(theme) {
  if (window.scrollY > 150) {
    navb.classList.add(`scrolled${theme}`);
    navb.style.position = "fixed";
    removeOtherScrollClasses(theme);
  } else {
    navb.classList.remove(`scrolled${theme}`);
    navb.style.opacity = "100%";
    navb.style.position = "relative";
  }
}

function removeOtherScrollClasses(currentTheme) {
  ["Crazy", "Dark", "Light"].forEach((theme) => {
    if (theme !== currentTheme) {
      navb.classList.remove(`scrolled${theme}`);
    }
  });
}

// Configuración del envío del formulario
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxj0aQSWVJqm7AHI3ArVl4fsibr5o8YG5YE-XmOofcpBokVwZtlrUYar7JVHYd01ohj/exec";
const form = document.getElementById("unifiedForm");
const submitButton = document.getElementById("submitButton");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (submitButton.textContent === "Enviando...") {
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Enviando...";

  // Crear FormData con todos los campos del formulario
  const formData = new FormData(form);
  // Agregar los servicios seleccionados
  formData.append(
    "selectedServices",
    document.getElementById("selectedServices").value
  );

  fetch(scriptURL, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result === "success") {
        Swal.fire({
          icon: "success",
          title: "¡Éxito!",
          text: "Formulario enviado correctamente. Gracias. ",
          footer: "<i>Revisa tu Email para verificarla confirmacion</i>",
        });
        form.reset();
      } else {
        throw new Error(data.error || "Error al enviar el formulario");
      }
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `Error al enviar el formulario: ${error.message}`,
      });
    })
    .finally(() => {
      submitButton.disabled = false;
      submitButton.textContent = "Enviar Formulario";
    });
});

// Mostrar diálogo de servicios al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  // Only show service dialog after loading is complete
  if (window.loadingComplete) {
    openServiceDialog();
  } else {
    window.addEventListener("loadingComplete", () => {
      openServiceDialog();
    });
  }
});
