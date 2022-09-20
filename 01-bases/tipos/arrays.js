"use strict";
/**Tiposde datos arrays. */
(() => {
    // const numbers = [0,1,2,3,4,5,6,7,'8',9,10, false]
    // Permite que el arreglo tenga strings, numeros y booleanos.
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, '8', 9, 10, false];
    numbers.push(11);
    numbers.push(false);
    numbers.push({}); // Genera error en ts
    console.log(numbers);
    const letras = ['a', 'b'];
    console.log(letras);
})();
