const pool = require('../database/db');

const obtenerTodos = async () => {
    const [rows] = await pool.query(
        'SELECT * FROM servicios_bienestar'
    );

    return rows;
};

const obtenerPorId = async (id) => {
    const [rows] = await pool.query(
        'SELECT * FROM servicios_bienestar WHERE id = ?',
        [id]
    );

    return rows[0];
};

const crearServicio = async (servicio) => {
    const {
        nombre_servicio,
        descripcion,
        horario,
        contacto,
        ubicacion,
        estado
    } = servicio;

    const [result] = await pool.query(
        `INSERT INTO servicios_bienestar
        (nombre_servicio, descripcion, horario, contacto, ubicacion, estado)
        VALUES (?, ?, ?, ?, ?, ?)`,
        [
            nombre_servicio,
            descripcion,
            horario,
            contacto,
            ubicacion,
            estado
        ]
    );

    return result.insertId;
};

const actualizarServicio = async (id, servicio) => {
    const {
        nombre_servicio,
        descripcion,
        horario,
        contacto,
        ubicacion,
        estado
    } = servicio;

    const [result] = await pool.query(
        `UPDATE servicios_bienestar
         SET nombre_servicio = ?,
             descripcion = ?,
             horario = ?,
             contacto = ?,
             ubicacion = ?,
             estado = ?
         WHERE id = ?`,
        [
            nombre_servicio,
            descripcion,
            horario,
            contacto,
            ubicacion,
            estado,
            id
        ]
    );

    return result.affectedRows;
};

const eliminarServicio = async (id) => {
    const [result] = await pool.query(
        'DELETE FROM servicios_bienestar WHERE id = ?',
        [id]
    );

    return result.affectedRows;
};

module.exports = {
    obtenerTodos,
    obtenerPorId,
    crearServicio,
    actualizarServicio,
    eliminarServicio
};