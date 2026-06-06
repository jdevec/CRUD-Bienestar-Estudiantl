const mysql = require('mysql2/promise');
require('dotenv').config();

// Configuración del pool de conexiones usando las variables del .env
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Verificar si la conexión es exitosa al arrancar
pool.getConnection()
    .then(connection => {
        console.log('Conexión exitosa a la base de datos de Bienestar Estudiantil');
        connection.release();
    })
    .catch(err => {
        console.error('Error al conectar a la base de datos:', err.message);
    });

module.exports = pool;

pool.query('SELECT DATABASE()')
    .then(([rows]) => {
        console.log('Base actual:', rows);
    })
    .catch(err => {
        console.error('Error prueba DB:', err);
    });