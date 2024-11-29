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

    protected _courseCount = 1

    private readonly city: string = ""
    constructor(
        public email: string,
        public name: string
    ) { }

    private deleteToken() {
        console.log("deleteToken")
    }

    // Getter Methods
    get getAppleEmail(): string {
        return this.email
    }

    // Getter Methods
    get courseCount(): number {
        return this._courseCount
    }

    // Setter Methods
    set courseCount(courseNum) {
        if (courseNum < 1) {
            throw new Error("Count must be greater than 1")
        }
        this._courseCount = courseNum
    }

}

class SubUser extends User {

    ifFamily: boolean= true
    changeCourseCount(){
        this._courseCount = 4
    }

}
const rakesh = new User('rakesh@gmail.com', 'rakesh')



