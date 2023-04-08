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

// TODO:=========================================
// ЗАДАЧА 2
// Якщо імейл і пароль користувача збігаються, зберігайте дані з форми при сабмите
// у локальне сховище і змінюй кнопку login на logout і роби поля введення
// Недоступними зміни.

// При перезавантаженні сторінки, якщо користувач залогінений, ми маємо бачити logout-кнопку
// та недоступні для зміни поля з даними користувача.
// Клік по кнопці logout повертає все до початкового вигляду і видаляє дані користувача
// З локального сховища.

// Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// повідомляти про помилку.

const USER_DATA = {
    email: "user@mail.com",
    password: "secret",
};

// const form = document.querySelector('#login-form');
// const { email, password, button } = form.elements;
// const localKey = 'authData';
// let userData = {};
// // console.log(userData);
// if (localStorage.getItem(localKey)) {
//     changeState();
// }


// form.addEventListener('submit', onClickSubmit);



// function onClickSubmit(e) {
//     e.preventDefault();

//     if (button.textContent === 'Logout') {
//         return reset();
//     }
//     // console.log('onClick');

//     if (USER_DATA.email === email.value && USER_DATA.password === password.value) {
//         userData.email = email.value.trim();
//         userData.password = password.value.trim();
//         localStorage.setItem(localKey, JSON.stringify(userData));
//         form.reset();
//         changeState();
//         // console.log(userData);
//     } else {
//         alert('Введені данні не співпадають');
//     }


// }



// function changeState() {
//     button.textContent = 'Logout';
//     email.disabled = true;
//     password.disabled = true;
// }

// function reset() {
//     button.textContent = 'Login';
//     email.disabled = false;
//     password.disabled = false;

//     localStorage.removeItem(localKey);
// }
//---------------------Second Variant----------------------------------
const form = document.querySelector('#login-form');
const { email, password, button } = form.elements;
const localKey = 'authData';
let userData = JSON.parse(localStorage.getItem(localKey));

// console.log(userData);
if (userData) {
    changeState();
}


form.addEventListener('submit', onClickSubmit);



function onClickSubmit(e) {
    e.preventDefault();

    if (button.textContent === 'Logout') {
        return reset();
    }
    // console.log('onClick');

    if (USER_DATA.email === email.value && USER_DATA.password === password.value) {
        userData = { email: email.value.trim(), password: password.value.trim() };
        localStorage.setItem(localKey, JSON.stringify(userData));
        form.reset();
        changeState();
        // console.log(userData);
    } else {
        alert('Введені данні не співпадають');
    }


}



function changeState() {
    button.textContent = 'Logout';
    email.disabled = true;
    password.disabled = true;
}

function reset() {
    button.textContent = 'Login';
    email.disabled = false;
    password.disabled = false;

    localStorage.removeItem(localKey);
}