
//1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let array = [11, 22, 33, 44, 55, 66, 77, 88, 99,109];
let result = array[0]+array[1]+array[2]+array[3]+array[4]+array[5]+array[6]+array[7]+array[8]+array[9];
console.log(result);


// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book = {
    name: "Javascript",
    pages: 365,
    genre: "Технічна література"
};

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let book1 = {
    name: "Java",
    pages: 300,
    genre: "Технічна література",
    authors: "Kathy Sierra"
};

// Створити маcив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт





// // Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
let height = 23;
let width = 10;
let s = height*width;
console.log(s)



//Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//         результат помістіть у змінну v.

let heightC = 10;
let dC = 4;
const PI = 3.14;
// let r = dC/2;
// let P = PI*dC;
let v = PI*((dC/2)**2)*heightC;
console.log(v)


// У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//        Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3;
let m = 4;
let k = (n**2)+(m**2);
console.log(Math.sqrt(k))