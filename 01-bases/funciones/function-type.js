"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado!!`;
    // let myFunction: Function // opción 1
    let myFunction; // opción 2
    // myFunction = 10
    // console.log ( myFunction )
    myFunction = addNumbers;
    console.log(myFunction(35, 65));
    myFunction = greet;
    console.log(myFunction('Javito'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
