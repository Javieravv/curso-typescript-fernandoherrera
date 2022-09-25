/**Desestructuracion de objetos */

(() => {

    type Avengers = {
        nick: string
        ironman: string
        vision: string
        activo: boolean
        poder: number
    }

    const avengers:Avengers = {
        nick: 'Samuel E Jackson',
        ironman: 'Robert D Junior',
        vision: 'Paul',
        activo: true,
        poder: 1500
    }

    console.log ( {avengers})

    const {activo, poder, vision} = avengers
    console.log ('HEROES ACTIVOS...', activo, poder, vision.toUpperCase())

    // Se envía a una función el tipo de dato Avengers
    const getAvenger = (avenger: Avengers) => {
        console.log ('IRONMAN = ', avenger.ironman)
    }

    getAvenger( avengers )

    const getAvenger1 = ( { ironman, ...resto} :Avengers) => {
        console.log ('AVENGERS SIN IRONMAN',ironman, resto)
    }
    getAvenger1(avengers)

    // Desestructuración de arreglos.

    const avengersArr: string[] = ['Capitán América', 'Ironman','Hulk', 'Viuda Negra']
    const [capitan , ironman, ] = avengersArr
    console.log ( ironman )

})()