# Backend Bienestar Estudiantil

Backend desarrollado con Node.js y Express para la gestión de servicios de bienestar estudiantil. Este proyecto corresponde al Grupo 5 de la asignatura y permite gestionar servicios de apoyo mediante una API REST conectada a una base de datos MySQL.

---

## Tecnologías utilizadas

- Node.js
- Express
- MySQL/MariaDB
- mysql2
- dotenv
- cors
- nodemon

---

## Estructura del proyecto

```text
backend-bienestar/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── database/
│   ├── index.js
│
├── .env
├── script.sql
├── package.json
└── README.md

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
### Crear servicio

POST /api/servicios-bienestar

### Body

{
  "nombre_servicio": "Apoyo psicológico",
  "descripcion": "Atención emocional a estudiantes",
  "horario": "08:00-16:00",
  "contacto": "psico@universidad.edu",
  "ubicacion": "Bloque A",
  "estado": "Activo"
}

### Actualizar servicio

PUT /api/servicios-bienestar/:id

### Eliminar servicio

DELETE /api/servicios-bienestar/:id

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

El backend fue probado usando Postman verificando:

GET
GET por ID
POST
PUT
DELETE

Todos los endpoints responden correctamente con datos en formato JSON.

## Evidencias de funcionamiento

(evidencias/postman-get.png)

(evidencias/postman-post.png)

(evidencias/postman-put.png)

(evidencias/postman-delete.png)

## Integrantes

Grupo 5 – Bienestar Estudiantil

* Cedeño Mendoza Pablo José
* Cevallos Paucar César Jahir
* Chancay Vera Jorge Leonardo
* Gorozabel Ferrín José Alejandro
* Moreira Cedeño Arianna Monserrate

## Licencia

Proyecto académico desarrollado con fines educativos.
