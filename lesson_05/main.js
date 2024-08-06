// "use strict";
// console.log("Start");

// function sayHello() {
//   console.log("Hello world!!!");
// }

// console.log("End");

// sayHello();
// sayHello();
// sayHello();

// function sum() {
//   let a = 2;
//   let b = 3;

// return undefined;
// return;
//
// }

// let number = sum();

// console.log(number);

// function foo() {
//   let age = 112;

//   if (age > 20) {
//     return "Welcome";
//   } else {
//     return "Good bye!";
//   }
// }

// let message = foo();
// console.log("message:", message);

// function foo() {
//   try {
//     return "try";
//   } catch (error) {
//     return "catch";
//   } finally {
//     return "finally block";
//   }
// }

// let message = foo();
// console.log(message);

// function sayHello(name) {
//   console.log(`Hello, ${name}`);
// }

// sayHello("John");
// sayHello("Fred");

// function showYears(year) {
//   if (year % 10 === 1 && year % 100 !== 11) {
//     console.log("Вам " + year + " рік");
//   } else if (
//     year % 10 >= 2 &&
//     year % 10 <= 4 &&
//     !(year % 100 >= 12 && year % 100 <= 14)
//   ) {
//     console.log("Вам " + year + " роки");
//   } else {
//     console.log("Вам " + year + " років");
//   }
// }

// showYears(4);
// showYears(14);
// showYears(30);

// function sum(a, b) {
//   return a + b;
// }

// let result = sum(4);
// console.log(result);

// function sayHello(name) {
//   let nameParam = name || "User";

//   console.log(`Hello, ${nameParam}`);
// }

// sayHello("Jonh");
// sayHello();

// function sum(a, b, ...rest) {
//   console.log(rest);

//   return a + b;
// }

// let result = sum(4, 3, 2, 1);
// console.log(result);

// function foo(...rest) {
//   console.log(a);
//   console.log(b);
//   console.log(rest);
// }

// foo("one", "two", "three", "four", "five", "six");

// function sum(...rest) {
//   console.log("rest:", rest);
//   let result = 0;

//   for (let i = 0; i < rest.length; i++) {
//     result += rest[i];
//   }

//   return result;
// }

// console.log(sum(3, 4, 2, 5, 6, 7, 8));

// function sum() {
//   console.log(arguments);
//   let result = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }

//   return result;
// }

// console.log(sum(3, 4, 2, 5, 6, 7, 8));

// 1

// let userName = "Cristiano";
// console.log("start", userName);

// function showMessage() {
//   userName = "Lionel";
//   console.log(`Hello ${userName}`);
// }

// showMessage();

// console.log("end:", userName);

// 2

// function showMessage() {
//   let userName = "Lionel";
//   console.log(`Hello ${userName}`);
// }

// showMessage();

// console.log(userName);

// 3

// let userName = "Cristiano";
// // let userName = "lionel";

// function showMessage() {
//   let userName = "Lionel";
//   console.log(`Hello ${userName}`);
// }

// showMessage();

// console.log("userName:", userName);

// showMessage1();

// //  function declaration
// function showMessage1() {
//   let userName = "Lionel";
//   console.log(`Hello ${userName}`);
// }

// showMessage2();

// // function expression
// let showMessage2 = function () {
//   let userName = "Lionel";
//   console.log(`Hello ${userName}`);
// };

// let age = 12;

// if (age < 18) {
//   function welcome() {
//     alert("Привіт!");
//   }
// } else {
//   function welcome() {
//     alert("Вітання!");
//   }
// }

// welcome();

// Arrow function
// const mul1 = (a, b) => a * b;

// const mul2 = (a, b) => {
//   return a * b;
// };

// let mul = (a, b) => {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return;
//   }

//   return a * b;
// };

// let mul2;

// mul2 = mul;

// console.log(mul2(3, 4));

// alert(mul);

// function showYearsMessage(year) {
//   if (year % 10 === 1 && year % 100 !== 11) {
//     console.log("Вам " + year + " рік");
//   } else if (
//     year % 10 >= 2 &&
//     year % 10 <= 4 &&
//     !(year % 100 >= 12 && year % 100 <= 14)
//   ) {
//     console.log("Вам " + year + " роки");
//   } else {
//     console.log("Вам " + year + " років");
//   }
// }

// function rudeHello() {
//   console.log("Чого прийшов?");
// }

// const checkAccess = (years, show) => {
//   show(years);

//   if (years >= 18) {
//     console.log("Welcome");
//   } else {
//     console.log("Good bye");
//   }
// };

// checkAccess(20, rudeHello);

// function validateEmail(email) {
//   if (email.length < 10) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function showMessage(email, validateEmail, ...rest) {
//   if (!validateEmail(email)) {
//     return;
//   }

//   console.log(
//     `На ваш email ${email} відправлено посилання. Перейдіть по ньому для завершення реєстрації.`
//   );
// }

// showMessage("john@gmaiul.com", validateEmail);

// око
// радар
// Козак з казок
// А мене нема
