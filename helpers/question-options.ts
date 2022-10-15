export const requestData = (val: string): Promise<number> => {

    return new Promise((resolve) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question(`cantidad de galones para ${val}: `, (opt: string) => {
            if (Number(opt) < 1 || Number(opt) % 1 !== 0) {
                resolve(0)
            } else (
                resolve(Number(opt))
            )
            readline.close();
        })
    })

}


export const stop = () => {

    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question(`presione ENTER para continuar`, (opt: any) => {
            readline.close();
            resolve(null);
        })
    })

}

export const operationAgain = (): Promise<string> => {

    return new Promise((resolve) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question('Deseas realizar otra operación: [1]. Si, [otro número]. No: ', (opt: string) => {
            resolve(opt)
            readline.close();
        })
    })

}