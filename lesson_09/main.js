"use strict";

// const arrey = [5, 2, 10, 23, 11];

// let func = function () {
//   console.log("Hello");
// };

// func();

// function func(elem, index) {
//   console.log(elem, index);
// }

// const newArray = arrey.forEach((elem) => {
//   console.log(elem);
// });

// console.log("newArray:", newArray);
// const arrey = [2, 4, 6, 8, 10];

// const newArrey = arrey.map((elem) => elem * 2);

// const newArrey = arrey.map(function (elem, index, array) {
//   array.push(elem * 2);

//   return elem * 2;
// });

// console.log("arrey:", arrey);
// console.log("newArrey:", newArrey);

// const arrey = [2, 4, 6, 8, 10];

// const filteredArray = arrey.filter((elem) => {
//   return elem > 5;
// });

// console.log("filteredArray:", filteredArray);

// const students = [
//   { name: "Яна" },
//   { name: "Дарія" },
//   { name: "Егор" },
//   { name: "Діма" },
//   { name: "Кірилл" },
// ];

// {name} = student

// let filteredStudents = students.filter(({ name }) => {
//   return name.length < 5;
// });

// console.log("filteredStudents:", filteredStudents);

// const students = [
//   { name: "Яна" },
//   { name: "Дарія" },
//   { name: "Егор", grade: 2 },
//   { name: "Діма" },
//   { name: "Кірилл" },
//   { name: "Егор", grade: 100 },
// ];

// const egor = students.findLast((student) => {
//   return student.name === "Егор";
// });

// const egorIndex = students.findLastIndex((student) => {
//   return student.name === "Вася";
// });

// console.log(egorIndex2);

// every some

// let products = [
//   { name: "chips", pack: "paper" },
//   { name: "milk", pack: "plastic" },
//   { name: "oil", pack: "glass" },
// ];

// if (products.some((product) => product.pack === "glass")) {
//   console.log("Обережно! Крихкий товар!");
// }

// const students = [
//   { name: "Яна", grade: 100 },
//   { name: "Дарія", grade: 100 },
//   { name: "Діма", grade: 100 },
//   { name: "Кірилл", grade: 100 },
//   { name: "Егор", grade: 100 },
//   { name: "Егор", grade: 2 },
// ];

// if (students.every((student) => student.grade >= 90)) {
//   console.log("Exellent group");
// }

// const orders = [
//   {
//     id: 1,
//     products: [
//       { name: "Чизкейк", price: 1.99 },
//       { name: "Бісквіт", price: 4.99 },
//     ],
//   },
//   {
//     id: 2,
//     products: [
//       { name: "Шоколад", price: 5.59 },
//       { name: "Зефір", price: 8.99 },
//     ],
//   },
// ];

// const productsNames = orders.flatMap((order) => {
//   return order.products.map((product) => product.name);
// });

// console.log("productsNames:", productsNames);

// Array.from()

// console.log(Array.from("Hello"));

// sort
// let fruits = ["Апельсин", "Яблуко", "Груша", "Кавун", "Вишня"];

// fruits.sort();
// let numbers = [10, 2, 15, 22, 12, 25];

// const students = [
//   { name: "Яна", grade: 100 },
//   { name: "Дарія", grade: 100 },
//   { name: "Діма", grade: 100 },
//   { name: "Кірилл", grade: 100 },
//   { name: "Егор", grade: 100 },
// ];

// function sortStudents(student1, student2) {
//   return student1.name.length > student2.name.length ? 1 : -1;
// }

// console.log(
//   "students.toSorted(sortStudents):",
//   students.toSorted(sortStudents)
// );

// console.log(students);

// Object.groupBy()

// const students = [
//   { name: "Яна", city: "Odessa" },
//   { name: "Дарія", city: "Чернівці" },
//   { name: "Діма", city: "Odessa" },
//   { name: "Кірилл", city: "Чернівці" },
//   { name: "Егор", city: "Харків" },
//   { name: "Андрій", city: "Харків" },
// ];

// const groupedStudents = Object.groupBy(students, (student) => {
//   return student.city;
// });

// console.log("groupedStudents:", groupedStudents);

/* 
{
"Odessa": [{ name: "Яна", city: "Odessa" }, { name: "Діма", city: "Odessa" }],
"Чернівці": [{ name: "Дарія", city: "Чернівці" },  { name: "Кірилл", city: "Чернівці" },]
"Харків": [{ name: "Егор", city: "Харків" }, { name: "Андрій", city: "Харків" }]
} 
*/

// const students = [
//   { name: "Яна", grade: 100 },
//   { name: "Дарія", grade: 100 },
//   { name: "Діма", grade: 90 },
//   { name: "Кірилл", grade: 90 },
//   { name: "Егор", grade: 90 },
//   { name: "Вася", grade: 1 },
//   { name: "Петя", grade: 2 },
//   { name: "Ваня", grade: 3 },
// ];

// const groupedStudents = Object.groupBy(students, (student) => {
//   return student.grade >= 90 ? "Здав" : "Не здав";
// });

// console.log("groupedStudents:", groupedStudents);

/* 
{
"Здав": [ { name: "Яна", grade: 100 }, { name: "Дарія", grade: 100 },]
"Не здав": [{ name: "Вася", grade: 1 },]
} 
*/

// reduce( cb(acc, elem, index, arr), initialValue);

// const arr = [1, 2, 3, 4, 5];

// const sum = arr.reduce((acc, item) => {
//   return acc + item;
// }, 0);

// // acc = 0
// // item = 1 acc = 0 // 1
// // item = 2 acc = 1 // 3
// // item = 3 acc = 3 // 6
// // item = 4 acc = 6 // 10
// // item = 5 acc = 10 // 15

// console.log("sum:", sum);

// const array = [33, 60, 90, 2, 43, 11, 90, 243];
// let count = 0;

// function bubbleSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length - 1 - i; j++) {
//       count++;

//       if (array[j] > array[j + 1]) {
//         let temp = array[j];

//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }

//   return array;
// }

// console.log(bubbleSort(array));
// console.log("count:", count);

// function map(arr, cb) {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result[i] = cb(arr[i], i, arr);
//   }

//   return result;
// }

// function filter(arr, cb) {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (cb(arr[i], i, arr)) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const newArray = map(arr, (item) => {
//   return item * 2;
// });

// const filteredArray = filter(arr, (item) => {
//   return item % 2 === 0;
// });

// console.log("newArray:", newArray);
// console.log("filteredArray:", filteredArray);

// [
//   { source: "telegram", text: "Привіт, як справи!", date: "20-08-2014" },
//   { source: "youtube", text: "Вийшло тнове відео", date: "19-08-2014" },
//   { source: "youtube", text: "Ваш коментар сподобвся", date: "20-08-2014" },
// ];
