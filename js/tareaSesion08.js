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

// const stringArray = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis'];
// let newStringArray = [];
// let tempo = '';
// let j = 0;

// const firstLastChar = (stringArray) => {
//     for (let i = 0; i <= stringArray.length - 1; i++) {
//         tempo = '';
//         for (j = 0; j <= stringArray[i].length - 1; j++) {
//             if (j == 0 || j == stringArray[i].length - 1) {
//                 tempo += stringArray[i][j];
//             }

//         }

//         newStringArray.push(tempo);
//     }
//     return newStringArray;
// }
// firstLastChar(stringArray);
// console.log(newStringArray);

// ! TAREA PARTE 2
/*
Ejercicio 1 
* Función que reciba una palabra
* Retorna la palabra invertida
* La reversa del string lo haremos usando métodos de array
*  hint :  a un string no podemos aplicarle métodos array pero hay métodos de string que nos devuelve un array
*
* reverseStr('hola mundo')
* -> 'odnum aloh'
*/
// let palabra = prompt('Dame una palabra');

// let arrayPalabra = (palabra) => { 
//     let temp = palabra.split('').reverse().toString().replaceAll(',', '');
//     return temp;
// };

// console.log(arrayPalabra(palabra));
/*
Ejercicio 2 
* Dado el siguiente arreglo de ciudades
*   ['méXicO', 'PErÚ', 'eSpAña', 'inGlaterrA']
* Generar una función que capitalize cada elemento del array
* => Se puede resolver con .forEach() o .map()
*/
// const capitalize = (arr) => {
//       let capCiudades = [];
//       arr.forEach((ciudad) => {
//         let cityCapitalizada = `${ciudad[0].toUpperCase()}${ciudad.slice(1).toLowerCase()}`;
//         capCiudades.push(cityCapitalizada);
//       });
//       return capCiudades;
//     };
    
//     result = capitalize(['méXicO', 'PErÚ', 'eSpAña', 'inGlaterrA']);
    
//     console.log(result);

/*
Ejercicio 3
* Dado un arreglo con nombres de personas,
* Función que devuelva un arreglo con los nombres de las personas que empiezan con vocales y además capitalizados
*
* onlyNamesVowels( ['jorge','ana','ivan','sergio','oscar' ] )
* -> ['Ana','Ivan','Oscar']
*
* => Se puede resolver con .forEach() o .filter()
*/
const onlyNamesVowels = ['jorge','ana','ivan','sergio','oscar', 'maria', 'ernesto', 'abigail' ];

let arrNombres = (onlyNamesVowels) => {
    let resNombres = [];
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    onlyNamesVowels.forEach((nombre) =>{
        if(vocales.indexOf(nombre[0]) === -1){
            return;
        }else{
        let mayusNombres = `${nombre[0].toUpperCase()}${nombre.slice(1).toLowerCase()}`;
        resNombres.push(mayusNombres);
        
    }});
    return resNombres;
}
console.log(arrNombres(onlyNamesVowels));