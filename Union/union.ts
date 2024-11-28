// union may include 2 or more types or arrays as needed

let score: number | string  = 33
score = 44
score = "55"
// Bad Example
// score= true

// mulpile types 
//type-1
type User = {
    name: string,
    id: number
}
//type-2
type Admin = {
    username: string,
    id: number
}
// man ca be user as well as Admin
let man:User | Admin = {name: "Man", id:21}
man= {username: "Man", id:21}

// function
function getDBId(id: number | string){
    console.log('DB is', id)
}
getDBId(1)
getDBId("2")
// wrong 
// getDBId(true)
