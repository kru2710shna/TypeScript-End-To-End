// Hoow to restrict the user choice 


// Length Way
// const AISLE = 0
// const MIDDLE = 1
// const WINDOW = 2
// let seat: number = 2
// if (seat === 0) {
//     console.log(seat, " is ", AISLE)
// }
// if (seat === 1) {
//     console.log(seat, " is ", MIDDLE)
// }
// if (seat === 2) {
//     console.log(seat, " is ", WINDOW)
// }


// Using Enum
enum SeatChoice {
    AISLE,
    MIDDLE,
    WINDOW,
    FOURTH
}

let hcSeat = SeatChoice.AISLE
hcSeat = SeatChoice.MIDDLE
