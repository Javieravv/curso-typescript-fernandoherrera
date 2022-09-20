"use strict";
(() => {
    const a = 125;
    let b = 150;
    function sayHello(msg) {
        console.log(msg);
    }
    const sayHello1 = (msg) => {
        return msg;
    };
    let mensaje = sayHello1('Hola Javo');
    console.log(mensaje, a, b);
})();
