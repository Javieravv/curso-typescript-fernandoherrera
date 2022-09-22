/**Argumentos tipo rest */
(() => {
    // resto de argumentos.
    const fullName = (firstName: string, ...restoArgumentos:string[]):string => {
        return `${firstName} ${restoArgumentos.join(' ')}`
    }

    const superJavo = fullName('Javier', 'Armando', 'Vargas', 'Vega')
    console.log ( { superJavo })
    
})()