(() => {
    const a:number = 125
    let b:number = 150
    
    function sayHello (msg: string) {
        console.log (msg)
    }
    
    const sayHello1 = (msg: string) => {
        return msg
    }
    
    let mensaje = sayHello1 ('Hola Javo')
    console.log (mensaje, a, b)
})()
