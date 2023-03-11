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
