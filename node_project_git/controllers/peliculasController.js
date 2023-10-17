import Pelicula from '../models/pelicula';

const getAll = async (req, res) => {
  try {
    // Consulta la base de datos para obtener todas las películas
    const peliculas = await Pelicula.find(); // Utiliza el modelo 'Pelicula' y la función 'find'

    // Envía la lista de películas como respuesta
    res.json(peliculas);
  } catch (error) {
    // En caso de error, maneja el error y envía una respuesta de error
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener las películas' });
  }
};

export { getAll };
