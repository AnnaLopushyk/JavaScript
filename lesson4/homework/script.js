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
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
