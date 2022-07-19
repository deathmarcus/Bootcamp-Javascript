// Método Seal
// Object.seal() sella un objeto, evitando que nuevas propiedades sean añadidas a él, y marcando todas las 
// propiedades existentes como no configurables. Los valores de las propiedades todavia se pueden cambiar 
// mientras sean escribibles.
const object1 = {
    property1: 42
  };
  
  Object.seal(object1);
  object1.property1 = 33;
  console.log(object1.property1);
  // expected output: 33
  
  delete object1.property1; // cannot delete when sealed
  console.log(object1.property1);
  // expected output: 33

  /**
// ! Ejercicio 1.
* Realizar una funcion que tome como parametro un objeto
* y devuelva un array de arrays con la siguiente estructura
* [ [key, value], [key, value] ]
* makePairs( { a: 1, b: 2 } )
* => [ ['a', 1], ['b', 2]]
*
*
* @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
* @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*
* Se tiene que realizar 2 soluciones,
* 1 con Object.entries() y
*  Otra con .map()

// ! Ejercicio 2
* Dado un objeto de salarios
* Crear una funcion que retorne una lista
* con los salarios ordenados de menor a mayor
* orderSalary( salarios)
* -> [4000, 5000, 7000]
hint -> Usar metodo de objetos y luego un metodo de array para ordenar
*/


// ! Tarea
/**
* Dado un array de objetos koders
* Imprimir en consola, todos los nombres de cada koder
*
* Ferdinand Bracho tiene 30 años y es de la generación 2 y su primer modulo es python
* Jose Hernandez tiene 20 años y es de la generación0 20' y su primer modulo es nodeJs
* ....
*
*/
/**
* Del mismo array de koders
* Obtener la suma de todas las edades
*
*/
/**
* Del objeto library (dado mas adelante)
* 1. Obtener el numero de libros que se estan leyendo
* 2. Obtener una lista de todos los autores
* 3. Obtener una lista de todos los Libros
*
*/
// let library = [
//   {
//       author: 'Bill Gates',
//       title: 'The Road Ahead',
//       readingStatus: true
//   },
//   {
//       author: 'Steve Jobs',
//       title: 'Walter Isaacson',
//       readingStatus: true
//   },
//   {
//       author: 'Suzanne Collins',
//       title:  'Mockingjay: The Final Book of The Hunger Games',
//       readingStatus: false
//   }
//  ]