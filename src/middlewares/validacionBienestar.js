const validarServicio = (req, res, next) => {
    const { nombre_servicio, descripcion, horario, contacto, ubicacion } = req.body;

    if (!nombre_servicio || nombre_servicio.trim() === "") {
        return res.status(400).json({ success: false, error: "El nombre del servicio es obligatorio" });
    }
    if (!descripcion || descripcion.trim() === "") {
        return res.status(400).json({ success: false, error: "La descripción es obligatoria" });
    }
    if (!horario || horario.trim() === "") {
        return res.status(400).json({ success: false, error: "El horario es obligatorio" });
    }
    if (!contacto || contacto.trim() === "") {
        return res.status(400).json({ success: false, error: "El contacto es obligatorio" });
    }

    if (nombre_servicio.length > 100) {
        return res.status(400).json({ success: false, error: "El nombre del servicio no puede superar los 100 caracteres" });
    }
    if (horario.length > 100) {
        return res.status(400).json({ success: false, error: "El horario no puede superar los 100 caracteres" });
    }
    if (contacto.length > 100) {
        return res.status(400).json({ success: false, error: "El contacto no puede superar los 100 caracteres" });
    }
    if (ubicacion && ubicacion.length > 100) {
        return res.status(400).json({ success: false, error: "La ubicación no puede superar los 100 caracteres" });
    }

    next();
};

module.exports = { validarServicio };