// while(умова) {
//   код
// }

// let iterationCount = 5;

// while (iterationCount >= 0) {
// console.log(iterationCount);
// --iterationCount;
// }

// let i = 1; // iteration count
// let sum = 0;

// while (i <= 3) {
//   // умова
//   let num = +prompt("Введіть число");

//   // sum = sum + num;
//   sum += num;

//   console.log(sum);

//   i++; // зміна умови
// }

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (false);

// let pass = "12345";
// let userPass = "";

// do {
//   userPass = prompt("Введіть пароль:");

//   if (userPass !== pass) {
//     alert("Пароль невірний! Спробуйте ще");
//   }
// } while (userPass !== pass);

// alert("Welcome");

// for(початкове значення; умова; зміна змінної) {
//   код
// }

// for (let year = 1; year <= 100; year++) {
//   if (year % 10 === 1 && year % 100 !== 11) {
//     console.log("Вам " + year + " рік"); //Перевірка для рік
//   } else if (
//     year % 10 >= 2 &&
//     year % 10 <= 4 &&
//     !(year % 100 >= 12 && year % 100 <= 14)
//   ) {
//     console.log("Вам " + year + " роки"); //Перевірка для роки
//   } else {
//     console.log("Вам " + year + " років"); //Перевірка для років
//   }
// }

// let sum = 0;

// for (let i = 1; i <= 5; i++) {
//   sum += i;
//   console.log(sum);
// }

// let i = 1;
// let sum = 0;

// while (i <= 3) {
//   let num = +prompt("Введіть число");

//   sum += num;

//   console.log(sum);

//   i++;
// }

// let i = 1;
// let sum = 0;

// for (; i <= 5;) {
//   sum += i;
//   console.log(sum);

//   i++;
// }

// continue;

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }

//   console.log(i);
// }

// break

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     break;
//   }

//   console.log(i);
// }

// prompt() // null

// let i = 1; // iteration count
// let sum = 0;

// while (true) {
//   // умова
//   let num = prompt("Введіть число");
//   console.log("num:", num);

//   if (num === null) {
//     break;
//   }

//   // sum = sum + num;
//   sum += +num;

//   i++; // зміна умови
// }

// console.log(sum);

// for (let i = 1; i <= 10; i++) {
//   // i = 2
//   for (let number = 1; number <= 10; number++) {
//     console.log(`${number} помножити на ${i} = ${number * i}`);
//   }
// }

// for in
// let person = {
//   name: "Tony Stark",
//   phone: "+306312345678",
//   money: 10000000,
//   isMillioner: true,
//   isPLayBoy: true,
//   isFillantrop: true,
// };

// for (let key in person) {
//   console.log(key);
//   console.log(person[key]);
// }

// let salaries = {
//   category: "front-end",
//   tomShelby: 1000,
//   walterWhite: 2000,
//   JohnSnow: 1500,
// };

// for (let key in salaries) {
//   if (typeof salaries[key] === "number") {
//     salaries[key] += 300;
//   }
// }

// console.log(salaries);

// for of

// let movies = ["Titanik", "Око", "Вовк з волл стріт"];
// let movie = "Вовк з волл стріт";

// for (let value of movie) {
//   console.log(value);
// }

// labels
// 3, 7, 15

// entryLoop: for (let entry = 1; entry <= 3; entry++) {
//   console.log(`Entry ${entry}`);

//   for (let flatNumber = 1; flatNumber <= 10; flatNumber++) {
//     if (flatNumber === 3 || flatNumber === 5) {
//       continue;
//     }

//     if (flatNumber === 7 && entry === 2) {
//       break entryLoop;
//     }

//     console.log(
//       `Занесли квитанцію у квартиру ${flatNumber} у ${entry} під'їзді`
//     );
//   }
// }
