import Peliculas from '../models/peliculas_model.js';

// Traer todas las peliculas
const traerPeliculas = async (req, res) => {
  try {
    const peliculas = await Peliculas.find();
    res.json(peliculas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener las películas' });
  }
};

// obtener peliculas por id
const obtenerPeliculaPorId = async (req, res) => {
  const id = req.params.id;
  try {
    const pelicula = await Peliculas.findById(id);
    if (!pelicula) {
      return res.status(404).json({ mensaje: 'Película no encontrada' });
    }
    res.status(200).json(pelicula);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// actualizar contenido de la pelicula
const actualizarPelicula = async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  try {
    const pelicula = await Peliculas.findByIdAndUpdate(id, newData, { new: true });
    if (!pelicula) {
      return res.status(404).json({ mensaje: 'Película no encontrada' });
    }
    res.status(200).json(pelicula);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// eliminar una pelicula
const eliminarPelicula = async (req, res) => {
  const { id } = req.params;
  try {
    const pelicula = await Peliculas.findByIdAndRemove(id);
    if (!pelicula) {
      return res.status(404).json({ mensaje: 'Película no encontrada' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// filtrar por genero
const filtrarPorGenero = async (req, res) => {
  const { genero } = req.params;
  try {
    const peliculas = await Peliculas.find({ genero });
    res.status(200).json(peliculas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// filtrar por personajes principales según la pelicula
const obtenerPersonajesPorPelicula = async (req, res) => {
  const peliculaId = req.params.id;
  try {
    const pelicula = await Peliculas.findById(peliculaId);

    if (!pelicula) {
      return res.status(404).json({ mensaje: 'Película no encontrada' });
    }

    const personajes = [];
    if (pelicula.personajes_principales.nombre_personajes1) {
      personajes.push(pelicula.personajes_principales.nombre_personajes1);
    }
    if (pelicula.personajes_principales.nombre_personajes2) {
      personajes.push(pelicula.personajes_principales.nombre_personajes2);
    }

    res.status(200).json(personajes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ordenar por nro de premios 
const ordenarPremios = async (req, res) => {
  try {
    const peliculas = await Peliculas.find().sort({ numero_premios: 1 });
    res.status(200).json(peliculas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Paginado por número de premios
const paginarPremios = async (req, res) => {
  const { minimo, maximo } = req.params;
  try {
    const peliculas = await Peliculas.find({
      numero_premios: { $gte: minimo, $lte: maximo }
    });
    res.status(200).json(peliculas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export { traerPeliculas, obtenerPeliculaPorId, actualizarPelicula, eliminarPelicula, filtrarPorGenero,obtenerPersonajesPorPelicula, ordenarPremios, paginarPremios };