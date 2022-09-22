

(() => {
    const addNumbers = ( a: number, b: number) => a + b
    const greet = ( name: string) => `Hola ${ name }`
    const saveTheWorld = () => `El mundo está salvado!!`

    // let myFunction: Function // opción 1
    let myFunction: (x: number, y: number) => number // opción 2

    // myFunction = 10
    // console.log ( myFunction )

    myFunction = addNumbers
    console.log ( myFunction (35, 65))

    myFunction = greet
    console.log ( myFunction ('Javito'))

    myFunction = saveTheWorld
    console.log ( myFunction ())



})()