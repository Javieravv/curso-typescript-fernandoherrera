/**Constructores privados. */

(()=>{
    class Apocalipsis {

        static instance: Apocalipsis

        private constructor (
            public name: string
        ) {}

        static callApocalipsis (): Apocalipsis {
            if ( !Apocalipsis.instance ) {
                Apocalipsis.instance = new Apocalipsis ('Soy Apocalipsis, el único!!')
            }

            return Apocalipsis.instance
        }
    }

    // Para trabajar con la clae
    const apocalipsis1 = Apocalipsis.callApocalipsis()
    const apocalipsis2 = Apocalipsis.callApocalipsis()
    const apocalipsis3 = Apocalipsis.callApocalipsis()

    // console.log ( 'Apocalipsis ', apocalipsis1.name )
    // console.log ( 'Apocalipsis1 ', apocalipsis2.name )
    // console.log ( 'Apocalipsis2 ', apocalipsis3.name )
   
})()