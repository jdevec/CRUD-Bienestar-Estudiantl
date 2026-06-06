class Bienestar {
    constructor(
        id,
        nombre_servicio,
        descripcion,
        horario,
        contacto,
        ubicacion,
        estado
    ) {
        this.id = id;
        this.nombre_servicio = nombre_servicio;
        this.descripcion = descripcion;
        this.horario = horario;
        this.contacto = contacto;
        this.ubicacion = ubicacion;
        this.estado = estado;
    }
}

module.exports = Bienestar;