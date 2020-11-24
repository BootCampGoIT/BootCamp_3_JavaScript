// const globalFunc = (callback) => {
//   const res = callback();
//   console.log(res);
// };

// const sum = () => 5 + 10;

// globalFunc(sum);

// =========================
// const globalFunc = (value) => {
//   console.log(value);
// };

// const sum = () => 5 + 10;

// globalFunc(sum());

// ===============================

// function hof() {
//   let x = 0;

//   return function () {
//     return (x += 1);
//   };
// }

// const myFunc = hof();

// console.log(myFunc());//1
// console.log(myFunc());//2
// console.log(myFunc());//3
// console.log(myFunc());//4

// ===============================
// function getRes() {
//   return 5;
// }
// const result = getRes(); //5
// console.log(result); //5

// // ----------------

// function hof(x) {
//   return function () {
//     return (x += 1);
//   };
// }
// const func = hof(0); // function () {return (x += 1); };

// console.log(func());

// // console.log(func(5));

// --------------------------------------------------------
// const NewUser = function ({ name, email, password }) {
//   this.name = name;
//   this.email = email;
//   this.password = password;
// };

// NewUser.prototype.getInfo = function () {
//   console.log(this.name);
// };
// NewUser.constructor = NewUser;

// const alex = new NewUser({
//   name: "Alex",
//   email: "alex@gmail.com",
//   password: "dfskjsenfbh3b42h3g6",
// });

// ================================

// class User {
//   constructor({ name, email, password }) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//   }
//   invitation() {
//     console.log(`Hello ${this.name}!`);
//   }
// }

// const alex = new User({
//   name: "Alex",
//   email: "alex@gmail.com",
//   password: "dfskjsenfbh3b42h3g6",
// });

// alex.invitation();

// // const nikita = new User({
// //   name: "Nikita",
// //   email: "nikita@gmail.com",
// //   password: "dfskjsenfbh3b42h3g6",
// // });

// console.log(alex);
// // console.log(nikita);

// ========================================
class User {
  static name = "user";

  static getPassword () {
      return this.name
  }
  
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  invitation() {
    console.log(`Hello ${this.email}!`);
  }

  get newEmail() {
    return this.email;
  }

  set newEmail(value) {
    this.email = value;
  }

}

console.log(User.getPassword())

// const alex = new User("alex@gmail.com", "dfskjsenfbh3b42h3g6");

// console.log(alex);

class Guest extends User {
  constructor(email, password, term = 1) {
    super(email, password); //User.call(this, name, email, password)
    this.term = term;
  }

  get termInfo() {
    return this.term;
  }
  set termInfo(value) {
    this.term = value;
  }
}
const alex = new User("alex@gmail.com", "dfskjsenfbh3b42h3g6");
console.log(alex);
