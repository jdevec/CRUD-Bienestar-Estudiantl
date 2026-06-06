const express = require('express');
const cors = require('cors');
// Configuramos dotenv para que el proyecto pueda leer nuestras contraseñas del archivo .env
require('dotenv').config();

// 1. Importar la conexión a la base de datos
// Al requerirlo aquí, forzamos a que el sistema intente conectarse apenas arranca el servidor
require('./database/db');

const app = express();

// 2. Middlewares globales
// cors() permite que nuestro futuro frontend o la app móvil se conecte sin bloqueos de seguridad cruzada
app.use(cors());
// express.json() es vital para que nuestra API pueda recibir y entender datos en formato JSON
app.use(express.json());

// 3. Integración de Rutas (Módulo de Bienestar Estudiantil)
// Toda petición que empiece por la ruta '/api' será redirigida a nuestro archivo de rutas.
// Así mantenemos el código ordenado y no saturamos este index.js
app.use('/api', require('./routes/bienestar.routes'));

// Ruta de prueba inicial (Raíz) solo para saber que el servidor no está caído
app.get('/', (req, res) => {
    res.json({ mensaje: 'API de Bienestar Estudiantil (Grupo 5) 100% operativa 🚀' });
});

// 4. Configuración del puerto y arranque
// Le decimos que use el puerto de nuestro archivo .env, y si no lo encuentra, que use el 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});