
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
inputeThree.setAttribute('name','inputeThree');

let inputeFour = document.createElement('input');
inputeFour.setAttribute('name','inputeFour')


let button = document.createElement('button');
button.innerText = 'infoFromForms';
button.style.marginTop='20px'
document.body.appendChild(button);

formOne.append(inputeOne,inputeTwo);
formTwo.append(inputeThree,inputeFour);


button.addEventListener('click', function (){
    console.log(document.forms.formOne.inputeOne.value);
    console.log(document.forms.formOne.inputeTwo.value);
    console.log(document.forms.formTwo.inputeThree.value);
    console.log(document.forms.formTwo.inputeFour.value);
})


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


    let rows = document.createElement('input');
rows.setAttribute('number', '1')
    let columns = document.createElement('input');
columns.setAttribute('number', '1')
    let textInput = document.createElement('input');
    let buttonElement = document.createElement('button');
    buttonElement.innerText='generate Table';

   document.body.append(rows,columns,textInput,buttonElement)


buttonElement.addEventListener('click', function () {
    let table = document.createElement('table');
    let tr = document.createElement('tr');
    for (i=1; i<rows; i++) {
        tr.innerText = rows.value;
        table.append(tr);
        let td = document.createElement('td');
        for (j=0 ; j<columns; j++){
            td.innerText = textInput.value;
            tr.appendChild(td);
        }
    }

        document.body.appendChild(table);
})



// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

document.body.append(document.createElement('hr'))

let array = ['хамло', 'лицемір','цинік','паразит', 'партач','рагуль'];
let inputBlock = document.createElement('input');
let buttonElem = document.createElement('button');
buttonElem.innerText = 'checked';
document.body.append(inputBlock,buttonElem)

buttonElem.addEventListener('click', function () {
    let valueInput = inputBlock.value;
    for (word of array) {
        if( word===valueInput ) {
            alert('ну ну ну!)');
        }
    }

})


document.body.append(document.createElement('hr'))
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку



array1 = ['хамло', 'лицемір','цинік','паразит', 'партач','рагуль'];
input = document.createElement('input');
btn1 = document.createElement('button');
btn1.innerText = 'checked';
document.body.append(input,btn1)


btn1.addEventListener('click', function () {
    let sentence = input.value;
    for (let badWord of array1) {
        if( sentence.includes(badWord) ) {
            alert('it is a bad word here!');

        }
    }

})
