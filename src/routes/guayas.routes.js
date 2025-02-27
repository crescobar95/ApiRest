const express = require('express');
const router = express.Router();
const { buscar, buscarPost, crearPost, actualizarPost, eliminarPost } = require('../controllers/guayas.controllers.js');

// Ruta para buscar un post por nombre_producto
router.get('/buscar/:nombre_producto', buscar);

// Ruta para buscar un post por ID
router.get('/:id', buscarPost);

// Ruta para crear un post
router.post('/', crearPost);

// Ruta para actualizar un post por ID
router.put('/:id', actualizarPost);

// Ruta para eliminar un post por ID
router.delete('/:id', eliminarPost);

module.exports = router;