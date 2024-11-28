"use strict";
// class User {
//     public email: string;
//     public name: string;
//     private readonly city: string = ""
//     constructor(email: string, name: string) {
//         this.email = email
//         this.name = name
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "";
    }
}
const rakesh = new User('rakesh@gmail.com', 'rakesh');
