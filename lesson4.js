//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get contacts() {
//     return {
//       login: this.#login,
//       email: this.#email,
//     };
//   }

//   set contacts(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const petya = new Client('petya', ' fhghj@mail.com');
// console.log(petya);
// petya.contacts = 'truyrtu@mail.com';
// console.log(petya);
// console.log(petya.contacts);

//TODO:=============================================
//Напиши клас Notes який управляє колекцією нотаток у
//властивості items.
//Нотатка - це об'єкт із властивостями text і priority.
//Додай класу статичний метод Priopity,
//який буде повертати об'єкт із пріоритетами.
//Додай методи addNote(note), removeNote(text)
//updatePriority(text, newPriority)

// class Notes {
//   static Prioirity() {
//     return {
//       HIGHT: 'hight',
//       LOW: 'low',
//     };
//   }

//   constructor() {
//     this.items = [];
//   }

//   addNote(note) {
//     return this.items.push(note);
//   }

//   removeNote(text) {
//     const indexText = this.items.findIndex(item => item.text === text);
//     console.log(indexText);

//     if (indexText !== -1) {
//       this.items.splice(indexText, 1);
//     }
//   }

//   updatePriority({ text, newPriority }) {
//     const indexText = this.items.findIndex(item => item.text === text);

//     if (indexText !== -1) {
//       this.items[indexText].priority = newPriority;
//     }
//   }
// }

// const balance = new Notes();
// balance.addNote({ text: '5000$', priority: Notes.Prioirity().HIGHT });
// balance.addNote({ text: '2000$', priority: Notes.Prioirity().LOW });

// balance.removeNote('2000$');

// balance.updatePriority({ text: '5000$', newPriority: Notes.Prioirity().LOW });
// console.table(balance.items);

//TODO:======================
// Створи клас для калькулятора, який має такі методи:
// метод number, який набуває початкового значення для наступних операцій
// Геттер, який повертає фінальний результат усіх операцій, проведених із числом
// методи add, substruct, divide, multiply

// class Calculate {
// 	constructor(newNumber) {
// 		this.number = newNumber;
// 	}

// 	get numbers() {
// 		return this.number;
// 	}

// 	add(addNumber) {
// 		return (this.number += addNumber);
// 	}

// 	substruct(subNumber) {
// 		return (this.number -= subNumber);
// 	}

// 	divide(divNumber) {
// 		if (divNumber !== 0) {
// 			return (this.number /= divNumber);
// 		}
// 	}

// 	multiply(mulNumber) {
// 		return (this.number *= mulNumber);
// 	}
// }

// const newCalc = new Calculate(0);

// newCalc.add(15112);

// newCalc.add(6512);
// newCalc.substruct(1002);
// newCalc.divide(3);
// newCalc.multiply(10);

// console.log(newCalc.numbers);

// Задача: написати клас, який буде представляти зоопарк тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та метод для виведення списку всіх тварин у зоопарку.

// class Animal {
// 	constructor(name, type) {
// 		this.name = name;
// 		this.type = type;
// 	}

// 	getInfo() {
// 		return `name: ${this.name}, type: ${this.type}`;
// 	}

// 	feed() {
// 		console.log(`feeding ${this.name} travoi`);
// 	}
// }

// class Bird extends Animal {
// 	constructor(name, type, wingspan) {
// 		super(name, type);
// 		this.wingspan = wingspan;
// 	}

// 	getInfo() {
// 		return `${super.getInfo()}, wingspan: ${this.wingspan}`;
// 	}

// 	feed() {
// 		super.feed();
// 	}
// }

// // grus.feed();

// class Hunter extends Animal {
// 	constructor(name, type, mane) {
// 		super(name, type);
// 		this.mane = mane;
// 	}

// 	getInfo() {
// 		return `${super.getInfo()}, mane: ${this.mane}`;
// 	}

// 	feed() {
// 		super.feed();
// 	}
// }

// // lion.getInfo();

// class Zoo {
// 	constructor() {
// 		this.animals = [];
// 	}
// 	addAnimals(someAnimal) {
// 		return this.animals.push(someAnimal);
// 	}

// 	getAllAnimals() {
// 		this.animals.forEach((animal) => {
// 			console.log(animal.getInfo());
// 		});
// 	}
// }

// const zoo = new Zoo();

// const lion = new Hunter("Лев", "Охотник", "Пишна");
// zoo.addAnimals(lion);

// const grus = new Bird("Журавель", "Сельская", 2);
// zoo.addAnimals(grus);

// zoo.getAllAnimals();

// !===========HW=================!

// Задача: Створіть клас "Круг", який має властивості радіуса та діаметру,
//а також методи для обчислення площі та довжини кола.

//TODO:=============================================
//Напиши class CarsManager  який створює об'єкти
//Для управління салону автомобілів. Використати приватну змінну cars
//Додай методи класу:
//getModels() - повертайте масив усіх моделей
//changeModel(oldModelName, newModelName) - Замінює стару модель на ному
//getTotalPrice() - отримує суму усіх автомобілів
//getMake(make) - повертає масив виробника

// const vehicles = [
//   { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
//   { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
//   { make: "Ford", model: "F-150", type: "truck", price: 27110 },
//   { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
//   { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
//   { make: "Toyota", model: "Sequoia", type: "suv", price: 45560 },
//   { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
//   { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
//   { make: "Ford", model: "Explorer", type: "suv", price: 31660 },
//   { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
// ];
