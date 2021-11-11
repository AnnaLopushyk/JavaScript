//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
// - Переприсвоїти кожній змінній з завдання значення на довільне.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write



let message = 'hello';
console.log(message);
// alert('message');
document.write('<p>hello</p>');
message = 'hi';
console.log(message);
// alert('hi');
document.write(message);

let message1 = 'owu';
console.log(message1);
// alert('owu');
document.write('<p> owu</p>');
message1 = 'okten';
console.log(message1);
// alert('okten');
document.write('<p>okten</p>');

let message2 = 'com';
console.log(message2);
// alert('com');
document.write('<p>com</p>');
message2 = 'the';
console.log(message2);
// alert('the');
document.write('<p>the</p>');

let message3 = 'ua';
console.log(message3);
// alert('ua');
document.write('<p>ua</p>');
message3 = 'best';
console.log(message3);
// alert('best');
document.write('<p>best</p>');


let num1 = 1;
console.log(num1);
// alert('1');
document.write('<p>1</p>');
num1 = 5;
console.log(num1);
// alert('1');
document.write('<p>5</p>');

let num2 = 10;
console.log(num2);
// alert('10');
document.write('<p>10</p>');
num2 = 35;
console.log(num2);
// alert('35');
document.write('<p>35/p>');


let num3 = -999;
console.log(num3);
// alert('-999');
document.write('<p>-999</p>');
num3 = 100;
console.log(num3);
// alert('100');
document.write('<p>100</p>');

let num4 = 123;
console.log(num4);
// alert('123');
document.write('<p>123</p>');
num4 = 555;
console.log(num4);
// alert('555');
document.write('<p>555</p>');

const PI = 3.14;
console.log(PI);
// alert('3.14');
document.write('<p>3.14</p>');
//const не можна змінити

let num5 = 2.7;
console.log(num5);
// alert('2.7');
document.write('<p>2.7</p>');
num5 = "heelo";
console.log(num5);
// alert('heelo');
document.write('<p>heelo</p>');

let num6 = 16;
console.log(num6);
// alert('16');
document.write('<p>16</p>');
num6 = -50;
console.log(num6);
// alert('-50');
document.write('<p>-50</p>');

let right = 2<5;
console.log(right);
// alert(!!2<5);
document.write('<p>true</p>');
right = 1;
console.log(!!right);
// alert(!!1)
document.write('<p>1</p>');


let noRight = 7>9;
console.log(noRight);
// alert(!!7>9);
document.write('<p>false</p>');
noRight = 0;
console.log(!!noRight);
// alert(!!0);
document.write('<p>0</p>');


// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

let firstName = 'Anna';
let middleName = 'Vasylivna';
 let lastName = 'Lopushyk';

let person = (`${firstName} ${middleName} ${lastName}`);
console.log(person);


//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let name = prompt('Імя');
let surname = prompt('По батькові');
let age = prompt('вік');

alert(`Вітаю,${name} ${surname}! Тобі ${age} років.`);

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a = 100;
console.log(typeof a);

let b = "100";
console.log(typeof b);

let c = true;
console.log(typeof c);


//- Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!

let task1 = 5<6;
console.log(task1);

let task2 = 5>6;
console.log(task2);

let task3 = 5>=6;
console.log(task3);

let task4 = 5===6;
console.log(task4);

let task5 = 10==10;
console.log(task5);

let task6 = 10!=10;
console.log(task6);

let task7 = 10>10;
console.log(task7);

let task8 = 10<10;
console.log(task8);

let task9 = 10!==10;
console.log(task9);

let task10 = 123 != '123';
console.log(task10);

let task11 = 123=='123';
console.log(task11);

//------task24-30----------

// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");     //  -  в цьому рядку 205, тому що число(a) переймає тип стрінгу при операторі +(додавання);
// document.write(str - a + "<br/>");     //  -  15, при - (відніманні, *, /)  стрінга перетворюється в число і виконуються арифметичні дії;
// document.write(str * "2" + "<br/>");   //  -  40 - те ж саме що і в попередньому;
// document.write(str / 2 + "<br/>");     //  -  10 -теж саме.





