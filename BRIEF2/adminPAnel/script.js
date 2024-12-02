// Async login function using fetch
async function loginUser() {
  const username = document.getElementById("usernameInput").value;
  const password = document.getElementById("passwordInput").value;
  const errorElement = document.getElementById("loginError");

  // Clear previous error messages
  errorElement.textContent = "";

  // Input validation
  if (!username || !password) {
    errorElement.textContent = "Por favor ingrese usuario y contraseña";
    return;
  }

  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    // Check if the response is OK
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error de inicio de sesión");
    }

    const data = await response.json();

    if (data.token) {
      // Store token securely in httpOnly cookie or secure localStorage
      localStorage.setItem("authToken", data.token);

      // Hide login section, show dashboard
      document.getElementById("loginSection").style.display = "none";
      document.getElementById("dashboardSection").style.display = "block";

      // Fetch project data
      await fetchProjectData();
    }
  } catch (error) {
    // Handle login error
    errorElement.textContent = error.message || "Error de conexión";
    console.error("Login error:", error);
  }
}

// Logout function
function logout() {
  // Remove token from storage
  localStorage.removeItem("authToken");

  // Show login section, hide dashboard
  document.getElementById("loginSection").style.display = "block";
  document.getElementById("dashboardSection").style.display = "none";

  // Clear input fields
  document.getElementById("usernameInput").value = "";
  document.getElementById("passwordInput").value = "";
}

// Check authentication on page load
async function checkAuth() {
  const token = localStorage.getItem("authToken");

  if (!token) return;

  try {
    // Validate token with backend
    const response = await fetch("/api/validate-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      // Token is valid, show dashboard
      document.getElementById("loginSection").style.display = "none";
      document.getElementById("dashboardSection").style.display = "block";

      // Fetch project data
      await fetchProjectData();
    } else {
      // Token is invalid, clear it
      localStorage.removeItem("authToken");
    }
  } catch (error) {
    console.error("Token validation error:", error);
    localStorage.removeItem("authToken");
  }
}

// Fetch project data
async function fetchProjectData() {
  const token = localStorage.getItem("authToken");

  try {
    const response = await fetch("/api/projects", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("No se pudieron cargar los proyectos");
    }

    const projects = await response.json();

    const tableBody = document.getElementById("projectTableBody");
    tableBody.innerHTML = ""; // Clear table

    projects.forEach((project) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                        <td>${project.fullName}</td>
                        <td>${project.email}</td>
                        <td>${project.phone}</td>
                        <td>${project.companyName}</td>
                        <td>${project.projectType}</td>
                        <td>${project.projectDescription}</td>
                        <td>$${project.budget}</td>
                    `;
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching project data:", error);
    alert("No se pudo cargar la información de proyectos");
  }
}

// Initialize authentication check
checkAuth();
