const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Hardcoded credentials
const credentials = {
  username: "Ramphys",
  password: "HolaMundo",
};

// In-memory token for simplicity (use JWT in production)
let token = null;

// Login endpoint
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (username === credentials.username && password === credentials.password) {
    // Generate a simple token
    token = `token-${Date.now()}`;
    return res.json({ token });
  }

  return res.status(401).json({ message: "Usuario o contraseña incorrectos" });
});

// Validate token endpoint
app.post("/api/validate-token", (req, res) => {
  const authHeader = req.headers.authorization;
  const sentToken = authHeader && authHeader.split(" ")[1];

  if (sentToken === token) {
    return res.sendStatus(200); // Token is valid
  }

  return res.status(401).json({ message: "Token inválido o expirado" });
});

// Fetch projects endpoint
app.get("/api/projects", (req, res) => {
  const authHeader = req.headers.authorization;
  const sentToken = authHeader && authHeader.split(" ")[1];

  if (sentToken !== token) {
    return res.status(401).json({ message: "No autorizado" });
  }

  // Example projects data
  const projects = [
    {
      fullName: "John Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      companyName: "Example Corp",
      projectType: "Website",
      projectDescription: "Landing page for marketing",
      budget: 500,
    },
    {
      fullName: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "9876543210",
      companyName: "Another Corp",
      projectType: "Mobile App",
      projectDescription: "E-commerce mobile app",
      budget: 1500,
    },
  ];

  return res.json(projects);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
