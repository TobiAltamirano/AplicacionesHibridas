// Crear una carpeta
// “archivos” con un archivo notas.txt con algún mensaje. 
// Con módulos de Node js:

// Crear un path a “archivos/notas.txt”
const path = require('path');
const filePathNotas = path.join(__dirname, 'archivos', 'notas.txt');

// Leer el archivos con módulos de Node js (utilizando
// el path).
const fs = require('fs');
const file = fs.readFileSync(filePathNotas, 'utf-8');
console.log(file);

// Crear un path a “archivos/info.txt”
const filePathInfo = path.join(__dirname, 'archivos', 'info.txt');

// Crear el archivo info.txt, utilizando el path del
// punto anterior y enviando como mensaje el sistema operativo del dispositivo y
// la arquitectura de sistema.
const os = require("os");
const platform = os.platform();
const arch = os.arch();
fs.writeFileSync(filePathInfo, `Sistema operativo: ${platform} \nArquitectura del sistema: ${arch}`);

// Agregar al archivo anterior, en otra línea, su nombre
// y algún mensaje.

fs.appendFile(filePathInfo, '\nAltamirano Tobias \nCreador del archivo', (err, data) =>{
    if(err){
        console.log(err);
    }else{
        console.log("mensaje creado");
    }
})
