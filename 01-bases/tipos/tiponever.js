"use strict";
/**Tipo de dato never. */
(() => {
    const mensajeError = (mensaje) => {
        throw new Error(mensaje);
    };
    const mensajeError1 = (mensaje) => {
        if (true) {
            throw new Error(mensaje);
        }
        return 1;
    };
    mensajeError1('Auxilio, Socorro!!');
    console.log('Hola Mundo');
    // mensajeError ('Auxilio, Socorro!!')
    console.log('Hola Mundo 1');
})();
