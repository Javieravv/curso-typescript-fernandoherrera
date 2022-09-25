(()=>{
    type Avenger = {
        nombre: string
        weapon: string
    }

    const ironman: Avenger = {
        nombre: 'Tony Stark',
        weapon: 'Armor -Suit'
    }

    const capitanAmerica: Avenger = {
        nombre: 'Capitán América',
        weapon: 'Escudo'
    }

    const viudaNegra: Avenger = {
        nombre: 'Viuda Negra',
        weapon: 'Pistola'
    }

    const avengers:Avenger[] = [ ironman, capitanAmerica, viudaNegra]

    for (const avenger of avengers) {
        console.log ( avenger.nombre, avenger.weapon )
    }


})()