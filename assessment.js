// 1---//Write a JavaScript program that prints numbers from 1 to 100. However, for multiples of 3, print 'Fizz' instead of the number, and for multiples of 5, print 'Buzz'. For numbers that are multiples of both 3 and 5, print 'FizzBuzz'.
// //Expected Output:
// //1
// //2
// //Fizz
// //4
// //Buzz
// //Fizz
// //7
// //8
// //Fizz
// //Buzz
// //11
// //Fizz
// //13
// //14
// //FizzBuzz
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//       console.log('Fizz');
//     } else if (i % 5 === 0) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }
//  2--- //take 3 values and print which value is greater among the three values
// //let a=20;
// //let b=140;
// //let c=100;
// //do this with both if -else ladder and switch condition

//      //using if-else ladder
// let a=20;
// let b=140;
// let c=100;

// if(a>b && a>c){
//         console.log("a is greater");
//     }
// else if(b>a && b>=c){
//     console.log("b is greater");
//     }
// else{
//     console.log("c is greater")
// }
//    //using switch case
//    let a = 20;
//    let b = 140;
//    let c = 100;
   
//    let max;
   
//    switch (true) {
//        case (a > b && a > c):
//            max = a;
//            break;
//        case (b > a && b > c):
//            max = b;
//            break;
//        case (c > a && c > b):
//            max = c;
//            break;
//        default:
//            max = "Values are equal or not distinct";
//    }
   
//    console.log("The greatest value is:", max);