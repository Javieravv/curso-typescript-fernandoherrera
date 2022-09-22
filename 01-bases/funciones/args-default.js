"use strict";
// argumentos por defecto..
/**Argumentos opcionales en funciones */
(() => {
    // argumentos opcionales.
    // lastName 
    const fullName = (firstName, lastName, upper = false) => {
        return `${firstName} ${lastName || 'no viene apellido'}`;
    };
    const name = fullName('Javier Armando');
    console.log({ name });
})();
