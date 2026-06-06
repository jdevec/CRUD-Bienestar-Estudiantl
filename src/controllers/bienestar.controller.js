const bienestarService = require('../services/bienestar.service');

const obtenerServicios = async (req, res) => {
    try {
        const servicios = await bienestarService.obtenerServicios();

        res.json(servicios);
    } catch (error) {
        console.error('Error en la consulta:', error);

        res.status(500).json({
            mensaje: 'Error al obtener los servicios de bienestar'
        });
    }
};

module.exports = {
    obtenerServicios
};