# Backend Bienestar Estudiantil

Backend desarrollado con Node.js y Express para la gestión de servicios de bienestar estudiantil. Este proyecto corresponde al Grupo 5 de la asignatura y permite gestionar servicios de apoyo mediante una API REST conectada a una base de datos MySQL.

---

## Tecnologías utilizadas

- Node.js
- Express
- MySQL / MariaDB
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
│   └── index.js
│
├── .env
├── script.sql
├── package.json
└── README.md
```

---

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

---

## Base de datos

El proyecto utiliza MySQL/MariaDB. Para crear la estructura de la base de datos y los registros iniciales, se debe ejecutar el contenido del archivo `script.sql` en la base de datos `am_grupo5`.

La tabla principal utilizada es: `servicios_bienestar`

### Campos de la tabla
* `id` (int)
* `nombre_servicio` (varchar)
* `descripcion` (text)
* `horario` (varchar)
* `contacto` (varchar)
* `ubicacion` (varchar)
* `estado` (varchar)

---

## Endpoints Disponibles

### 1. Obtener todos los servicios de bienestar
* **Método:** `GET`
* **URL:** `/api/servicios-bienestar`

### 2. Obtener un servicio por ID
* **Método:** `GET`
* **URL:** `/api/servicios-bienestar/:id`

### 3. Crear servicio
* **Método:** `POST`
* **URL:** `/api/servicios-bienestar`
* **Body (JSON):**

```json
{
  "nombre_servicio": "Apoyo psicológico",
  "descripcion": "Atención emocional a estudiantes",
  "horario": "08:00-16:00",
  "contacto": "psico@universidad.edu",
  "ubicacion": "Bloque A",
  "estado": "Activo"
}
```

### 4. Actualizar servicio
* **Método:** `PUT`
* **URL:** `/api/servicios-bienestar/:id`
* **Body (JSON):**

```json
{
  "nombre_servicio": "Apoyo psicológico Actualizado",
  "descripcion": "Atención emocional y psicopedagógica",
  "horario": "08:00-17:00",
  "contacto": "psico_ayuda@universidad.edu",
  "ubicacion": "Bloque B",
  "estado": "Activo"
}
```

### 5. Eliminar servicio
* **Método:** `DELETE`
* **URL:** `/api/servicios-bienestar/:id`

### Ejemplo de Respuesta General (JSON)

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

---

## Pruebas

El comportamiento del backend fue verificado exhaustivamente utilizando Postman, comprobando los métodos `GET`, `GET por ID`, `POST`, `PUT` y `DELETE`. Todos los endpoints responden de forma correcta con los códigos de estado HTTP correspondientes y datos en formato JSON.

---

## Integrantes (Grupo 5)

* Cedeño Mendoza Pablo José
* Cevallos Paucar César Jahir
* Chancay Vera Jorge Leonardo
* Gorozabel Ferrín José Alejandro
* Moreira Cedeño Arianna Monserrate

---

## Licencia

Proyecto académico desarrollado con fines educativos.