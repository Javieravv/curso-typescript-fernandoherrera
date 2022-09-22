/**Argumentos requeridos en funciones */
(() => {
    // argumentos obligatorios.
    const fullName = ( firstName:string, lastName:string ):string => {
        return `${firstName} ${lastName}`
    }

    const name = fullName ('Javier Armando', 'Vargas Vega')
    console.log ( { name })
})()