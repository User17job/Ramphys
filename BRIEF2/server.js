const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());
app.use(express.static(path.join(__dirname))); // Sirve archivos estáticos como index.html

const filePath = path.join(__dirname, "formdb.json");

// Ruta para guardar datos
app.post("/save-data", (req, res) => {
  const newData = req.body;

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error al leer el archivo JSON.");
    }

    let jsonData = [];
    try {
      jsonData = JSON.parse(data);
    } catch (parseError) {
      console.warn(
        "El archivo JSON está vacío o malformado, creando un nuevo archivo."
      );
    }

    jsonData.push(newData);

    fs.writeFile(
      filePath,
      JSON.stringify(jsonData, null, 2),
      "utf8",
      (writeErr) => {
        if (writeErr) {
          console.error(writeErr);
          return res.status(500).send("Error al guardar los datos.");
        }
        res.status(200).send("Datos guardados correctamente.");
      }
    );
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
