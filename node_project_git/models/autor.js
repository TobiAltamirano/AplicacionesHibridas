import mongoose from "mongoose";

const autoresSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
    },
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    edad: {
        type: String,
        required: true,
    },
    nacionalidad: {
        type: String,
        required: true,
    },
    numero_premios: {
        type: String,
        required: false,
    }
});

export default mongoose.model('Autores', autoresSchema);