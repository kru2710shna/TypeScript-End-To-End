class User {
    email: string;
    name: string;
    readonly city:string = ""
    constructor(email: string, name: string) {
        this.email = email
        this.name = name
    }
}

const rakesh = new User('rakesh@gmail.com', 'rakesh')
