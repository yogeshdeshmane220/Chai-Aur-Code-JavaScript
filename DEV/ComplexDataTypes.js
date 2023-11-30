// let userOne = {
//     name:"yogesh deshmane",
//     email:"yogeshdeshmane@gmail.com"
// }

// let userTwo = userOne;
// console.log("Email Of The User Is : "+userOne.email)
// // console.log("Name Of The User Is : "+userOne.name)

// userTwo.email="Tushar@gmail.com"

// console.log("Email Of The User Is : "+userTwo.email)
// // console.log("Name Of The User Is : "+userTwo.name)

let userOne = {
    name: "yogesh deshmane",
    email: "yogeshdeshmane@gmail.com"
}

let userTwo = userOne; // userTwo now references the same object as userOne


// console.log("Name Of The User Is : " + userOne.name)
console.log("Email Of The User Is : " + userOne.email)
console.log("Email Of The User Is : " + userTwo.email)

userTwo.email = "Tushar@gmail.com" // Modifying the email property of the shared object
console.log("Email Of The User Is : " + userOne.email)
console.log("Email Of The User Is : " + userTwo.email)

// console.log("Name Of The User Is : " + userTwo.name)
