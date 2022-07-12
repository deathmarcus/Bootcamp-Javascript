// ! Arrays
    // Colección de datos, que puede albergar otros datos(de cualquier tipo)

    // let koder1 = 'Mariana';
    // let koder2 = 'Marco';

    // const koders = ['Mariana','Marco', 'Chris', 'Breeze',62,undefined,["string", 123, undefined]];
    
    // Bracket Notations -> []
    // Indexas -> 0,1,2,3,4,5...

    // console.log(koders[6][0]);

    // ? Modificar un array
    // ! Buena practica, declararlos con "const"

    // const koders = ['Mariana','Marco', 'Chris', ["string", 123, undefined, [1, 2, 3]]];
    // koders[2] = "Christopher";

    // console.log(koders);

    // ! Identificando un array

    // const koders = ['Mariana','Marco', 'Chris', ["string", 123, undefined, [1, 2, 3]]];
    // let t = 22;
    // console.log(Array.isArray(koders));
    // console.log(koders instanceof Array);

    // ! Metodos de Array
    // ? Push -> Agrega un elemento al final del Array
    // const koders = ["Mariana" , "Marco"];
    // koders.push("Luis");

    // ? Pop -> Elimina el ultimo elemento de un array y regresa ese elemento
    // const koders = ["Mariana" , "Marco"];
    // let eliminado = koders.pop();
    // console.log(koders);
    // console.log(eliminado);

    // ? Sort -> Ordena los elementos de un array en un orden especifico (ascendente o descendente)
    // const koders = ["Mariana" , "Marco"];
    // let arrayOrdenado = koders.sort()
    // console.log(arrayOrdenado);

    // ? Some -> Comprueba si alguno de los elementos del array pasa la funcion de prueba que se le da

   //   function isEven(element) {
   //      return element % 2 === 0;
   //   }
   //    let numeros = [1, 3, 7, 15, 20, 34];

   //    console.log(numeros.some(isEven)); //<-- El resultado sera true, porque valida que alguno de los elementos del arreglo cumple con la comprobacion de la funcion que se le manda 

   // ! Callback functions
      // En js las funciones son first class citizen

      // const a = (msg) => {
      //    console.log('Este es el mensaje: ', msg);
      // }
      
      // const b = () => {
      //    let msg = prompt('Ingresa un mensaje: ');
      //    return msg;
      // }

      // let res = b();

      // a(res);

      // ? Caso 2 -> callback functions

      //  const a = (msg) => {
      //    console.log('Este es el mensaje: ', msg);
      // };

      // const b = (callback) => {
      //    msg = 'este es el mensaje';
      //    callback(msg);
      // };

      // b(a);

      // ! Metodos funcionales de Arrays

      // ? ForEach -
         // Recibe un callback function -> currentValue, Index, Copia array
         // No necesita un return
         // La logica se ejecuta dentro de su bloque codigo

         // let arrayTest = ['Julio', 'Sofy', 'Chris', 'Jose'];

         // const callFun = (currentValue, index, array) => {
         //    console.log('Current Value: ', currentValue);
         //    console.log('index', index);
         //    console.log('array:', array);
         // };

         // arrayTest.forEach(callFun);
         // arrayTest.forEach((cV, index, arr) => {
         //    console.log(cV);
         // });

      // ? Map
         // Crea un nuevo array tranformado
         // Recibe una callback function con los argumentos definidos
         // Current value
         // Index
         // Array objetivo
         // Crea un nuevo array con las modificaciones indicadas
         // La funcion callback debe tener un return
         // No cambia el array original
         // Debe usarse si se va a crear un nuevo array

         const numbers = [1, 2, 3, 43, 4, 5];

         let arr = numbers.map((cv, index, arr) => {
            //console.log(cv, index, arr);
            return cv + 10;
         });
         console.log(arr);




      

