"use strict";

// let someMap = new Map();
// let obj = {};

// let user = {
//   name: "John",
//   age: 30,
// };

// let user2 = {
//   name: "Fred",
//   age: 40,
// };

// function sayHi() {
//   console.log("Hello");
// }

// someMap.set("name", "John");
// someMap.set(100, "blabla");
// someMap.set(true, "true string");
// someMap.set(NaN, "This is NaN");

// console.log("someMap:", someMap.get(true));
// console.log("someMap:", someMap.get(100));
// console.log("someMap:", someMap.has(1000));
// console.log("someMap:", someMap.size);
// console.log("someMap:", someMap.delete(100));
// console.log("someMap:", someMap.clear());
// console.log("someMap:", someMap.size);

// console.log("someMap:", someMap);

// someMap.set(user, "This is object");
// someMap.set(user2, "This is object 2");
// someMap.set(sayHi, "This is function");
// obj[user] = "This is object";
// obj[user2] = "This is object 2";

// console.log("someMap:", someMap);
// console.log("obj:", obj);
// let someMap = new Map();
// someMap
//   .set("name", "John")
//   .set(100, "blabla")
//   .set(true, "true string")
//   .set(NaN, "This is NaN");

// for (const element of someMap) {
//   console.log("element:", element);
// }

// for (const element of someMap.keys()) {
//   console.log("element:", element);
// }

// for (const element of someMap.values()) {
//   console.log("element:", element);
// }

// for (const element of someMap.entries()) {
//   console.log("element:", element);
// }

// someMap.forEach((value, key, map) => {
//   console.log(key, value);
// });

// console.log(someMap);

// let obj = {
//   name: "Jonh",
//   age: 30,
// };

// console.log(Object.entries(obj));

// let someMap = new Map(Object.entries(obj));

// let obj2 = Object.fromEntries(someMap.entries());

// console.log("someMap:", someMap);
// console.log("obj2:", obj2);

// let colledFunctions = new Map();

// function isFunctionCalled(func) {
//   if (!colledFunctions.has(func)) {
//     colledFunctions.set(func, ["Functions has called"]);
//   } else {
//     colledFunctions.get(func).push("Functions has called");
//   }
// }

// function foo1() {
//   isFunctionCalled(foo1);

//   console.log("Function foo1");
// }

// function foo2() {
//   isFunctionCalled(foo2);
//   console.log("Function foo2");
// }

// function foo3() {
//   isFunctionCalled(foo3);
//   console.log("Function foo3");
// }

// foo1();
// foo1();
// foo1();
// foo2();
// foo2();
// foo1();

// console.log("colledFunctions:", colledFunctions);

// let someSet = new Set([1, 1, 1, 1, 2, 2, 2, 2, 3, 4, 4, 4, 5, 5, 5, 6, 6]);

// someSet.add({ user: "Ann" }).add(true).add(100).add(100);
// console.log(someSet.has(100));
// console.log(someSet.size);
// console.log(someSet.delete(100));
// console.log(someSet.delete(1));
// // console.log(someSet.clear());
// console.log(someSet.size);

// for (const element of someSet) {
//   console.log(element);
// }

// for (const element of someSet.keys()) {
//   console.log(element);
// }

// for (const element of someSet.values()) {
//   console.log(element);
// }

// for (const element of someSet.entries()) {
//   console.log(element);
// }

// someSet.forEach((value, key) => {
//   console.log(value, key);
// });

// console.log("someSet:", someSet);
// let arr = [1, 1, 1, 1, 2, 2, 2, 2, 3, 4, 4, 4, 5, 5, 5, 6, 6];

// function clearDublicates(arr) {
//   return Array.from(new Set(arr));
// }

// console.log("clearDublicates(arr):", clearDublicates(arr));

// let set = new Set([1, 1, 2, 2, 3]);
// console.log("set:", set);

// let obj = { name: "John1" };
// let obj2 = obj;

// obj = null;
// obj2 = null;

// console.log("obj:", obj);
// console.log("obj2:", obj2);

// let people = {
//   man: { name: "John" },
//   woman: { name: "ann" },
//   marry() {
//     this.man.wife = this.woman;
//     this.woman.hasbent = this.man;

//     return { mother: this.woman, father: this.man };
//   },
// };

// let family = people.marry();
// console.log("family:", family);

// let weakMap = new WeakMap();
// let map = new Map();

// let user1 = {
//   name: "John",
// };

// let user2 = {
//   name: "Robert",
// };

// weakMap.set(user1, "object1");
// weakMap.set(user2, "object2");
// map.set(user2, "object2");
// map.set(weakMap, "weakMap");
// map.delete(user2);

// user1 = null;
// user2 = null;

// console.log("weakMap:", weakMap);
// console.log("map:", map);

// let pass = Symbol(); // weufhg32874ryho3w87r32wofgba387yrhow3ur837

// let user = {
//   name: "John",
//   [pass]: "12345",
// };

// console.log("user.name:", user.name);
// console.log("user.name:", user[pass]);

// let user = {
//   name: "John",
//   age: 30,
// };

// {value: "", done: boolean}

// user[Symbol.iterator] = function () {
//   let values = Object.values(user); // ["John", 30]
//   let i = 0;

//   return {
//     next() {
//       if (i < values.length) {
//         return { value: values[i++], done: false };
//       } else {
//         return {
//           done: true,
//         };
//       }
//     },
//   };
// };

// let films = {
//   drama: [
//     { name: "Avatar", year: 2010 },
//     { name: "Titanic", year: 1997 },
//   ],
//   documentary: [
//     { name: "Oceans", year: 2000 },
//     { name: "Mumia", year: 2020 },
//   ],
//   comadian: [
//     { name: "Шпіон", year: 2024 },
//     { name: "Spy", year: 2019 },
//   ],
// };

// films[Symbol.iterator] = function () {
//   let filmNames = [];

//   for (const janre in this) {
//     this[janre].forEach((film) => {
//       filmNames.push(film.year);
//     });
//   }
//   let i = 0;

//   return {
//     next() {
//       if (i < filmNames.length) {
//         return { value: filmNames[i++], done: false };
//       } else {
//         return {
//           done: true,
//         };
//       }
//     },
//   };
// };

// for (const element of films) {
//   console.log(element);
// }

// let message = [1, 2, 3, 4, 5];
// console.log("message:", message);
// let iterator = message[Symbol.iterator]();

// let map = new Map();

// console.log("map:", map);
// while (true) {
//   let result = iterator.next();

//   if (result.done) {
//     break;
//   }

//   console.log(result.value);
// }

// {
//   "telegram": ["Нове повід 1", "Нове повід 2"],
//   "youtube": ["Нове відео 1", "Нове відео 2"],
// }

// "Нове повід 1"
// "Нове повід 2"
// "Нове відео 1"
// "Нове відео 2"

// func(fn) {
//   // cache Map ["10,15": 1312391298319283 ]
//   // cache Map ["25,40": 1312391298319283 ]
//   return function (a, b) {
//     //
//     fn(a, b)
//   }
// }
