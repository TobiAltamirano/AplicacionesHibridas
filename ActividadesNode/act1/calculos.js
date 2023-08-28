// Crear una función que reciba dos números y retorne la suma de ellos
function suma(num1, num2){
    return (num1 + num2);
}

// Crear una función que reciba dos números y devuelva el resultado entre la división del primero sobre el segundo
function division(num1, num2){
    return (num1 / num2);
}

// Crear una función que reciba un Array de N elementos y devuelva el mayor valor de ese array
function mayorValorArray(array){

    let mayorValor = array[0];

    for (let i = 1; i < array.length; i++){
        if(array[i] > mayorValor) {
            mayorValor = array[i];
        }
    }

    return mayorValor;
}

// Hacer uso del console.log para mostrar la suma de 5 y 10 utilizando las funciones creadas
const rta1 = suma(5, 10);
console.log('La suma de 5 y 10 es: ' + rta1);

// Hacer uso del console.log para mostrar la división de 20 y 2 (que sucede si envió 20 y 0)
const rta2 = division(20, 2);
console.log('La división entre 20 y 2 es: ' + rta2);

// Hacer uso del console.log para mostrar el mayor de la lista [2,8,9,7,5,6]
let arrayD = [2, 8, 9, 7, 5, 6];

const rta3 = mayorValorArray(arrayD);
console.log('El mayor valor del Array es: ' + rta3);

// Ejecutar node Calculos.js para ver los resultados