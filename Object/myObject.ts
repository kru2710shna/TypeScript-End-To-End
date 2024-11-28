const User = {
    name: 'name1',
    email: 'user1@gmail.com',
    isActive: true
}

function createUseer({ name: string, isPaid: boolean }) { }
let newUser = { name: 'person1', isPaid: true, email: "p@gmail.com" }
createUseer(newUser)

function createCourse(): { name: string, price: number } {
    return { name: 'person1', price: 122 }
}










// // If want to to use same time more than once 
// // type 
// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }

// function createUser(user:User): User {
//     return {name: "", email: "", isActive: false}
// }


// createUser({ name: 'hello1', email: 'hello@example.com', isActive: false   });

// readonly- as it dosen;t allow user to change it later 
type User = {
    readonly _id: string
    name: string,
    email: string,
    isActive: boolean,
    // for optional field we use ?: 
    cardDetial?: number
}

let myUser: User = {
    _id: "12234",
    name: "g",
    email: "g@example.com",
    isActive: true,

}

myUser.email = "g1@example.com"
/// error- Says cna't change as it is read only. 
// myUser._id  = "12222234"

// Mixing 2 types and making a use in 3rd type 
type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


export { }