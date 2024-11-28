function addTwo(num: number): number {
    return num + 2
}
addTwo(2)

let loginUser = (name: string, email: string, isPaid: boolean) => {
}
let loginUser2 = (name: string, email: string, isPaid: boolean = false) => {
}
loginUser("person1", "person1@gmail.com", true)
loginUser2("person1", "person1@gmail.com")

// Problem Function
// function getValue(myVal: number): boolean{
//     if (myVal == 0) {return true}
//      return "200 OK"
// }

const getHello = (s: string): string => {
    return ""
}

const heros = ["spiderman", "ironman", "thor"]
// detects that array is number 
heros.map(hero => {
    return `hero  is ${hero}`
})

// example- void- return nothing
function consoleError(erressg: string): void {
    console.log(erressg)
}

// example- return no value
function fail(msg: string): never {
    throw new Error(msg)
}

export { }