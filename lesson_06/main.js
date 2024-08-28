"use strict";

// let num = 100;
// let num1 = 314e-2;
// let num2 = 10_000_000;
// let num3 = Number(12);
// console.log("num1:", num3);

// 64 10 1
// 9007199254740991

// console.log(9007199254740991 + 1);
// console.log(9007199254740991 + 2);

// console.log(Number.isSafeInteger(9007199254740992));

// Infinity -Infinity NaN
// let num = 10 / 0;

// console.log("Number.isFinite(num):", Number.isFinite(num));

// console.log(isNaN("Hello"));
// console.log(isNaN("100px"));

// console.log(Number.isNaN("Hello"));
// console.log(Number.isNaN(NaN));

// parseInt parseFloat
// console.log(parseInt("100"));
// console.log(parseInt("100px"));
// console.log(parseInt("$100"));
// console.log(parseInt("$100"));
// console.log(parseInt("     100     "));
// console.log(parseInt("100.123"));
// console.log("======================");

// console.log(parseFloat("100.123"));
// console.log(parseFloat("100.123%"));
// console.log(parseFloat("100$.123"));

// console.log(parseInt("100", 2)); // 0 1 10 11 100 101
// console.log(parseInt("3", 16)); // 0 - 9 a b c d e f 10
// console.log(parseInt("5", 16));
// console.log(parseInt("a", 16));
// console.log(parseInt("b", 16));
// console.log(parseInt("f", 16));
// console.log(parseInt("ff", 16));

// toFixed(num)

// let num = 100.1234567;

// console.log(num.toFixed(10));

// console.log(0.1 + 0.2 === 0.3);
// console.log((0.2).toFixed(20));
// console.log((0.1).toFixed(20));
// let sum = 0.1 + 0.2;
// console.log("sum:", sum.toFixed(1));

// let num = 10.999999999;

// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));
// console.log(Math.floor(Math.random() * 100));
// console.log(Math.sqrt(100));
// console.log(Math.sqrt(16));
// console.log(Math.pow(3, 2)); // 3 ** 2
// console.log(Math.abs(-10)); // 10

// let num = 10;

// console.log(Number(10).toFixed(2));
// {ksdjdskjfhkjdsfh}..toFixed(2)
// 10
// {ksdjdskjfhkjdsfh} delete 10

// "Hello".
// String("Hello") {}.sdknfksdj
// "Hello"

// String
// let string2 = "Hello";
// let string3 = "Hello";
// let string4 = `Hello ${string1}`;
// let string1 = String("Hello");

// let str = "Hello!";
// console.log(str.length);

// console.log(str[0]);
// console.log(str[str.length - 1]);
// console.log(str.at(-2));

// let str = "Hello";
// console.log(str.concat(" ", "world", "!"));
// console.log(str + "world");

// let song = "Я їду до дому, до тебе до дому де очі знайомі і завжди нові!";

// console.log(song.indexOf("дому"));
// console.log(song.indexOf("дому", 10));
// console.log(song.indexOf("бабуся"));
// console.log(song.lastIndexOf("дому"));

// if (song.indexOf("дому") !== -1) {
//   console.log("Знайшли!");
// }

// if (song.includes("дому")) {
//   console.log("Знайшли!");
// }

// console.log(song.includes("дому!!!"));

// let song = "Я їду до дому, до тебе до дому де очі знайомі і завжди нові!";
// let subString = prompt("Введіть частину пісні");

// console.log("subString:", subString);

// if (song.toLowerCase().includes(subString.toLowerCase())) {
//   console.log("Знайшли!");
// } else {
//   console.log("Нема :(");
// }

// console.log("Hello".toLowerCase());
// console.log("Hello".toUpperCase());

// song
//   .toLowerCase()
//   .includes(subString.toLowerCase())
//   .indefxOf()

// let song = "Я їду до дому, до тебе до дому де очі знайомі і завжди нові!";

// console.log(song.slice(2, -2));

// let email = "user@mail.com";
// let newDomein = "net";

// console.log(email.replace("com", "net"));

// console.log(email.repeat(10));

// let str = "       Hello          world      ";
// let str = "       Hello          world      ";

// let registeredEmail = "    user@mail.com   ";
// let loginEmail = "user@mail.com                                    ";

// if (registeredEmail.trim() == loginEmail.trim()) {
//   console.log("Welcome");
// }

// let str = "       Hello          world      ";

// console.log(1, str.trimStart(), 2);
// console.log(1, str.trimEnd(), 2);
// console.log(1, str.trim(), 2);

// let str = "Hello";

// console.log(str.startsWith("Hel!!!!!!"));
// console.log(str.endsWith("lo!"));

// let url = "http://somecite.com";

// if (url.startsWith("https")) {
//   console.log("Welcome");
// } else {
//   console.log("Небезпечний протокол");
// }

// let book = "some_book.doc";

// if (book.endsWith(".pdf")) {
//   console.log("Запустити pdf конвертор");
// } else if (book.endsWith(".doc")) {
//   console.log("Запустити doc конвертор");
// }

// let str = "Hello";
// let str1 = "Helloasdasdassdads";

// console.log(1, str.padStart(3, " "), 2);
// console.log(1, str.padStart(20, " "), 2);
// console.log(1, str1.padStart(20, " "), 2);

// console.log(
//   "Я їду до дому, до тебе до дому де очі знайомі і завжди нові!"
//     .split("")
//     .join("")
// );

// "Some string"; // "someString"
// "my some string awersome"; // "mySomeStringAwersome"
