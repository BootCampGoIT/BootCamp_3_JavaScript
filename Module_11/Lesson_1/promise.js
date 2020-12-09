// const randomNumber = Math.random();
// console.log(randomNumber);

// const gettingData = new Promise((resolve, reject) => {
//   if (randomNumber > 0.5) {
//     resolve("Hello");
//   } else reject("By");

//   //   setTimeout(() => {
//   //     console.log("getting Data from DB");
//   //     const data = {
//   //       product: "Milk",
//   //       price: 20,
//   //       id: "gytfgyhkj",
//   //     };
//   //     // resolve(data);
//   //     reject("No server connection");
//   //   }, 3000);
// });

// gettingData
//   .then((data) => {
//     let result = data + " my";
//     return result;
//   })
//   .then((response) => response + " friend")
//   .then((response) => response + "!")
//   .then((response) => console.log(response))
//   .catch((response) => console.log(response))
//   .finally(() => console.log("finish"));

// console.log("2020-11-02".split("-").reverse().join("."));

// ================ lesson 2 ===================================

// setTimeout(() => {
//   console.log("Могу ли я получить данные? //1s");
// }, 1000);

// setTimeout(() => {
//   console.log("Да ты можешь получить данные! //2c");
// }, 2000);

// setTimeout(() => {
//   console.log("Дай мне данные про Никиту //3c");
// }, 3000);

// setTimeout(() => {
//   console.log("Обращение к базе данныx //4s");
//   const data = {};

//   setTimeout(() => {
//     data.status = "200";
//     data.name = "Nikita";
//     data.age = 20;

//     console.log(`Сервер отдал ответ`);
//     console.log(data);
//   }, 2000);

//   setTimeout(() => {
//     console.log("Данные которорые Вы хотели ...");
//     console.log(data);
//   }, 4000);
// }, 4000);

// ======================================
// const getRandom = () => {
//   return Math.random();
// };

// const postRequestFromFront = new Promise((onResolve, onReject) => {
//   setTimeout(() => {
//     if (getRandom() < 0.9) {
//       onResolve(true);
//     }
//     onReject(false);
//   }, 2000);
// });

// // postRequestFromFront
// //   .then((response) => console.log(response))
// //   .catch((error) => console.log(error));

// const getingDataFromServer = new Promise((onResolve, onReject) => {
//   setTimeout(() => {
//     if (getRandom() < 0.9) {
//       onResolve(true);
//     }
//     onReject(false);
//   }, 2000);
// });

// const gettingDataFromDB = new Promise((onResolve, onReject) => {
//   setTimeout(() => {
//     const data = {
//       name: "Nikita",
//       age: 20,
//       status: "200",
//     };
//     const error = {
//       status: "400",
//       message: "User not found",
//     };
//     if (getRandom() > 0.5) {
//       onResolve(JSON.stringify(data));
//     } else onReject(JSON.stringify(error));
//   }, 2000);
// });

// postRequestFromFront
//   .then((response1) => {
//     console.log("response1", response1);
//     if (response1) {
//       getingDataFromServer.then((response2) => {
//         console.log("response2", response2);
//         if (response2) {
//           gettingDataFromDB
//             .then((response3) => {
//               console.log("response3", response3);
//               return JSON.parse(response3);
//             })
//             .then((data) => {
//               console.log(`Name: ${data.name}`);
//               console.log(`Name: ${data.age}`);
//             })
//             .catch((error) => {
//               const newError = JSON.parse(error);
//               console.log(`error: ${newError.message}`);
//             });
//         }
//       })
//       .catch(()=>console.log("server not found"));
//     }
//   })
//   .catch((error) => console.log(error));

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     // data handling
//   })
//   .catch((error) => {
//     // error handling
//   });


// const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA = makePromise('promiseA', 1000);
// const promiseB = makePromise('promiseB', 3000);


// Promise.all([promiseA, promiseB])
//   .then(result => console.log(result)) //["promiseA", "promiseB"]
//   .catch(err => console.log(err));


// ========


const makePromise = (text, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), delay);
  });
};

const promiseA = makePromise('promiseA', 1000);
const promiseB = makePromise('promiseB', 3000);

Promise.race([promiseA, promiseB])
  .then(result => console.log(result)) // "promiseA"
  .catch(err => console.log(err));