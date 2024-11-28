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
        this._courseCount = 1;
        this.city = "";
    }
    deleteToken() {
        console.log("deleteToken");
    }
    // Getter Methods
    get getAppleEmail() {
        return this.email;
    }
    // Getter Methods
    get courseCount() {
        return this._courseCount;
    }
    // Setter Methods
    set courseCount(courseNum) {
        if (courseNum < 1) {
            throw new Error("Count must be greater than 1");
        }
        this._courseCount = courseNum;
    }
}
const rakesh = new User('rakesh@gmail.com', 'rakesh');
