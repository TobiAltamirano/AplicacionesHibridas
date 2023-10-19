import express from 'express';
import { traerDirectores, obtenerDirectorPorId, actualizarDirector, eliminarDirector, filtrarPorNacionalidad, filtrarPorEdad, buscarPorApellido, ordenarDirectoresPorPremios } from '../controllers/directoresController.js';
// import verificarToken from '../middleware/auth.js';

const ruta = express.Router();

// ruta.use(verificarToken);

// Obtener todos los directores
ruta.get('/', traerDirectores);

// Obtener un director por ID
ruta.get('/:id', obtenerDirectorPorId);

// // Actualizar información de un director
ruta.put('/:id', actualizarDirector);

// // Eliminar un director
ruta.delete('/:id', eliminarDirector);

// Filtrar por nacionalidad (argentina)
ruta.get('/nacionalidad/:nacionalidad', filtrarPorNacionalidad);

// Filtrar por edad
ruta.get('/edad/:minimo/:maximo', filtrarPorEdad);

// // Búsqueda por nombre
ruta.get('/apellido/:apellido', buscarPorApellido);

// // Ordenamiento por número de premios ganados (del que mas al que menos gano) // FALLA
ruta.get('/ordenar', ordenarDirectoresPorPremios);

export default ruta;