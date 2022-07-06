// ! Ciclos -> Loops

 // Iteracion -> repetir una cosa una y otra vez (codigo)

 // ? For loops
    // Sintaxis
    // for (elemento1 ; elemento2 ; elemento3) {
        // Codigo a iterar
    // }

    // elemento1 -> Base de condicion a evaluar -> variable numerica -> Se ejecuta una sola vez
    
    // elemento2 -> Evaluacion, esta se ejecuta en cada iteracion

    // elemento3 -> Incremento o decremento -> Se ejecuta con cada iteracion

    // for(let i = 0 ; i < 3 ; i++){
    //     console.log('Esto es una iteracion! ');
    //     console.log(`La cuenta va en ${i}`);
    // }

 // ? While loop
    // Sintaxis
    // while(elemento1){
         // Codigo a iterar
         // <?elemento2> incremento o decremento
    // }
    
    // elemento1 -> Condicion a evaluar -> Se ejecuta con cada iteracion
    // let j = 0
    // while(j < 3 ) {
    //     console.log(j);
    //     j++;
    // }

// ? Do while loop
    // Sintaxis
    // Do{
    //     codigo a iterar
    //     elemento2 incremento o decremento
    // } while(Elemento1)

    // let k = 0;
    // do{
    //     console.log(k);
    //     k++;
    // } while(k <= 3);

// ! Practico 1
    //imprimir vocales de string usando for loop
    //*Usando solo ciclos y condicionales *

    // let texto = prompt('Ingresa un enunciado');
    // let textoNuevo = texto.toLocaleLowerCase();

    // for (let i = 0 ; i < texto.length ; i++){
    //  //   let newTexto = texto.match(/[aeiou]/gi);
    //    //     console.log(`${newTexto}`)
    

    // if(textoNuevo[i] == 'a' || 
    //    textoNuevo[i] == 'e' ||
    //    textoNuevo[i] == 'i' ||
    //    textoNuevo[i] == 'o' ||
    //    textoNuevo[i] == 'u'){
    //     console.log(`${textoNuevo[i]}`);
    //    }
    // }


// ! Practica2
    //imprimir solo las consonantes de un string usando for loop
    //*Solo ciclos y condicionales *
    
    // let texto = prompt('Ingresa un enunciado');
    // let textoNuevo = texto.toLocaleLowerCase();

    // for (let i = 0 ; i < texto.length ; i++){
    //      if(textoNuevo[i] != 'a' && 
    //         textoNuevo[i] != 'e' &&
    //         textoNuevo[i] != 'i' &&
    //         textoNuevo[i] != 'o' &&
    //         textoNuevo[i] != 'u' &&
    //         textoNuevo[i] != ' '){
    //     console.log(textoNuevo[i]);
    //    }
    // }

// !  Practica3
    // Pedir al usuario un numero del 1 al 10 e imprimir la tabla de multiplicar de ese número
    // Usando loops1

 // ! Ejercicio 3
    //Pedir el usuario una palabra
    //Invertir esa palabra e imprimirla en consola
    //p.ej. 'Hola' -> 'aloh'

 let palabra = prompt('Dame una palabra');
 let k = palabra.length;
 let invertida = '';
 for(let i = (k-1) ; i >= 0 ; i--){
    invertida += palabra[i];
}
console.log(invertida);
