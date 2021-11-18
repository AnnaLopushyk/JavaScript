// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function area (a,b) {
    let s = a*b;
    return s;
}
let res = area (2,5);
console.log(res)
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// S=Pr2
function areaCircle (PI,r) {
    let calcMult = PI*(r**2);
    return calcMult;
}
let result = areaCircle(3.14,5)
console.log(result)



// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// s=2PIrh
function areaCylinder (PI,r,h,) {
    let calcS = 2*PI*r*h ;
    return calcS;

}
let resArea = areaCylinder(3.14,2,10);
console.log(resArea)



// - створити функцію яка приймає масив та виводить кожен його елемент


let array = [1,2,3,4,5,'okten','school'];
function getArray (array) {
    for (let key in array) {
    console.log(`${array[key]}`);
    }
}
getArray(array)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createPagarraph (arg) {
    document.write(arg);
}
createPagarraph('створена функція, яка створює параграф з текстом. Текст заданий через аргумент')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createList (arg) {
    document.write(`<ul>`);
    document.write(`<li>${arg}</li>`);
    document.write(`<li>${arg}</li>`);
    document.write(`<li>${arg}</li>`);
    document.write(`</ul>`)
}
createList('okten')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createLi (arg,numb) {
    if (typeof numb==='number') {
        for (let i = 1; i<=numb; i++) {
            document.write(`<ul>`);
            document.write(`<li>${arg}</li>`);
            document.write(`</ul>`);
        }
    }
}
createLi('student',5)




// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arr=[10,20,'school',true,'best']
function buildList(value) {
    for (let i = 0; i<arr.length; i++) {
        document.write(`<ul>`);
        document.write(`<li>${arr[i]}</li>`);
        document.write(`</ul>`);
    }
}
buildList(arr)



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let arrayField = [
    {   id:1,
        name:'Anna',
        age:30
    },
    {   id:2,
        name:'Olya',
        age:32
    },
    {   id:3,
        name:'Vasya',
        age:35
    }
]

function createDoc(objects) {
    for (let key of arrayField ) {
        document.write(`<div>`);
        document.write(`${key.id}. ${key.name}: ${key.age + ' years old'}`);
        document.write(`</div>`);
    }
    }
   createDoc(arrayField)