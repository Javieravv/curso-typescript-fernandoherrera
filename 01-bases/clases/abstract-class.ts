/**Clases abstractas */

(()=> {
    abstract class Mutante {
        constructor (
            public name: string,
            public realName: string
        ){}
    }

    class Xmen extends Mutante {
        salvarMundo() {
            return 'El mundo a salvo'
        }
    }

    class Villian extends Mutante {
        conquistarMundo () {
            return 'Mundo conquistado'
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan'); 
    const magneto = new Villian ('Magneto', 'Magnus'); 

    // console.log ( wolverine, wolverine.salvarMundo() )
    // console.log ( magneto, magneto.conquistarMundo() )

    const imprimirNombre = ( character: Mutante) => {
        console.log ( character.name)
    }

    // imprimirNombre( wolverine )
    // imprimirNombre( magneto )

})()