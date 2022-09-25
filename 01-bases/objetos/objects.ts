/**Cómo se trabajan objetos. */

(() => {
    let flash: {name: string, age: number, powers: string[], getName?: () => string} = {
        name: 'Barry Allen1',
        age: 24,
        powers: ['Super velocidad','Viajar en el tiempo']
    }

    flash = {
        name: 'Xavier ',
        age: 49,
        powers: ['Buena gente'],
        getName() {
            return this.name
        }
    }

    console.log (  flash.getName() )

})()