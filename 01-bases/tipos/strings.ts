/**Tipos de datos string. */
(() => {
    const batman:string = 'Batman'
    const linterna:string = "Linterna Verde"
    const volcan:string = `Volcán Negro`

    console.log (batman.toUpperCase())
    console.log (linterna.toLowerCase())
    console.log (volcan.toLocaleUpperCase())
    console.log (`I'm ${ batman }`)
    
    console.log (batman[15].toUpperCase())
    console.log (batman[15]?.toUpperCase() || 'Batman no está presente.')
    let string = `1.
    2.
    3.`

})()