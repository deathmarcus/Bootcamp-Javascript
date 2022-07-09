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

     function isEven(element) {
        return element % 2 === 0;
     }
      let numeros = [1, 3, 7, 15, 20, 34];

      console.log(numeros.some(isEven)); //<-- El resultado sera true, porque valida que alguno de los elementos del arreglo cumple con la comprobacion de la funcion que se le manda 


