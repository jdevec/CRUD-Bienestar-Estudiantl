// ==========================================
// Rutas del Módulo de Bienestar Estudiantil
// ==========================================

const express = require('express');

const router = express.Router();

const bienestarController = require('../controllers/bienestar.controller');

const { validarServicio } = require('../middlewares/validacionBienestar');

router.get('/servicios-bienestar', bienestarController.obtenerServicios);

router.get('/servicios-bienestar/:id', bienestarController.obtenerServicioPorId);

router.post('/servicios-bienestar', validarServicio, bienestarController.crearServicio);

router.put('/servicios-bienestar/:id', validarServicio, bienestarController.actualizarServicio);

router.delete('/servicios-bienestar/:id', bienestarController.eliminarServicio);

module.exports = router;