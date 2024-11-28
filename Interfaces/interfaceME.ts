interface User {
    readonly aid: number;
    email: string,
    id: number,
    googleID?: string,
    // Unique thing

    
    // Boring trick
    // startTrail: () => string
    // New Trick
    startTrail(): string,
    getCoupon(cName: string): number
}

const h: User = {
    aid: 1122,
    email: '',
    id: 1,
    startTrail: () => {
        return ""
    },
    getCoupon: (cName: "string") => {
        return 10
    }
}