
//---HOMEWORK---
// TODO:==============================================
// Напишіть функцію each(array, callback), яка
// першим параметром приймає масив, а другим - функцію,
// Яка застосовується до кожного елементу масиву.
// Функція each повинна повернути новий масив, елементами
// якого будуть результати виклику callback
// callback функції повинна множити елементи на 2
// ++++++++++++++++++++++++++++++++++++++++++

// const each = (array, callback) => {
//   const newArr = [];
//   array.forEach((element) => newArr.push(callback(element)));
//   return newArr;
// }

// console.log(
//   each([1, 2, 3, 4, 5], value => value * 2),
// );


//TODO:==============================================
//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль
//++++++++++++++++++++++++++++++++++++++++++

// const products = [
//     {
//       name: "apple",
//       price: 20,
//     },
//     {
//       name: "cherry",
//       price: 40,
//     },
//   ];
  
//   const showProduct = (obj, callback) => {
//     const product = { ...obj, id: Date.now() };
//     callback(product);
//     console.log(product);
//   };

//   const makeProduct = ({ name, price }) => {
//     console.log(
//       `Назва продукту: ${name}. Ціна за кілограм: ${price} грн.`
//     );
//   }
  
//   showProduct(products[0], makeProduct);
//   showProduct(products[1], makeProduct);

//TODO:=================01====================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній
//++++++++++++++++++++++++++++++++++++++++++++

// const letMeSeeYourName = (callback) => {
//  callback(greet);
//  };
 
// function greet(name) {
//   console.log(prompt('Як Вас звати?')
//     ? `Привіт ${name}.`
//     : `Ім'я не вказано ${name}.`)
// };

// greet (name) 

//TODO:==============================================
// Даний словник із міст та дат виступів рок-групи

// Необхідно перетворити словник (key-value) на масив із назв міст
// Виведення міст має бути у хронологічному порядку
// Міста у яких концерт вже пройшов потрібно виключити
// Результат ["Умань", "Харків", "Одеса"]

//  const dictionary = [
//  {city: "Умань", birthDate: 2020,},
//  {city: "Харків", birthDate: 2021,},
//  {city: "Львів", birthDate: 2023,},
//  {city: "Київ", birthDate: 2023,},
//  {city: "Рівне", birthDate: 2023,},
//  {city: "Одеса", birthDate: 2022,},
//  ];

//  const newListPerformances = dictionary => [...dictionary].sort((a, b) => a.birthDate - b.birthDate).filter(option => option.birthDate < 2023);

// console.table(newListPerformances(dictionary));

//TODO:==============================================
// Потрібна допомога, не розібралась, як вивести - Результат ["Умань", "Харків", "Одеса"]
