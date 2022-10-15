
export const valueInputs = (x: number, y: number, z: number): boolean | any => {
    // se compara termino para saber si coinciden si son ambos par o impar
    if (isEven(x + y) !== isEven(z)) {
        return false;
    }

    // verificamos que si x & y son menores que z nunca llegara al valor de este mismo.
    if (x < z && y < z) {
        return false;

    }

    return true;
}

1// ver si un numero es par o no
const isEven = (a: number) => {
    if (a % 2 === 0) {
        return true
    }
    return false;
}