
export const printObject = (argument: any) => {
    console.log ( argument );
}

// función genérica
export function genericFunction<T> (argument: T ): T {
    return argument;
}

export const genericFunctionArrow = <T>( argument: T):T => {
    return argument
}