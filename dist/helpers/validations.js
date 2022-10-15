"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valueInputs = void 0;
const valueInputs = (x, y, z) => {
    // se compara termino para saber si coinciden si son ambos par o impar
    if (isEven(x + y) !== isEven(z)) {
        return false;
    }
    // verificamos que si x & y son menores que z nunca llegara al valor de este mismo.
    if (x < z && y < z) {
        return false;
    }
    return true;
};
exports.valueInputs = valueInputs;
1; // ver si un numero es par o no
const isEven = (a) => {
    if (a % 2 === 0) {
        return true;
    }
    return false;
};
//# sourceMappingURL=validations.js.map