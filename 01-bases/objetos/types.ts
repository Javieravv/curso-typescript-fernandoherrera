/**Cómo se trabajan objetos. */

(() => {

    // Se usa la palabra reservada type para definir un tipo.

    type Heroe = {
        name: string
        age?: number
        powers: string[]
        getName?: () => string
    }

    let flash: Heroe = {
        name: 'Barry Allen1',
        age: 24,
        powers: ['Super velocidad','Viajar en el tiempo'],
        getName(){
            return this.name
        }
    }

    let superman: Heroe  = {
        name: 'Clark Kent',
        age: 31,
        powers: ['Volar'],
        getName(){
            return this.name
        }
    }
 
    console.log (  flash.getName() )
    console.log (  superman.getName() )

})()