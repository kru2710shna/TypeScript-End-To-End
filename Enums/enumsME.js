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
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 3] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.AISLE;
hcSeat = SeatChoice.MIDDLE;
