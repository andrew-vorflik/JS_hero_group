"use strict";

// let user = {
//   firstName: "John",
//   lastName: "Snow",
//   age: 30,
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(newName) {
//     let newNameArr = newName.split(" ");
//     this.firstName = newNameArr[0];
//     this.lastName = newNameArr[1];
//   },
// };
// user.fullName = "leo messi";
// console.log(user.fullName);

// let user = {
//   _phone: "+38063123123123",
//   get phone() {
//     return this._phone;
//   },
//   set phone(newPhone) {
//     if (newPhone.startsWith("+380")) {
//       this._phone = newPhone;
//     } else {
//       console.log("Некорректний номер телефону");
//     }
//   },
// };
// user.phone = "+380444444444";
// console.log(user.phone);

// let user1 = {
//   name: "Leonardo Dicaprio",
// };

// let user2 = {
//   __proto__: user1,
// };

// let user3 = {
//   name: "Peter Parker",
//   __proto__: user2,
// };

// console.log(user2.name);

// let animal = {
//   sleep() {
//     console.log("Я сплю");
//   },
// };

// let cat = {
//   eat() {
//     console.log("Я їм!");
//   },
//   __proto__: animal,
// };

// let dankey = {
//   say() {
//     console.log("Іа-іа");
//   },
//   __proto__: animal,
// };

// let sheckDankey = {
//   say() {
//     console.log("Ми приїхали?");
//   },
//   __proto__: dankey,
// };

// dankey.say();
// dankey.sleep();

// sheckDankey.sleep();
// sheckDankey.say();

// let user = {
//   role: "User",
//   login() {
//     console.log("Hello! I'm logged in!");
//   },
//   logout() {
//     console.log("Good bye! I'm logged out!");
//   },
// };

// let admin = {
//   role: "Admin",
//   addProduct(productName) {
//     console.log(`Я додав новий продукт - ${productName}`);
//   },
//   __proto__: user,
// };

// let superAdmin = {
//   role: "SuperAdmin",
//   createAdmin(adminName) {
//     console.log(`Я створив нового адміна - ${adminName}`);
//   },
//   __proto__: admin,
// };

// [[Prototype]]

// obj.hasOwnProperty(key)
// console.log(superAdmin.hasOwnProperty("logout"));

// Object.hasOwn(person, 'name')
// console.log(Object.hasOwn(superAdmin, "addProduct"));

// Object.getOwnPropertyNames(person)
// console.log(Object.getOwnPropertyNames(admin));

//Object.getOwnPropertySymbols(user)
// console.log(Object.getOwnPropertySymbols(superAdmin));

// for (const key in superAdmin) {
//   console.log("key:", key);
//   console.log("value:", superAdmin[key]);
//   console.log("=======================");
// }

// console.log(superAdmin.__proto__.__proto__);
// superAdmin[[Prototype]]

// superAdmin.addProduct("iPhone");
// superAdmin.login();
// superAdmin.logout();
// superAdmin.createAdmin("Вася");

// let animal = {
//   sleep() {
//     console.log("Я сплю");
//   },
// };

// function Cat(name, color) {
//   // {} = this
//   this.name = name;
//   this.color = color;
//   this.__proto__ = animal;

//   // return {}
// }

// Cat.prototype = {
//   play() {
//     console.log("Я граю!");
//   },
//   say() {
//     console.log("Мяу!");
//   },
//   __proto__: animal,
// };

// let tom = new Cat("Tom", "blue");
// let garfield = new Cat("Garfield", "orange");

// console.log("tom:", tom);
// console.log("garfield:", garfield);

// tom.play();
// tom.say();

// garfield.play();
// garfield.say();

// tom.sleep();
// garfield.sleep();

// tom[[Prototype]] = animal
// garfield[[Prototype]] = animal

// __proto__
// [[Prototype]]
// Func.prototype

// let animal = {
//   sleep() {
//     console.log("Я сплю");
//   },
// };

// // Object.create(proto, {})

// let cat = Object.create(animal, {
//   play() {
//     console.log("Я граю");
//   },
// });

// cat[[Prototype]]= animal

// Object.setPrototypeOf(obj, proto)
// Object.setPrototypeOf(cat, animal);

// Object.getPrototypeOf(obj)

// console.log(Object.getPrototypeOf(animal));

// obj.isPrototypeOf()

// console.log(cat.isPrototypeOf(animal));

// cat.sleep();

// let arr = [2, 4, 6, 8];
// let arr2 = new Array(2, 4, 6, 8);

// console.log("arr:", arr);

// arr.forEach((item) => {
//   console.log(item);
// });

// console.log(Array.prototype);
// // Array.prototype[[Prototype]] = Object.prototype
// console.log(Object.prototype);

// let obj = {
//   age: 30,
// };

// let obj2 = new Object({
//   age: 30,
// });

// // Object.prototype
// console.log(obj);
// console.log(obj2);

// Array.prototype = {
//   at() {
//     // code
//   },
//   concat() {
//     // code
//   },
// };

// console.log(String("hello").indexOf());
// console.log("hello".indexOf());

// let obj = {};
// let arr = ["Hello", true];

// console.log("obj:", obj);
// console.log("arr:", arr);

// console.log(arr.hasOwnProperty(2));

// console.log("Array.prototype:", Array.prototype);

// Array.prototype.ourMap = function (cb) {
//   let result = [];

//   for (let i = 0; i < this.length; i++) {
//     result[i] = cb(this[i], i, this);
//   }

//   return result;
// };

// let arr = [1, 3, 5, 7];
// let arr2 = [2, 4, 6];

// let newArr = arr.ourMap((item) => {
//   return item ** 2;
// });

// let newArr2 = arr2.ourMap((item) => {
//   return item ** 2;
// });

// console.log("newArr:", newArr);
// console.log("newArr:", newArr2);

/* function Student(name, color) {
  // {} = this
  this.name = name;
  this.color = color;
  this.__proto__ = animal;
  this.courses = [
    {
      title: "",
      // [100, 99, 100]
      // {
      //   lesson1: true
      // }
    },
  ];
  this.courses = {
    JSBasic: {
      title: "",
      // [100, 99, 100]
      // {
      //   lesson1: true
      // }
    },
    Python: {
      title: "",
      // [100, 99, 100]
      // {
      //   lesson1: true
      // }
    },
  };

  // return {}
} */

// new Group(students) {
//  this.students = students

// }
