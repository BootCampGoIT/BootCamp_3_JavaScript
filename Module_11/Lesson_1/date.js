// ==========================================
// Работа с объектом Date в JavaScript
// ==========================================

// let date = new Date();

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());

// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// ==========================================
// Форматирование даты в JavaScript
// ==========================================
// let date = new Date();
//2020-12-08

// function addZero(number) {
//   if (number >= 0 && number <= 9) {
//     return "0" + number;
//   } else return number;
// }

// console.log(
//   date.getFullYear() +
//     "-" +
//     addZero(date.getMonth() + 1) +
//     "-" +
//     addZero(date.getDate())
// );

// ==========================================
// Преобразование формата даты
// ==========================================
// let str = "2025-12-08" //08.12.2025

// let arr = str.split('-').reverse().join(".");
// console.log(arr);

// ==========================================
// Получения дня недели на JavaScript
// ==========================================
// let date = new Date();
// console.log(date.getDay())//

// ==========================================
// Вывод частей даты словом в JavaScript
// ==========================================
// let date = new Date();
// console.log(date.getDay());

// const daysWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

// console.log(daysWeek[2])

// ==========================================
// Установка времени в объекте Date в JavaScript
// ==========================================

// let date = new Date();
// new Date(год, месяц, день, часы, минуты, секунды, миллисекунды);

// [2020.11.8] - [2020.11.31]

// let date = new Date(2025, 11, 8, 10, 15, 20, 100);
// console.log(date.getDay());

// let startDate = new Date(2020, 11, 8);
// let finishDate = new Date(2020, 11, 31);
// const resultArr = [];

// function getDates(
//   [startYear, startMonth, startDate],
//   [finishYear, finishMonth, finishDate],
//   [dw1, dw3, dw5]
// ) {
//   const resultArr = [];
//   for (let m = startMonth; m <= finishMonth; m += 1) {
//     for (let i = startDate; i <= finishDate; i += 1) {
//       if (
//         new Date(startYear, startMonth, i).getDay() === dw1 ||
//         new Date(startYear, startMonth, i).getDay() === dw3 ||
//         new Date(startYear, startMonth, i).getDay() === dw5
//       ) {
//         resultArr.push(`${i}.${startMonth + 1}.${startYear}`);
//       }
//     }
//   }
//   console.log(resultArr);
// }

// getDates([2020, 10, 8], [2020, 11, 31], [1, 3, 5]);
// =================================

// for (let i = 8; i <= 31; i += 1) {
//   if (
//     new Date(2020, 11, i).getDay() === 1 ||
//     new Date(2020, 11, i).getDay() === 3 ||
//     new Date(2020, 11, i).getDay() === 5
//   ) {
//     resultArr.push(i);
//   }
// }
// console.log(resultArr);

// ==========================================
// Разница между датами
// ==========================================

// 01.0.1970 000000000000
// let startDate = new Date();
// let finishDate = new Date(2020, 11, 31);
// console.log(startDate.getTime());
// console.log(finishDate.getTime());

// console.log(1000 * 60 * 60 * 24);

// const resArr = [];
// for (
//   let i = startDate.getTime();
//   i <= finishDate.getTime();
//   i += 1000 * 60 * 60 * 24
// ) {
//   if (
//     new Date(i).getDay() === 1 ||
//     new Date(i).getDay() === 3 ||
//     new Date(i).getDay() === 5
//   ) {
//     resArr.push(i);
//   }
//   console.log(resArr);
// }

// ==========================================
// Разница между объектами с датой в JavaScript
// ==========================================
// console.log(20251114 > 20201108)


// ==========================================
// Автоматическая корректировка дат в JavaScript
// ==========================================

const date = new Date(2021, 0, 1);
console.log(date);


// ==========================================
// Получение моментов времени в JavaScript
// ==========================================

// ==========================================
// Количество времени до ближайшей даты на JavaScript
// ==========================================
