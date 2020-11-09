// ----------- Объявление переменных ---------------



// example
// let или const

// let name = "Alex";
// const pi = 3.14;

// const PRIMARY_COLOR = "#121212";
// const MESSAGE = "Hello";




// --------------- типы примитивов -------------------

// Number

// const num = 5;
// const floatNum = 3.14;

// // String

// const word = "Hello";

// // Boolean

// // true  false

// let isAuthenticated = false;

// isAuthenticated = true;

// let isOnline = false;

// null

// let personInfo = null;

// let age = 25;

// const sentence = "Hello"

// undefined

// let name = "Alex";
// console.log(name);

// let x = 5;

// const color = "#121212"; //'' ``

// const isAuth = true; //false true

// ------------------ оператор typeof ----------------------

// console.log(typeof x);

// ------------------------

// let age = 23;
// let name = "Alex";
// console.log("Hello");

// console.log( 'name:', name, ' age:', age);

// alert("Вы должны покинуть ...");

// console.log( 'name:', name, ' age:', age);
// console.log( 'name:', name, ' age:', age);
// console.log( 'name:', name, ' age:', age);
// console.log( 'name:', name, ' age:', age);

// --------------------------------------

// prompt confirm

// const choice = confirm("Please, рололл"); //true || false
// console.log(choice);

// const name = prompt("Enter your name!");
// console.log('name:', name);

// const age = prompt("Age"); //string
// console.log(typeof age);

// ----------------------------------

// const age = prompt("Enter age");

// const result = "25" + "2";
// console.log(result);

// --------------------------------

// const data = null;

// console.log(typeof data);

// let i = 0;

// i = i + 1;
// console.log(i);
// i = i + 1;
// console.log(i);

// const age = 25;

// -----------------

// const x = 13;
// const y = 5;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);

// console.log(x % y);

// -------------------------------

// let i = 10;

// // i = i + 5;

// // i += 5;

// i = i - 5;
// i -= 5;

// console.log(i);

// -------------------------------

// const x = 13;
// const y = 5;
// console.log(x >= y);

// console.log(x <= y);

// // console.log(x !== y); true
// // console.log(x === y); false

// // console.log(x > 5); //true

// // console.log(x < 5); //false

// // console.log(x === y);
// // 13 === "13";

// // console.log(x == y);
// // 13 == "13";

// --------------------------------------------

// const num = 5;
// const floatNum = 10.56756;
// ------------------------------

// const num1 = prompt("Enter number"); //"1"
// const num2 = prompt("Enter number"); //"4"
// const num3 = prompt("Enter number"); //"5"

// // const result = Number(num1) + Number(num2) + Number(num3);
// const result = num1 + num2 + num3;
// console.log(result);

// const result =

// ------------------------------------------
// const padding = "5px";

// // const result = Number.parseInt(padding);
// const result = parseInt("5px");

// console.log(result);

// ----------------------------------
// const floatNum = "5.16ghdsfghfsdgfh25";
// const result = parseFloat(floatNum);
// console.log(result);

// ------------------------------------------

// const number = prompt("Enter number, please!"); //"5"

// const parsedNum = Number(number); //"gfhsdsdhfhdssdhjs"

// console.log(Number.isNaN(parsedNum)); //"5" || 5 ===> false //"gfhsdsdhfhdssdhjs" ===> true

// // console.log(Number.isNaN(5));
// // console.log(Number.isNaN("gdwjhqwgmdwqd"));

// console.log(Number.isNaN(Number("gdhjfgsdhfhsgsfhsdgfs")) === true); //true
// console.log(Number.isNaN(Number("5"))); //false

// ---------------------------------
// const x = 0.1;
// const y = 0.2;

// // const result = x + y;
// const result = (x * 10 + y * 10) / 10;

// console.log(result);

// const x1 = 9.9999999999999999999999999999999999999999;
// console.log(x1)

// ----------------------- Math ------------------------------

// const pi = 22/7;
// console.log(pi)

// const x = 3.54;
// console.log(Math.floor(x));
// console.log(Math.ceil(x));
// console.log(Math.round(x));

// const a1 = 10;
// const a2 = 15;
// const a3 = 100;
// const a4 = 250;

// console.log(Math.min( a2, a3, a1, a4));
// console.log(Math.max( a2, a3, a1, a4));

// console.log(Math.pow(3,2));

// let x = 13 + 5;

// const randomNum = Math.random(); //0 - 1
// console.log(Math.round(randomNum * 100));

// ----------------------------------------------------------

// String

// const sentence = "Hello worasdadasdasdasdasdasdasdasadasdsald!";

// console.log(sentence.length);

// const lastElement = sentence.length - 1;

// console.log(sentence[10]);

// const number = 5;

// console.log( 5 + 5 + "23");

// const name = "Alex";

// const result = "Hello" + " " + name + "!";
// console.log(result);

// --------------------------------

// const choice = prompt("Enter letter"); // W || w //10010010

// const sentence = "Hello World!";

// // const index = sentence.indexOf("or");

// console.log(sentence.toLowerCase().indexOf(choice.toLowerCase()))

// console.log(sentence.length);
// console.log(sentence.toLowerCase());
// console.log(sentence.toUpperCase());

// console.log(sentence.toLocaleLowerCase().indexOf('w'));

// ------------------------------------------

// const name = prompt("Enter your name, please!");

// const errorMessage = "Something went wrong!"

// console.log(`${name}! ${errorMessage}`);

// ---------------------------------------------------

// const isAuth = true;

// const isOnline = false;

// const result = isAuth && isOnline; //false

// result && console.log("Hello!");

// ----------------------------

// const isAuth = true;

// const isOnline = false;

// const result = isAuth || isOnline;

// console.log(result);
// -----------------------------

// const num1 = 10;
// const num2 = 20;

// const result = num1 > 10 || num2 > 30;

// console.log(result); //false

// const isAuth = false;


// 1 0

// console.log(!0)

// console.log(!isAuth);

// false, 0, -0, NaN, null, undefined, ""

// console.log(object);

// console.log(!null);