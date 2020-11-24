// import { tweets } from "./src/data.js";
// import object from "./src/data.js";

// console.log(object.tweets);



// Императивный подход
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// console.log(filteredNumbers); // [4, 5]
// ===============================================================

// const func =() => {
//     return 5;
// }
// console.log(func())

// // Декларативный подход
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3);

// console.log(filteredNumbers); // [4, 5]

// ===================================================================

// const products = [
//   {
//     id: "1",
//     name: "Milk",
//     price: 20,
//     quantity: 30,
//     isSale: true,
//     term: "30.11.2020",
//   },
//   {
//     id: "2",
//     name: "Juice",
//     price: 32,
//     quantity: 44,
//     isSale: false,
//     term: "20.11.2020",
//   },
//   {
//     id: "3",
//     name: "Water",
//     price: 27,
//     quantity: 23,
//     isSale: false,
//     term: "12.12.2020",
//   },
//   {
//     id: "4",
//     name: "Fresh juice",
//     price: 45,
//     quantity: 50,
//     isSale: true,
//     term: "30.12.2020",
//   },
// ];

// =======================================
// const product = {
//   array: [, 2, 3, 4, 5],
//   forEach(callback) {
//     for (let i = 0; i < this.array.length; i += 1) {
//       callback(this.array[i], i, this.array);
//     }
//   },
// };

// product.forEach((product, index, arr) => console.log(product));
// ==============================================
// const products = [
//     {
//       id: "1",
//       name: "Milk",
//       price: 20,
//       quantity: 30,
//       isSale: true,
//       term: "30.11.2020",
//     },
//     {
//       id: "2",
//       name: "Juice",
//       price: 32,
//       quantity: 44,
//       isSale: false,
//       term: "20.11.2020",
//     },
//     {
//       id: "3",
//       name: "Water",
//       price: 27,
//       quantity: 23,
//       isSale: false,
//       term: "12.12.2020",
//     },
//     {
//       id: "4",
//       name: "Fresh juice",
//       price: 45,
//       quantity: 50,
//       isSale: true,
//       term: "30.12.2020",
//     },
//   ];

// =========== Array.prototype.forEach() ================
// const products = [
//     {
//       id: "1",
//       name: "Milk",
//       price: 20,
//       quantity: 30,
//       isSale: true,
//       term: "30.11.2020",
//     },
//     {
//       id: "2",
//       name: "Juice",
//       price: 32,
//       quantity: 44,
//       isSale: false,
//       term: "20.11.2020",
//     },
//     {
//       id: "3",
//       name: "Water",
//       price: 27,
//       quantity: 23,
//       isSale: false,
//       term: "12.12.2020",
//     },
//     {
//       id: "4",
//       name: "Fresh juice",
//       price: 45,
//       quantity: 50,
//       isSale: true,
//       term: "30.12.2020",
//     },
//   ];

// products.forEach( (product, index, arr) => console.log(product))

// products.forEach((product, index, arr) => console.log(product));

// =========== Array.prototype.map() ================
// const products = [
//   {
//     id: "1",
//     name: "Milk",
//     price: 20,
//     quantity: 30,
//     isSale: true,
//     term: "30.11.2020",
//   },
//   {
//     id: "2",
//     name: "Juice",
//     price: 32,
//     quantity: 44,
//     isSale: false,
//     term: "20.11.2020",
//   },
//   {
//     id: "3",
//     name: "Water",
//     price: 27,
//     quantity: 23,
//     isSale: false,
//     term: "12.12.2020",
//   },
//   {
//     id: "4",
//     name: "Fresh juice",
//     price: 45,
//     quantity: 50,
//     isSale: true,
//     term: "30.12.2020",
//   },
// ];

// const result = products.map((item) => ({
//   ...item,
//   quantity: item.quantity + 100,
// }));

// const result = products.map((item) => ({ id: item.id, name: item.name }));
// const result = products.map(({ id, name }) => ({ id, name }));

// =============================

// const arr = [1, 2, 3, 4, 5];
// const result = arr.map((elem) => 10 + elem); //[11,12 ...]
// console.log(result); //

// ========================================
// const links = ["HTML/CSS", "JavaScript", "React"];
// // const links = ["<li>HTML/CSS</li>", "<li>JavaScript</li>", "<li>React</li>"];
// const markup = links.map((item) => `<li>${item}</li>`); //[]

// const ref = document.querySelector(".navigation");
// ref.innerHTML = markup.join("");

// console.log(markup);

// const result = products.map((item) => ({
//   id: item.id,
//   name: item.name,
//   price: item.price,
// }));
// console.log(result)

// =========== Array.prototype.filter() ================

// const products = [
//   {
//     id: "1",
//     name: "Milk",
//     price: 20,
//     quantity: 30,
//     isSale: true,
//     term: "30.11.2020",
//   },
//   {
//     id: "2",
//     name: "Juice",
//     price: 32,
//     quantity: 44,
//     isSale: false,
//     term: "20.11.2020",
//   },
//   {
//     id: "3",
//     name: "Water",
//     price: 27,
//     quantity: 23,
//     isSale: false,
//     term: "12.12.2020",
//   },
//   {
//     id: "4",
//     name: "Fresh juice",
//     price: 45,
//     quantity: 50,
//     isSale: true,
//     term: "30.12.2020",
//   },
// ];

// const find = () => {
//   for (const item of products) {
//     if (item.name.toLowerCase().includes("juice")) {
//       return item;
//     }
//   }
// };

// const result = products.filter((item) => item.isSale && item.price < 30); //[]
// console.log(result);

// =========== Array.prototype.find() ================
// const result = products.find((item) =>
//   item.name.toLowerCase().includes("juice")
// );
// console.log(result);

// =========== Array.prototype.every() ================
// const products = [
//   {
//     id: "1",
//     name: "Milk",
//     price: 20,
//     quantity: 30,
//     isSale: true,
//     term: "30.11.2020",
//   },
//   {
//     id: "2",
//     name: "Juice",
//     price: 32,
//     quantity: 44,
//     isSale: true,
//     term: "20.11.2020",
//   },
//   {
//     id: "3",
//     name: "Water",
//     price: 27,
//     quantity: 23,
//     isSale: true,
//     term: "12.12.2020",
//   },
//   {
//     id: "4",
//     name: "Fresh juice",
//     price: 45,
//     quantity: 50,
//     isSale: true,
//     term: "30.12.2020",
//   },
// ];

// const isSale = products.every((product) => product.price > 10);
// const isSale = products.every((product) => product.price > 10);
// console.log(isSale); //true || false

// =========== Array.prototype.some() ================
// const isSale = products.some((product) => product.isSale);
// console.log(isSale); //true || false

// =========== Array.prototype.reduce() ================

// const result = products.reduce((acc, item) => {
//   acc += item.quantity;
//   return acc;
// }, 0); //147
// console.log(result);

// ===========================================
// let sum = 0;

// for (const product of products) {
//   sum += product.quantity;
// }

// console.log(sum);
// ===========================================
// const links = ["HTML/CSS", "JavaScript", "React"];
// const html = ["Module 1", "Module 2", "Module 3"];

// const navigation = (array, place) => {
//   const createMarkup = () => {
//     return array.reduce((acc, link) => {
//       acc += `<li><a src="#" alt="link">${link}</a></li>`;
//       return acc;
//     }, "");
//   };
//   place.innerHTML = createMarkup();
// };

// const place = document.querySelector(".navigation");
// const place2 = document.querySelector(".sideBarNavigation");

// navigation(links, place);
// navigation(html, place2);
// =========================================================

// document.querySelector(".navigation").innerHTML = createMarkup(links);
// document.querySelector(".sideBarNavigation").innerHTML = createMarkup(html);

// class MarkupConstructor {
//   constructor(arr) {
//     this.arr = arr;
//   }
//   createMarkup() {
//     return this.arr.reduce((acc, link) => {
//       acc += `<li><a src="#" alt="link">${link}</a></li>`;
//       return acc;
//     }, "");
//   }
// }

// const object = new MarkupConstructor(links);
// console.log(object);

// const markup = object.createMarkup();
// console.log(markup)

// -----------------------------------------------

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const tags = tweets.reduce((acc, tweet) => {
//   acc.push(1, 2, 3, 4, 5, ...tweet.tags);

//   return acc;
// }, []);

// console.log(tags);

// =========== Array.prototype.sort() ================

// var numbers = [4, 2, 5, 1, 3];

// numbers.sort((a, b) => a - b);

// console.log(numbers); // [1, 2, 3, 4, 5]

// const str = ["lorem", "ipsum", "dolor", "sit", "amet"];
// const result = str.sort();
// console.log(result);

// const array = ["js", "nodejs", "react", "js", "nodejs"];
// const set = new Set(array);
// console.log([...set]);

// =========== Chaining ================
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const result = tweets
//   .filter((item) => item.likes >= 8)
//   .reduce((acc, item) => {
//     acc.push(...item.tags);
//     return acc;
//   }, [])
//   .sort();

// console.log(result);

// ===================================
