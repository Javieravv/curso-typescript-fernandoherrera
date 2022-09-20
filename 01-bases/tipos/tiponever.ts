/**Tipo de dato never. */

(() => {
    
    const mensajeError = ( mensaje: string):never => {
        throw new Error ( mensaje)
    }

    const mensajeError1 = ( mensaje: string):(never | number) => {
        if ( true ) {
            throw new Error ( mensaje)
        }
        return 1
    }

    mensajeError1 ('Auxilio, Socorro!!')
    console.log ('Hola Mundo')
    // mensajeError ('Auxilio, Socorro!!')
    console.log ('Hola Mundo 1')
})()