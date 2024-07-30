// let a = 2;
// let b = 3;
// let c = a + b;

// console.log(c + 3);

// String
// let greeting = "Hello!";

// console.log(greeting);
// console.log(greeting[5]);
// console.log(greeting[2]);
// console.log("Hello!"[2]);
// console.log("Hello!".length);

// number
// let num = 100; // integer
// let p = 3.1415926; // float

// console.log(num * p);
// console.log(Infinity);
// console.log(-Infinity);
// console.log("Привіт" / 3);

// Boolean
// console.log(true, false);
// console.log(12 > 15);

// undefined
// let a = 10;
// console.log(a);

// a = undefined;
// console.log(a);

// null
// let b = null;
// console.log(b);

// BigIng
// let bigInt = 123141231241241241241249082394872398742389743287n;

// console.log(bigInt);

// Symbol
// let a = Symbol("id1");
// let b = Symbol("id1");

// console.log(a === b);

// Object
// let user = {
//   name: "John",
//   phone: 12345,
//   isAdmin: true,
// };

// console.log(user);
// console.log(user.phone);
// console.log(user["isAdmin"]);

// Array

// let cars = ["Audi", "BMW", "Mersedes"];
// console.log(cars);

// console.log(cars);

// cars[1] = "Ferrari";
// console.log(cars);

// Function

// function sayHi(name) {
//   console.log(`Hi ${name}`);
// }

// sayHi("Vasya");
// sayHi("Peter Parker");

// typeof

// function foo() {}

// console.log(typeof "hello");
// console.log(typeof 123);
// console.log(typeof true);
// console.log(typeof 123n);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof { name: "Nick" });
// console.log(typeof []);
// console.log(typeof foo);

// Boolean()
// Number()
// String()

// String

// let num1 = 123;
// let str = String(num1); // "123"
// let str2 = String(true); // "true"

// console.log(typeof num1);
// console.log(str);
// console.log(typeof str);
// console.log(str2);
// console.log(typeof str2);

// Boolen
// "", 0, 0n, null, undefined, NaN

// console.log(Boolean(""));
// console.log(Boolean(0));
// console.log(Boolean(0n));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

// console.log("==========");
// console.log(Boolean(" "));
// console.log(Boolean(123));
// console.log(Boolean({}));

// Number

// console.log(Number("   100     "));
// console.log(Number("100"));
// console.log(Number("100px"));

// parseInt

// console.log(parseInt("100px"));
// console.log(parseInt("200px20"));
// console.log(parseFloat("150.5%"));

// console.log(3 + 5);
// console.log(3 - 5);
// console.log(3 / 5);
// console.log(3 * 5);
// console.log(5 ** 2);
// console.log(4 ** 2);

// console.log(7 % 3);
// console.log(8 % 3);
// console.log(5 % 2);
// console.log(10 % 2);
// console.log(11 % 3);

// let a = 10;
// a += 2; // a = a + 2;
// a *= 3;

// console.log("a:", a);

// console.log(--a); // Decrement
// console.log(++a); // Increment

// > < >= <= == != === !==

// let a = 5;
// let b = 10;
// let c = 5;

// console.log(a > b);
// console.log(a < b);
// console.log(a <= c);
// console.log(a < c);
// console.log(a == c);

// console.log("123" > 100);
// console.log("" > true);
// console.log("" == false);
// console.log("" === "");
// console.log(false === false);
// console.log("" != true); // 0 != 1
// console.log("" !== 1); // 0 != 1
// console.log(0 != false); // 0 != 0

// null == undefined

// console.log(null == undefined);

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true

// console.log(NaN > 0);
// console.log(NaN < 0);
// console.log(undefined == 0);

// console.log(null === undefined);

// Або ||
// І &&
// Ні !

// let time = 7;

// // Зачинений магазин?
// console.log(time < 8 || time > 20);
// console.log(true || false);

// let phone = true;
// let email = false;

// console.log(phone || email);

// let hours = 8;
// let minutes = 49;

// console.log(hours === 8 && minutes === 50);

// Або ||

// console.log(true || true); // true
// console.log(false || true); // true
// console.log(true || false); // true
// console.log(false || false); // false

// І &&

// console.log(true && true); // true
// console.log(false && true); // false
// console.log(true && false); // false
// console.log(false && false); // false

// console.log(!true);
// console.log(!false);

// console.log(!10); // !true
// console.log(!0);
// console.log(!"");

// ?
// let age = 20;
// умова ? true : false;
// let result = age > 18 ? "Дозволено" : "Відхилено";

// console.log(result);

let a = -42;
console.log(+a); // -42

// Перетворює нечислові значення
console.log(+true); // 1
console.log(+""); // 0
