CREATE TABLE servicios_bienestar (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_servicio VARCHAR(100) NOT NULL,
    descripcion TEXT,
    horario VARCHAR(100),
    contacto VARCHAR(100),
    ubicacion VARCHAR(100),
    estado VARCHAR(20) DEFAULT 'Activo'
);

INSERT INTO servicios_bienestar
(nombre_servicio, descripcion, horario, contacto, ubicacion, estado)
VALUES
('Orientación Psicológica', 'Atención psicológica para estudiantes', '08:00-17:00', 'psicologia@universidad.edu', 'Edificio Bienestar', 'Activo'),

('Trabajo Social', 'Apoyo y seguimiento social estudiantil', '08:00-16:00', 'social@universidad.edu', 'Bloque Administrativo', 'Activo'),

('Asesoría Nutricional', 'Evaluación y orientación nutricional', '09:00-15:00', 'nutricion@universidad.edu', 'Centro Médico', 'Activo'),

('Atención Médica Básica', 'Consulta médica general', '08:00-18:00', 'medicina@universidad.edu', 'Centro Médico', 'Activo'),

('Apoyo Académico', 'Orientación para mejorar el rendimiento académico', '08:00-17:00', 'academico@universidad.edu', 'Biblioteca Central', 'Activo');