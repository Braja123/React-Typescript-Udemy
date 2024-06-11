var userName;
userName = 34;
var bbb;
// Union type
var userID = "abc1";
userID = 123;
var user;
user = {
    name: "sanu",
    age: 29,
    isAdmin: true,
    id: "abc1"
};
// let hobbies: Array<string>; // OR
var hobbies; // number[], boolean[]
hobbies = ['sanu', 'dipa', 'das'];
// function add(a: number, b: number): undefined { // here undefined means this function will return
function add(a, b) {
    var result = a + b;
    console.log(result);
}
function add1(a, b) {
    var result = a + b;
    return result;
}
function calculate(a, b, calc) {
    calc(a, b);
}
calculate(2, 5, add1);
