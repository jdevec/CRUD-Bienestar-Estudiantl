# Backend Bienestar Estudiantil

Backend desarrollado con Node.js y Express para la gestión de servicios de bienestar estudiantil. Este proyecto corresponde al Grupo 5 de la asignatura y permite consultar los servicios de apoyo disponibles mediante una API REST conectada a una base de datos MySQL.

## Tecnologías utilizadas

* Node.js
* Express
* MySQL/MariaDB
* mysql2
* dotenv
* cors
* nodemon

## Estructura del proyecto

```text
backend-bienestar/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── models/
│   ├── database/
│   ├── config/
│   └── middlewares/
│
├── .env.example
├── script.sql
├── package.json
└── README.md
```

## Configuración del proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/pablocedeno14/backend-bienestar.git
cd backend-bienestar
```

### 2. Instalar dependencias

```bash
npm install
```

## Base de datos

El proyecto utiliza MySQL/MariaDB.

Para crear la estructura de la base de datos y los registros iniciales, ejecutar el contenido del archivo:

```text
script.sql
```

en la base de datos `am_grupo5`.

La tabla principal utilizada es:

```text
servicios_bienestar
```

### Campos

* id
* nombre_servicio
* descripcion
* horario
* contacto
* ubicacion
* estado

## Endpoint disponible

### Obtener todos los servicios de bienestar

```http
GET /api/servicios-bienestar
```

### Ejemplo de respuesta

```json
[
  {
    "id": 1,
    "nombre_servicio": "Orientación Psicológica",
    "descripcion": "Atención psicológica para estudiantes",
    "horario": "08:00-17:00",
    "contacto": "psicologia@universidad.edu",
    "ubicacion": "Edificio Bienestar",
    "estado": "Activo"
  }
]
```

## Pruebas

El endpoint fue validado mediante Postman verificando la correcta conexión con la base de datos y la recuperación de los registros almacenados en la tabla `servicios_bienestar`.

## Evidencias de funcionamiento

(evidencias/postman-consulta.jpeg)


(evidencias/postman-respuesta.png)

## Integrantes

Grupo 5 – Bienestar Estudiantil

* Cedeño Mendoza Pablo José
* Cevallos Paucar César Jahir
* Chancay Vera Jorge Leonardo
* Gorozabel Ferrín José Alejandro
* Moreira Cedeño Arianna Monserrate

## Licencia

Proyecto académico desarrollado con fines educativos.
