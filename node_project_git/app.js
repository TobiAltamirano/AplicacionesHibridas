import express from "express";
import path from "path";
import mongoose from "mongoose";
import peliculasRouter from './routes/peliculas.js';
import autoresRouter from './routes/autores.js';

const url = 'mongodb://0.0.0.0:27017';
// 127.0.0.1
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado con la DB");
  })
  .catch((err) => {
    console.log("Error al conectar con la DB " + err);
  });

const app = express();
const __dirname = path.resolve()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, './views/index.html');
    res.sendFile(filePath);
});

app.use('/', peliculasRouter); // Cambia '/api' a la ruta base que desees
app.use('/', autoresRouter);   // Cambia '/api' a la ruta base que desees

const server = app.listen(3000, ()=> console.log("Listening on port 3000 \nopen in http://localhost:3000"))