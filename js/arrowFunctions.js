// ! Funciones Flecha o Arrow Functions
// No necesitamos de la palabra reservada functions
// no en todos los casos es necesaria la palabra
// reservada return para regresar

// const arrowFunction = (p1, p2) => {
//     console.log(p1, p2);
//     return;
// };

// const funcionComoExpresion = (...nums) => {
//     console.log(nums);
// };

// funcionComoExpresion(2 , 3 , 234 , "sdf");

// ? Consideraciones de sintaxis

// const arrowFunction = (p1) => {
//     console.log(p1);
// };

// const arrowFunction = (p1) => console.log(p1);

// ? Practica 1

// let suma = 0
//      let numA = parseInt(prompt("ingresa un numero entre 1 y 100"));
//     const ejercicio2 =() =>{
//          if (numA <= 100 && numA >= 1) {
//             for (let contador = 1; contador <= numA; contador++){
//             suma = suma + contador;
//              console.log(suma);
//             }
//        } else {
//            alert(numA, "no es un numero valido");
//         }
//         alert(`La suma de toso los numeros entre el 1 y el  ${numA} es igual a: ${suma}`);
//         return;
//     };

//     ejercicio2(numA);

// ? Practica 2

// const palabra = () => {
//     let palabra = prompt("Please type a word or sentence");
//     let sinEspacios = palabra.replaceAll(' ' , '');
//     let k = sinEspacios.length;
//     let invertida = '';
//     for (let i = (k - 1); i >= 0; i--) {
//         invertida += sinEspacios[i];
//     }
//     console.log(invertida);
//     if (sinEspacios === invertida) {

//         return 'Es palindromo';
//     }

//     return 'No es palindromo';
// }

// alert(palabra());
