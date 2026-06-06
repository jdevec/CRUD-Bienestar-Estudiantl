const bienestarService =
require('../services/bienestar.service');

// GET todos
const obtenerServicios = async (req, res) => {
    try {
        const servicios =
            await bienestarService.obtenerTodos();

        res.json({
            success: true,
            data: servicios
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            error:
            'Error al obtener los servicios'
        });
    }
};

// GET por ID
const obtenerServicioPorId = async (req, res) => {
    try {
        const { id } = req.params;

        const servicio =
            await bienestarService.obtenerPorId(id);

        if (!servicio) {
            return res.status(404).json({
                success: false,
                error: 'Servicio no encontrado'
            });
        }

        res.json({
            success: true,
            data: servicio
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// POST
const crearServicio = async (req, res) => {
    try {
        const id =
            await bienestarService.crearServicio(
                req.body
            );

        res.status(201).json({
            success: true,
            data: { id }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// PUT
const actualizarServicio = async (req, res) => {
    try {
        const { id } = req.params;

        const actualizado =
            await bienestarService
            .actualizarServicio(
                id,
                req.body
            );

        if (!actualizado) {
            return res.status(404).json({
                success: false,
                error:
                'Servicio no encontrado'
            });
        }

        res.json({
            success: true,
            data: {
                mensaje:
                'Servicio actualizado correctamente'
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// DELETE
const eliminarServicio = async (req, res) => {
    try {
        const { id } = req.params;

        const eliminado =
            await bienestarService
            .eliminarServicio(id);

        if (!eliminado) {
            return res.status(404).json({
                success: false,
                error:
                'Servicio no encontrado'
            });
        }

        res.json({
            success: true,
            data: {
                mensaje:
                'Servicio eliminado correctamente'
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

module.exports = {
    obtenerServicios,
    obtenerServicioPorId,
    crearServicio,
    actualizarServicio,
    eliminarServicio
};