// Importacion de funcion de mjs:

import("./index.mjs").then(({table}) => {
    console.log(table(6))
})

// En un archivo,
// trabajando con Common Js modules, exportar una función que reciba un número y retorne
// si el mismo es par o impar. Importarlo en un archivo con ESM modules.

function parImpar (num) {
    if(num % 2 == 0){
        return ('El número ' + num + ' es PAR');
    } else {
        return ('El número ' + num + ' es IMPAR');
    }
}

module.exports = {parImpar};
