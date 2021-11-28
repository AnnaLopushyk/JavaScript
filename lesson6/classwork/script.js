// - Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

    let n1 = 'Harry..Potter'
    let n2 = 'Ron---Whisley'
    let n3 = 'Hermione__Granger';
    let n4 = 'Albux__---..Dombldor'

let validName = (names)=> {

    let name = n3
        .replaceAll('..', ' ')
        .replaceAll('---', ' ')
        .replaceAll('__', ' ')
    return name
}

console.log(validName(name));


//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
//
let randomNumb =(numb,limit)=>{
    let numbs =[];
    for (let i=0;i<numb;i++) {
        numbs.push(Math.round(Math.random()*limit));
    }
return numbs;

}
console.log(randomNumb(10,100))

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
let arr=[59, 14, 73, 64, 73, 6, 71, 14, 24, 63];
arr.sort((a,b)=>a-b);
console.log(arr)


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let arr1=[34, 0, 22, 58, 3, 62, 75, 13, 24, 96];
for(let i=0;i<arr1.length;i++) {
    if(arr1[i]%2 === 0){
        console.log(arr1[i])
    }
}

let arr11=[34, 0, 22, 58, 3, 62, 75, 13, 24, 96];
function filtrNumbs(array){
    for(let i=0;i<arr11.length;i++) {
        if (arr11[i] % 2 ===0) {
        }
}
    return arr11
}
console.log(arr11.filter(filtrNumbs))

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let arr2=[69, 35, 7, 56, 67, 8, 49, 97, 48, 83];
let newArr=arr2.map(value => value + '');
console.log(newArr)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let nums = [11,21,3];
let sortNums =(array,direction)=> {
    if (direction ==='ascending') return  nums.sort((a,b)=>a-b);
if (direction ==='discending') return  nums.sort((a,b)=>b-a);
}
console.log(sortNums([11,21,3],'ascending'))


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

coursesAndDurationArray.sort((a,b)=>a.monthDuration-b.monthDuration);
console.log(coursesAndDurationArray)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let newFilter=coursesAndDurationArray.filter((value)=> {
    return value.monthDuration>5;
});
console.log(newFilter)