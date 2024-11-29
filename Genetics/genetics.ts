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


function getSearchProducts<T>(products: T[]): T {
    //do someting database operations 
    const myIndex = 3
    return products[3]
}


const getMoreSearchProducts = <T>(products: T[]): T => {
    //database operations
    const myIndex = 4
    return products[myIndex]
}


interface Database {
    conection: string
    username: string
    password: string
}

// Complex Examples

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction(3, {
    conection: "string",
    username: "string",
    password: "string"
})