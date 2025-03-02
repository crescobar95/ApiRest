import express from "express";
import sequelize from "./models/index.js"; // Importa la conexión a la base de datos
import Usuario from "./models/usuario.js"; // Ajusta la ruta si es necesario

const app = express();

app.use(express.json());

// Definir una ruta de prueba
app.get("/", (req, res) => {
  res.send("¡Servidor funcionando!");
});

// 🔹 Obtener todos los usuarios
app.get("/Usuarios", async (req, res) => {
  try {
    const usuarios = await sequelize.Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
});

// 🔹 Crear un nuevo usuario (POST)
app.post("/usuarios", async (req, res) => {
  try {
    const { nombre, correo, numero_contacto } = req.body;
    const nuevoUsuario = await Usuario.create({ nombre, correo, numero_contacto });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ error: "Error al crear usuario" });
  }
});

// 🔹 Actualizar un usuario (PUT)
app.put("/usuarios/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, correo, numero_contacto } = req.body;

    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    await usuario.update({ nombre, correo, numero_contacto });
    res.json({ message: "Usuario actualizado", usuario });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar usuario" });
  }
});

// 🔹 Eliminar un usuario (DELETE)
app.delete("/usuarios/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    await usuario.destroy();
    res.json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar usuario" });
  }
});

// Importar modelos y sincronizar la base de datos
sequelize.sync()
  .then(() => console.log("Base de datos conectada"))
  .catch(err => console.error("Error al conectar la base de datos:", err));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

