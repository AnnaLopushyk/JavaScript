// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.\

function showArguments (a,b) {
if (typeof a==="number") {
    console.log(a);
}
if (typeof b==='number') {
    console.log(b);
}

if (typeof a && typeof b ==='number') {
    console.log(a+b)
}
}
 showArguments( 3, 20);


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// let arrayFirst=[1,2,3,4];
// let arraySecond = [2,3,4,5];

function sumArrays (arrayFirst,arraySecond) {
    let newArr = [];
    for (let key in arrayFirst) {
        for (let i = 0; i < arrayFirst.length; i++) {
            key = arrayFirst[i];
        }
    }
    for (let element in arraySecond) {
        for (let i = 0; i < arraySecond.length; i++) {
            element = arraySecond[i];

                newArr[i]=arrayFirst[i] + arraySecond[i];
        }
    }
    return newArr;

}
let results = sumArrays([1,2,3,4],[2,3,4,5])
console.log(results)


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let arrayObjects = [
    { name: 'Dima',
    age: 13},
    {model: 'Camry'}
]

function  acceptArr (arrayObjects){
    let newArrays = [];
    for(let i=0; i<arrayObjects.length; i++) {
        newArrays=arrayObjects;
    }
    for (let elements of newArrays) {
        for (let elementKey in elements)
        if (typeof elements==='object') {
            console.log(elementKey)
        }
          }
    return newArrays;
}
let resul = acceptArr(arrayObjects)
console.log(resul)

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let users = [
    { name: 'Dima',age: 13},
    {model: 'Camry'},
]
function  acceptArray (users){
    let newArray = [];
    for(let i=0; i<users.length; i++) {
        newArray = users;
    }
    for (let keys of newArray) {
        for (keysOne in keys) {
        console.log(keys[keysOne])
    }
    }

    return newArray;
}
let conf = acceptArray(users)
console.log(conf)




