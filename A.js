/*
    var: var is global scoped. variables can be redeclared and updated.
    let: let is block scoped. variables cannnot be redeclared but can be updated.
    const: const is block scoped. Variables cannot be redeclared or updated.
*/


// const profile = {
//     name: "shradhakhapra",
//     isFollow: false,
//     posts: 185,
//     followers: 569000,
//     following: 4,
// }
// console.log(profile);
// console.log(typeof profile["name"]); //accessing keys of an object

// let a = 5;
// let b = 2;
// console.log("a = ", a , " & b = ",b);
// console.log("a + b = ", a + b);
// console.log("a ** b = ", a ** b);

// let a = 5;
// let b = 2;

// console.log("a = ",a, "& b = ", b);
// console.log("a++ = ", a++);
// console.log("a = ", a);

// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }

// let age = 16;
// age >= 18 ? "adult" : "not adult";
//45

//alert("Hello"); // one time pop up
// const num = prompt("Enter a number"); // prompt also takes input

// if(num % 5 == 0){
//     console.log(num , " is multiple of 5");
// }else{
//     console.log(num, " is not multiple of 5");
// }

// let score = prompt("Enter the score");
// let grade;
// if(score >= 90 && score <= 100){
//     grade = "A";
// }else if(score >= 70 && score <= 89){
//     grade = "B";
// }else if(score >= 60 && score <= 69){
//     grade = "C";
// }
// console.log("According to your score, your grade was: ", grade);

// let str = "JadeTeja";
// let size = 0;
// for ( let val of str){ 
//     console.log("val = ", i);
//     size++;
// }

// console.log("size of string is ", size);

//for in loop

// let student = {
//     name: "Teja",
//     age : 20,
//     cgpa: 7.5,
//     isPass: true
// };

// for(let key in student){
//     console.log(student[key]);
// }

// for(let i = 0; i <= 100; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

// let gameNum = 25;
// let userNum = prompt("Guess the game number : ");

// while(userNum != gameNum){
//     userNum = prompt("you entered wrong number guess the number again: ");
// }

// console.log("Congratulations you entered correct number");

// let gameNum = 25;
// let userNum = prompt("Guess the number: ");
// while(gameNum!= userNum){
//     userNum = prompt("You entered wrong value, Guess again: ");
// }
// console.log("Congratulations you guessed the correct number");

//Template Literals

// let obj = {
//     item : "pen",
//     price: 10
// };
// console.log(`The cost of ${obj.item} is ${obj.price} rupees`);
//console.log("The cost of ",obj.item, "is",obj.price,"rupees");

// let str = "Jade Teja";
// console.log(str.toUpperCase());

// let fullName = prompt("Enter the full name");
// let userName = "@" + fullName + fullName.length;
// console.log(userName);

//Arrays in js
// let heroes = ["ironman","hulk","thor","batman"];
// console.log(heroes);
// let marks = [96,75,48,83,66];
// console.log(typeof marks);
// let info = ["rahul",86,"Delhi"];

// let marks = [85,97,44,37,76,60];
// let sum = 0;
// let average;
// for(let i = 0; i <= marks.length - 1; i++){
//     sum = sum + marks[i];
// }
// average = sum / marks.length;
// console.log(average);

let items = [250, 645, 300, 900, 50];
for(let val of items){
    console.log(val);
    let offer = val / 10;
    val = val - offer;
}

for(let val of items){
    console.log(val);
}
