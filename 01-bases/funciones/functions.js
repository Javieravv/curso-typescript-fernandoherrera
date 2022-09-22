"use strict";
/**Funciones en TypeScript  */
(() => {
    const hero = 'Spiderman';
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return 'Batiseñal activada';
    };
    console.log(activateBatiSignal());
    console.log(typeof activateBatiSignal);
    console.log(returnName());
})();
