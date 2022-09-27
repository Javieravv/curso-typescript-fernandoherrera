import { Hero, villian } from './interfaces';
import { genericFunction } from './generics/generics';


// printObject ( {name: 'Javo'})
// printObject ( 'Javier Armando')
// printObject ( 1973)
// printObject ( [0,1,2,3,4,5,6] )

// console.log ( genericFunction(49.36598).toFixed(2))
// console.log ( genericFunction('JAVIER ARMANDO VARGAS').toLocaleLowerCase())
// console.log ( genericFunction( new Date ).getDay())

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log ( genericFunction <Hero>(deadpool).realName)
console.log ( genericFunction <villian>(deadpool).dangerLevel)
