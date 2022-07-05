// ? Realiza una calculadora usando un switch
//Dale la opcion al usuario de seleccionar entre algunas operaciones (suma, resta....)
//Pidele dos numeros y aplica la operacion correspendiente

alert('Qué operación quieres?');
let operacion = parseInt(prompt('1.Suma 2.Resta 3.División 4.Multiplicación'));
let numA = 0;
let numB = 0;
let res = '';
switch (operacion) {
    case 1:
        numA = parseFloat(prompt('Ingresa el primer número:'));
        numB = parseFloat(prompt('Ingresa el segundo número:'));
        res = numA + numB;
        id_op = 'suma';
        break;

    case 2:
        numA = parseFloat(prompt('Ingresa el primer número:'));
        numB = parseFloat(prompt('Ingresa el segundo número:'));
        res = numA - numB;
        id_op = 'resta';
        break;

    case 3:
        numA = parseFloat(prompt('Ingresa el primer número:'));
        numB = parseFloat(prompt('Ingresa el segundo número:'));
        res = numA / numB;
        id_op = 'división';
        break;

    case 4:
        numA = parseFloat(prompt('Ingresa el primer número:'));
        numB = parseFloat(prompt('Ingresa el segundo número:'));
        res = numA * numB;
        id_op = 'multiplicación';
        break;

    default:
        alert('Por favor elige un valor entre 1 y 4');
}
alert(`El resultado de la ${id_op} es ${res}`);

