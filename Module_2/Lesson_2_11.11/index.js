// ==============================================================================
// 4.4. Методы push(), pop(), shift(), unshift()
// ==============================================================================
// ------------------------------------------------------------------------------

// 4.4.1 Методы push(), pop();

// push()
// const users = ["Alex", "Nikita"];
// const total = users.push("Andrii", "Bob"); //4

// console.log("users", users);
// console.log("total", total);

//  -= EXAMPLE =-
// pop();
// const myFriends = ['Mitchel', 'Mark', 'Monica', 'Molly'];
// const popped = myFriends.pop();

// console.log('myFriends', myFriends);
// console.log('popped', popped);

// ------------------------------------------------------------------------------

// 4.4.2 shift(), unshift()
// shift()
// const myFriends = ["Mitchel", "Mark", "Monica", "Molly"];

// const shifted = myFriends.shift(); //"Mitchel"

// console.log("myFriends", myFriends);
// console.log("shifted", shifted);

//  -= EXAMPLE =-
// unshift()
// const numbers = [1, 2, 3, 4, 5];

// numbers.unshift(0);
// console.log("numbers", numbers);

// numbers.unshift(-5, -4, -3, -2, -1);
// console.log('numbers', numbers);

// ------------------------------------------------------------------------------

// 4.5 Метод slice();

// Array.slice(begin, end)

//  -= EXAMPLE =-
// const cars = ["BMW", "Audi", "Mitsubishi", "Fiat", "Peugeot"];
// const slice = cars.slice(1, 3);
// console.log("cars", cars);
// console.log("slice", slice);
// ------------------------------------------------------------------------------

// 4.6 Метод splice();
//  -= EXAMPLE =-
// const cars = ["BMW", "Audi", "Mitsubishi", "Fiat", "Peugeot"];
// const removed = cars.splice(-1, 1);
// // const removed = cars.splice(1, 1);

// console.log("cars", cars);
// console.log("removed", removed);

// ------------------------------------------------------------------------------

// 4.6.1. Удаление элементов массива

//  -= EXAMPLE =-
// ------------------------------------------------------------------------------

// 4.6.2 Вставка элементов в массив

//  -= EXAMPLE =-
// const myNumbers = [1, 2, 3, 4, 5];
// const inserted = myNumbers.splice(0, 0, -1, -2);

// console.log("myNumbers", myNumbers);

// console.log("inserted", inserted);

// ------------------------------------------------------------------------------

// 4.6.3 Замена элементов массива

//  -= EXAMPLE =-
// const myNumbers = [1, 2, 3, 4, 5];

// const index = myNumbers.indexOf(3);
// console.log('index', index);
// const inserted = myNumbers.splice(index, 1, 10);

// console.log("myNumbers", myNumbers);

// console.log("inserted", inserted);

// const cars = ["BMW", "Audi", "Mitsubishi", "Fiat", "Peugeot"];
// const index = cars.indexOf("Fiat");
// cars.splice(index, 1, "fgfshd");
// console.log('cars', cars);

// ------------------------------------------------------------------------------

// 4.7. Метод concat()

//  -= EXAMPLE =-
// const symbols = ["a", "b", "c"];
// const numbers = [1, 2, 3, 4, 5];
// const result = symbols.concat(numbers);
// console.log("result", result);
// console.log("symbols", symbols);
// console.log("numbers", numbers);

//

//==============================================================================
// 1. Функции
//==============================================================================
// expression
// const functionName = function (){}

// declaration
// function functionName (){}

// arrow function
// const functionName = () => {};
// ||
// const functionName = () => ();
//==============================================================================

// -=Examples=-
// expression
// let result = 0;

// const getSum = function (a, b, c) {
//   result = a + b + c;

// };

// console.log(getSum(1, 2, 3)) ; //undefined
// console.log("result", result);

// // declaration
// const name = "Alex";
// const age = 25;
// const status = "student";

// function logger(name, age, status) {
//   console.group(`${name}'s info:`);
//   console.log(`Name: ${name}`);
//   console.log(`Age: ${age}`);
//   console.log(`Status: ${status}`);
//   console.groupEnd();
// }

// logger("Nikita", 35, "teacher");

// logger("Alex", 25, "student");

// // arrowFunction
// const arrFunc = (a, b) => {
//   console.group(`Variables:`);
//   console.log(`Number 1: ${a}`);
//   console.log(`Number 2: ${b}`);
//   console.log(`Sum: ${a + b}`);
//   console.groupEnd();
// };

// arrFunc(2, 3);

// ==============================================================================
// ------------------------------------------------------------------------------
// 1.1. Понятие функции

//------------------------------------------------------------------------------
// 1.2. Функциональное выражение

// const header = ["Home", "About", "Contacts","sdfds",'sdfdsf','sdfdsdfsdfs','fdsdfds'];

// const getMarkup = function (array) {
//   let markup = "";
//   for (const elem of array) {
//     markup += `<li>${elem}</li>`;
//   }
//   return markup;
// };

// document.querySelector(".nav").innerHTML = getMarkup(header);

//  -= EXAMPLE =-

// const getSum = function (a, b, c, d) {
//   return a + b + c + d;
// };
// const result = getSum(1, 2, 3, 4);

// console.log("result", result);

// ------------------------------------------------------------------------------
// 1.3. Порядок выполения кода

//  -= EXAMPLE =-

// const name = "Alex";

// const modify = function (userName) {
//   return userName.toUpperCase();
// };

// const getInfo = function (name, age) {
//   console.log(`${name}:`, age);
// };

// const result = 1 + 3;

// if (result === 1) {
//   const newName = modify(name); //
//   getInfo(newName, 25);
// }

// ------------------------------------------------------------------------------
// 1.4. Параметры по умолчанию

//  -= EXAMPLE =-

// const sum = function (a, b, c = 0) {
//   return a + b + c;
// };

// console.log(sum(1, 5));

// const name = "Nikita";

// const logName = function (name = "No name") {
//   console.log(name);
// };
// logName();

// ------------------------------------------------------------------------------
// 1.5. Псевдомассив arguments

//  -= EXAMPLE =-

// const expression = function () {

//   let sum = 0;
//   for (const arg of arguments) {
//     console.log(arg);
//     sum += arg;
//   }
//   console.log(sum);
// };

// expression(1, 2, 3, 4);

// ------------------------------------------------------------------------------
// 1.6. Способы преобразовать псевдомассив

// //  -= EXAMPLE =-
// const expression = function () {
//   const arr = Array.from(arguments);
//   console.log("arguments", arguments);
//   console.log("arr", arr);
//   console.log(arr.slice(2, 4));
// };

// expression(1, 2, 3, 4, 2, 3, 4, 5, 6, 6);
//  -= EXAMPLE =-
// const expression = function (a = 0, b = 0, ...rest) {
//   //0, null, undefined,'', NaN, false,
//   let thirdArg = 0;
//   if (rest[3]) {
//     thirdArg = rest[3]
//   }
//   const result = a + b + thirdArg;
//   console.log("result", result);

//   console.dir(arguments);
//   console.dir(rest);
// };

// expression(1, 2);
// ------------------------------------------------------------------------------
// 1.7. Паттерн Guard Clause

// const getResult = function (operator = "+", num1 = 0, num2 = 0) {
//   if (num1 === 0 || num2 === 0) return "noResult";

//   if (operator === "+") {
//     return num1 + num2;
//   }
//   if (operator === "-") {
//     return num1 - num2;
//   }
//   if (operator === "*") {
//     return num1 * num2;
//   }
//   if (operator === "/") {
//     return num1 / num2;
//   }
// };

// const result = getResult("/", 15, 7);
// console.log("result", result);

//  -= EXAMPLE =-
// ------------------------------------------------------------------------------
// 1.8. Объявление функции

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(1, 2));

// console.log(sum(1, 2));

// const sum = function (a, b) {
//   return a + b;
// }

//  -= EXAMPLE =-
// ==============================================================================
// 2. Область видимости

// const a = 5;

// if (true) {
//     const a = 10
//     console.log(a)
// }

// const getValue = function (value) {

//   const getSum = function () {
//     return value + 10;
//   };

//   return getSum();
// };

// console.log(getValue(10));

//==============================================================================
// ------------------------------------------------------------------------------
// 2.1. Область видимости функции

//  -= EXAMPLE =-
// ------------------------------------------------------------------------------
// 2.2. Hoisting

//  -= EXAMPLE =-
// ==============================================================================
// 3. Стрелочные функции

//  -= EXAMPLE =-
// ==============================================================================
// ------------------------------------------------------------------------------
// 3.1. Стрелочные функции и arguments

//  -= EXAMPLE =-

// const sum = (z, b) => z + b;
// const min = (a, b) => a - b;
// const mult = (a, b) => a * b;
// const dev = (a, b) => a / b;

// const calculator = (a, operator, b) => {
//   switch (operator) {
//     case "+":
//       return sum(a, b);
//     case "-":
//       return min(a, b);
//     case "*":
//       return mult(a, b);
//     case "/":
//       return dev(a, b);
//     default:
//       return 0;
//   }
// };

// const result = calculator(3, "/", 2);
// console.log(result);
// const name = "Alex";

// console.log(`${name}`);

// const arr = ["Alex", "Nikita"];
// for (const name of arr) {
//   const index = arr.indexOf(name);
//   console.log(`${index} = ${name}`);
// }

// const arr = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 0];
// const result = [...arr, ...arr2];
// console.log(result);




// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// console.log(houses.slice(1,3));
// const housesInDebt = [...houses.slice(0, 4), ...houses.slice(5)];