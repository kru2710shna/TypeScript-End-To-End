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

// Also Called Reopeneing of interfaces
// new thing can be added later also can be called from different classes an can be added direectly 
interface User {
    githubID: string
}

interface Admin extends User {
    role: "admin" | "learner"
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
    },
    githubID:"12322"
}

const a: Admin = {
    aid: 1122,
    email: '',
    role: "admin",
    id: 1,
    startTrail: () => {
        return ""
    },
    getCoupon: (cName: "string") => {
        return 10
    },
    githubID:"12322"
}

