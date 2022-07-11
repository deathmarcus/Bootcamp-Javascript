// ! * Ejercicio 1 
// * Realizar una función que reciba como parametro 1 array de numeros
// * Y devuelva un array con solo los elementos Pares de ese array
// * p.ej.
// * -> evenOnly( [1,2,3,4,18] ) -> [2,4,18]
// * -> evenOnly( [10, 2, 5] ) -> [10,2]
// * -> evenOnly() -> 'Se necesita un array'
// *
// * Pista / Hint, debemos iterar el array 

// const arreglo = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let nuevoArreglo = [];
// let k = arreglo.length;
// console.log(arreglo);
// const arrayNumeros = (arreglo) => {
//     for(let i = 0 ; i <= k ; i++){
//         if(arreglo[i] % 2 == 0){
//             nuevoArreglo.push(arreglo[i]);
//         }
//     }
//     return nuevoArreglo;
// }
// arrayNumeros(arreglo);
// console.log(nuevoArreglo);

// Ejercicio 2 *Opcional
// * Función que reciba como parámetro una array de strings
// * y devuelva el primer y último carácter de cada string
// * p.ej.
// * -> firstAndLast ( ['hola', 'mundo'] ) -> ['ha', 'mo']
// *
// * Pista / Hint, debemos iterar el array 

const stringArray = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis'];
let newStringArray = [];
let tempo = ''
let j = 0;
let i = 0;
const firstLastChar = (stringArray) => {
    for (i = 0; i <= stringArray.length - 1; i++) {
        tempo = '';
        for (j = 0; j <= stringArray[i].length - 1; j++) {
            if (j == 0 || j == stringArray[i].length - 1) {
                tempo += stringArray[i][j];
            }

        }

        newStringArray.push(tempo);
    }
    return newStringArray
}
firstLastChar(stringArray);
console.log(newStringArray);