"use strict";
/**Tipos de datos string. */
(() => {
    var _a;
    const batman = 'Batman';
    const linterna = "Linterna Verde";
    const volcan = `Volcán Negro`;
    console.log(batman.toUpperCase());
    console.log(linterna.toLowerCase());
    console.log(volcan.toLocaleUpperCase());
    console.log(`I'm ${batman}`);
    console.log(batman[15].toUpperCase());
    console.log(((_a = batman[15]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'Batman no está presente.');
    let string = `1.
    2.
    3.`;
})();
