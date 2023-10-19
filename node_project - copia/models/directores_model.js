import mongoose from "mongoose";

const directoresSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true,
    },
    nacionalidad: {
        type: String,
        required: true,
    },
    numero_premios: {
        type: String,
        required: true,
    }
});

export default mongoose.model("Directores", directoresSchema);