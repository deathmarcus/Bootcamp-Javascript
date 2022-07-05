// ? Tomar un string del usaurio
    //imprimir en consola el numero de caracteres que tiene esa cadea
    //Imprimir cuantas vocales estan presentes
    //Imprimri cada uno de los las palabras que hay ('hola koder') => ['hola', 'koders'}

let cadena = prompt('Dame un enunciado');
let tempCadena = cadena.length;
console.log(`El enunciado tiene ${tempCadena} caracteres`);
tempCadena = cadena.match(/[aeiou]/gi);
console.log(`El enunciado tiene ${tempCadena.length} vocales y son ${tempCadena}`);
tempCadena = cadena.split(" ");
console.log(`Las palabras son: ${tempCadena}`);

// ? Hacer uno o mas pruebas  con algunos de los metodos leidos (presentar en clase)

tempCadena = cadena.padStart(35, 'x');
console.log(`Esta es la cadena modificada al inicio con x y haciendola de 35 caracteres, si la cadena es más larga no habrá modificaciones: ${tempCadena}`);
tempCadena = cadena.padEnd(35, 'x');
console.log(`Esta es la cadena modificada al final con x y haciendola de 35 caracteres, si la cadena es más larga no habrá modificaciones: ${tempCadena}`);