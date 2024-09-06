"use strict";

// lexicalEnvironment = {
//     EnvironmentRecord: {
//     type: "Declarative / Object",
//     a: 10,
//        sum: <reference>
//  }
//   outer: <reference>
//   this: value
// }

// function createLikesCount() {
//   let count = 0;

//   return function () {
//     console.log(++count);
//   };
// }

// let addYoutubeLikes = createLikesCount();
// let addInstagramLikes = createLikesCount();

// addYoutubeLikes();
// addYoutubeLikes();

// addInstagramLikes();
// addInstagramLikes();

// function foo1(params) {
//   foo2();
// }

// function foo2(params) {
//   foo3()
// }

// function foo3(params) {

// }

// foo1();

// function func() {
//   console.log("hello");

//   func();
// }

// func();

// function func(a) {
//   console.log(a);

//   if (a === 1) {
//     return;
//   }

//   func(a - 1);
// }

// func(5);

// function func(a) {
//   console.log(a);

//   if (a === 5) {
//     return;
//   }

//   func(a + 1);
// }

// func(1);

// function sum(number) {
//   console.log(number);

//   if (number === 1) {
//     return 1;
//   }

//   return number + sum(number - 1);
// }

// let result = sum(5);

// console.log("result:", result);

// sum(5) => 5 + sum(4);

// 5! = 5 * 4 * 3 * 2 * 1

// function factorial(number) {
//   console.log(number);

//   if (number === 1) {
//     return 1;
//   }

//   return number * factorial(number - 1);
// }

// let result = factorial(5);
// console.log("result:", result);

// factorial(5) => 5 * factorial(4) // 120
// factorial(4) => 4 * factorial(3) // 20
// factorial(3) => 3 * factorial(2) // 6
// factorial(2) => 2 * factorial(1) // 2
// factorial(1) // 1

// function tailFactorial(number, result = 1) {
//   if (number === 0) {
//     return result;
//   }

//   return tailFactorial(number - 1, number * result);
// }

// let result = tailFactorial(5, 1);
// console.log("result:", result);

// tailFactorial(5, 1)
// tailFactorial(4, 5)
// tailFactorial(3, 20)
// tailFactorial(2, 60)
// tailFactorial(1, 120)
// tailFactorial(0, 120) // 120

// const company = {
//   development: [
//     { name: "Tom Shelby", salary: 1000 },
//     { name: "John Snow", salary: 1500 },
//   ],
//   qa: {
//     manual: {
//       juniour: [{ name: "Daineris Targaries", salary: 2000 }],
//       senior: [{ name: "Tereon Lanister", salary: 3000 }],
//     },
//     automation: [{ name: "Peter Parker", salary: 2500 }],
//   },
//   design: [
//     { name: "Lionel Messi", salary: 1000 },
//     { name: "Roberto Corlos", salary: 3000 },
//   ],
//   accountent: [
//     { name: "Lionel Messi", salary: 1000 },
//     { name: "Roberto Corlos", salary: 3000 },
//   ],
// };

// function sumSalaries(department) {
//   if (Array.isArray(department)) {
//     return department.reduce((acc, employee) => {
//       return acc + employee.salary;
//     }, 0);
//   } else {
//     let sum = 0;

//     for (const key in department) {
//       sum += sumSalaries(department[key]);
//     }

//     return sum;
//   }
// }

// let result = sumSalaries(company);
// console.log("result:", result);

// function calcVolume(a) {
//   return function (b) {
//     return function (c) {
//       return a * b * c;
//     };
//   };
// }

// function calcVolume(a, b, c) {
//   return a * b * c;
// }

// function curry(fn) {
//   return function curried(...args) {
//     return args.length < fn.length
//       ? (...moreArgs) => curried(...args, ...moreArgs)
//       : fn(...args);
//   };
// }

// let calcVolumeCarry = curry(calcVolume);

// let calcValumeCarrySquare = calcVolumeCarry(2, 3); //calcVolumeCarry(2)(3)(5)

// let result1 = calcValumeCarrySquare(5);
// let result2 = calcValumeCarrySquare(6);
// let result3 = calcValumeCarrySquare(7);

// console.log("result:", result1, result2, result3);

// function curry(fn) {
//   return function curried(...args) {
//     return args.length < fn.length
//       ? (...moreArgs) => curried(...args, ...moreArgs)
//       : fn(...args);
//   };
// }

// function showErrorMessage(fn, date, message, ...rest) {
//   console.log(rest);

//   fn(`${date} - ${message}`);
// }

// let showErrorMessageCurry = curry(showErrorMessage);

// let logErrors = showErrorMessageCurry(console.log);
// let alertErrors = showErrorMessageCurry(alert);

// console.log(logErrors(new Date(), "Error"));

// let logYesturdayErrors = logErrors(new Date(2024, 8, 5));

// logErrors(new Date(), "Error on server");
// alertErrors(new Date(), "Error on front");

// logYesturdayErrors("Error 1");
// logYesturdayErrors("Error 2");
