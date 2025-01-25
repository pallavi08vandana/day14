// console.log(10);
// console.log(20);
// // setTimeout(()=>{
// //     console.lg(30);

// const { log } = require("async");

    
// // })
// setInterval(()=>{
//     //document.writeln("mru");
//     console.log0(9);
    
// },1500)
// console.log(40);
// console.log(50);

// //!promise:
// let p1=new Promise((resolve,reject)=>{});
// console.log(p1);


// let p2=new Promise((resolve,reject)=>{
//     resolve("Success");
// })
// console.log(p2);
// let p3=new Promise((resolve,reject)=>{
//     resolve("Failure");

// })
// console.log(p3);

// //! API fetching

// //! https://jsonplaceholder.typicode.com/users

// function fetchUsers()
// {
//     let repsonse = fetch("https://jsonplaceholder.typicode.com/users");
//     //console.log(response);
//     repsonse.then(result=>{
//         //console.log(result.json());
//         return result.json().then(data=>{
//             console.log(data);
//             let store = document.getElementById("store");
//             console.log(store);
//             data.map(user=>{
//                 store.innerHTML += `
//                 <tr>
//                 <td>${user.id}</td>
//                 <td>${user.name}</td>
//                 <td>${user.email}</td>
//                 <td>${user.company.name}</td>
//                 </tr>
    
//                 `
                
//             })
//         })

//     })
//     .catch(Err=>console.log(err))
// }
// fetchUsers();


// function demo()
// {
//  console.log("start");
//  console.log(10);
//  console.log(20);
//  return ;
//  console.log(30);
//  console.log(40);
//  console.log("End");
// }
// demo();

// let p = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve("success");
//     }, 5000)
// })

// async function demo(){
//     console.log("start");
//     let x =await p;
//     console.log(x);
//     console.log("End");
// };
// demo()


async function  fetchUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data =await response.json();
    console.log(data);
    
}
fetchUsers();
