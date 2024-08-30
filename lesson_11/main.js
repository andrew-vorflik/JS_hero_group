"use strict";

// let user = {
//   name: "Mike",
//   sayHi() {
//     console.log(`Hi, ${this.name}`);
//   },
// };

// let user2 = {
//   name: "Fred",
//   sayHi: user.sayHi,
// };

// user.sayHi();
// user2.sayHi();

// 1 Прив’язка за замовчуванням

// function func() {
//   console.log(this);
// }

// func();

// 2 Неявна прив’язка або об’єкт що володіє (owner object)

// let user = {
//   name: "Mike",
//   sayHi() {
//     console.log(`Hi, ${this.name}`);
//   },
// };

// let user2 = {
//   name: "Fred",
//   sayHi: user.sayHi,
// };

// user.sayHi();
// user2.sayHi();

//  Втрата контексту

// let user = {
//   name: "Mike",
//   sayHi() {
//     console.log(this);

//     console.log(`Hi, ${this.name}`);
//   },
// };

// let hiMike = user.sayHi;

// let hiMike = function() {
//   console.log(this);

//   console.log(`Hi, ${this.name}`);
// },

// hiMike();

// function func(fn) {
//   fn();
// }

// func(user.sayHi);

// 3 Явна прив’язка call apply bind

// let actor = {
//   firstName: "Leonardo",
//   lastName: "Dicaprio",
// };

// let actress = {
//   firstName: "Margo",
//   lastName: "Robbi",
// };

// function getFullName() {
//   return this.firstName + " " + this.lastName;
// }

// function sayHi(message1, message2) {
//   console.log(`${message1} ${message2} ${getFullName.call(this)}`);
// }

// let sayHiLeo = sayHi.bind(actor, "hi");
// let sayHelloMargo = sayHi.bind(actress, "Hello");

// let bindedLeo = sayHelloMargo.bind(actor);
// bindedLeo();

// sayHiLeo("dear");
// sayHelloMargo("sweet");

// sayHi.call(actor, "Good morning", "dear");
// sayHi.call(actress, "Good evening", "sweet");

// sayHi.apply(actor, ["Good morning", "dear"]);
// sayHi.apply(actress, ["Good evening", "sweet"]);

// getFullName -> actor
// getFullName -> actress

// getFullName.call(actor);
// getFullName.call(actress);

// getFullName.apply(actor);
// getFullName.apply(actress);

// 4 Прив’язка за допомогою оператора new

/* 
{
firstName: "Leonardo",
lastName: "Dicaprio"
}
*/

// function Actor(firstName, lastName) {
//   // this = {}
//   this.firstName = firstName;
//   this.lastName = lastName;

//   // return this
// }

// let leo = new Actor("Leonardo", "Dicaprio");
// let margo = new Actor("Margo", "Robbi");

// console.log(leo);
// console.log(margo);

// // 1
// function func(params) {
//   console.log(this);
// }

// func();

// // 2
// let user = {
//   name: "Mike",
//   sayHi() {
//     console.log(`Hi, ${this.name}`);
//   },
// };

// user.sayHi();

// // 3
// let actress = {
//   firstName: "Margo",
//   lastName: "Robbi",
// };

// function getFullName() {
//   console.log(this.firstName + " " + this.lastName);
// }

// getFullName.call(actress);
// getFullName.apply(actress);
// let getMargoName = getFullName.bind(actress);

// getMargoName();

// // 4
// function Actor(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// let leo = new Actor("Leonardo", "Dicaprio");
// console.log(leo);

// Arrow function

// let group = {
//   courseName: "Basic JavaScript",
//   students: ["Яна", "Діма", "Дарія", "Егор", "Данііл"],
//   getStudents() {
//     console.log(this);

//     this.students.forEach((student, index) => {
//       console.log(
//         `${index + 1} - ${student} student of course ${this.courseName}`
//       );
//     });
//   },

//   getCourseName() {
//     console.log(this);
//     console.log(this.courseName);
//   },
//   getCourseNameArrowFunction: () => {
//     console.log(this);
//     console.log(this.courseName);
//   },
// };

// function forEach(cb) {
//   cb()
// }

// group.getCourseName();
// group.getCourseNameArrowFunction();

// group.getStudents();

function bind(func, thisCtx, ...bindedArgs) {
  return function (...args) {
    func.call(thisCtx, ...[...bindedArgs, ...args]);
  };
}

// let actress = {
//   firstName: "Margo",
//   lastName: "Robbi",
// };

// function getFullName(message1, message2) {
//   console.log(
//     message1 + " " + message2 + " " + this.firstName + " " + this.lastName
//   );
// }

// let helloMargo = bind(getFullName, actress, "Hello");

// helloMargo("sweet");

// let array = [10, 20];
// let str = "Hello";

// function sum(a, b) {
//   console.log(a + b);
// }

// sum(...array); // sum(10, 20)

// console.log(...array);
// console.log(...str);

// const map = new Map([
//   [10, 10],
//   [20, 20],
//   [30, 30],
//   [40, 40],
//   [50, 50],
// ]);

// const set = new Set([1, 2, 3, 4, 5, 6, 6, 6, 7, 7, 7, 8, 8]);
// console.log(...map);
// console.log(...set);

// let array1 = [10, 20, 30];
// let array2 = [40, 50, 60];
// let array3 = [...array1, ...array2]; // [10, 20, 30, 40, 50, 60]

// console.log(array3);

// function func() {
//   console.log("this:", this);
// }

// func.call(123);
// func.call("Hello");

// function sum(a, b) {
//   console.log(a + b);
// }

// function decorateSum(sum) {
//   return function (a, b) {
//     console.log(`Hello, the sum of ${a} & ${b} equal`);
//     sum(a, b);
//   };
// }

// let decoratedSum = decorateSum(sum);

// decoratedSum(2, 3);

// function sum(a, b) {}

// function decorate(fn, count) {
//   // code
// }

// let decoratedFn = decorate(sum, 3);

// decoratedFn(3, 3); // 6
// decoratedFn(1, 2); // 3
// decoratedFn(6, 1); // 7
// decoratedFn(10, 20); // 7
