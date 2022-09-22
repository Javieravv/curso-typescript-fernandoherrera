"use strict";
/**Argumentos opcionales en funciones */
(() => {
    // argumentos opcionales.
    // lastName 
    const fullName = (firstName, lastName) => {
        console.log(`${firstName} ${lastName}`);
        return `${firstName} ${lastName || 'no viene apellido'}`;
    };
    const name = fullName('Javier Armando');
    console.log({ name });
})();
