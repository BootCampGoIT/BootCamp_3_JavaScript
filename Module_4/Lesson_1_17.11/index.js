// ==========================================================================
// 1. Функции обратного вызова
// ==========================================================================

// const sum = (a, b) => a + b;
// const min = (a, b) => a - b;
// const mult = (a, b) => a * b;
// const dev = (a, b) => a / b;

// const calculator = (operator, a, b) => {
//   switch (operator) {
//     case "+":
//       console.log(sum(a, b));
//       break;
//     case "-":
//       console.log(min(a, b));
//       break;
//     case "*":
//       console.log(mult(a, b));
//       break;
//     case "/":
//       console.log(dev(a, b));
//       break;

//     default:
//       console.log("Error");
//       break;
//   }
// };

// calculator("+", 15, 10);

// ---------------------------------------------------------
// const sum = (a, b) => console.log(a + b);
// const min = (a, b) => console.log(a - b);
// const mult = (a, b) => console.log(a * b);
// const dev = (a, b) => console.log(a / b);

// const calculator = (callback, a, b) => {
//     callback(a, b);
// };

// calculator(sum, 15, 10);
// calculator(min, 15, 10);
// calculator(mult, 15, 10);
// calculator(dev, 15, 10);

// -----------------------------------------------------

// const calculator = (callback) => {
//     const a = 15;
//     const b = 10;
//     callback(a, b);
// };

// calculator((a, b) => console.log(a + b));

// --------------------------------------------------------

// const repeat = (n, action) => {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// const labels = [];

// repeat(5, (value) => {
//   labels.push(`Label ${value + 1}`);
// });

//   console.log(labels); // ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]

// --------------------
// let isMobile = false;

// (function getValue() {
//   if (true) {
//     isMobile = true;
//   }
// })();

// ------------

// const getResult = () => {
//     console.log("Hello")
// }

// getResult()

// --------------------------------------------
// const printMessage = function (message) {

//   console.log(message);
// };

// const higherOrderFunction = function (callback) {

//   const string = "HOFs are awesome";

//   callback(string);

// };

// higherOrderFunction(printMessage);
// ------------------------------------------

// function getResult(a) {
//   console.log(a);
//   return function (b) {
//     console.log(b);
//   };
// }

// getResult(5)(111111);

// ==========================================================================
// 2. Стек вызовов и лексическое окружениу
// ==========================================================================

// const a = 10;

// const func1 = function () {
//   return 5 + 10;
// };

// const func2 = function () {
//   return 10 + 20;
// };

// const mainFunc = function () {
//   const b = 20;
//   return func1() + func2(); //15 + 30
// };

// const res = mainFunc();

// const global = {
//   a: 10,
//   func1: function(){},
//   func2: function(){},
//   res: 45,
// };

// ==========================================================================
// 3. Замыкания

// function createRange(position) {
//   return function (step) {
//     return (position += step);
//   };
// }

// const pictureRange = createRange(20)(3)
// console.log(pictureRange(2));

// console.log('---------------------------')

// const volumeRange = createRange(50);
// console.log(volumeRange(5))


//--------------------------------

function createRange(position = 50) {
    return function (step = 2) {
      return (position += step);
    };
  }
  
  const pictureRange = createRange(20)
  console.log(pictureRange(45));
  
  console.log('---------------------------')
  
//   const volumeRange = createRange(50);
//   console.log(volumeRange(5))




// const global = {
//     createRange: {
//         position: 2,
//         someFunc: function(){}
//     },
//     pictureRange: someFunc
// }

// ==========================================================================

// ==========================================================================
// 4. Контекст (this)
// ==========================================================================
// function getContext() {
//   console.log(this);
// }
// getContext()
// function getInfo() {
//   // console.log(this);
//   console.group(`${this.name}'s info: `);
//   console.log(`Name: ${this.name}`);
//   console.log(`Age: ${this.age}`);
//   console.groupEnd();
// }

// const getHello = function(){
//     console.log("Hello")
// }

// const getNewHello = getHello;

// getNewHello()

// function getInfo() {

//   console.group(`${this.name}'s info: `);
//   console.log(`Name: ${this.name}`);
//   console.log(`Age: ${this.age}`);
//   console.groupEnd();
// }

// getInfo();

// function getInfo(status, bootCampNumber) {
//     console.group(`${this.name}'s info: `);
//     console.log(`Name: ${this.name}`);
//     console.log(`Age: ${this.age}`);
//     console.log(`Status: ${status}`);
//     console.log(`BootCampNumber: ${bootCampNumber}`);
//     console.groupEnd();
//   }

// const nikita = {
//   name: "Nikita",
//   age: 45,
//   getInfo
// };

// const alex = {
//   name: "Alex",
//   age: 25,
// };

// const bootCampDataTemplate = {
//     status: "student",
//     number: 25
// }
// const data = Object.values(bootCampDataTemplate)

// const data = ["student", 25];

// nikita.getInfo.call(alex, "student", 25);
// nikita.getInfo.apply(alex, data);

// const ref = nikita.getInfo.bind(alex, "student", 25);
// ref();

// getInfo(alex.name, alex.age)

// const global = {
//   getInfo: function () {},

//   alex: {
//      name: "Alex",
//      age: 25,
//      getInfo
// };

// console.log(this);

// const product = {
//     name: "Milk",
//     price: 100,
//     getInfo(){
//         console.log(this.name)
//         console.log(this.price)
//     }
// };

// const mill = {
//     name: "das",
//     price: 20
// }

// const ref = product.getInfo.bind(mill);

// ref()




