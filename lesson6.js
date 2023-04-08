// ЗАДАЧА 2

// Створи перелік справ.
// Є інпут, який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #list.
// Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
// Список із завданнями має бути доступним після перезавантаження сторінки.

// const form = document.getElementById("task-form");
// const list = document.getElementById("task-list");

// const saveData = `tasks`;

// let taskArray = JSON.parse(localStorage.getItem(saveData)) || [];

// liAppend();
// form.addEventListener("submit", onSubmitBtn);

// function onSubmitBtn(event) {
//     event.preventDefault();
//     const inputValue = form.taskName.value;
    
//     if (inputValue) {
//         taskArray.push(inputValue);
//         liAppend();
//         saveToLocalStorage();
//     }
    
// }
// console.log(taskArray);

// function liAppend() {
//     // console.log(taskArray);
//     list.innerHTML = "";
//     taskArray.forEach((task, index) => {
//         const liItem = document.createElement("li");
//         liItem.innerHTML = `<span>${task}</span><button class="delete-btn" data-index="${index}">Delete</button>`;
//         list.appendChild(liItem);
       
//         liItem.querySelector(".delete-btn").addEventListener("click", delLiItem);
   
//     })
// }

// function delLiItem(event) {
//     const index = event.target.dataset.index;
//     taskArray.splice(index, 1);

//     liAppend();
//     saveToLocalStorage();
// }

// function saveToLocalStorage() {
//     localStorage.setItem(saveData, JSON.stringify(taskArray));
// }
