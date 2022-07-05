// ? Pedir al usuario que seleccione como esta el clima de su ciudad (opciones)
       // 3.1 Opciones -> a)Soleado b) Lluvioso c)Nevado d)Nublado
   // 4. Pedir al usuario temperatura aproximada de su ciudad en grados C (celsius)
   // 5. Imprimir en consola una descripción acorde a los datos ingresados
   // Output: En tu ciudad, el dia esta soleado con una temperatura de 100 grados F (fahrenheit)

   alert('Por favor selecciona como está el clima en tu ciudad');
   let opcion = prompt('Opciones: a)Soleado b)Lluvioso c)Nevado d)Nublado');
   let clima = '';
   
   switch(opcion){
    case 'a':
        clima = 'Soleado';
        break;
    
    case 'b':
        clima = 'Lluvioso';
        break;

    case 'c':
        clima = 'Nevado';
        break;

    case 'd':
        clima = 'Nublado';
        break;

    default:
        alert('Elige una opcion entre a y d');
   }

   let temperatura = parseFloat(prompt('Ahora dame la temperatura de tu ciudad en °C'));
   let fahrenheit = (temperatura * 9/5) + 32;

   console.log(`En tu ciudad, el dia esta ${clima} con una temperatura de ${fahrenheit} F `);

