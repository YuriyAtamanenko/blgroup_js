// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];

//Зібрати в allTopics масив всіх предметів всіх курсів
//Виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи

// const allTopics = courses.flatMap(course => course.topics).filter((course, index, array) => array.indexOf(course) === index);
// console.log(allTopics);

// //TODO:==============================================
//Призначити знижку 20% на фрукти в масиві,
//Присвоїти ID для кожного продукту

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];

// const discount = fruits.map(fruit => { return {...fruit, price: fruit.price * 0.8, id: Date.now()}});
// console.log(discount);

//?TODO:==============================================
//Повернути об'єкт у якому вказується кількість тегів

// const tweets = [
// 	{id: "000", likes: 5, tags: ["js", "nodejs"]},
// 	{id: "001", likes: 2, tags: ["html", "css"]},
// 	{id: "002", likes: 17, tags: ["html", "js", "nodejs"]},
// 	{id: "003", likes: 8, tags: ["css", "react"]},
// 	{id: "004", likes: 0, tags: ["js", "nodejs", "react"]},
// ];

// const countLikes = tweets
// 	.flatMap((tweet) => tweet.tags)
// 	.reduce((acc, tag) => ({...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1}), {});

// console.log(countLikes);

//TODO:==============================================
//Дізнатись загальні роки практики в об'єкті workers

// const workers = [
// 	{id: 10, name: "Mango", years: 14},
// 	{id: 2, name: "Poly", years: 19},
// 	{id: 41, name: "Ajax", years: 30},
// 	{id: 99, name: "Kiwi", years: 22},
// ];

// const allYears = workers.reduce((acc, {years}) => acc + years, 0);
// console.log(allYears);

//TODO:==============================================
// Даний масив із числами. Залишіть у ньому лише позитивні числа.
// Потім витягніть квадратний корінь і цих чисел.
// const array = [121, -2, 225, 0, 4, -5, 36, -11];

// const newArray = array
//   .filter(number => number > 0)
//   .map(number => Math.sqrt(number));
// console.log(newArray);

//TODO:==============================================
//Створення масиву значень Фаренгейта із масиву значень Цельсія
// let celsius = [-15, -5, 0, 10, 16, 20, 24, 32];

// const fahrenheit = celsius.map(number => number * 1.8 + 32);
// console.log('🚀 farengate:', farengate);

// /TODO:==============================================
//Знайти унікальні елементи за допомогою reduce
// const numbers = [1, 9, 0, 1, 5, 9, 1, 6];
// const unique = numbers.reduce((acc, number) => {
//   console.log(acc);
//   return acc.includes(number) ? acc : [...acc, number];
// }, []);
// console.log(unique);

// /TODO:==============================================
// Для кожного елемента колекції (user) перевіримо поле isActive.
// Якщо воно true, то поточний елемент (user) буде записаний результуючий масив.

// const users = [
//   { name: "Mango", isActive: true },
//   { name: "Poly", isActive: false },
//   { name: "Ajax", isActive: true },
//   { name: "Chelsey", isActive: false },
// ];

// const activeUsers = users.filter((user) => user.isActive);
// console.log(activeUsers);

//TODO:==============================================
//Виконай рефакторинг makeDish так, щоб не потрібно було
// Щоразу передавати ім'я шефа.
//Напишіть функцію makeShef(shefName), яка повертає функцію
//makeDish(dish), що пам'ятає ім'я шефа під час її виклику

// const makeDish = function (shefName, dish) {
// console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish("Mango", "apple pie");
// makeDish("Poly", "muffins");

// const makeShef = (shefName) => {
//   return function makeDish(dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   };
// };
// const mango = makeShef("Mango");
// mango("apple");

//! --------HOMEWORK---------
// TODO:==============================================
// Напишіть функцію each(array, callback), яка
// першим параметром приймає масив, а другим - функцію,
// Яка застосовується до кожного елементу масиву.
// Функція each повинна повернути новий масив, елементами
// якого будуть результати виклику callback
// callback функції повинна множити елементи на 2
// ++++++++++++++++++++++++++++++++++++++++++

// const numbers = [3, 5, 7, 12, 15, 8, 17];

// function each(array, callback) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i += 1) {
//     newArray.push(callback(array[i]));
//   }
//   return newArray;
// }

// console.log(each(numbers, value => value * 2));
// console.log(numbers);

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

// function makeProduct(name, price, callback) {
//   const id = Date.now();
//   const product = {
//     id,
//     name,
//     price,
//   };

//   callback(product);
// }

// function showProduct(product) {
//   console.log(`ID: ${product.id}: ${product.name}, цена: ${product.price}грн.`);
// }

// makeProduct('Торт', 200, showProduct);
// makeProduct('Мыло', 20, showProduct);

//TODO:=================01====================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній
//++++++++++++++++++++++++++++++++++++++++++++

// function letMeSeeYourName(callback) {
//   const name = prompt("Введіть ім'я!");

//   if (name && name.trim()) {
//     return callback(name);
//   }

//   alert('Поле не може бути порожнім!');
// }

// function greet(name) {
//   console.log(`Привіт ${name}`);
// }

// letMeSeeYourName(greet);
//TODO:==============================================
//  Даний словник із міст та дат виступів рок-групи

//  Необхідно перетворити словник (key-value) на масив із назв міст
//  Виведення міст має бути у хронологічному порядку
//  Міста у яких концерт вже пройшов потрібно виключити
//  Результат ["Умань", "Харків", "Одеса"]

// const concerts = {
//   Київ: new Date('2022-04-01'),
//   Умань: new Date('2023-07-02'),
//   Вінниця: new Date('2022-04-21'),
//   Одеса: new Date('2023-07-15'),
//   Хмельницький: new Date('2022-04-18'),
//   Харків: new Date('2023-07-10'),
// };

// function getCity(obj) {
//   const keys = Object.keys(obj)
//     .filter(city => obj[city] > new Date())
//     .sort((a, b) => obj[a] - obj[b]);
//   return keys;
// }

// console.log(getCity(concerts));
