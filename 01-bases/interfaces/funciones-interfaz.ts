/**Las interfaces sirven par restringir cómo deben ir las funciones en sus argumentos. */
(() => {
    interface addTwoNumbers {
        (a: number, b: number): number
    }

    let addNumbersFunction: addTwoNumbers

    addNumbersFunction = (a: number, b: number) => {
        return a + b
    }

    console.log ( addNumbersFunction (55,45))



})()