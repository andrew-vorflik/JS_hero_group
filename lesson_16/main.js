"use strict";

// Create
// Read
// Update
// Delete

// Object.preventExtensions - не можна додавати
/* 
let person = {
  name: "Mike Taison",
  age: 60,
};

Object.preventExtensions(person);

if (Object.isExtensible(person)) {
  person.email = "miketaison@mail.com";
} else {
  console.log("Не можна додавати нові поля");
}

person.age = 62;
delete person.name;

console.log("person:", person); */

// Object.seal() не можна додавати та видаляти поля
/* 
let person = {
  name: "Mike Taison",
  age: 60,
};

Object.seal(person);

if (Object.isSealed(person)) {
  console.log("Не можна додавати та видаляти поля");
} else {
  person.email = "miketaison@mail.com";
  person.age = 62;
  delete person.name;
}

console.log("person:", person);
 */

// Object.freeze не можна додавати, змінювати, видаляти

// let person = {
//   name: "Mike Taison",
//   age: 60,
// };

// Object.freeze(person);

// if (Object.isFrozen(person)) {
//   console.log("Не можна зхмінювати об'єкт");
// } else {
//   person.email = "miketaison@mail.com";
//   person.age = 62;
//   delete person.name;
// }

// console.log("person:", person);

// function Actor(name, films) {
//   this.name = name;
//   this.films = films;

//   Object.defineProperty(this, "getFilms", {
//     value: function () {
//       return this.films.forEach((film) => {
//         console.log(film);
//       });
//     },
//     enumerable: false,
//   });
// }

// let actor = new Actor("Mattew McConahie", ["True detective", "Gentalman"]);

// for (const key in actor) {
//   console.log(key, actor[key]);
// }

// console.log("actor:", actor);

// let person = {
//   name: "Mike Taison",
//   age: 60,
// };

// console.log(Object.getOwnPropertyDescriptor(person, "name"));

// {
//   value: "Mike Taison";
//   writable: true;
//   enumerable: true;
//   configurable: true;
// }

// Object.defineProperty(person, "country", {
//   value: "USA",
//   writable: true,
//   enumerable: true,
//   // configurable: false,
// });

// console.log(Object.getOwnPropertyDescriptor(person, "country"));

// person.name = "Alexandr Usik";

// for (const key in person) {
//   console.log(key, person[key]);
// }

// console.log("person:", person);

// Object.defineProperties(person, {
//   country: {
//     value: "USA",
//     writable: true,
//   },
//   email: {
//     value: "mike@mail.com",
//     enumerable: true,
//   },
// });

// console.log(Object.getOwnPropertyDescriptors(person));

// let person = {
//   name: "Leo Messi",
//   _email: "leo@mail.com",

//   get email() {
//     return this._email;
//   },

//   set email(newEmail) {
//     if (newEmail.includes("@") && newEmail.endsWith(".com")) {
//       this._email = newEmail;
//     } else {
//       console.log("Невірний формат емейлу!");
//     }
//   },
// };

// person.email = "leomessi@mail.com";

// console.log("person.email:", person.email);

// let car = {
//   model: "Mersedes",
//   price: 80000,
// };

// let actor = {
//   name: "Mattew McConahee",
//   age: 45,
//   films: ["True detective", "Gentelman"],
//   sayHi() {
//     console.log(`Hi! My name is ${this.name}`);
//   },
// };

// let actor2 = { ...actor };
// let actor2 = Object.assign({}, actor);

// for (const key in actor) {
//   actor2[key] = actor[key];
// }

// actor2.name = "Jonee Depp";
// actor2.age = 40;
// actor2.films.push("Interstellar");

// console.log("actor:", actor);
// console.log("actor2:", actor2);

// let actor = {
//   name: "Mattew McConahee",
//   age: 45,
//   films: ["True detective", "Gentelman"],
//   filmsSet: new Set(["True detective", "Gentelman"]),
//   sayHi() {
//     console.log(`Hi! My name is ${this.name}`);
//   },
// };

// let actor2JSON = JSON.stringify(actor);
// let actor2 = JSON.parse(actor2JSON);

// actor2.age = 40;
// actor2.films.push("Interstellar");

// console.log("actor:", actor);
// console.log("actor2:", actor2);

// structuredClone(obj)

// let actor = {
//   name: "Mattew McConahee",
//   age: 45,
//   films: ["True detective", "Gentelman"],
//   filmsSet: new Set(["True detective", "Gentelman"]),
//   // sayHi() {
//   //   console.log(`Hi! My name is ${this.name}`);
//   // },
//   get country() {
//     return "USA";
//   },
//   set country(newCountry) {
//     this.country = newCountry;
//   },
// };

// let actor2 = structuredClone(actor);

// actor2.age = 40;
// actor2.films.push("Interstellar");
// actor2.filmsSet.add("Interstellar");

// console.log("actor:", actor);
// console.log("actor2:", actor2);

// let car1 = {
//   mark: "Mersedes",
//   price: 80000,
//   // toString() {
//   //   return this.mark;
//   // },
//   // valueOf() {
//   //   return this.price;
//   // },
//   [Symbol.toPrimitive](hint) {
//     // "string" "number" "default"
//     if (hint === "string") {
//       return this.mark;
//     }

//     if (hint === "number") {
//       return this.price;
//     }

//     if (hint === "default") {
//       return this.price;
//     }
//   },
// };

// let car2 = {
//   mark: "Tesla",
//   price: 40000,
// toString() {
//   return this.mark;
// },
// valueOf() {
//   return this.price;
// },
//   [Symbol.toPrimitive](hint) {
//     // "string" "number" "default"
//     if (hint === "string") {
//       return this.mark;
//     }

//     if (hint === "number") {
//       return this.price;
//     }

//     if (hint === "default") {
//       return this.price;
//     }
//   },
// };

// console.log(`${car1} & ${car2} разом коштують ${car1 + car2}`);
