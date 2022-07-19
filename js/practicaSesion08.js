// let arrayTest = ["julio", "Sofy", "Chris", "Jose"];
// let koderMayus = [];

// arrayTest.forEach((cv) => {
//   koderMayus.push(cv.toUpperCase());
// });

// console.log(koderMayus);

/**
* Escribir una función
* Reciba como parametro un array de ciudades
* Retornar las ciudades capitalizadas
* capitalize(['méxicO','RIo', 'Los AngelEs', 'esTAMBUL])
* -> ['México','Rio', 'Los Angeles','Estambul']
* Usar el metodo de array ForEach
*/

// const capitalize = (arr) => {
//   let capCities = [];
//   arr.forEach((city) => {
//     let cityCapitalized = `${city[0].toUpperCase()}${city.slice(1).toLowerCase()}`;
//     capCities.push(cityCapitalized);
//   });
//   return capCities;
// };

// result = capitalize(["méxicO", "CaraCas", "Los AngelEs", "estaMbuL"]);

// console.log(result);


/**
* Escribir una función
* Reciba como parametro un array de ciudades
* Retornar las ciudades capitalizadas
* capitalize(['méxicO','RIo', 'Los AngelEs', 'esTAMBUL])
* -> ['México','Rio', 'Los Angeles','Estambul']
* Usar el metodo de array map
*/

// const capitalizeMap = (arr) => {
//     let capCities = arr.map((city) => {
//       return `${city[0].toUpperCase()}${city.slice(1).toLowerCase()}`;
//     });
//     return capCities;
//   };
  
// ! Parte 2
// Función que reciba un array de nombre y esta debe devolver un string con las iniciales de los nombre
 
//  getInitial = ['Ferdinand','Jose','Maria','Dora']

// let arrayAString = (getInitial) => { 
//         let temp = getInitial.split('').reverse().toString().replaceAll(',', '');
//         return temp;
//     };
    
//     console.log(arrayAString(getInitial));

/*
Practica
Dado una arreglo compuesto por arreglos,
* crea una función que calcule la suma de los arreglos
*
* additionMultiArr(  [ [1,2,3] , [1,3,2] , [3,2,1] ] )
* -> 18
*/

const suma = (arr) => {
    let sumaArr = arr.reduce((acc, cv) => {
        acc += cv[0]
    })
}

// Practica
// función con .reduce()
// * Dado un array de numeros, obtener la suma de solo los elementos positivos
// * addAllPositives( [ 1, -4, 12, 0, -3, 29, -150] )
// * -> 42
