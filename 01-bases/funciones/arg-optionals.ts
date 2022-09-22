/**Argumentos opcionales en funciones */
(() => {
    // argumentos opcionales.
    // lastName 
    const fullName = ( firstName:string, lastName?:string ):string => {
        console.log (`${firstName} ${lastName}`)
        return `${firstName} ${lastName || 'no viene apellido'}`
    }

    const name = fullName ('Javier Armando')
    console.log ( { name })
})()