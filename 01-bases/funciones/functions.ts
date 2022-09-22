/**Funciones en TypeScript  */
(()=>{
    const hero: string = 'Spiderman'

    function returnName (): string {
        return hero
    }

    const activateBatiSignal = ():string => {
        return 'Batiseñal activada'
    }

    console.log ( activateBatiSignal())
    console.log (typeof activateBatiSignal)
    console.log ( returnName())

})()