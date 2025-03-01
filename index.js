import express from "express";
import sequelize from "./models/index.js"; // Importa la conexión a la base de datos
const app = express();

app.use(express.json());

// Definir una ruta de prueba
app.get("/", (req, res) => {
  res.send("¡Servidor funcionando!");
});

//definir ruta de ingreso correcto
app.post("/", (req, res) => {
  res.json({ message: "Solicitud POST recibida correctamente" });
});


// Importar modelos y sincronizar la base de datos
sequelize.sync()
  .then(() => console.log("Base de datos conectada"))
  .catch(err => console.error("Error al conectar la base de datos:", err));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

