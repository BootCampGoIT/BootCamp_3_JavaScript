console.log("Lesson 1");

// ==============================================================================
// 1. Массивы
// ==============================================================================

// 1.1. Создание

//  -= EXAMPLE =-
// const arr = [];
// const users = ["Nikita", "Alex", "Bob"]; //array
// const numbers = [1, 2, 3, 4, 5]; //array

// ------------------------------------------------------------------------------
// 1.2. Доступ к элементам
// const str = "Lorem ipsum dolor sit amet.";
// console.log(str[0])

// const users = [
//   "Nikita",
//   "Alex",
//   "Bob",
//   "Nikita",
//   "Alex",
//   "Bob",
//   "Nikita",
//   "Alex",
//   "Bob",
// ];
// const lastPosition = users.length - 1;
// console.log(lastPosition);
// console.log(users[8]);

// ------------------------------------------------------------------------------

// 1.3. Переопределение

//  -= EXAMPLE =-
// const users = ["Alex", "Bob", "Nikita", "Alex"];

// users[0] = "Andrii";

// console.log(users);
// const lastPosition = users.length - 1;
// users[lastPosition] = "Jhon";
// console.log(users[lastPosition]);

// ------------------------------------------------------------------------------
// 1.4. Длина массива
// const users = ["Alex", "Bob", "Nik// console.log(users);

// const persons = [
//   { id: "fgweewkwg3244324", userName: "Alex", age: 25 },
//   { id: "fgweewkssdfswg3244324", userName: "Bob", age: 35 },
// ];ita", "Alex"];
// console.log(users.length);

// ------------------------------------------------------------------------------

// 1.5. Итерация по массиву

//  -= EXAMPLE =-
// const users = [
//   "Alex",
//   "Bob",
//   "Nikita",
//   "Alex",
//   "Andrii",
//   "Bob",
//   "Nikita",
//   "Alex",
//   "Andrii",
//   "Bob",
//   "Nikita",
//   "Alex",
// ];

// // let users = "Lorem ipsum dolor sit amet.";

// for (let i = 0; i < users.length; i += 1) {
//   if (users[i] === "Alex") {
//     users[i] = "Dreyk";
//   }
//   console.log(`${i + 1}: ${users[i]}`);
// }

// ------------------------------------------------------------------------------

// 1.6. Цикл for...of

//  -= EXAMPLE =-
// const users = ["Alex", "Bob", "Nikita"];

// const numbers = [1, 2, 3, 4, 5];

// for (let user of users) {
//     user === "Alex" && (user = "Andrii");
// //   user === "Alex" ? (user = "Andrii") : (user = user);
//   console.log(user);
// }

// for (const number of numbers) {
//   console.log(number);
// }

// for (let i = 0; i < users.length; i += 1) {
//   if (users[i] === "Alex") {
//     users[i] = "Dreyk";
//   }
//   console.log(`${i + 1}: ${users[i]}`);
// }

// ------------------------------------------------------------------------------

// 1.7 Инструкции break и continue

//  -= EXAMPLE =-
// const users = [
//   "Alex",
//   "Bob",
//   "Nikita",
//   "Alex",
//   "Bob",
//   "Nikita",
//   "Alex",
//   "Bob",
//   "Nikita",
//   "Alex",
//   "Bob",
//   "Nikita",
// ];

// // const person = "Bob";

// // for (const user of users) {
// //   if (user === person) {
// //     console.log(user);
// //     break;
// //   }
// // }
// console.log("users", users);

// const person = "Bob";

// for (const user of users) {
//   if (user === "Bob") {
//     continue;
//   }
//   console.log(user);
// }

// console.log("users", users);

// example 2
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (const number of numbers) {
//   if (number < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${number}`); // 18, 29, 34
// }

// ------------------------------------------------------------------------------

// 1.8 Многомерные массивы

//  -= EXAMPLE =-

// const matrix = [
//   [1, 2, 3, ["Alex", 15], 5, 6, 7, 8],
//   [4, 5, 6],
//   [7, 8, 9, 23, 32],
// ];

// console.log(matrix[0]);
// console.log(matrix[0][3]);
// console.log(matrix[0][3][0]);

//  -= EXAMPLE =-
// const matrix = [
//   [1, 2, 3, , , , 12],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;
// for (const element of matrix) {
//     console.log(element);
//   for (const item of element) {
//     console.log(item);
//     total += (item !== undefined) ? item : 0 ;
//   }
// }
// console.log(total)

//  -= EXAMPLE =-
// const matrix = [
//   [1, 2, 3, , , , 12],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;
// for (let i = 0; i < matrix.length; i += 1) {
//     console.log('Подмассив матрицы matrix[i]: ', matrix[i]);//matrix[0] [1,2,3]
//     for (let j = 0; j < matrix[i].length; j += 1) { //[1,2,3]
//       console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
//       total += matrix[i][j];
//     }
//   }
//   console.log(total)

// ==============================================
// const array = [1, 2, 3, 4, 5];
// array[10] = 5;
// console.log(array);
// console.log(array[7]);

// ==============================================================================
// 2. Присвоение по ссылке и по значению

//  -= EXAMPLE =-

// let a = 5;
// let b = a;

// b += 1;
// console.log(b);
// console.log(a)

// const numbers = [1, 2, 3, 4, 5];
// const numbersCopy = numbers;

// console.log(numbers);
// console.log(numbersCopy);
// console.log("------------------")

// numbersCopy[0] = 100;
// console.log(numbersCopy);
// console.log(numbers);

// const data = ["Alex", "Nikita", "Bob"];

// // -------------------------------
// const users = data;
// users[data.length] = "Jack";
// users[data.length] = "Klark";

// // -------------------
// const persons = data;

// persons[0] = "Andrii";
// console.log(persons);

// console.log(data);

// ==============================================================================

// ==============================================================================
// 3. Методы массивов
// ==============================================================================

// 3.1. Методы split() и join()

// //  -= EXAMPLE =-
// let string = "Lorem ipsum dolor sit amet.";

// const strArr = string.split("");
// console.log(strArr)

// // const string = new String("Lorem ipsum dolor sit amet.");
// // console.dir(string)

// // ["Lorem", "ipsum", dolor, sit, amet]

// //  -= EXAMPLE =-

// for (let i = 0; i < strArr.length; i += 1) {
//   if (strArr[i] === "o") {
//     strArr[i] = "a";
//   }
//   console.log(`${i + 1}: ${strArr[i]}`);
// }

// const result = strArr.join("");
// console.log(result)

//  -= EXAMPLE =-

// const str = "as dsad sad sad sad a";
// const arr = str.split(" ");
// // const arr = str.split(" ", 5);
// console.log(arr);
// const result = arr.join(",");
// console.log(result)

//  -= EXAMPLE =-

// const str = "Lorem, ipsum sit amet";
// const words = str.split(" ");
// console.log(words);
// for (let word of words) {
//   if (word.includes(",") || word.includes(".")) {
//     // word.length = word.length - 1;
//     console.log(word);
//   }
// }
// console.log(words);

// ------------------------------------------------------------------------------

// 3.2. Методы indexOf() и includes()

//  -= EXAMPLE =-
// const users = ["Alex", "Nikita", "Max", "Alex", "Nikita", "Max"];
// const numbers = [1, 2, 3, 4, 5];

// const index = users.indexOf("Max"); //2
// // const index1 = users.indexOf("Maxim"); //-1
// console.log(index);
// console.log(index1);

// console.log(users[index]);

// console.log(users.includes("Max"));
// console.log(numbers.includes(31));

// new Set(users)

// ------------------------------------------------------------------------------

// 3.3. Проверка множественных условий с includes()

//  -= EXAMPLE =-
const str = "Lorem ipsum dolor sit amet.";
// const stopWords = ["sit", "ipsum"];

// const words = str.split(" "); //["Lorem", "ipsum", "dolor", "sit", "amet."]

// for (const stopWord of stopWords) {
//   if (words.includes(stopWord)) {
//     const index = words.indexOf(stopWord);
//     words.splice(index, 1);
//   }
// }

// console.log(words);

// -----------------------------------------------------------------------------

// const words = str.split(" "); //["Lorem", "ipsum", "dolor", "sit", "amet."]

// const result = [];

// for (const word of words) {
//   if (word === "sit" || word === "ipsum") {
//     continue;
//   }
//   result[result.length] = word;
// }

// console.log(result);
// ------------------------------------------------------------------------------

// 4.4. Методы push(), pop(), shift(), unshift()
// ------------------------------------------------------------------------------

// 4.4.1 Методы push(), pop()

//  -= EXAMPLE =-
// ------------------------------------------------------------------------------

// 4.4.2 shift(), unshift()

//  -= EXAMPLE =-
// ------------------------------------------------------------------------------

// 4.5 Метод slice()

//  -= EXAMPLE =-
// ------------------------------------------------------------------------------

// 4.6 Метод splice()

//  -= EXAMPLE =-

// ------------------------------------------------------------------------------

// 4.6.1. Удаление элементов массива

//  -= EXAMPLE =-
// ------------------------------------------------------------------------------

// 4.6.2. Разворачивание массива. Метод reverse()

//  -= EXAMPLE =-
// ------------------------------------------------------------------------------

// 4.6.2 Вставка элементов в массив

//  -= EXAMPLE =-
// ------------------------------------------------------------------------------

// 4.6.3 Замена элементов массива

//  -= EXAMPLE =-
// ------------------------------------------------------------------------------

// 4.7. Метод concat()

//  -= EXAMPLE =-
