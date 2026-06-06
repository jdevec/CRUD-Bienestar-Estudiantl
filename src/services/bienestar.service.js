const pool = require('../database/db');

const obtenerServicios = async () => {
    const [rows] = await pool.query(
        'SELECT * FROM servicios_bienestar'
    );

    return rows;
};

module.exports = {
    obtenerServicios
};