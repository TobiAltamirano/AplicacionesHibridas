// En un archivo,
// trabajando con ESM modules, exportar una función que reciba un numero y retorne
// su tabla de multiplicar hasta el número 12. Importarlo en un archivo con common
// js modules.

export function table(num){
    for (let i = 0; i <= 12; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

// Importación de función de cjs:

import { parImpar } from "./index.cjs";

console.log(parImpar(5));
