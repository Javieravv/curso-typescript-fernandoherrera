"use strict";
/**Tipo de dato numérico. */
(() => {
    let avengers;
    avengers = 150;
    console.log({ avengers });
    const villians = 250;
    console.log({ villians });
    avengers = Number('145');
    console.log(avengers);
    avengers = Number('145abc');
    console.log(avengers);
})();
