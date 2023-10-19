import express from 'express';
import { traerPeliculas, obtenerPeliculaPorId, actualizarPelicula, eliminarPelicula, filtrarPorGenero, obtenerPersonajesPorPelicula, ordenarPremios, paginarPremios } from '../controllers/peliculasController.js';
// import verificarToken from '../middleware/auth.js';

const ruta = express.Router();

// Aplicar el middleware de autenticación a todas las rutas de películas
// router.use(verificarToken);

// Traer todas las peliculas
ruta.get('/', traerPeliculas);

// // Obtener una película por ID
ruta.get('/:id', obtenerPeliculaPorId);

// // Actualizar información de una película
ruta.put('/:id', actualizarPelicula);

// // Eliminar una película
ruta.delete('/:id', eliminarPelicula);

// // Filtrado por género
ruta.get('/genero/:genero', filtrarPorGenero);

// // Filtrado por género personajes principales según pelicula
ruta.get('/personajes/:id', obtenerPersonajesPorPelicula);

// // Paginado
ruta.get('/numero_premios/:minimo/:maximo', paginarPremios);

export default ruta;