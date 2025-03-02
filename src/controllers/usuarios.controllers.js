const buscaruser = async (req, res) => {
    try {
        const { nombre } = req.params;
        const post = await db.Usuario.findByPk(id);

        if (!post) {
            return res.status(404).json({ message: "Post no encontrado" });
        }

        res.json(post);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el post", error: error.message });
    }
};

const buscarus = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await db.usuario.findByPk(id);

        if (!usuario) {
            return res.status(404).json({ message: "Post no encontrado" });
        }

        res.json(usuario);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el post", error: error.message });
    }
};

const crearuser = async (req, res) => {
    try {
        const { nombre, correo, numero_contacto,usuario_id } = req.body;
        console.log(req.body); 
        // Validar datos
        if (!nombre, correo, numero_contacto,usuario_id) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

        const post = await db.usuario.create({
            nombre,
            correo,
            numero_contacto,
            usuario_id,
        });

        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ message: "Error al agregar el post", error: error.message });
    }
};
const actualizaruser = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, correo, numero_contacto,usuario_id } = req.body;

        // Validar datos
        if (!nombre || !correo || numero_contacto||!usuarioId) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

        const post = await db.usuario.findByPk(id);

        if (!usuario) {
            return res.status(404).json({ message: "Post no encontrado" });
        }

        await usuario.update({ nombre, correo,numero_contacto, usuarioId });

        res.json(post);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el post", error: error.message });
    }
};

const eliminaruser = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await db.usuario.findByPk(id);

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
    buscarus,buscaruser, crearuser, 
    actualizaruser, eliminaruser,
};