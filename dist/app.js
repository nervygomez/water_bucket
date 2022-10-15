"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const operations_1 = require("./helpers/operations");
const question_options_1 = require("./helpers/question-options");
const validations_1 = require("./helpers/validations");
console.clear();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let opt = '';
    do {
        console.clear();
        console.log('============ Water Bucket ============\n\n');
        // se solicitan los valores para X, Y, Z;
        let x = yield (0, question_options_1.requestData)('X');
        let y = yield (0, question_options_1.requestData)('Y');
        let z = yield (0, question_options_1.requestData)('Z');
        if (x < 1 || y < 1 || z < 1) {
            console.log("\n\n********** Numero debe ser mayor a 0 y entero **********\n\n");
            yield (0, question_options_1.stop)();
            console.clear();
            return;
        }
        // verifica que los datos ingresado tenga solución
        const res = (0, validations_1.valueInputs)(x, y, z);
        if (!res) {
            console.log("No Solution");
        }
        else {
            // calculando z, Y respecto a X
            let resultXtoY = (0, operations_1.calculate)(x, y, z, 0, 0, 'x', 'y');
            // calculando z,  X respecto a Y
            let resultYtoX = (0, operations_1.calculate)(y, x, z, 0, 0, 'y', 'x');
            // Compara quien obtuvo mejores resultados
            if (resultXtoY.i < resultYtoX.i) {
                console.log("\nBest Solution");
                console.log(resultXtoY.steps);
                console.log("\n=============================\n");
                console.log("Worst Solution");
                console.log(resultYtoX.steps);
            }
            if (resultXtoY.i > resultYtoX.i) {
                console.log("\nBest Solution");
                console.log(resultYtoX.steps);
                console.log("\n=============================\n");
                console.log("Worst Solution");
                console.log(resultXtoY.steps);
            }
            if (resultXtoY.i === resultYtoX.i) {
                console.log("Same Solution");
                console.log(resultYtoX.steps);
            }
        }
        yield (0, question_options_1.stop)();
        //Preguntamos si queremos realizar otra operación
        opt = yield (0, question_options_1.operationAgain)();
    } while (opt === '1');
});
main();
//# sourceMappingURL=app.js.map