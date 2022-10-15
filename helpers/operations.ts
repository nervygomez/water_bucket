let i: number = 0;
let steps: any[] = [];
let obj: any = {}


export const calculate = (limit_a: number, limit_b: number, z: number, bucket_a: number, bucket_b: number, str_a: string, str_b: string): any => {

    if (bucket_b === z || bucket_a === z) {

        steps.push(assingObj(bucket_a, bucket_b, 'Solved', str_a, str_b));

        let aux = { i, steps };
        i = 0;
        obj = {}
        steps = [];

        return aux
    } else {
        if (bucket_a === 0) {
            i++;
            bucket_a = limit_a;

            steps.push(assingObj(bucket_a, bucket_b, `Fill bucket ${str_a}`, str_a, str_b))
        }


        // Bucket B Vacio
        if (bucket_b === 0) {
            i++;

            if (bucket_a <= limit_b) {
                bucket_b = bucket_a;
                bucket_a = 0;
            } else {
                bucket_b = limit_b;
                bucket_a = bucket_a - limit_b;
            }

            steps.push(assingObj(bucket_a, bucket_b, `Transfer bucket ${str_a} to bucket ${str_b}`, str_a, str_b));
            return calculate(limit_a, limit_b, z, bucket_a, bucket_b, str_a, str_b)
        }

        // Bucket B Lleno
        if (bucket_b === limit_b) {
            i++;
            bucket_b = 0;

            steps.push(assingObj(bucket_a, bucket_b, `empty bucket ${str_b}`, str_a, str_b));
            return calculate(limit_a, limit_b, z, bucket_a, bucket_b, str_a, str_b)
        }

        // Bucket B contiene agua pero no esta lleno
        if (bucket_b > 0 && bucket_b < limit_b) {
            i++;

            if (limit_b - bucket_b >= bucket_a) {
                bucket_b = bucket_b + bucket_a;
                bucket_a = 0;
            } else {
                bucket_a = bucket_a - (limit_b - bucket_b);
                bucket_b = limit_b;
            }

            steps.push(assingObj(bucket_a, bucket_b, `Transfer bucket ${str_a} to bucket ${str_b}`, str_a, str_b));
            return calculate(limit_a, limit_b, z, bucket_a, bucket_b, str_a, str_b)
        }
    }
}

const assingObj = (a: number, b: number, exp: string, str_a: string, str_b: string) => {
    let obj: any = {}
    obj[str_a] = a;
    obj[str_b] = b;
    obj['exp'] = exp

    return obj;
}