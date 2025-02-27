const db = require("../../models/index.js");

const buscar = async (req, res) => {
    try {
        const { nombre_producto } = req.params;
        const post = await db.Post.findOne({ where: { nombre_producto } });

        if (!post) {
            return res.status(404).json({ message: "Post no encontrado" });
        }

        res.json(post);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el post", error: error.message });
    }
};

const buscarPost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await db.Post.findByPk(id);

        if (!post) {
            return res.status(404).json({ message: "Post no encontrado" });
        }

        res.json(post);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el post", error: error.message });
    }
};

const crearPost = async (req, res) => {
    try {
        const { nombre_producto, cantidad, usuario_id } = req.body;
        console.log(req.body);

        // Validar datos
        if (!nombre_producto || !cantidad || !usuario_id) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

        const post = await db.Post.create({
            nombre_producto,
            cantidad,
            usuario_id,
        });

        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: "Error al agregar el post", error: error.message });
    }
};

const actualizarPost = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre_producto, cantidad, usuario_id } = req.body;

        // Validar datos
        if (!nombre_producto || !cantidad || !usuario_id) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

        const post = await db.Post.findByPk(id);

        if (!post) {
            return res.status(404).json({ message: "Post no encontrado" });
        }

        await post.update({ nombre_producto, cantidad, usuario_id });

        res.json(post);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el post", error: error.message });
    }
};

const eliminarPost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await db.Post.findByPk(id);

        if (!post) {
            return res.status(404).json({ message: "Post no encontrado" });
        }

        await post.destroy();
        res.status(200).json({ message: "Post eliminado" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el post", error: error.message });
    }
};

module.exports = {
    buscar, buscarPost, crearPost, actualizarPost, eliminarPost,
};