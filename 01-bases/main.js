"use strict";
/**Creación básica.  */
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    Validations.validateDate = (myDate) => {
        return (isNaN(myDate.valueOf()))
            ? false
            : true;
    };
})(Validations || (Validations = {}));
// Cómo utilizar los nameSpace.
console.log(Validations.validateText('Javier'));
console.log(Validations.validateText('Jav'));
console.log(Validations.validateDate(new Date()));
//# sourceMappingURL=main.js.map