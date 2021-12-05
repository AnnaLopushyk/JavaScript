// - Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let btn = document.getElementById('btn');
btn.onclick = function () {
    let text = document.getElementById('text');
        text.hidden=true;

}


//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let btn2 = document.getElementById('btn2');
btn2.onclick = function () {
    btn2.hidden=true;
}

//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let submit = document.getElementById('submit');
submit.onclick = function (){
    let age = document.getElementById('age').value;
if (age<18) {
    alert('sorry, you are a child');
} else {
    alert('you are welcome');
}
};


// - Создайте меню, которое раскрывается/сворачивается при клике

let menu = document.querySelector('.menu');
let title = document.querySelector('.title');

title.onclick = function (){
    menu.classList.toggle('hidden')
};

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let coments = [
    {title : 'click ', body:'происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно происходит при касании).'},
    {title : 'contextmenu', body:'происходит, когда кликнули на элемент правой кнопкой мыши'},
    {title : 'mouseover / mouseout', body:' когда мышь наводится на / покидает элемент.'},
    {title : 'mousedown / mouseup', body:'огда нажали / отжали кнопку мыши на элементе.'},
    {title : 'mousemove', body:'при движении мыши.'}
];
let container = document.createElement('div');
for (let element of coments) {
  let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let btn= document.createElement('button');

    h3.innerText=element.title;
    p.innerHTML=element.body;
    btn.innerHTML = 'Закрий мене';

    btn.onclick = function (){
        p.classList.add('pHidden');


    }
    div.append(h3,p,btn);
    container.appendChild(div);

}
document.body.appendChild(container)
