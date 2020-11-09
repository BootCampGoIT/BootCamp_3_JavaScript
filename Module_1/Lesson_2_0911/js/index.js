console.log("Lesson 2");

// let const var

// let name; //
// name = 5;
// const age = 25;
// boolean, string, number, array, object, symbol
// let name="Alex"

// console.log(name);
// boolean//true false
// string "", '', ``

// const name = "Nikita";

// const num = "ffsddfsddf";
// console.log(Number.isNaN(Number(num)));
// console.log(typeof name);
// const sentence = `fds sdfdsf ${name} dsf fds`;
// console.log(sentence);

// console.log(Math.round(3.54));
// console.log(Math.floor(4.5));
// console.log(Math.ceil(4.5));
// console.log(parseFloat("2.4px"));
// const randomNum = Math.random() * 100;
// console.log(Number.parseInt(randomNum));
// console.log(Math.round())

// && || !

// flasy: 0, false, NaN, "", null, undefined

// let onLine = true;
// let active = true;
// let age = 19;

// в тесте на скулоджи есть вопрос, чему будет равно выражение true && 5 > 3 && "javascript", можно разобрать?
// console.log(true && 5 > 3 && undefined);
// onLine && active && age > 18 && console.log("Hello");
// true || false || (true && console.log("Hello"));

// onLine = !onLine;

// console.log(onLine);

// ==============================================================================
// 1. Операторы ветвеления
// ==============================================================================

// 1.1. Инструкция if
//  if (statement) {
//      console.log("Hello");

//  }
//  -= EXAMPLE =-
// const money = 200
// const productPrice = 100;

// if (money >= productPrice) { // false
//   console.log("Вы можете приобрести данный товар");
// }

// if (money < productPrice) { // true
//   console.log("Вы не можете приобрести данный товар");
// }

// ------------------------------------------------------------------------------
// 1.2. Инструкция if...else
// if (statement) {

//   } else {

//   }

//  -= EXAMPLE =-
// let a = 15;
// let b = 10;
// if (a >= b) {
//   console.log("a >= b");
// } else {
//   console.log("a < b");
// }

//  -= EXAMPLE =-

// let number = "0";
// if (number === 0) { //[0 === "0"] = [false]
//   console.log("true");
// } else {
//   console.log("false");
// }

//  -= EXAMPLE =-
// let number = "0";
// if (number == 0) {
//   //[0 == "0"] = [true]
//   console.log("true");
// } else {
//   console.log("false");
// }
//  -= EXAMPLE =-
// const a = 15;

// if (a === 5) {
//   console.log("a === 5");
// } else {
//   if (a == 15) {
//     console.log("dfsdfd");
//   }
// }

// -= TEST =-

// 1. Если переменная password не равна "Qwerty123", то выведите вконсоль 'верно', иначе выведите 'неверно'.

// 2. Даны переменные num1 = 10 и num2 = 20. Проверьте, какое из значений этих переменных больше и выведите соответствующее сообщение на экран при помощи alert().

// ------------------------------------------------------------------------------

// 1.3. Инструкция else...if

//  -= EXAMPLE =-
// let number = 10; // может быть 10, 20 или 30

// if (number === 10) {
// 	alert('number === 10'); // сработает, если num равно 10
// }

// if (number == 20) {
// 	alert('number === 20'); // сработает, если num равно 20
// }

// if (number == 30) {
// 	alert('number === 30'); // сработает, если num равно 30
// }

// let number = 10;
// if (number === 10) {
//   console.log("number === 10");
// } else if (number === 20) {
//   console.log("number === 20");
// } else if (number === 30) {
//   console.log("number === 30");
// }

// ------------------------------------------------------------------------------
// 1.4. Тернарный оператор

//  -= EXAMPLE =-
// let a = 5;
// let b = 10;

// if (a >= b) {
//   console.log("a>b");
// } else console.log(" a<b");

// a >= b ? console.log("a>b") : console.log(" a<b");

// -= TEST =-
// Пусть дана переменная value, которая может быть либо числом, либо строкой. Запишите в переменную result значение true, если переменная value число, и false, если переменная value является строкой.

// ------------------------------------------------------------------------------

// 1.5. Инструкция switch

//  -= EXAMPLE =-

// let lang = "ru"; //en , de

// if (lang == "ru") {
//   console.log("рус");
// } else if (lang == "en") {
//   console.log("анг");
// } else if (lang == "de") {
//   console.log("нем");
// } else {
//   console.log("язык не поддерживается");
// }

// const lang = "ru"

// switch (lang) {
//   case "ru":
//     console.log("рус");
//     break;

//   case "en":
//     console.log("анг");
//     break;

//   case "de":
//     console.log("нем");
//     break;

//   default:
//     console.log("язык не поддерживается");
//     break;
// }

// -= Questions =-
// if (true) {console.log("gsdhh")} else console.log(object)
// (a>b) ? condition1 : condition2

// ==============================================================================
// 2. Область видимости
// let a = 5;

// console.log(a);

// if (true) {
//     let b = 10;
//     console.log(b);
// }

// console.log(b);
// ---------------------

// let a = 5;
// let b;

// console.log("global", a);

// if (true) {
//   console.log("block", a);
//   a = 10;
//   console.log("block", a);
//   if (true) {
//     b = 222;
//     console.log("block", b);
//   }
// }

// console.log("global", b);

// -= Questions =-
// ==============================================================================

// ==============================================================================
// 3. Циклы
// ==============================================================================

// 3.1. Цикл while

// while ( пока выражение истинно ) {
// 	выполняем этот код циклически;
// 	в начале каждого цикла проверяем выражение в круглых скобках
// }

//  -= EXAMPLE =-

// let i = 11; //2,3

// while (i <= 100) {
//   //true
//   console.log(i);
//   i = i + 1;
// }

//  -= EXAMPLE =-
// let i = 11; //2,3

// while (i <= 100) {
//   //true
//   console.log(i);
//   i += 1; // i = i + 1
// }

//  -= EXAMPLE =-

// -= TEST =-
// 1. Выведите в консоль числа от 1 до 100 в обратном порядке.

// ------------------------------------------------------------------------------

// 3.2. Цикл do...while

// let password = "";
// do {
//   password = prompt("Введите пароль длиннее 4-х символов");
// } while (password.length < 5); //false

// console.log(password);

//  -= EXAMPLE =-
// const userPassword = "Qwerty";
// let i = 0;
// const attemp = 2;

// do {
//   const password = prompt("Enter password, please!");
//   if (password === userPassword) {
//     i = attemp;
//     console.log("Valid password!");
//   } else {
//     i += 1;
//     if (i === attemp) {
//       console.log("Not valid password!");
//     }
//   }
// } while (i < attemp);

// ------------------------------------------------------------------------------

// 3.3. Цикл for

// const number = 5;

// for (let i = 0; i <= number; i += 1) {
//   console.log(i);
// }
// console.log("------------");

// const number = 4;

// for (let i = 0; number >= i; i += 1) {
//   console.log(i);
// }

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i += 1;
// }

//  -= EXAMPLE =-

//  -= EXAMPLE =-

// -= TEST =-
// 1. С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 100.
// 2. С помощью цикла for выведите в консоль числа от 100 до 0.

// ------------------------------------------------------------------------------

// 4.4. Инструкции break

//  -= EXAMPLE =-
// const number = 5;

// for (let i = 1; i <= number; i += 1) {//1,2,3
//   console.log(i);
//   if (i === 3) {
//     break;
//   }
// }
//  -= EXAMPLE =-
// for (let i = 1; i <= 5; i += 1) {
// //i = 3
//   if (i === 3) {
//     break;
//   }
//   console.log(i); //1,2
// }

// 4.5. Инструкции continue
for (let i = 1; i <= 5; i += 1) {
  if (i === 3) {
    continue;
  }
  console.log(i); //3
  console.log("ghjffddf")
  console.log("ghjffddf")
  console.log("ghjffddf")
}

// -= Questions =-
