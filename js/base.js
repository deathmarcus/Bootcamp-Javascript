console.log("Hola Koders");


// ! Datos en Js
  // Identificador
  // Reglas o buenas prácticas
    // Las variables no deben de contener caractéres especiales (, ! @) -> let @@@ = 'test'
    // No inician con digitos -> let 9variable = 9; -> Error
    // No acepta palabras reservadas -> let else = 'else' => Error
    // Buena practica; camelCase 99%  | PascalCase -> Clases | CONSTANTES
    // Buena practica; Naming descriptivo -> let estudiantesKodemia = 'koders'
    // Consideración; Sensible a las mayus y minus 

// ! Variables y Constantes
    // Variables = Mutabilidad
    // Constantes = No cambia

    // Variables - palabras reservadas para declarar; var y let
    
    // Buena practica; siempre usar let
    // Buena practica; siempre usar ; al final de cada linea

    // Terminología
      // Declaración -> let koder;
      // Asignación o Definición -> koder = 'Jose';
      // Inicialización -> let koder2 = 'Sandra';


    // Constantes
      // URL -> const
      // Pi -> const
      // PUNTAJEMAXIMO -> const

    // Formas de Declaracion e Inicializacion
       // let primerPuntaje; -> undefinded
       // let segundoPuntaje = 100;
       // let tercerPuntaje = segundoPuntaje;
       // let cuartoPuntaje = segundoPuntaje + 1000;
       // let quintoPuntaje = 1 + 2 + 3;
       // const puntajeMaximo = 5000;
       
    // Declaracion Multiples
      // let primerKoder, segundoKoder, tercerKoder;
      // primerKoder = 'Sebastian';
      // let cuartoKoder = 'Marco', quintoKoder = 'Sofy';
      
    //! typeof Operator
      // let numerico = 1;
      // let text = 'Esto es un texto';
      
      // console.log(typeof numerico);
      // console.log(tyepof text);
      // console.log(typeof console);


    //! Concatenacion de strings
      // Usando el operador de suma +
        // let primerText = 'Soy la primera parte';
        // let segundoTexto = 'y yo la segunda parte';

        // console.log(primerText + segundoText);

      //Templates Literals
        // `` -> backtick
        // Interpolacion -> ${variable}
        // let firsName = 'Ferdinand';
        // let mitadEdad = 15;
        // console.log(`Esto es template literals ${firsName}`);
        // console.log(`Mi edad es ${15 + mitadEdad}`);
        // `texto ${`placeholder}`

    //! Formas de hacer output
       // console.time('g');
       // console.group('20g');
       // console.log('Esto es un log');
       // console.warn('Esto es una advertencia');
       // console.error('Esto es un error');
       // console.groupEnd('20g');
       // console.timeEnd('g');

       // alert('mensaje');

       // let data = prompt('Ingreso de datos');
       // console.log(`Esta es mi data ${data}`);

       // Cast string to numbers
       //   parseInt
       //   parseFloat

          // console.log(parseInt(data) + 1);



