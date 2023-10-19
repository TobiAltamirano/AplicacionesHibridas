import Directores from '../models/directores_model.js';


// Traer todos los directores
const traerDirectores = async (req, res) => {
  try {
    const directores = await Directores.find();
    res.json(directores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener los directores' });
  }
};

// obtener director por id
const obtenerDirectorPorId = async (req, res) => {
  const id = req.params.id;
  try {
    const director = await Directores.findById(id);
    if (!director) {
      return res.status(404).json({ mensaje: 'Director no encontrado' });
    }
    res.status(200).json(director);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// actualizar contenido de la coleccion directores
const actualizarDirector = async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  try {
    const director = await Directores.findByIdAndUpdate(id, newData, { new: true });
    if (!director) {
      return res.status(404).json({ mensaje: 'Director no encontrado' });
    }
    res.status(200).json(director);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// eliminar información de un director
const eliminarDirector = async (req, res) => {
  const { id } = req.params;
  try {
    const director = await Directores.findByIdAndRemove(id);
    if (!director) {
      return res.status(404).json({ mensaje: 'Director no encontrado' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// filtro por nacionalidad
const filtrarPorNacionalidad = async (req, res) => {
    const { nacionalidad } = req.params;
    try {
      const directores = await Directores.find({ nacionalidad });
      res.status(200).json(directores);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// filtro por edad
const filtrarPorEdad = async (req, res) => {
    const { minimo, maximo } = req.params;
    try {
      const directores = await Directores.find({
        edad: { $gte: minimo, $lte: maximo }
      });
      res.status(200).json(directores);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

// buscar por apellido director
const buscarPorApellido = async (req, res) => {
  const { apellido } = req.params;
  try {
    const directores = await Directores.find({ apellido });
    res.status(200).json(directores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ordenar por nro de premios ganados 
const ordenarDirectoresPorPremios = async (req, res) => {
    try {
      const directores = await Directores.find().sort({ numero_premios: -1 });
      res.status(200).json(directores);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};


export { traerDirectores, obtenerDirectorPorId, actualizarDirector, eliminarDirector, filtrarPorNacionalidad,filtrarPorEdad, buscarPorApellido, ordenarDirectoresPorPremios };