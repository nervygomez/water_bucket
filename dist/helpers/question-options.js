"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operationAgain = exports.stop = exports.requestData = void 0;
const requestData = (val) => {
    return new Promise((resolve) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question(`cantidad de galones para ${val}: `, (opt) => {
            if (Number(opt) < 1 || Number(opt) % 1 !== 0) {
                resolve(0);
            }
            else
                (resolve(Number(opt)));
            readline.close();
        });
    });
};
exports.requestData = requestData;
const stop = () => {
    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question(`presione ENTER para continuar`, (opt) => {
            readline.close();
            resolve(null);
        });
    });
};
exports.stop = stop;
const operationAgain = () => {
    return new Promise((resolve) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question('Deseas realizar otra operación: [1]. Si, [otro número]. No: ', (opt) => {
            resolve(opt);
            readline.close();
        });
    });
};
exports.operationAgain = operationAgain;
//# sourceMappingURL=question-options.js.map