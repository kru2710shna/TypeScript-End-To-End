// sepcilized array


//make an array in onrder- means 1st is string then nuber then boolean
let tuser: [string,number,boolean] 

tuser = ["hc",1,false]
// bad
// tuser = ["hc",1,1]


let rgb:[number,number, number]
rgb = [255,123,1]
// bad
// rgb = ["red",123,1]


// With-Type
type User = [number,string]

let newUser: User = [1, "paras"]
// bad
// let newUser: User = ["1", "paras"]
newUser[1] = "1"



export {}
