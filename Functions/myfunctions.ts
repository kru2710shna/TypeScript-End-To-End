function addTwo(num:number){
    return num + 2
}
addTwo(2)

let loginUser = (name:string,email:string,isPaid:boolean) => {
}
let loginUser2 = (name:string,email:string,isPaid:boolean=false) => {
}
loginUser("person1","person1@gmail.com",true)
loginUser2("person1","person1@gmail.com")

export {}