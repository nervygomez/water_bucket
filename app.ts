import { calculate } from './helpers/operations';
import { requestData, stop, operationAgain } from './helpers/question-options'
import { valueInputs } from './helpers/validations';
console.clear();
const main = async () => {
    let opt = ''

    do {
        console.clear();
        console.log('============ Water Bucket ============\n\n');

        // se solicitan los valores para X, Y, Z;
        let x: number = await requestData('X');
        let y: number = await requestData('Y')
        let z: number = await requestData('Z')

        if (x < 1 || y < 1 || z < 1) {
            console.log("\n\n********** Numero debe ser mayor a 0 y entero **********\n\n");
            await stop();
            console.clear();
            return;
        }

        // verifica que los datos ingresado tenga solución
        const res = valueInputs(x, y, z);

        if (!res) {
            console.log("No Solution");

        } else {
            // calculando z, Y respecto a X
            let resultXtoY = calculate(x, y, z, 0, 0, 'x', 'y');

            // calculando z,  X respecto a Y
            let resultYtoX = calculate(y, x, z, 0, 0, 'y', 'x');

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

        await stop();

        //Preguntamos si queremos realizar otra operación
        opt = await operationAgain()
    } while (opt === '1');

}


main();