const randomNumber = Math.random();
console.log(randomNumber);

const gettingData = new Promise((resolve, reject) => {
  if (randomNumber > 0.5) {
    resolve("Hello");
  } else reject("By");

  //   setTimeout(() => {
  //     console.log("getting Data from DB");
  //     const data = {
  //       product: "Milk",
  //       price: 20,
  //       id: "gytfgyhkj",
  //     };
  //     // resolve(data);
  //     reject("No server connection");
  //   }, 3000);
});

gettingData
  .then((data) => {
    let result = data + " my";
    return result;
  })
  .then((response) => response + " friend")
  .then((response) => response + "!")
  .then((response) => console.log(response))
  .catch((response) => console.log(response))
  .finally(() => console.log("finish"));

  
console.log("2020-11-02".split("-").reverse().join("."));
