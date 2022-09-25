/**Manejho de clases en js */
(() => {
    class Avenger {
        name;
        power;

        constructor (name = 'Sin nombre', power = 0) {
            this.name = name;
            this.power = power
        }
    }

    class FlyyingAvenger extends Avenger {
        flying;

        constructor (name, power) {
            super ( name, power)
            this.flying = true
        }
    }

    const hulk = new Avenger ('Hulk', 9001)
    const falcon = new FlyyingAvenger ('Falcon', 8500)

    console.log ( hulk) 
    console.log ( falcon )
})()