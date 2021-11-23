// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let area = (a,b)=>{console.log(a*b)}
area(2,5)

// let area = (a,b)=>a*b
// console.log(area(2,5))
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// S=Pr2

let areaCircle = (PI,r)=>PI*(r**2);
console.log(areaCircle(3.14,5))


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// s=2PIrh




let areaCylinder = (PI,r,h)=>2*PI*r*h;
console.log(areaCylinder (3.14,2,10));


// - створити функцію яка приймає масив та виводить кожен його елемент
let arr1 = [1,2,3,4,5,'okten','school'];
let array = (arr)=> {
    console.log(arr)
    for (let key of arr) {
        console.log(key)
    }
}
array(arr1);

// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let paragraph = (arg)=> {
    document.write(arg);
}
 paragraph('створена функція, яка створює параграф з текстом. Текст заданий через аргумент')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let list =(arg)=>  {
    document.write(`<ul>`);
    document.write(`<li>${arg}</li>`);
    document.write(`<li>${arg}</li>`);
    document.write(`<li>${arg}</li>`);
    document.write(`</ul>`)
}
 list('okten')


// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// // Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

 let createList = (arg,numb)=> {
    if (typeof numb==='number') {
        for (let i=0; i<=numb; i++) {
            document.write(`<ul>`)
            document.write(`<li>${arg}</li>`);
            document.write(`</ul>`)
        }
    }
}
createList('student', 5)

document.write(`<hr>`)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array1 = [10,20,'school',true,'best'];
let arr = ()=> {
    for (let i=0; i<array1.length; i++) {
        document.write(`<ul><li>${array1[i]}</li></ul>`);
    }
}
arr(array1)

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
      let createDoc = ()=> {
    for (let keys of arrayField) {
        document.write(`<div>`);
        document.write(`${keys.id}. ${keys.name}: ${keys.age + ' years old'}`);
        document.write(`</div>`);
    }
      }
createDoc(arrayField)
