import express from 'express';
const router = express.Router();
import peliculasController from '../controllers/peliculasController';
import verificarToken from '../middleware/verificarToken';

// Aplicar el middleware de autenticación a todas las rutas de películas
router.use(verificarToken);

// Obtener todas las películas
router.get('/peliculas', peliculasController.getAll);

// Obtener una película por ID
router.get('/peliculas/:id', peliculasController.getById);

// Actualizar información de una película
router.put('/peliculas/:id', peliculasController.update);

// Eliminar una película
router.delete('/peliculas/:id', peliculasController.delete);

// Filtrado por género (acción)
router.get('/peliculas/genero/accion', peliculasController.filterByGeneroAccion);

// Filtrado por género (romance)
router.get('/peliculas/genero/romance', peliculasController.filterByGeneroRomance);

// Búsqueda por nombre
router.get('/peliculas/nombre', peliculasController.searchByName);

// Ordenamiento por número de premios
router.get('/peliculas/numero_premios', peliculasController.sortByNumeroPremios);

// Paginado
router.get('/peliculas/numero_premios/:minimo/:maximo', peliculasController.paginateByNumeroPremios);

export default router;