//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
// та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let divOne = document.createElement('div');
divOne.innerText='container 1';
document.body.appendChild(divOne);
let divTwo = document.createElement('div');
divTwo.innerText = 'container 2';
document.body.appendChild(divTwo);

let formOne = document.createElement('form');
formOne.setAttribute('name','formOne');
divOne.appendChild(formOne);


let formTwo = document.createElement('form');
formTwo.setAttribute('name','formTwo');
divTwo.appendChild(formTwo);

let inputeOne = document.createElement('input');
inputeOne.setAttribute('name','inputeOne');

let inputeTwo = document.createElement('input');
inputeTwo.setAttribute('name','inputeTwo');


let inputeThree = document.createElement('input');
inputeOne.setAttribute('name','inputeThree');

let inputeFour = document.createElement('input');
inputeTwo.setAttribute('name','inputeFour')


let button = document.createElement('button');
button.innerText = 'infoFromForms';
button.style.marginTop='20px'
document.body.appendChild(button);

formOne.append(inputeOne,inputeTwo);
formTwo.append(inputeThree,inputeFour);


button.addEventListener('click', function (){
    console.log(document.form.formOne.inputeOne.value);
    console.log(document.form.formOne.inputeTwo.value);
    console.log(document.form.formTwo.inputeThree.value);
    console.log(document.form.formTwo.inputeFour.value);
})


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
