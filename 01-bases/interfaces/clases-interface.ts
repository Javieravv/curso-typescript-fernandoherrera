/**Clases e Interfaces */
(() => {
    interface Xmen {
        name1: string
        realName: string
        mutantPower (id: number): string
    }

    interface Human {
        age: number
    }

    // las clases pueden implementar interfaces
    class Mutant implements Xmen, Human {
        public name1: string
        public realName: string
        public age: number

        constructor (
            name1: string,
            realName: string,
            age: number
        ) {
            this.name1 = name1
            this.realName = realName
            this.age = age
        }

        mutantPower() {
            return `${ this.name1} ${this.realName}`
        }
    }

    const wolverine = new Mutant('Wolverine', 'Logan', 65)
    console.log ('Wolverine', wolverine, wolverine.mutantPower())


})()