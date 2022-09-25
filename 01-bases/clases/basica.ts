/**Manejando clases en js */
(() => {

    // Definición de clases en ts
    class Avenger {
        static  avgAge: number = 33
        static getAvgAge () {
            return this.name // Devuelve el nombre de la clase.
        }

        constructor (private name: string, 
                     private team: string, 
                     public realName?: string
        ) {
            // Aquí se escribirá el código para el constructor.
        }

        bio() { // pública por defecto
            return `${this.name} ${this.team}`
        }

        private bio1() {
            return `${this.realName} `
        }


    }

    const antman: Avenger = new Avenger ('Ant Man', 'Team Capitán', 'Ant Man')
    // console.log ( antman, antman.bio() )
    // console.log ( antman.bio() )
    // console.log ( antman.bio1() )
    // console.log ( Avenger.getAvgAge() )

})()