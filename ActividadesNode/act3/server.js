// Parte 1

// Crear un archivo llamado server.js
// Importar express en una variable inmutable llamada express
import express from 'express';

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))


// El servidor debe disponer de los siguientes recursos:
//  "/" --> Debe mostrar su nombre y apellido
let nombre = "Tobías Altamirano";

app.get("/", (req, res)=>{
    res.send(nombre)
})

// "/materia" --> Debe mostrar la información de la materia
let materia = "Aplicaciones Hibridas - Materia del 4to cuatrimestre";

app.get("/materia", (req, res)=>{
    res.send(materia)
})

// "/profesor" --> Debe mostrar la información del profesor
let profesor = "Camila Marcos Galban - Una genia pero si llegas tarde fuiste";

app.get("/profesor", (req, res)=>{
    res.send(profesor)
})

// Parte 2

// Armar un array con su top5 de tecnologias
const tecnologias = [
    {nombre: "JavaScript"},
    {nombre: "PHP"},
    {nombre: "Java"},
    {nombre: "Ruby"},
    {nombre: "TypeScript"}
];

// en "/stack" debe recibir POR PARAMETRO una tecnologia:

app.get('/stack/:tecnologia', (req, res) => {
    let tecno = req.params.tecnologia;
    let filterTecno = tecnologias.filter(t => t.nombre == tecno);
    // si esta en su array, se debe enviar respuesta de "donde te dejo el CV?"
    if(filterTecno.length > 0){
        res.send("Donde te dejo el CV?")
    } else {
        // si no se encuentra, enviar respuesta de "a leer la documentacion entonces.."
        res.send("A leer la documentación entonces..");
    };
});

// Parte 3

// Agregar una URL llamada "/productos" que muestre un listado de 10 productos (id, nombre, precio)
const productos = [
    {id: "0", nombre: "Zapatillas", precio: 75000},
    {id: "1", nombre: "Remera", precio: 18000},
    {id: "2", nombre: "Pantalon", precio: 12000},
    {id: "3", nombre: "Buzo", precio: 22000},
    {id: "4", nombre: "Piluso", precio: 4000}
];

app.get('/productos', (req, res) => {
    res.send({productos})
});

// Para la misma url, debo tener la posibilidad de recibir un id por parametro y responder solo la informacion del producto solicitado
app.get('/productos/:id', (req, res) => {
    let idProducto = req.params.id;
    let filterById = productos.filter(p => p.id == idProducto);
    res.send({filterById})
});

// Tambien debe estar la posibilidad de recibir en la misma url los query "minimo" y "maximo" con un valor numerico. Utilizando esos query, retornar los productos que entren en ese rango de precios (se podria recibir solo una de las dos query o ambas).

app.get('/productos?min=valor&max=valor', (req, res) => {
    let minimo = parseInt(req.query.min);
    let maximo = parseInt(req.query.max);
    
    // Si no se proporcionan los valores minimo y maximo en los query, devolver todos los productos.
    if (isNaN(minimo) && isNaN(maximo)) {
        res.send(productos);
    } else {
        let filteredProductos = productos.filter(p => {
            if (!isNaN(minimo) && !isNaN(maximo)) {
                return p.precio >= minimo && p.precio <= maximo;
            } else if (!isNaN(minimo)) {
                return p.precio >= minimo;
            } else if (!isNaN(maximo)) {
                return p.precio <= maximo;
            }
        });

        if (filteredProductos.length > 0) {
            res.send(filteredProductos);
        } else {
            res.send("No se encontraron productos que coincidan con los criterios de búsqueda.");
        }
    }
});



// DE LA PARTE 2
// cualquier otra url --> Debe mostrar un mensaje de pagina no encontrada.
let mensajeError = "Página no encontrada";

app.get('*', (req, res) => {
    res.status(404).send(mensajeError);
});

// Crear un servidor web que escuche el puerto 2023
const server = app.listen(2023, ()=> console.log("Listening on port 2023 \nopen in http://localhost:2023"))