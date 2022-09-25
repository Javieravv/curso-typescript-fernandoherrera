/**Manejo de herencia */

(() => {
    class Avenger {
        constructor (
            public name: string, 
            public realName: string
        ){
            // console.log ('Constructor Avenger Llamado!!!')
        }

        public getFullName () {
            return `GET FULL NAME ${ this.name } ${ this.realName }`
        }

        protected getFullName1 () {
            return `GET FULL NAME 1 ${ this.name } ${ this.realName }`
        }

        get fullName () {
            return `${this.name} - ${this.realName}`
        }

        set fullName ( name: string) {
            // solo recibe un argumento y con pél se hace lo que sea.
            // Aquí puede aplicarse lógica.
            this.name = name
        }
    }

    // Clase heredada de Avenger
    class Xmen extends Avenger {
        // Llama automáticamente el constructor del Avenger si no se declara constructor
        constructor (
            name: string,
            realName: string,
            public isMutant: boolean
        ) {
            // Debe llamarse a super al inicio.
            super( name, realName)
            // console.log ('Constructor Xmen llamado')
        }

        getFullNameDesdeXmen () {
            console.log ( super.getFullName())
        }
    }

    const wolverine = new Xmen ('Wolverine', 'Logan', true)
    // console.log ( 'OBJETO', { wolverine })
    // // wolverine.getFullName()
    // // wolverine.getFullNameDesdeXmen()
    // console.log ('USANDO EL GETTER', wolverine.fullName)
    // wolverine.fullName = 'Xavier Vargas'
    // console.log ('USANDO EL GETTER YA CAMBIADO', wolverine.fullName)


})()