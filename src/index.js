const express = require('express');
const cors = require('cors');
require('dotenv').config();

require('./database/db');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', require('./routes/bienestar.routes'));

app.get('/', (req, res) => {
    res.json({ mensaje: 'API de Bienestar Estudiantil (Grupo 5) 100% operativa 🚀' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});