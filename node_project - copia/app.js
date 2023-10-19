import express from "express";
import mongoose from "mongoose";
import peliculas from './routes/peliculas.js';
import directores from './routes/directores.js';
import "dotenv/config";
import path from "path";

// 127.0.0.1
mongoose.connect('mongodb://127.0.0.1:27017/node_project', 
{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log("Conectado con la DB")
})
.catch(() =>{
  console.log("Error al conectar con la DB")
})

const app = express();
const __dirname = path.resolve()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/peliculas', peliculas);
app.use('/directores', directores);

// LLeva al Index
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, './views/index.html');
    res.sendFile(filePath);
});

const port = process.env.PORT || 3002;

app.listen(port, ()=> {
  console.log("Listening on port 3000 \nopen in http://localhost:3000")
})