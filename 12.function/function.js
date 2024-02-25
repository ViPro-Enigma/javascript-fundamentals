// function sayHello() {
//   console.log("Hello world!");
// }

// parameter
// function greetUser(username, age = 0) {
//   console.log(`Hello, ${username}`);
//   console.log(`You are ${age} years old`);
// }

// function repeatGreetings(numberOfTimes = 0) {
//   for (let i = 0; i < numberOfTimes; i++) {
//     console.log("Hello");
//   }
// }

// greetUser("sasuke", 20);

// function greeting() {
//   // console.log("Hello world");
//   return 123;
// }

// console.log(greeting() + 7);

function add(x = 0, y = 0) {
  return x + y;
}

function divide(x, y) {
  return x / y;
}

const message = "Hasilnya adalah: " + add(3, 5);

console.log(message);
