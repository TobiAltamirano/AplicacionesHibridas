// Parte 1

import express from 'express';

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))


// Crear un array "usuarios" con al menos 4 usuarios con su id, nombre, apellido, nombre de usuario, email, edad, lista de cursos a los que se anoto
// Crear un array "cursos" con al menos 3 cursos con su id, nombre, docente.

const usuarios = [
    {id: "0", nombre: "Juan", apellido: "Sanchez", username: "Juansanchez12", mail: "Juansanchez@gmail.com", edad: "26", cursosAnotado: "Marketing Digital, Figma"},

    {id: "1", nombre: "Sebastian", apellido: "Girotti", username: "SebaGi22", mail: "sebastianG@gmail.com", edad: "27", cursosAnotado: "Figma"},

    {id: "2", nombre: "Martina", apellido: "Perez", username: "Martina_Perez", mail: "martuperezz@gmail.com", edad: "22", cursosAnotado: "Fotografía"},

    {id: "3", nombre: "Carla", apellido: "Hernandez", username: "Carlaa12", mail: "carlahernandez2001@gmail.com", edad: "21", cursosAnotado: "Marketing Digital, Fotografía"}
];

const cursos = [
    {id: "0", nombre: "Marketing Digital", docente: "Pablo Perez"},
    {id: "1", nombre: "Fotografía", docente: "Lionel Milinovi"},
    {id: "2", nombre: "Figma", docente: "Marisa Flores"}
]

// Parte 2

// Crear un servicio que debe correr en el puerto 2023.


// El servicio debera contar con endpoints para las siguientes funcionalidades:
// obtener todos los usuarios/cursos
app.get("/usuarios", (req, res)=>{
    res.send({usuarios})
});

app.get("/cursos", (req, res)=>{
    res.send({cursos})
});

// obtener un usuario/curso en particular
app.get("/usuarios/:id", (req, res)=>{
    let idUsuario = req.params.id;
    let filterById = usuarios.filter(u => u.id == idUsuario);
    res.send({filterById})
});

app.get("/cursos/:id", (req, res)=>{
    let idCurso = req.params.id;
    let filterById = cursos.filter(c => c.id == idCurso);
    res.send({filterById})
});

// editar la informacion de un usuario/curso
app.put('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedUser = req.body;

    const index = usuarios.findIndex((u) => u.id === id)
    if (index === -1) {
        return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Utilizas el operador spread (...) para actualizar los campos del usuario
    usuarios[index] = { id, ...updatedUser };
    res.json(usuarios[index]);
});



// crear un usuario/curso nuevo
app.post('/usuarios', (req, res)=>{
    const newUsuario = req.body;
    usuarios.push(newUsuario);
    res.status(201).json(newUsuario);
});

app.post('/cursos', (req, res)=>{
    const newcursos = req.body;
    cursos.push(newcursos);
    res.status(201).json(newcursos);
});

// eliminar un usuario/curso

app.delete("/usuarios/:id", (req, res) =>{
    const id = parseInt(req.params.id);
    const index = usuarios.findIndex(u => u.id === id)
    if(index === -1){
        return res.status(404).json({message: "User not found"})
    }
    const deletedUser = usuarios.splice(index, 1);
    res.json(deletedUser);
  })

// buscardor por curso/docente


// Parte 3

// Crear un middleware para usar cuando se crea un usuario validando el ingreso de informacion, en el caso de que no cumpla con las validaciones se debera retornar un mensaje de error.

// Validar lo siguiente:
// que los campos no ingresen vacios
// que la longitud del nombre de usuario no exceda los 20 caracteres.
// que el nombre de usuario no contenga caracteres especiales como %$#!*
// que la edad del usuario no sea menor de 18 años
// que por lo menos este anotado a dos cursos

const server = app.listen(2023, ()=> console.log("Listening on port 2023 \nopen in http://localhost:2023"))