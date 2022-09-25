"use strict";
/**Interfaz básica. */
(() => {
    let flash = {
        name: 'Barry Allen1',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
        getName() {
            return this.name;
        }
    };
    let superman = {
        name: 'Clark Kent',
        age: 31,
        powers: ['Volar'],
        getName() {
            return this.name;
        }
    };
})();
/**Clases e Interfaces */
(() => {
    // las clases pueden implementar interfaces
    class Mutant {
        constructor(name1, realName, age) {
            this.name1 = name1;
            this.realName = realName;
            this.age = age;
        }
        mutantPower() {
            return `${this.name1} ${this.realName}`;
        }
    }
    const wolverine = new Mutant('Wolverine', 'Logan', 65);
    console.log('Wolverine', wolverine, wolverine.mutantPower());
})();
/**Las interfaces sirven par restringir cómo deben ir las funciones en sus argumentos. */
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return a + b;
    };
    console.log(addNumbersFunction(55, 45));
})();
/**Interfaces complejas */
(() => {
    const client = {
        name: 'Javier Armando Vargas Vega',
        age: 49,
        address: {
            id: 125,
            city: 'Tunja',
            zip: '150001'
        },
        getFullAddress(id) {
            return `${this.address.id} - ${this.address.city}`;
        }
    };
    // console.log (client, client.getFullAddress('1'))
})();
// Crear interfaces
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    comer: true,
    llorar: true,
    reir: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona {
    imprimirBio() {
    }
}
//# sourceMappingURL=main.js.map