// ==============================================
// 1. Конструкторы
// ==============================================

// const str = "Hello ...";
// console.log(str.length);
// // console.log(str);

// // console.dir(str)

// // const str = new String("Hello ...")
// // console.dir(str);

// const str = {
//     value: "Hello ...",
//     this: "str",
//     [methods]: [
//         length(){},
//         .........

//     ]
// }

// =====================================================

// const user = {
//   name: "Bob",
//   showName() {
//     console.log(this.name);
//   },
// };

// ======================================================

// const User = function (name, age, status, ...rest) {
//   this.name = name;
//   this.age = age;
//   this.status = status;
//   if (rest.length) {
//     for (const prop of rest) {
//       console.log("prop", prop);
//       for (const property of prop) {
//         this[property[0]] = property[1];
//       }
//     }
//   }
// };

// const bob = new User("Bob", 23, "student", [
//   ["skills", ["html", "gdjshd"]],
//   [
//     "info",
//     {
//       bootCampNum: 2,
//     },
//   ],
// ]);
// const alex = new User("Alex", 25, "student");

// console.log(alex);

// ==============================================================

// const User = function (name, age, status, ...rest) { //[{ key: "skill", value: "qqq" }]
//   this.name = name;
//   this.age = age;
//   this.status = status;
//   if (rest.length) {
//     for (const prop of rest) {
//       this[prop.key] = prop.value;
//     }
//   }
// };

// const bob = new User("Bob", 23, "student",
// { key: "skill", value: "qqq" },
// { key: "info", value: "BC3" }
// );
// const alex = new User("Alex", 25, "student");

// console.log(bob);
// console.log(alex);

// ===============================================================
// const cart = {
//     products: [],
//     addProduct(product){
//         this.products.push(product)
//     }
// }

// cart.addProduct({name: "Milk"});
// console.log(cart)
// ======================================================

// const authFormData = {
//     userName: "Alex",
//     age: 25,
// }

// const data = {
//     name: "Alex"
// }

// const User = function ({name: userName}){
//     // const name = data.name;
//     // const age = data.age;
//     // const {name, age} = data

//     this.name = userName;
//     this.age = data.age;
// }

// // User.prototype.sendData = function (data){
// //     axios.post('http://dhksd.dffds.', data)
// // }

// const alex = new User(data)
// console.log(alex)

// ===========================================
// const name = "Alex";
// console.log(name);

// const User = function (
//   name = "user",
//   password = "user",
//   age = 0,
//   status = "student"
// ) {
//   this.name = name;
//   this.age = age;
//   this.status = status;
//   this.password = password;
// };

// User.prototype.getStatus = function () {
//   console.log(this.status);
// };

// console.log(User.hasOwnProperty("name"));

// const alex = new User("Alex");
// alex.info = "some info";
// console.log(alex);

// const newAlex = Object.create(alex);
// console.log(newAlex);

// ===========================================

// game "MARVEL'S HERO"

const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
};

Hero.prototype.gainXp = function (amount) {
  console.log(`${this.name} gained ${amount} experience points`);
  this.xp += amount;
};

const bob = new Hero("Bob", 100);

const Warrior = function (name, xp, weapon) {
  this.weapon = weapon;
  Hero.call(this, name, xp);
  //   this.name = name;
  //   this.xp = xp;
};

// console.log(Warrior.prototype);

Warrior.prototype = Object.create(Hero.prototype);
Warrior.prototype.constructor = Warrior;
const alex = new Warrior("Alex", 200, "sword");
console.log(alex);

console.log(alex);

// console.log(Warrior.prototype)

// =========================================

const getType = (hero) => {
  switch (hero.constructor.name) {
    case "Warrior":
      console.log("Warrior");
      break;

    case "Hero":
      console.log("Hero");
      break;

    default:
      console.log("Object");
      break;
  }
};

getType(alex);
