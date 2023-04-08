//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/
// const btn = document.querySelector("#alertButton");
// const input = document.querySelector("#alertInput");

// btn.addEventListener("click", onBtnClick);

// function onBtnClick() {
//   console.log(input.value);
// }

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

// const btn = document.querySelector("#swapButton");
// const input = document.querySelector("#leftSwapInput");
// const secondInput = document.querySelector("#rightSwapInput");

// btn.addEventListener("click", changeValue);

// function changeValue() {
//   const valueInput = input.value;
//   const secondValueInput = secondInput.value;
//   input.value = secondValueInput;
//   secondInput.value = valueInput;
// }

//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

// const btn = document.querySelector("#passwordButton");
// const input = document.querySelector("#passwordInput");

// btn.addEventListener("click", onBtnclick);

// function onBtnclick() {
//   if (input.type === "password") {
//     input.type = "text";
//     btn.textContent = "Розкрити";
//   } else {
//     input.type = "password";
//     btn.textContent = "Скрыть";
//   }
// }
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів, допопка "Збільшити" - більше на 10 пікселів.
*/
// const box = document.querySelector("#box");
// const decreaseBtn = document.querySelector("#decrease");
// const increaseBtn = document.querySelector("#increase");

// decreaseBtn.addEventListener("click", () => {
//   let boxStyle = window.getComputedStyle(box).width;
//   const parthBox = parseInt(boxStyle);
//   box.style.width = parthBox - 10 + "px";
//   box.style.height = parthBox - 10 + "px";

//   console.log(parthBox);
// });

// increaseBtn.addEventListener("click", () => {
//   let boxStyle = window.getComputedStyle(box).width;
//   const parthBox = parseInt(boxStyle);
//   box.style.width = parthBox + 10 + "px";
//   box.style.height = parthBox + 10 + "px";

//   console.log(parthBox);
// });
//TODO:======================
// Завдання 5
//  Створіть HTML сторінку з табличкою,
//  яка містить список продуктів.Кожен рядок у
//  табличці повинен містити назву продукту та його ціну.
//  При натисканні на будь - який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.

// const productTable = document.querySelector("#productTable");
// const details = document.querySelector("#productDetails");
// productTable.addEventListener("click", (event) => {
//   const productTarget = event.target.parentNode;

//   const productName = productTarget.cells[0].textContent;
//   const productPrice = productTarget.cells[1].textContent;
//   details.textContent = `name:${productName}, price:${productPrice}`;
// });
//TODO:======================
// Завдання 6
// Створіть HTML сторінку з формою,
// яка містить поле введення для введення
// імені користувача та кнопку.При натисканні
// на кнопку відобразіть повідомлення з привітанням з іменем користувача.

// const username = document.querySelector("#username");
// const button = document.querySelector("#greetingButton");
// const message = document.querySelector("#greetingMessage");

// button.addEventListener("click", () => {
//   message.textContent = `Привіт ${username.value}`;
// });
//TODO:======================
// Завдання 7
// Написати функцію, яка буде створювати список подій клавіатури
// event.key та event.code
// Додати класи на список eventList, на елементи eventCode та eventKey
// const thumb = document.querySelector(".eventThumb");

// document.addEventListener("keydown", (event) => {
//   const markUp = `<ul class="eventList">
//     <li class="eventCode"> ${event.code}</li>
//     <li class="eventKey"> ${event.key}</li>
//     </ul>`;

//   thumb.insertAdjacentHTML("beforeend", markUp);
// });
//TODO:======================
// Завдання 8

// Взяти попереднє завдання з Зоопарком та вивести звірів, їх тип та особливості в DOM.
// Додати до списку клас animalList.На елемент списку animalElement
// class Animal {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }

//   getInfo() {
//     return `name: ${this.name}, type: ${this.type}`;
//   }

//   feed() {
//     console.log(`feeding ${this.name} travoi`);
//   }
// }

// class Bird extends Animal {
//   constructor(name, type, wingspan) {
//     super(name, type);
//     this.wingspan = wingspan;
//   }

//   getInfo() {
//     return `${super.getInfo()}, wingspan: ${this.wingspan}`;
//   }

//   feed() {
//     super.feed();
//   }
// }

// // grus.feed();

// class Hunter extends Animal {
//   constructor(name, type, mane) {
//     super(name, type);
//     this.mane = mane;
//   }

//   getInfo() {
//     return `${super.getInfo()}, mane: ${this.mane}`;
//   }

//   feed() {
//     super.feed();
//   }
// }

// // lion.getInfo();

// class Zoo {
//   constructor() {
//     this.zooWrapper = document.querySelector(".zooWrapper");
//     this.animalList = document.createElement("ul");
//     this.animals = [];
//   }
//   addAnimals(someAnimal) {
//     return this.animals.push(someAnimal);
//   }

//   getAllAnimals() {
//     this.animals.forEach((animal) => {
//       console.log(animal.getInfo());
//     });
//   }

//   draw() {
//     this.animals.forEach((obj) => {
//       const li = document.createElement("li");
//       const animalName = document.createElement("p");
//       const animalType = document.createElement("p");
//       const animalSpecies = document.createElement("p");

//       animalName.textContent = `name:${obj.name}`;
//       animalType.textContent = `type:${obj.type}`;
//       if (obj.mane) {
//         animalSpecies.textContent = `mane:${obj.mane}`;
//       }
//       if (obj.wingspan) {
//         animalSpecies.textContent = `wingspan:${obj.wingspan}`;
//       }
//       li.append(animalName, animalType, animalSpecies);
//       this.animalList.prepend(li);
//       this.zooWrapper.prepend(this.animalList);
//       this.animalList.classList.add("animalList");
//       li.classList.add("animalElement");
//     });
//   }
// }

// const zoo = new Zoo();

// const lion = new Hunter("Лев", "Охотник", "Пишна");
// zoo.addAnimals(lion);

// const grus = new Bird("Журавель", "Сельская", 2);
// zoo.addAnimals(grus);

// zoo.getAllAnimals();
// zoo.draw();
