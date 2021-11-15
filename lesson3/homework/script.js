
//    створити масив з:
//  - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


let numbers = [10,20,30,40,50];
let strings = ['name','age','gender','relationships','national'];
let array = ['main','page', true, 100, false];
console.log('numbers');
console.log('strings');
console.log('array');

//-- Створити пустий масив. Наповнити його
//будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr=[];
arr[0]=5;
arr[1]=true;
arr[2] = ' name';
arr[3]= 'age ';
arr[4]= false;
console.log (arr[1]+arr[2]);
document.write(arr[3]+arr[4]);

// За допомогою циклу for і document.write()
// вивести 10 блоків div c довільним текстом всередині

for (let i =0; i<10;i++) {
    document.write(`<div> page number X </div>`);
}

//- За допомогою циклу for і document.write()
// вивести 10 блоків div c довільним текстом і індексом всередині
for (let i =0; i<10;i++) {
    document.write(`<div> page number ${i} </div>`);
}

//- За допомогою циклу while
// вивести в документ 20 блоків h1 c довільним текстом всередині.

let i=0;
while (i<20) {
    document.write(`<h1> Its a main page our book</h1>`)
    i++
}
// За допомогою циклу while
// вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let k=1;
while (k<=20) {
    document.write(`<h1> ${k}. Its a main page our book</h1>`)
    k++
}

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let numArr =[11,12,13,14,15,16,17,18,19,20];
for (i=0; i<numArr.length; i++) {
      console.log(numArr[i]);
  }

//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let textArr = ['one','book','page','author','day', 'month', 'season','value','price'];
for (i=0; i<textArr.length; i++) {
    console.log(textArr[i])
}

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arrAll = [ 'box','two', true, 2, false,'main','okten',50,[2],25.5];
for (i=0; i < arrAll.length; i++) {
    console.log(arrAll[i])
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи

let contain = [20,40,50,'one',true,1.25,'truth', false,'winter','cold'];
for (i=0; i<contain.length; i++) {
    if (typeof contain[i] ==="boolean")
        console.log(contain[i])
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи

let box = [25,'weather',45, 50,'one',true,1.25,'truth', false,'winter'];
for (i=0; i<box.length; i++) {
    if (typeof box[i] === 'number')
        console.log(box[i])
}

//- Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи

let row = ['list','item',45, 50,'one',true,[array],'truth', false,'winter'];
for (i=0; i<row.length; i++) {
    if (typeof row[i] === 'string')
        console.log(row[i])
}


//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

let emptyArr = [];
emptyArr[0]='season';
emptyArr[1]=[1,2,3];
emptyArr[2]=true;
emptyArr[3]='cold';
emptyArr[4]='okten';
emptyArr[5]='Lviv';
emptyArr[6] = 10;
emptyArr[7]= false;
emptyArr[8]= 'school';
emptyArr[9]=100;

for (i=0; i<emptyArr.length; i++) {
    console.log(emptyArr[i])
}

//- Створити цикл for на 10  ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write


for (let i=1; i<=10; i++) {
    console.log(i);
    document.write(`<p>${i} step</p>`)
}


//Створити цикл for на 100 ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write

for (let i=1; i<=100; i++) {
    console.log(i);
    document.write(`<p>${i} jump</p>`)
}

// Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write
for (let i=1; i<=100; i+=2) {
    console.log(i);
    document.write(`<p>${i} numb</p>`)
}

//- Створити цикл for на 100 ітерацій.
// Вивести тільки парні кроки. через console.log + document.write
for (let i=0; i< 100; i++) {
    if (i%2===0) {
          console.log(i);
          document.write(`<p>${i} even step</p>`)
    }
}


 //- Створити цикл for на 100 ітерацій.
 // Вивести тільки непарні кроки. через console.log + document.write
for (let i=0; i< 100; i++) {
      if (i%2===1) {
           console.log(i);
             document.write(`<p> ${i} odd step</p>`)
      }
}
