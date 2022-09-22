"use strict";
/**Argumentos tipo rest */
(() => {
    // resto de argumentos.
    const fullName = (firstName, ...restoArgumentos) => {
        return `${firstName} ${restoArgumentos.join(' ')}`;
    };
    const superJavo = fullName('Javier', 'Armando', 'Vargas', 'Vega');
    console.log({ superJavo });
})();
