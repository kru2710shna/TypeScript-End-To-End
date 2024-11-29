const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

function idetityTwo(val: any): any {
    return val;
}

function idetityThree<Type>(val: Type): Type {
    return val
}


// Define your type 
function idetityFour<X>(val: X): X {
    return val
}

interface Bottle {
    brand: string
    type: number
}

idetityFour<Bottle>({ brand: "", type: 2 })
