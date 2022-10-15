"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stop = exports.RequestData = void 0;
const RequestData = (val) => {
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
exports.RequestData = RequestData;
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
//# sourceMappingURL=msg-options.js.map