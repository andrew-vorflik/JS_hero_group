"use strict";

// const cars = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];

// console.log(cars.join(" "));

// let string =
//   "У бегемотів зуби міцніші, ніж у будь-якої іншої живої істоти на Землі";

// console.log(string.split(" ", 5));

// const cars = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];

// cars.push("Toyota", "Mazda");

// console.log(cars.push("Toyota", "Mazda"));

// cars.pop();
// cars.pop();
// console.log(cars.pop());
// console.log(cars);

// cars.unshift("Ford");
// console.log(cars.unshift("Ford"));

// cars.shift();
// cars.shift();
// cars.shift();

// console.log(cars.shift());
// console.log(cars);

// const cars = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];

// cars.pop();
// cars.pop();
// cars.pop();
// cars.shift();
// cars.unshift("Tesla");
// cars.unshift("Mazda");
// cars.push("Honda");

// console.log(cars);

// let string =
//   "У бегемотів зуби міцніші, ніж у будь-якої іншої живої істоти на Землі";

// function delete2ndWords(str) {
//   let array = str.split(" ");
//   let result = [];

//   for (let i = 0; i < array.length; i++) {
//     if (i % 2 === 0) {
//       result.push(array[i]);
//     }
//   }

//   return result.join(" ");
// }

// console.log(delete2ndWords(string));

// const cars = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];
// let japanCars = ["Honda", "Nissan", "Mazda"];
// let americanCars = ["Ford", "Tesla", "Cadillac"];

// console.log(cars.concat("Reno", japanCars, "Citroen"));

// const cars = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];

// console.log(cars.concat(japanCars[0]));

// cars.fill(elem, start, end)

// console.log(cars.fill(null, 1, 4));
// console.log(cars.fill(null, 2, 3));

// const cars = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];

// slice(start, end)

// let subArray = cars.slice(-2);

// console.log(subArray);

// const cars = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];

//array.copyWithin(target, start, end)

// console.log(cars.copyWithin(0, 3));
// console.log(cars.copyWithin(0, 2, 3));
// console.log(cars.copyWithin(0, 1, 3));
// console.log(cars.copyWithin(1, 2, 4));

// const cars = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];

// array.indexOf(searchElement, fromIndex)

// console.log(cars.indexOf("Audi", 2));
// console.log(cars.lastIndexOf("Audi", -1));

// console.log(cars.includes("Toyota"));

// const cars = [
//   "BMW",
//   "Audi",
//   "Porsche",
//   "Mercedes",
//   "Ferrari",
//   ["Honda", "Nissan", "Mazda", ["Ford", "Tesla", "Cadillac"]],
// ];
// let japanCars = ["Honda", "Nissan", "Mazda"];
// let americanCars = ["Ford", "Tesla", "Cadillac"];

// console.log(cars.flat(2));

// array.with(index, value)

// const cars = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];

// console.log(cars.with(0, "Tesla"));

// keys(), values(), entries()

// const cars = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];

// console.log(cars.values());

// const cars = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];

// array.splice(start, deleteCount, item1, item2, ...)

// delete cars[3];

// console.log(cars);

// cars.splice(1, 2, "Tesla");
// const cars2 = cars.toSpliced(1, 1, "Tesla");

// console.log(cars);
// console.log(cars2);

// const cars = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];

// const cars2 = cars.toReversed();

// console.log(cars.reverse());
// console.log("cars2:", cars2);

// console.log(Array.isArray(cars));

// const array = Array.of(1, 2, 3, 4, 5);

// console.log("array:", array);

// const array = [1, 2, 3, 4]; // x0ef78w34rfgsehl
// const obj = {
//   // x0svhgvhmmmmmmvscmsdg
//   name: "John",
//   age: 30,
// };

// array.reverse(); // x0ef78w34rfgsehl
// delete obj.age;

// // array = null;
// // obj = {};

// console.log("obj:", obj);
// console.log("array:", array);

// [1,2,3,4,5]
// [2,3,4,6,7,8]

// [2,3,4]

// 35231 => [1,3,2,5,3]

// const reverseNumbers = (number) => String(number).split("").reverse();

// console.log(reverseNumbers(35231));

// repeats([4,5,7,5,4,8]) // 15

// console.log([4, 5, 7, 5, 4, 8]);

// function repeats(array) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (array.indexOf(array[i]) === array.lastIndexOf(array[i])) {
//       sum += array[i];
//     }
//   }

//   return sum;
// }

// console.log(repeats([9, 10, 19, 13, 19, 13]));
