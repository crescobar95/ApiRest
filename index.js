const express = require("express");
const { sequelize } = require("./models"); // Importa la conexión a la base de datos
const app = express();

app.use(express.json());

// Definir una ruta de prueba
app.get("/", (req, res) => {
  res.send("¡Servidor funcionando!");
});

// Importar modelos y sincronizar la base de datos
sequelize.sync()
  .then(() => console.log("Base de datos conectada"))
  .catch(err => console.error("Error al conectar la base de datos:", err));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

