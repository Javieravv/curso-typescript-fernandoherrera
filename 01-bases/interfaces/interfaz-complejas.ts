/**Interfaces complejas */
(() => {
    interface Client {
        name: string
        age?: number
        address: Address
        getFullAddress ( id: string): string
    }

    interface Address {
        id: number
        zip: string
        city: string
    }

    const client: Client = {
        name: 'Javier Armando Vargas Vega',
        age: 49,
        address: {
            id: 125,
            city: 'Tunja',
            zip: '150001'
        },
        getFullAddress (id: string) {
            return `${ this.address.id} - ${ this.address.city}`
        }
    }
    // console.log (client, client.getFullAddress('1'))
})()