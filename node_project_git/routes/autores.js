import express from 'express';
const router = express.Router();
import autoresController from '../controllers/autoresController';
import verificarToken from '../middleware/verificarToken';

// Aplicar el middleware de autenticación a todas las rutas de autores
router.use(verificarToken);

// Obtener todos los autores
router.get('/autores', autoresController.getAll);

// Obtener un autor por ID
router.get('/autores/:id', autoresController.getById);

// Actualizar información de un autor
router.put('/autores/:id', autoresController.update);

// Eliminar un autor
router.delete('/autores/:id', autoresController.delete);

// Filtrado por nacionalidad (argentina)
router.get('/autores/nacionalidad/argentina', autoresController.filterByNacionalidadArgentina);

// Filtrado por edad > 70
router.get('/autores/edad/70', autoresController.filterByEdadMayor70);

// Búsqueda por nombre
router.get('/autores/nombre', autoresController.searchByName);

// Ordenamiento por número de premios
router.get('/autores/numero_premios', autoresController.sortByNumeroPremios);

// Paginado
router.get('/autores/numero_premios/:minimo/:maximo', autoresController.paginateByNumeroPremios);

module.exports = router;
