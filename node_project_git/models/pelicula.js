import mongoose from "mongoose";

const peliculasSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    titulo: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true
    },
    fecha_estreno: {
        type: String,
        required: true,
    },
    personajes_principales: {
        nombre_personajes1: {
            type: String,
            required: true,
        },
        nombre_personajes2: {
            type: String,
            required: false,
        },
    },
    numero_premios: {
        type: Number,
        required: false,
    }
});

export default mongoose.model('peliculas', peliculasSchema);