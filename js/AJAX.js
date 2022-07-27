// ! AJAX - Asynchronous Javascript and XML

// ! Arquitecturas
    // ! Monolitica
    // ! Cliente - Servidor


// ! CRUD
    // ! -> Create
    // ! -> Read : list - details
    // ! -> Update : Global - Parcial
    // ! -> Delete

    
    //* Propiedades readyState
    // * Holds the status of the XMLHttpRequest
    // * 0: request not initialized
    // * 1: server connection established
    // * 2: request received
    // * 3: processing request
    // * 4: request finished and response is ready
    
    // ! JSON
    // { }
    // key: value
    
    // ? JSON Paese -> de json a objeto
    // Para enviar request
    // JSON.parse(<json>)
    
    // ? JSON Stringify -> de Obj a json
    // Para leer response
    // JSON.stringify(<Objeto>)
    
    // ! XMLHttpRequest
        // ? Paso a paso para su uso
        // Instanciamos nuestro objeto
    
    const xRe = new XMLHttpRequest();
    console.log(xRe);

        // Definir un callback en nuestro evento onload
    xRe.onload = (data) => {
        console.log(data.target.responseText);
    };

        // Abrir la peticion
    xRe.open("GET", "README.md", false);

        // Enviar nuestra peticion
    xRe.send();


        
