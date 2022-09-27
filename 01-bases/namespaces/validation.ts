/**Creación básica.  */

namespace Validations {
    
    export const validateText = ( text: string ): boolean => {
        return ( text.length >3 ) ? true : false;
    }

    export const validateDate = ( myDate: Date ): boolean => {
        return ( isNaN(myDate.valueOf()))
           ? false
           : true
    }

}

// Cómo utilizar los nameSpace.
console.log ( Validations.validateText ('Javier'))
console.log ( Validations.validateText ('Jav'))
console.log ( Validations.validateDate ( new Date()))



