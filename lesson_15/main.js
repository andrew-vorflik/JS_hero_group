"use strict";
// function Cat(name, color) {
//   this.name = name;
//   this.color = color;
// }

// Cat.prototype = {
//   sleep() {
//     console.log("Я сплю");
//   },
// };

// const tom = new Cat("Tom", "blue");
// console.log("tom:", tom);
// tom.sleep();

// class Cat {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   sleep() {
//     console.log("Я сплю");
//   }
// }

// const garfield = new Cat("Garfield", "orange");

// garfield.sleep();

// console.log(typeof Cat);

// [[IsClassConstructor]]: true

// class Animal {
//   constructor() {}
//   sleep() {
//     console.log("Я сплю");
//   }
// }

// let animal = new Animal();
// animal.sleep();

// let method = prompt("Enter method name");

// class Cat {
//   static hasTail = true;
//   static convertCatYears(years) {
//     return years * 7;
//   }

//   #stomachValue = 3;
//   #toYawn() {
//     console.log("Я позіхаю...");
//   }

//   legCount = 4;
//   toy = "red ball";

//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   sleep() {
//     console.log(this.#stomachValue);

//     this.#toYawn();

//     console.log("Я сплю");
//   }

//   get getToy() {
//     return this.toy;
//   }

//   set getToy(newToy) {
//     this.toy = newToy;
//   }
// }

// const garfield = new Cat("Garfield", "orange");
// console.log("garfield:", garfield);

// garfield.getToy = "orange bone";
// console.log(garfield.getToy);

// console.log("garfield:", garfield);
// console.log(Cat.hasTail);
// console.log(Cat.convertCatYears(5));

// console.log(Array.isArray(123));
// console.log(Number.isFinite(100));

// garfield.sleep();

// class BankAccount {
//   static bankCode = "555333";
//   static isAccountExist(account) {
//     return account >= 111000 && account <= 333000;
//   }

//   #balance = 1000;

//   #checkBankAccess() {
//     return Math.random() > 0.5;
//   }

//   constructor(bankAccountNumber) {
//     this.bankAccountNumber = bankAccountNumber;
//   }

//   getMoney(amont) {
//     if (!this.#checkBankAccess()) {
//       console.log("Банк недоступний!");
//       return;
//     }

//     if (amont <= this.#balance) {
//       this.#balance -= amont;
//       console.log(`Ви зняли ${amont} грн.`);
//     } else {
//       console.log("Недостатньо грошей на рахунку");
//     }
//   }
// }

// let myAccount = new BankAccount(111222);

// myAccount.getMoney(800);
// myAccount.getMoney(800);

// console.log(BankAccount.isAccountExist(myAccount.bankAccountNumber));
// console.log(BankAccount.isAccountExist(555000));

// class Animal {
//   constructor(animalClass) {
//     this.animalClass = animalClass;
//   }

//   sleep() {
//     console.log("Я сплю");
//   }
// }

// class Cat extends Animal {
//   constructor(type, color) {
//     super(type); // new Animal("Риби");
//     this.color = color;
//   }

//   play() {
//     console.log("Я граю");
//   }

//   eat() {
//     console.log("Я їм");
//     super.sleep();
//   }

//   sleep(place) {
//     if (place) {
//       console.log(`Я храплю на ${place}`);
//     }
//     console.log("Я храплю");
//   }
// }

// class Meinkun extends Cat {
//   constructor(type, color, name) {
//     super(type, color);
//     this.name = name;
//   }

//   run(place) {
//     console.log("Я бігаю");
//     super.sleep(place);
//     Animal.prototype.sleep();
//   }
// }

// let tom = new Meinkun("Ссавці", "Tom", "blue");

// // tom.run("Дивані");

// let catRun = tom.run;

// // [[homobject]]
// // catRun();

// console.log(tom instanceof Meinkun);
// console.log(tom instanceof Cat);
// console.log(tom instanceof Animal);
// console.log(tom instanceof Array);

// let user1Name = "John";
// let user1age = 30;
// let user1phone = "93456784358";
// let user2Name = "John";
// let user2age = 30;
// let user2phone = "93456784358";
// let user2Name = "John";
// let user2age = 30;
// let user2phone = "93456784358";
// let user2Name = "John";
// let user2age = 30;
// let user2phone = "93456784358";
// let user2Name = "John";
// let user2age = 30;
// let user2phone = "93456784358";
// let user2Name = "John";
// let user2age = 30;
// let user2phone = "93456784358";
// let user2Name = "John";
// let user2age = 30;
// let user2phone = "93456784358";
// let user2Name = "John";
// let user2age = 30;
// let user2phone = "93456784358";
// let user2Name = "John";
// let user2age = 30;
// let user2phone = "93456784358";
// let user2sayHi = function () {
//   console.log("Hello");
// };
// let user2sayHi = function () {
//   console.log("Hello");
// };
// let user2sayHi = function () {
//   console.log("Hello");
// };
// let user2sayHi = function () {
//   console.log("Hello");
// };
// let user2sayHi = function () {
//   console.log("Hello");
// };
// let user2sayHi = function () {
//   console.log("Hello");
// };
// let user2sayHi = function () {
//   console.log("Hello");
// };
// let user2sayHi = function () {
//   console.log("Hello");
// };

// function foo1 {
//   return user1Name + user1phone;
// }
// function foo2 {
//   foo1()
//   return user1Name + user1phone;
// }
// function foo1 {
//   return user1Name + user1phone;
// }
// function foo1 {
//   return user1Name + user1phone;
// }

// let user1 = {
//   // name
//   // phone
//   //
//   //
// };

// let user2 = {
//   // name
//   // phone
//   //
//   //
// };

// class User {

// }

// Інкапсуляція
// Наслідування
// Поліморфізм

// class Shape {
//   constructor(name) {
//     this.name = name;
//   }

//   getArea() {
//     return 0;
//   }
// }

// class Rectangle extends Shape {
//   constructor(name, width, heght) {
//     super(name);
//     this.width = width;
//     this.heght = heght;
//   }

//   getArea() {
//     return this.width * this.heght;
//   }
// }

// class Triangle extends Shape {
//   constructor(name, base, height) {
//     super(name);
//     this.base = base;
//     this.height = height;
//   }

//   getArea() {
//     return 0.5 * this.base * this.height;
//   }
// }

// class Circle extends Shape {
//   constructor(name, radius) {
//     super(name);
//     this.radius = radius;
//   }

//   getArea() {
//     return 3.14 * this.radius ** 2;
//   }
// }

// let rectangle = new Rectangle("rectangle", 10, 20);
// let triangle = new Triangle("triangle", 5, 10);
// let circle = new Circle("circle", 10);

// console.log(rectangle.getArea());
// console.log(triangle.getArea());
// console.log(circle.getArea());

// Створіть клас TodoList. Клас має містити:
// Властивість todos = [];
// Внутрішній метод show() - який виводить у консоль елементи todos. Кожне завдання повинно мати свій номер та бути на новому рядку у консолі.
// Метод addTask(task) - має приймати рядок із завданням і додавати його до масиву todos і викликати внутрішній метод show().
// Метод removeTask(task) - має приймати рядок із завданням і видаляє його з масиву todos і викликає внутрішній метод show().

// class TodoList {
//   constructor(todos) {
//     this.todos = todos;
//   }

//   #show() {
//     for (let i = 0; i < this.todos.length; i++) {
//       console.log(i + 1, this.todos[i]);
//     }
//     console.log("==============");
//   }

//   addTack(todo) {
//     this.todos.push(todo);
//     this.#show();
//   }

//   removeTask(todo) {
//     let deletedTodoIndex = this.todos.indexOf(todo);
//     if (deletedTodoIndex !== -1) {
//       this.todos.splice(deletedTodoIndex, 1);
//     }

//     this.#show();
//   }
// }

// let myTodo = new TodoList(["Випити кави", "Виконати ДЗ"]);
// let workTodo = new TodoList(["Відправити звіт"]);

// myTodo.addTack("Купити хліба");
// myTodo.addTack("Купити молока");
// myTodo.removeTask("Випити кави");

// workTodo.addTack("Подзвонити клієнту");
