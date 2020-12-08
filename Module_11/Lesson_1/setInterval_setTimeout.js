// console.log("hello");
// console.log("gdfg");
// console.log("vsd");
// console.log("gdsvddvsfg");
// console.log("gdvdsdsvfg");
// console.log("gdsdvdsdsfg");

// =========================================
// function timer() {
//   console.log(Date.now());
// }

// console.log("hello");

// const timerId = setInterval(timer, 1000);
// const newtimerId = setInterval(timer, 1000);
// console.log(timerId)
// console.log(newtimerId)

// ============================================
// let i = 0;
// let timerId = setInterval(() => {
//     console.log(++i);
//     if (i >= 10) {
//         clearInterval(timerId);
//     }
// }, 1000);
// =============================================
// let start = document.querySelector("#start");
// let stop = document.querySelector("#stop");

// let timerId;

// start.addEventListener("click", function () {
//   let i = 0;

//   timerId = setInterval(() => {
//     console.log(++i);
//   }, 1000);
// });

// stop.addEventListener('click', function(){
//     clearInterval(timerId)
// })

// ===================================================
// let input = document.querySelector(".input");

// input.addEventListener("click", function () {
//     let self = this;

//   setInterval(function () {
//       console.log(self.value);
//     }, 1000);
// });

// ===================================================

// const getValue = function () {
//     console.log("hello");
// }

// setInterval(getValue, 1000)

// ================================================

// let input = document.querySelector(".input");

// input.addEventListener("click", function () {
//   function getValue(context) {
//       return function() {
//           console.log(context.value);
//       }
//   }
//   setInterval(getValue(this), 1000);
// });

// =====================================================

// function getValue(string1, string2) {
//   console.log(string1, string2);
// }

// setInterval(getValue, 1000, "Hello", "By");

// =====================================================

// function getValue(ms) {
//   console.log(`log data every ${ms} ms`);
// }

// let interval = 1000;
// setInterval(getValue, interval, interval);

// =====================================================

// const button = document.querySelector("#button");
// // console.log(button);

// button.addEventListener("click", function () {
//   let timerId = setTimeout(function () {
//     console.log("Hello");
//     clearTimeout(timerId);
//     console.log(`Timerid: ${timerId} was clear`);
//   }, 5000);
// });





