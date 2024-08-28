"use strict";

// let user = {};
// let user2 = new Object();

// let someKey = "age";

// let user = {
//   name: "John Snow",
//   age: 30,
//   salary: 2000,
//   taxesPercent: 10,
//   "favorite car": "BMW",
//   sayHi() {
//     console.log("Hi1!");
//   },
//   getProfit() {
//     let taxesDollars = (user.salary / 100) * user.taxesPercent;
//     return user.salary - taxesDollars;
//   },
// };

// // 1
// console.log(user.age);
// console.log(user.name);

// // 2
// console.log(user["name"]);
// console.log(user["favorite car"]);
// console.log(user[someKey]);
// console.log(user.getProfit());

// let user = {
//   name: "John Snow",
//   age: 30,
//   contacts: {
//     email: "john_snow@mail.com",
//     phone: "063123123123",
//   },
//   crimes: 0,
//   sayHi() {
//     console.log("Hi!");
//   },
// };

// let prop = user.crimes;

// if ("crimes" in user) {
//   console.log(`Обробляємо властивість: ${prop}`);
// }

// user.sayHi?.();

// console.log(user["contacts"]["phone"]);
// console.log(user.contacts["email"]);

// console.log(user.contacts && user.contacts.email);
// console.log(user.contacts?.email);

// let pass = Symbol("some key"); // neg4upyhlie478tygpae948utgjep458ue8

// let user = {
//   name: "John Snow",
//   age: 30,
//   "1favorite-car*": "Audi",
//   true: 100,
//   200: "Hello",
//   [pass]: "12345",
// };

// console.log(user["1favorite-car*"]);
// console.log(user.true);
// console.log(user[200]);
// console.log(user[pass]);

// let user = {
//   name: "John Snow",
//   age: 30,
// };

// user.car = "BMW";
// user["phone"] = "324523235";

// let person = {};

// while (true) {
//   let key = prompt("Введіть назву ключа:");

//   if (key === null) {
//     break;
//   }

//   let keyValue = prompt("Введіть значення ключа:");

//   person[key] = keyValue;
// }

// console.log(person);

// let user = {
//   name: "John Snow",
//   age: 30,
//   car: car, // "Audi"
//   country: country, // "Ukraine"
// };

// let car = "Audi";
// let country = "Ukraine";

// let user = {
//   name: "John Snow",
//   age: 30,
//   car, // car: "Audi",
//   country, // country: "Ukraine"
//   [car]: true, // Audi: true
// };

// user.name = "Ned Stark";

// console.log(user);

// delete user.car;
// delete user.Audi;

// console.log(user);

// this

// function sayHi() {
//   console.log(this);

//   console.log(`Hello! My name is ${this.fullName}`);
// }

// alert();

// let president1 = {
//   fullName: "Josef Baiden",
//   salary: 2000,
// };
// president1.sayHi = sayHi;

// let president2 = {
//   fullName: "Barak Obama",
//   salary: 1800,
// };

// president2.sayHi = sayHi;

// president1.sayHi();
// president2.sayHi();

// sayHi();

// Object.keys
// Object.values
// Object.entries

// const person = {
//   fullName: "John",
//   age: 30,
//   car: "BMW",
//   country: "Ukraine",
//   contacts: {
//     email: "john_snow@westerros.com",
//     phone: "0631121028",
//   },
// };

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// const person = {
//   fullName: "John",
//   age: 30,
//   car: "BMW",
//   country: "Ukraine",
//   contacts: {
//     email: "john_snow@westerros.com",
//     phone: "0631121028",
//   },
// };

// let age = person.age;
// let car = person.car;
// let fullName = person.fullName;
// let contacts = person.contacts;

// let {
//   age,
//   car,
//   fullName: userName,
//   contacts: { email },
// } = person;

// console.log("userName:", userName);
// console.log("car:", car);
// console.log("age:", age);
// console.log("email:", email);
// console.log("contacts:", contacts);

// let arr1 = [];
// let arr2 = new Array();

// let cars = ["Audi", "Ferrari", "Toyota"];

// console.log("cars:", cars[0]);
// console.log("cars:", cars[1]);
// console.log("cars:", cars[2]);

// let cars = [
//   "Audi",
//   100,
//   true,
//   undefined,
//   null,
//   { name: "John" },
//   function sayHi() {
//     console.log("Hello");
//   },
// ];

// cars[7] = "Toyota";

// console.log("cars:", cars.length);
// delete cars[2];

// console.log("cars:", cars.length);
// console.log("cars:", cars);
// console.log("cars:", cars);

// console.log(cars[0]);
// console.log(cars[5].name);
// console.log(cars[6]());

// let cars = [
//   "Audi",
//   100,
//   true,
//   undefined,
//   null,
//   { name: "John" },
//   function sayHi() {
//     console.log("Hello");
//   },
// ];

// let [car, ,booleanValue] = cars;

// console.log("car:", car);
// console.log("number:", number);
// console.log("booleanValue:", booleanValue);

// let cars = ["BMW", "Audi"];

// pop
// push
// shift
// unshift

// console.log(cars.pop());
// console.log(cars.pop());
// console.log(cars.push("Ferrari"));

// console.log(cars.shift());
// console.log(cars.unshift("Honda"));

// console.log(cars);

// let user1 = {
//   name: "Cristiano Ronaldo",
// };

// let user2 = user1; // xRoirnvgoireg
// user1.name = "Lionel Messi";

// console.log("user1:", user1); // xRoirnvgoireg
// console.log("user2:", user2); // xRoirnvgoireg

// user2.name = "Mudrik";
// console.log("user1:", user1); // xRoirnvgoireg
// console.log("user2:", user2); // xRoirnvgoireg
// let user3 = "Cristiano Ronaldo";
// let user4 = user3;

// user3 = "Lionel Messi";

// console.log("user3:", user3);
// console.log("user4:", user4);

// let obj1 = {
//   // xY(*&Hi98eyh)
//   name: "John",
// };

// let obj2 = {
//   // DSY%Rsdpr89wru9)
//   name: "John",
// };

// console.log(obj1 == obj2);
