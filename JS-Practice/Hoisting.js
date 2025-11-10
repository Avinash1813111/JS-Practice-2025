// Hoisting is a phenomena by which we can access the functions and variables before we intializing it.

console.log(a)  // undefined
var a=10;
console.log(a); //10


//Hoisting works diffrently in LET and const case
//hoisting can be done only in temporal deadzone


console.log(b) //refrence errror
console.log(c) // refrence error
let b=20;
const c=30;
console.log(b)  // 20
console.log(c)  //30