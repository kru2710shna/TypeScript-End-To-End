var score = [];
var names = [];
function identityOne(val) {
    return val;
}
function idetityTwo(val) {
    return val;
}
function idetityThree(val) {
    return val;
}
// Define your type 
function idetityFour(val) {
    return val;
}
idetityFour({ brand: "", type: 2 });
function getSearchProducts(products) {
    //do someting database operations 
    var myIndex = 3;
    return products[3];
}
var getMoreSearchProducts = function (products) {
    //database operations
    var myIndex = 4;
    return products[myIndex];
};
// Complex Examples
function anotherFunction(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
anotherFunction(3, {
    conection: "string",
    username: "string",
    password: "string"
});
