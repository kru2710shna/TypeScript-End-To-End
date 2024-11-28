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










// If want to to use same time more than once 
// type 
type User = {
    name: string,
    email: string,
    isActive: boolean
}

function createUser(user:User): User {
    return {name: "", email: "", isActive: false}
}


createUser({ name: 'hello1', email: 'hello@example.com', isActive: false   });


export { }