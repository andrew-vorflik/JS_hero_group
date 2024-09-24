"use strict";
/* 
1 - Займають час
2 - Можуть завершитись вдало або з помилкою
*/

/* 
1 Виробник
2 Споживач
*/

/* 
1 pending
2 fulfilled
3 rejected
*/
// let promise = new Promise((resolve, reject) => {
//   console.log("Inside promise");

//   setTimeout(() => {
//     resolve("Я вдома");
//   }, 2000);
// });

// promise
//   .then((result) => {
//     console.log("then1");

//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Hello");
//       }, 2000);
//     });
//   })
//   .then((result) => {
//     console.log("then2");
//     console.log("result:", result);
//   });

// function makeDish(title, time, сb) {
//   setTimeout(() => {
//     console.log(`Ваша страва ${title} готова!`);
//     сb?.();
//   }, time);
// }

// makeDish("Борщ", 3000, () => {
//   makeDish("Паста", 2000, () => {
//     makeDish("Кава", 1000, () => {
//       makeDish("Морозиво", 500);
//     });
//   });
// });

// function makeDish(title, time) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`Ваша страва ${title} готова!`);
//       resolve();
//     }, time);
//   });
// }

// makeDish("Борщ", 3000)
//   .then(() => {
//     // return makeDish("Паста", 2000);
//     return "Паста";
//   })
//   .then((res) => {
//     console.log("res:", res);
//     // return makeDish("Кава", 1000);
//     return "Кава";
//   })
//   .then((res) => {
//     console.log("res:", res);
//     // return makeDish("Морозиво", 1000);
//     return "Морозиво";
//   })
//   .then((res) => {
//     console.log("res:", res);
//   });

// Promise api

// function makeDish(title, time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.5) {
//         resolve(`Ваша страва ${title} готова!`);
//       } else {
//         reject(`Страва ${title} згоріла`);
//       }
//     }, time);
//   });
// }

// let borsh = makeDish("Борщ", 3000);
// let pasta = makeDish("Паста", 2000);
// let coffee = makeDish("Кава", 1000);
// let icecream = makeDish("Морозиво", 500);

// let results = Promise.all([borsh, pasta, coffee, icecream]);
// let results = Promise.allSettled([borsh, pasta, coffee, icecream]);
// let result = Promise.race([borsh, pasta, coffee, icecream]);
// let result = Promise.any([borsh, pasta, coffee, icecream]);

// Promise.resolve("Hello").then((res) => {
//   console.log(res);
// });

// Promise.reject("Error").catch((error) => {
//   console.log(error);
// });

// result.then((results) => {
//   console.log("results:", results);
// });

// console.log("start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise 1");
// });

// Promise.resolve().then(() => {
//   console.log("Promise 2");
// });

// console.log("end");

// console.log("start");

// setTimeout(() => {
//   console.log("setTimeout 1");

//   Promise.resolve().then(() => {
//     console.log("promise setTimeout");
//   });
// }, 0);

// setTimeout(() => {
//   console.log("setTimeout 2");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("promise 1");
// });

// queueMicrotask(() => {
//   console.log("queue mikrotask");
// });

// Promise.resolve().then(() => {
//   console.log("promise 2");
// });

// console.log("end");

// async await

function makeDish(title, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(`Ваша страва ${title} готова!`);
      } else {
        reject(`Страва ${title} згоріла`);
      }
    }, time);
  });
}

// async function foo() {
//   try {
//     let borshMessage = await makeDish("Борщ", 3000);
//     let pastaMessage = await makeDish("Паста", 2000);

//     console.log(borshMessage, pastaMessage);
//   } catch (error) {
//     console.log("error:", error);
//   }
// }
// foo();

// function fooPromise(params) {
//   let borshMessage;
//   let pastaMessage;

//   makeDish("Борщ", 3000)
//     .then((res) => {
//       borshMessage = res;
//       return makeDish("Паста", 2000);
//     })
//     .then((res) => {
//       pastaMessage = res;
//       console.log(borshMessage, pastaMessage);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// fooPromise();

function fetchPromise(url) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      users.forEach((user) => {
        console.log(user.name, user.email);
      });
    })
    .catch((error) => {
      console.error("Error", error);
    });
}

async function asyncAwit(url) {
  try {
    let response = await fetch(url);
    let users = await response.json();

    users.forEach((user) => {
      console.log(user.name, user.email);
    });
  } catch (error) {
    console.error("Error", error);
  }
}

asyncAwit("https://jsonplaceholder.typicode.com/users");

// fetchPromise("https://jsonplaceholder.typicode.com/users111");
