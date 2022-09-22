"use strict";
/**Argumentos requeridos en funciones */
(() => {
    // argumentos obligatorios.
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Javier Armando', 'Vargas Vega');
    console.log({ name });
})();
