// //! function without parametrs
// function demo(){
//     console.log("function wothout parameters");
// }
// demo();
//! function with parameters
// function userDetails(name, age, city){
//     console.log(name);
//     console.log(age);
//     console.log(city);

// }
// userDetails("pallavi", 19, "Hyderabad");

// //! anonymus function
// function(){
//     console.log("Anonymus function");
// }

//! function expression
// let x=function() {
//     console.log("function expression is executing");
// }
// x();

//! IIFE
// (function(){
//     console.log("IIFE")
// })
// ();
//! Arrow function
// function demo(){
//     console.log("Hello")
// }
// demo();

// let x =_=>console.log("Arrow function");
// x(5);

// let x =(a, b)=>console.log(a+b);
// x(5,5);

// let x=_=>{
//     console.log("Hi");
//         console.log("Hello");
//         console.log("Bye");

// }
// x();

//! return keyword
// function demo(a,b){
//     return a+b; ///explict return
// }
// let x = demo(5,5);
// console.log(x);

// let y = (a,b) => a+b;  ///implicit return
// let a =y(10,20);
// console.log(a);

// let z = (a,b)=>{return a+b};
// let b = z(10,100);
// console.log(b);

// //! Higher order function
//  function hof(a){
//     return a;
//  };
// let x = hof("vikas");
// console.log(x);

// function parent(callback){
//     return callback;
// }
// let x = parent(add(5,5));
// console.log(x);

// function add(a,b){
//     return a+b;
// }

//! closure
var a = 100;
let b="Hello";
function x(){
    var user = "Pallavi";
   let company = "Google";
    const sal = 123455;
    console.log(user);
    console.log(company);
    console.log(sal);
    console.log(a, b);
};
x();