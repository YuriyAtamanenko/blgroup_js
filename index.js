// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'

// const a = 5;

// if (a === 10) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Використовуючи функцію if...else,
// напишіть код, який запитуватиме:
// "Яка офіційна назва JavaScript?"
// Якщо користувач вводить "ECMAScript",
// то показати через alert: "Вірно!"
// інакше відобразити:"Не знаєте? ECMAScript!"

// const nameJs = prompt("Яка офіційна назва JavaScript?");

// if (nameJs === "ECMAScript") {
//   alert("Вірно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }

//  Напишіть цикл, який виводить у консоль числа від max до min за спаданням
//  Виведіть у консоль суму усіх парних чисел від min до max
// const max = 50;
// const min = 23;
// let total = 0;
// for (let i = max; i >= min; i--) {
// 	// console.log(i);
// 	if (i % 2 === 0) {
// 		total += i;
// 	}
// }
// console.log(total);

// Напишіть код, який запитуватиме
// Логін за допомогою prompt і логувати результат
// В консоль браузера

// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль.
// Якщо нічого не ввели або натиснута клавіша Esc
// Вивести рядок "Скасовано"
//  Інакше вивести рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний", то вивести рядок "Здрастуйте!"
// інакше виводити рядок "Невірний пароль!"

// const loginInput = prompt("Введіть логін");

// if (loginInput === "Адмін") {
// 	const passwordInput = prompt("Введіть пароль");
// 	if (passwordInput) {
// 		if (passwordInput === "Я головний") {
// 			console.log("Здрастуйте!");
// 		} else {
// 			console.log("Невірний пароль!");
// 		}
// 	} else {
// 		console.log("Скасовано");
// 	}
// } else {
// 	console.log("Я вас не знаю");
// }

// При завантаженні сторінки користувачеві пропонується
// В prompt ввести число. Введення додається до значення
// Змінної total.
// Операція введення числа триває до того часу,
// Поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив введення натиснувши накнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку,що користувач ввів саме число, а не довільний набір символів не потрібно.

// let numberInput = prompt('Введите число');
// let total = 0;
// let check = false;

// do {
//   if (numberInput) {
//     total += Number(numberInput);
//     check = true;
//     numberInput = prompt('Введите число');
//   } else {
//     check = false;
//     alert(`Загальна сума введених чисел дорівнює число ${total}.`);
//   }
// } while (check);

//  Напишіть цикл, який пропонує ввести число більше 100 через prompt.
// Якщо якщо відвідувач ввів інше число - попросити
// Ввести ще раз і так далі.
// Цикл повинен запитувати число, поки відвідувач не введе число більше 100, або натисне кнопку
// Скасування в prompt

// let numberInput = prompt('Введите число больше 100');
// let check = false;

// do {
//   if (Number(numberInput) < 100) {
//     check = true;
//     numberInput = prompt('Введите число больше 100');
//   } else {
//     check = false;
//   }
// } while (check);

// alert(numberInput);

// У змінній min лежить число від 0 до 59.
//  Визначте, в яку чверть години потрапляє це число(у першу, другу, третю чи четверту).

// let min = 40;
// if (min >= 0 && min < 15) {
//   alert("перша четверть");
// }
// if (min >= 15 && min < 30) {
//   alert("друга четверть");
// }
// if (min >= 30 && min < 45) {
//   alert("третя четверть");
// }
// if (min >= 45 && min < 60) {
//   alert("четверта четверть");
// }

// .Дано рядок, що складається із символів, наприклад, 'abcde'.
//  Перевірте, що першим символом цього рядка є буква 'a'.
//  Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const string = "abcde";
// if (string[0] === "a") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// const string = "abcde";
// string[0] === "a" ? console.log(true) : console.log(false);

// Напишіть через свіч пошуку автора мови програмування
//  пишемо назву мови у шаблонному рядку отримує відповідь мова та автор
//  PHP Расмус Лердорф
//  C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота
//  Swift Кріс Латтнер
//  JS Брендан Ейх
//  Java Джеймс Гослінг
//  Python Гвідо ван Россум

// const language = prompt("Введіть мову програмування");
// switch(language) {
//     case "PHP":
//         console.log(`${language} - Расмус Лердорф`);
//         break;
//     case "C#":
//         console.log(`${language} - група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота`);
//         break;
//     case "Swift":
//         console.log(`${language} - Кріс Латтнер`);
//         break;
//     case "JS":
//         console.log(`${language} - Брендан Ейх`);
//         break;
//     case "Java":
//         console.log(`${language} - Джеймс Гослінг`);
//         break;
//     case "Python":
//         console.log(`${language} - Гвідо ван Россум`);
//         break;
//     default: console.log(`Автора не знайдено`);
// }

// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

// const userName = prompt("Введіть ім'я");
// const userMail = prompt("Введіть пошту");
// const userPhone = prompt("Введіть телефон");

// // console.log(`КОРИСТУВАЧ ${userName} ВИКОРИСТОВУЄ ${userMail} ПОЧТУ І ${userPhone}`);
// НАПИШІТЬ ПРОГРАМУ, ЯКА БУДЕ ВИЗНАЧАТИ ДОВЖИНУ ІМЕНІ , ЯКЩО ІМЯ БІЛЬШЕ 7 СИМВОЛІВ, КОНСОЛЬ ВИВОДИТЬ "Wow, you  have a REALLY long name!" , ЯКЩО МЕНШЕ 7
// "Your name isn't very long"
// const userName = prompt("Введите имя");
// userName.length >= 7
//   ? console.log('Wow, you  have a REALLY long name!')
//   : console.log("Your name isn't very long");
// НАПИШІТЬ ПРОГРАМУ , ЯКА БУДЕ ЗАПИТУВАТИ У КОРИСТУВАЧА ПЕРІОД ПІДПИСКИ НА СЕРВІС ТА ПОКАЗУВАТИМЕ ЦІНУ ПІДПИСКИ(ВИКОРИСТАЙ IF..ELSE, ТА ПЕРЕПИШИ НА SWITCH)
// ЯКЩО ДЕНЬ - ціна 1.99
// ЯУЩО НЕДІЛЯ - ціна 5.99
// ЯКЩО МІСЯЦЬ - ціна 10.99
// ЯКЩО РІК - ціна 100.99
// const period = prompt("Введите термин подписки")
// switch (period) {
//     case 'день':
//         console.log('ціна 1.99');
//         break;
//     case 'неделя':
//         console.log('ціна 5.99');
//         break;
//     case 'месяць':
//         console.log('ціна 10.99');
//         break;
//     case 'год':
//         console.log('ціна 100.99');
//         break;
//     default: console.log("Нет подписки")
// }

// FizzBuzz
// Потрібно написати функцію, що виводить у консоль числа від 1 до n, де n - це ціле число, яка функція приймає як параметр, з такими умовами:

// виведення fizz замість чисел, кратних 3;
// виведення buzz замість чисел, кратних 5;
// виведення fizzbuzz замість чисел, кратних як 3, і 5.
// чисел, кратних як 3, і 5.

// function numberInput(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzbuzz');
//     } else if (i % 3 === 0) {
//       console.log('fizz');
//     } else if (i % 5 === 0) {
//       console.log('buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }

// numberInput(45);
// numberInput(45);

// У нас є об'єкт, в якому зберігатимуться зарплати
// Нашої команди
// Напишіть код для сумування всіх зарплат і
// Збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 170,
// };

// let total = 0;

// // const salary = Object.values(salaries)
// // console.log(salary)

// for (const salary of Object.values(salaries)) {
//     total += salary
// }

// console.log(total)

// Напишіть функцію, яка приймає рядок і перетворює її на число

// function toNumber(string) {

//     return Number(string)
// }
// console.log(toNumber(`10`))

// 4. Паліндром

// Паліндром - слово, речення чи послідовність символів, яка абсолютно однаково читається як у звичному напрямку, так і у зворотному. Наприклад, "Anna" - це паліндром, а "table" і "John" - ні.

// function word(string) {
//   string = string.toLowerCase();

//   let reversString = string.split("").reverse().join("");

//   if (string === reversString) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(word("Паліндром"));

// Напишіть функцію, яка приймає два аргументи і повертає всі числа, які діляться на дільник. Перший аргумент – це масив чисел, а другий – дільник.
// const newArray = [];

// function calculator(array, b) {
//   for (let a of array) {
//     if (a % b === 0) {
//       newArray.push(a);
//     }
//   }
//   return newArray;
// }

// console.log(calculator([10, 20, 5, 7, 58], 5));

// Напишіть функцію pow(x,n), яка повертає x до ступеня n.
// Інакше висловлюючись, множить x він n разів і повертає результат.
// function pow(x, n){
//     return Math.pow(x, n);
// }
// console.log(pow(5, 6))

// Напишіть функцію min(a,b), яка повертає менше чисел a і b.
// function min(a, b){
// //     if (a > b){
// //         return b;
// //     }
// //    if (a < b){
// //     return a;
// //    }
// return Math.min(a, b)
// }
// console.log(min(10, 17))

// Створіть масив styles з елементами «Джаз» та «Блюз».
//Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
//Видалить перший елемент масиву і виведіть його в консоль.
//Вставте «Реп» і «Реггі» на початок масиву.
// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-рол");
// styles[1] = "Класика";
// const splice = styles.splice(0, 1);
// styles.unshift("Реп", "Реггі");
// console.log(styles);

// Наступна функція повертає true, якщо параметр age більше 18.
// В іншому випадку вона запитує підтвердження через confirm і повертає його результат:

// const askAge = prompt("Скок?");

// function isAdult(age) {
// 	if (age >= 18) {
// 		return console.log("okay");
// 	} else {
// 		return console.log("bb");
// 	}
// }

// isAdult(askAge);

// TODO:==============================
// Напишіть рішення, яке обчислює суму
// Квадратного коріння для всіх чисел у яких квадратний корінь буде цілим числом і пушити числа в новий масив.
// Math.sqrt();
// Number.isInteger();
const arr = [4, 3, 5, 16, 16, 33, 4, 9];
const newArr = [];

for (const elem of arr) {
	if (Math.sqrt(elem) % 1 === 0) {
		newArr.push(elem);
	}
}
console.log(newArr);

//TODO:==========================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallerNumber(numbers) {
// 	if (Array.isArray(numbers)) {
// 		return Math.min(...numbers);
// 	}
// }

// console.log(findSmallerNumber([2, 5, 35, 56, 12, 24, 7, 80, 3]));
