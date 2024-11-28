"use strict";
// sepcilized array
Object.defineProperty(exports, "__esModule", { value: true });
//make an array in onrder- means 1st is string then nuber then boolean
var tuser;
tuser = ["hc", 1, false];
// bad
// tuser = ["hc",1,1]
var rgb;
rgb = [255, 123, 1];
var newUser = [1, "paras"];
// bad
// let newUser: User = ["1", "paras"]
newUser[1] = "1";
