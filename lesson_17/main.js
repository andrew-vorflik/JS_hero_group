"use strict";

// Інтерпретується
// Високорівнева
// Веб розробка
// ООП функціональний процедурний
// Синхронна Блокуюча Однопоточна

// let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   console.log("click");
// });

// console.log("start");

// for (let i = 0; i < 7000000000; i++) {
//   let a = i ** i;
// }

// console.log("end");

// collback

// function foo(cb) {
//   for (let i = 0; i < 7000000000; i++) {
//     let a = i ** i;
//   }

//   cb();
// }

// foo(showMessage);

// function showMessage() {
//   console.log("Розрахунок завершено!");
// }

// setTimouot()
// setInterval()

// setTimeout(cb, delay, …args)

// setTimeout(() => {
//   console.log("Hello");
// }, 2000);

// function sayHi(name) {
//   console.log(`Hi! ${name}`);
// }

// let timerId = setTimeout(sayHi, 2000, "John");

// let number = Math.random().toFixed(3) * 1000;

// console.log("number:", number);

// if (number > 50) {
//   clearTimeout(timerId);
// }

// function rideTaxi(cb) {
//   console.log("Батьки сіли в таксі");
//   setTimeout(() => {
//     console.log("Поїздка завершена");
//     cb();
//   }, 3000);
// }

// function parentsMessage() {
//   console.log("Ми вже дома!");
// }

// rideTaxi(parentsMessage);

// function getWether(cb) {
//   let wether;

//   setTimeout(() => {
//     wether = "Сонячно. Температура 20С";

//     cb(wether);
//   }, 2000);
// }

// function showWether(wether) {
//   console.log(`Погода в вашому місті: ${wether}`);
// }

// getWether(showWether);

// setInterval(cb, delay, …args)

// let timerId = setInterval(() => {
//   let date = new Date().toLocaleTimeString();
//   console.log(date);
// }, 2000);

// setTimeout(() => {
//   clearInterval(timerId);
// }, 5000);

// let count = 1;

// let timerId = setInterval(() => {
//   if (count >= 5) {
//     clearInterval(timerId);
//   }

//   count++;
//   let date = new Date().toLocaleTimeString();
//   console.log(date);
// }, 2000);

// let count = 1;

// let timerId = setTimeout(function func() {
//   count++;
//   let date = new Date().toLocaleTimeString();
//   console.log(date);

//   if (count > 5) {
//     clearTimeout(timerId);
//     return;
//   }

//   timerId = setTimeout(func, 1000);
// }, 1000);

// console.log("start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 1000);

// console.log("end");

// function hardFunc() {
//   for (let i = 0; i < 3500000000; i++) {
//     let a = i ** i;
//   }

//   console.log("End hard function");
// }

// console.log("start");

// setTimeout(() => {
//   console.log("Timeout 1000");
// }, 1000);

// setTimeout(() => {
//   console.log("Timeout 5000");
// }, 5000);

// hardFunc();

// console.log("end");

// function makeDish1(title, time, cb) {
//   setTimeout(() => {
//     console.log(`Ваша страва ${title} готова`);
//     cb?.();
//   }, time);
// }
// function makeDish2(title, time, cb) {
//   setTimeout(() => {
//     console.log(`Ваша страва ${title} готова`);
//     cb?.();
//   }, time);
// }
// function makeDish3(title, time, cb) {
//   setTimeout(() => {
//     console.log(`Ваша страва ${title} готова`);
//     cb?.();
//   }, time);
// }
// function makeDish4(title, time, cb) {
//   setTimeout(() => {
//     console.log(`Ваша страва ${title} готова`);
//     cb?.();
//   }, time);
// }

// makeDish1("Борщ", 3000, () => {
//   makeDish2("Паста", 2000, () => {
//     makeDish3("Кава", 500, () => {
//       makeDish4("Морозиво", 100);
//     });
//   });
// });

/* 
Напишіть клас Timer який має методи start(), stop(), pause(), show().

start() - має виводити в консоль цифри кожну секунду починаючи з 1
stop() - має зупиняти перелік і встановлювати таймер в 0
pause() - призупиняє показ цифр, але зберігає лічильник
show() - показує поточний лічильник 
*/

// class Timer {
//   #timer = null;

//   constructor(timerStart = 1) {
//     this.count = timerStart;
//   }

//   start() {
//     this.#timer = setInterval(() => {
//       console.log(this.count++);
//     }, 1000);
//   }

//   stop() {
//     this.count = 0;
//     clearInterval(this.#timer);
//   }

//   pause() {
//     clearInterval(this.#timer);
//   }

//   show() {
//     console.log(this.count);
//   }
// }

// let timer = new Timer();

// timer.start();

// setTimeout(() => {
//   timer.pause();
// }, 5000);

// setTimeout(() => {
//   timer.start();
// }, 8000);

// setTimeout(() => {
//   timer.stop();
//   timer.show();
// }, 13000);
