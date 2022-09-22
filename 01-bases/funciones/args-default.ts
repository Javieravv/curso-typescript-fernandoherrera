// argumentos por defecto..
/**Argumentos opcionales en funciones */
(() => {
    // argumentos opcionales.
    // lastName 
    const fullName = ( firstName:string, lastName?:string, upper:boolean = false ):string => {
        return `${firstName} ${lastName || 'no viene apellido'}`
    }

    const name = fullName ('Javier Armando')
    console.log ( { name })
})()