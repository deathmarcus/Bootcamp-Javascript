// Pedirle al usuario la temperatura de su ciudad en °C e imprimir en consola la conversión a °F

let temperatura = prompt('Ingresa la temperatura de tu ciudad en °C');
console.log(`La temperatura en tu ciudad en °F es: ${(parseFloat(temperatura)* 9/5) + 32}`);