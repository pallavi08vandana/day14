// let user1 = "Pallavi";
// let user2 = "Divya";
// let user3 = "Vaishu";
// let user4 = "saisree";
// let user5 = "Prabhas";

// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);
// console.log(user5);

// let users=["Pallavi" , "Divya" , "Vaishu" , "saisree", "Prabhas"]
// console.log(users[0]);
// console.log(users[4]);


// let users=["Pallavi" , "Divya" , "Vaishu" , "saisree", "Prabhas" , "NTR"];
// let x = users.map((user)=>{
    //console.log(user); 
//     return user;  
// })
// console.log(x);


// let x = users.forEach((user)=>{
    //console.log(user);
//     return user;
// })
// console.log(x); //! undefined

 //! create array of objects and print the values.

//  let userDetails = {
//     name : "Pranav",
//     age :22,
//     company:"Amazon",
//     sal:1234567,
//     details:function(){
//         return `My name is ${this.name} and i am working in ${this.company}`
//     }
//  };
//  console.log(userDetails);
//  console.log(userDetails.name);
//  console.log(userDetails.details());


//! JSON

let userDetails = {
    name : "sam",
    age:25,
    city:"HYD"
};
console.log(userDetails);

let x = JSON.stringify(userDetails);
console.log("JSON object"+x);

let y = JSON.parse(x);
console.log(y);



 

