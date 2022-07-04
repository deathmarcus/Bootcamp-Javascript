let opcion = parseInt(prompt('Que ejercicio quieres? (1-2)'));

switch(opcion){
    case 1:
        // ? Ejercicio 1 -  Pedir por el promt un número, y comprobar si es par o impar
        let valor = parseInt(prompt('Dame un numero'));
        if ((valor % 2) == 0){
            console.log('El numero es par');
        }else{
            console.log('El numero es impar');
        }
        break;

    case 2:
        // ? Ejercicio 2 -  Calcula el área de un triángulo - Teniendo la base y la altura (proporcionadas por el usuario)
        let altura = parseFloat(prompt('Dame la altura del triángulo'));
        let base = parseFloat(prompt('Dame la base del triángulo'));
        let area = (base * altura) / 2;
        console.log(`El área del triángulo es: ${area}`);
        break;
        default:
        console.log('Escoge entre ejercicio 1 o 2');
    }
