// // // const courses = [
// // //   {
// // //     name: "Basic HTML+CSS",
// // //     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
// // //   },
// // //   {
// // //     name: "Intermediate HTML+CSS",
// // //     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
// // //   },
// // //   {
// // //     name: "Basic JavaScript",
// // //     topics: [
// // //       "VSCode",
// // //       "Type system",
// // //       "Loops",
// // //       "Function",
// // //       "Git",
// // //       "Conditions",
// // //       "Classes",
// // //       "GitHub",
// // //       "DOM",
// // //     ],
// // //   },
// // //   {
// // //     name: "Intermediate JavaScript",
// // //     topics: [
// // //       "VSCode",
// // //       "NPM",
// // //       "Bundlers",
// // //       "Transpiling",
// // //       "Git",
// // //       "Promises",
// // //       "AJAX",
// // //       "GitHub",
// // //     ],
// // //   },
// // // ];

// // //Зібрати в allTopics масив всіх предметів всіх курсів
// // //Виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи

// // // const allTopics = courses.flatMap(course => course.topics).filter((course, index, array) => array.indexOf(course) === index);
// // // console.log(allTopics);

// // //TODO:==============================================
// // //Призначити знижку 20% на фрукти в масиві,
// // //Присвоїти ID для кожного продукту

// // // const fruits = [
// // //   { name: "apple", price: 200 },
// // //   { name: "orange", price: 300 },
// // //   { name: "grapes", price: 750 },
// // // ];

// // // const discount = fruits.map(fruit => { return {...fruit, price: fruit.price * 0.8, id: Date.now()}});
// // // console.log(discount);

// // //?TODO:==============================================
// // //Повернути об'єкт у якому вказується кількість тегів

// const tweets = [
// 	{id: "000", likes: 5, tags: ["js", "nodejs"]},
// 	{id: "001", likes: 2, tags: ["html", "css"]},
// 	{id: "002", likes: 17, tags: ["html", "js", "nodejs"]},
// 	{id: "003", likes: 8, tags: ["css", "react"]},
// 	{id: "004", likes: 0, tags: ["js", "nodejs", "react"]},
// ];

// // const countLikes = tweets
// // 	.flatMap((tweet) => tweet.tags)
// // 	.reduce((acc, tag) => ({...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1}), {});

// // console.log(countLikes);

// //TODO:==============================================
// //Дізнатись загальні роки практики в об'єкті workers

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
