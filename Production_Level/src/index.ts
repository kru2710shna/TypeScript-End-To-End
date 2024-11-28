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
    private readonly city: string = ""
    constructor(
        public email: string,
        public name: string
    ) {}
}

const rakesh = new User('rakesh@gmail.com', 'rakesh')


