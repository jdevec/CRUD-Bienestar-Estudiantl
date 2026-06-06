const express = require('express');
const router = express.Router();
const { obtenerServicios } = require('../controllers/bienestar.controller');

// Definimos el endpoint exacto que pide la actividad
router.get('/servicios-bienestar', obtenerServicios);

module.exports = router;