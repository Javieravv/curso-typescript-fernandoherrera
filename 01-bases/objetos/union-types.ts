/**Unión de tipos en Ts */

(() => {
    type Heroe = {
        name: string
        age?: number
        powers: string[]
        getName: () => string 
    }

    let myCustomVariable: (string | number | Heroe) = 'Javier Armando'
    console.log (typeof myCustomVariable,  myCustomVariable)

    myCustomVariable = 49
    console.log (typeof myCustomVariable,  myCustomVariable)

    myCustomVariable = {
        name: 'Javier Armando Vargas Vega',
        age: 49,
        powers: ['Alegre', 'Juicioso'],
        getName(){
            return this.name
        }
    }
    console.log (typeof myCustomVariable,  myCustomVariable)
    console.log (myCustomVariable.getName())

} )()