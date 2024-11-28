// union may include 2 or more types or arrays as needed
var score = 33;
score = 44;
score = "55";
// man ca be user as well as Admin
var man = { name: "Man", id: 21 };
man = { username: "Man", id: 21 };
// function
function getDBId(id) {
    console.log('DB is', id);
}
getDBId(1);
getDBId("2");
// wrong
// getDBId(true)
