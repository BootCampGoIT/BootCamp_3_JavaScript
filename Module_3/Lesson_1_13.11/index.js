// 1. Объекты
// ==============================================================================
// 1.1. Создание объекта
// ------------------------------------------------------------------------------
// const user = {};
// console.log(user);

// const user = {
//   name: "Nikita",
//   age: 30,
//   status: "Student",
//   course: "Bootcamp 10",
// };

// console.log(user);
// ------------------------------------------------------------------------------
// 1.2. Доступ к свойствам
// ------------------------------------------------------------------------------
// user.name
// object["name"]

// const user = {
//   name: "Nikita",
//   age: 30,
//   status: "Student",
//   course: "Bootcamp 10",
// };

// const keys = ["name", "age", "status"];

// const getInfo = () => {
//     console.group();
//     for (const key of keys) {
//         console.log(user[key]);
//     }
//     console.groupEnd()
// }
// getInfo()

// // Обращение к свойству
// console.log(user.age);
// console.log(user["age"]);

// const lesson = {
//   time: "3 hours",
//   studentsCount: 24,
//   studentsInfo: [
//     {
//       id: "g23jhg23423",
//       name: "Alex",
//       status: "student",
//       info: {
//         age: 25,
//         skills: [
//           {
//             stack: "HTML/CS",
//             time: "100 hours",
//             tutor: "Sergii",
//           },
//           {
//             stack: "JavaScript",
//           },
//         ],
//       },
//     },
//     {
//       id: "g23jhg23423",
//       name: "Nikita",
//       status: "student",
//       studentInfo: {},
//     },
//   ],
//   tutor: "Andrii",
//   currentLesson: "Objects",

// };

// lesson.studentsInfo[0].info.skills[0].stack = "HTML/CSS"
// console.log(lesson.studentsInfo[0].info.skills[0].stack);
// --------------------------------------
// const time = "4 hours";
// const tutor = "Andrii";

// const newLesson = {};

// newLesson.time = time;
// newLesson.tutor = tutor;
// newLesson.studentsCount = 25;
// newLesson.a = 234;
// newLesson.z = 25;

// console.log(newLesson.a);

// Запись в свойство

// ------------------------------------------------------------------------------
// 1.3. Удаление свойств
// ------------------------------------------------------------------------------
// const user = {
//     name: "Nikita",
//     age: 30,
//     status: "Student",
//     course: "Bootcamp 10"
// }

// const person = user;

// person.age = 31;

// console.log(user);

// // delete user.course;
// delete user["status"];
// console.log(user)

// ------------------------------------------------------------------------------
// 1.4. Отсутствующие свойства
// ------------------------------------------------------------------------------

// const user = {
//   name: "Nikita",
//   age: 30,
//   status: "Student",
//   course: "Bootcamp 10",
// };

// // console.log(user.isOnline); // undefined
// const getStatus = () =>
//   user.isOnline ? console.log(user.isOnline) : (user.isOnline = false);

// // if (user.isOnline) {
// //   console.log(user.isOnline);
// // } else user.isOnline = false;

// console.log(user);

// ------------------------------------------------------------------------------
// 1.5. Короткие свойства
// ------------------------------------------------------------------------------

// const name = "Nikita";
// const age = 30;
// const status = "Student";

// const user = {
//   name,
//   age,
//   status,
// };

// ------------------------------------------------------------------------------
// 1.6. Вычисляемые свойства
// ------------------------------------------------------------------------------

// const key1 = "name";
// const key2 = "age";

// const user = {};

// user[key1] = "Alex"

// // user[key1] = "Nikita";

// console.log(user);
// ----------------------------------

// const userFunc = (key1, key2) => {

//   const getNewKey = function () {
//     return "studentInfo";
//   };

//   const getInfo = function () {
//     return "Some information";
//   };

//   const user = {
//     [key1]: "Nikita",
//     [key2]: 30,
//     [getNewKey()]: getInfo(),
//   };

//   console.log(`${key1}: ${user[key1]}`);
//   console.log(`${key2}: ${user[key2]}`);

//   return user;
// };

// const result = userFunc("name", "age");

// console.log(result);

// ------------------------------------------------------------------------------
// 1.7. Методы объекта
// ------------------------------------------------------------------------------

// const hummer = {
//   length: 250,
//   width: 100,
//     // property: function () {
//     //   //ES5
//     //   console.log("I can beet");
//     // },
//   property() {
//     //ES6
//     console.log("Can fly");
//   },

//   color: "red",
// };

// const math = {
//   min(a, b, c, d, e) {
//     return a;
//   },
//   max(a, b, c, d, e) {
//     return e;
//   },
// };

// // const result = math.min(1,2,3,4,5)
// const result = math.max(1, 2, 3, 4, 5);
// console.log(result);

// const min = Math.min(1, 2, 3, 4, 5);
// console.log(min)

// hummer.property();
// hummer.property();

// const user = {
//   name: "alex",
//   speak: function () {
//     return console.log("hello!");
//   },

// };

// user.speak();

// hummer.property();

// ------------------------------------------------------------------------------
// 1.8. Доступ к объекту через this
// ------------------------------------------------------------------------------

// const user = {
//   name: "Nikita",
//   age: 30,
//   status: "Student",

//   getInfo() {
//     console.group(`${this.name}'s info:`);
//     console.log(this.name);
//     console.log(this.age);
//     console.log(this.status);
//     console.groupEnd();
//   },

//   getInfoByKey(key){
//       console.log(this[key]);
//   },

//   setStatus(status) {
//     this.status = status;
//   },
// };

// user.getInfoByKey("status")
// user.getInfoByKey("name")

// const person = user;
// const data = person;

// user.getInfo()

// function logger() {
//   console.group(`${this.name}'s info`);
//   console.log(this.color);
//   console.log(this.maxSpeed);
//   console.groupEnd();
// }

// const auto1 = {
//   name: "BMW",
//   color: "red",
//   maxSpeed: 300,
//   logger() {
//     console.group(`${this.name}'s info`);
//     console.log(this.color);
//     console.log(this.maxSpeed);
//     console.groupEnd();
//   }
// };

// const auto2 = {
//   name: "Peugeot",
//   color: "white",
//   maxSpeed: 200,
//   logger() {
//     console.group(`${this.name}'s info`);
//     console.log(this.color);
//     console.log(this.maxSpeed);
//     console.groupEnd();
//   }
// };

// auto1.logger();
// auto2.logger();

// user.getInfo()

// ==============================================================================
// 2. Методы перебора объектов
// ==============================================================================
// Объект не является итерируемым!

// ------------------------------------------------------------------------------
// 2.1. Цикл for...in
// ------------------------------------------------------------------------------
// for (key in object) {
//     // statements
//   }

// const user = {
//   name: "Nikita",
//   age: 30,
//   status: "Student",
//   func: function(){
//       console.log("hello")
//   }
// };

// // console.log(user["name"])
// // console.log(user["age"])
// // console.log(user["status"])

// for (const key in user) {
//   console.log(user[key]);
// }

// for (const key in user) {
//   console.log(user[key]);
// }

// ------------------------------------------------------------------------------
// 2.2. Object.keys()
// ------------------------------------------------------------------------------
// Все объекты происходят от конструктора Object
// Object.keys(obj) - вернет массив, с ключами объекта obj в виде строк.

// console.dir(Object)

// const user = {
//   name: "Nikita",
//   age: 30,
//   status: "Student",
// };

// const keys = Object.keys(user);///["name", "age", "status"]
// console.log('keys', keys)
// ------------------------------------------------------------------------------
// 2.3. Object.keys()
// ------------------------------------------------------------------------------
// const user = {
//   name: "Nikita",
//   age: 30,
//   status: "Student",
// };
// const values = Object.values(user);
// console.log('values', values);

// const value = "Nikita";

// for (const key in user){
//     if (user[key] === value)  console.log(key);
// }

// ------------------------------------------------------------------------------
// 2.3. Object.entries()
// ------------------------------------------------------------------------------

// const user = {
//   name: "Nikita",
//   age: 30,
//   status: "Student",
// };

// const keys = Object.keys(user);
// console.log('keys', keys)
// const values = Object.values(user);
// console.log('values', values)
// const entries = Object.entries(user);
// console.log('entries', entries);

// for (const prop of values){
//     if (prop[1] === 30) console.log(prop[0])
// }

// const keys = Object.keys(user);
// for (const key of keys) {
//     console.log('Value: ', user[key]);
//   }

// const values = Object.entries(user);
// for (const entry of entries) {
//     const key = entry[0];
//     const value = entry[1];

//     console.log(`${key}: ${value}`);
//   }

// let total = 0;
// const values = Object.values(user);
// for (const value of values) {
//   total += value;
// }

// ==============================================================================
// 3. Операции spread и rest
// ==============================================================================
// Для работы с итерируемыми объектами, такими как строка, массив или объект.
// ------------------------------------------------------------------------------
// 3.1. Операция spread
// ------------------------------------------------------------------------------

// 3.1.1. Распыление аргументов
// ------------------------------------------------------------------------------
// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(Math.min(...numbers));
// const min = Math.min(...numbers);

// ------------------------------------------------------------------------------
// 3.1.2 Распыление в массив
// ------------------------------------------------------------------------------
// const str = "123456";

// const letters = [...str];
// const res = letters.join("");
// console.log(res);

// console.log(Math.max(...letters))

// ------------------------------------------------------------------------------
// 3.1.3 Распыление массивов
// ------------------------------------------------------------------------------
// const users = ["Alex", "Nikita"];
// const data = ["Bob", "Mitchel"];

// const concat = [...users, ...data];

// console.log('concat', concat)

// ------------------------------------------------------------------------------
// 3.1.4 const shallowCopy
// ПОВЕРХНОСТНОЕ КОПИРОВАНИЕ
// ------------------------------------------------------------------------------
// const users = ["Alex", "Nikita"];

// const shallowCopy = [...users];
// console.log(shallowCopy);

// const users = [
//   { name: "Nikita", age: 20 },
//   { name: "Nikita", age: 20 },
// ];

// const shallow = [...users];
// console.log(users);
// shallow.pop();
// // shallow.push({name: "Bob", age: 40})
// console.log(shallow);


// ------------------------------------------------------------------------------
// 3.1.5. Распыление объектов
// ------------------------------------------------------------------------------
// const user = {
//   name: "Alex",
//   age: 25,
// };

// const info = {
//   status: "student",
//   homeworks: ["hw-1", "hw-2", "hw-3"],
//   age: 40,
// };

// const userInfo = { ...user, ...info };
// console.log('userInfo', userInfo)

// const resultObject = Object.assign({}, user, info);
// ==============================================================================
// 4. Операция rest
// ==============================================================================
// Позволяет скопировать группу элементов коллекции в новую коллекцию, не изменяя оригинальную.
// ------------------------------------------------------------------------------
// 4.1. Операция rest
// ------------------------------------------------------------------------------
const add = function (...args) {
  console.log(args);
};

add(1, 2, 3);
add(1, 2, 3, 4, 5);

const add = function (a,b,...args) {
  console.log(args);
};

add(1, 2, 3);
add(1, 2, 3, 4, 5);
// ==============================================================================
// 5. Деструктуризация объектов
// ==============================================================================

// const name = "Nikita";
// const age = 30;
// const status = "Student";

// const setInfo = (info) => {

//     const user = {
//       name,
//       age,
//       status,
//     };

// }

// const user = {
//   name: "Alex",
//   age: 25,
//   status: "Student",
// };

// const name = user.name;

// const {name, age} = user;

// const {name: userName, age: userAge} = user;

// const { name, ...rest } = user;
// ==============================================================================
// 6. Деструктуризация массивов
// ==============================================================================
// const numbers = [1, 2, 3, 4, 5];
// const [num1, num2, num3, ...rest] = numbers;
// console.log("number1", rest);

// const numbers = [1, 2, 3];
// let [a, b, c] = numbers;

// const numbers = [1, 2, 3];
// let a, b, c;
// [a, b, c] = numbers;

// [, , c] = numbers;
