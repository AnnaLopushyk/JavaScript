
// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

let friends  = ['Ivan','Slavik','Grisha','Lera', 'Ira'];
console.log(friends.length)
friends=5
if (friends>=3) {
    console.log('це великий масив, в якому  3 і більше елементи')
} else {
    console.log('це маленький масив, в якому менше 3-х елементів.')
}


//Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//  Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.


let x=10;
let y=15;
let z=20;

// Перевіряємо чи знаходиться перше число x між двома іншими.
if ((x>y) && (x<z) || (x<y) && (x>z)) {
    console.log(x)        // повернув false, тому x не є середнім
//   Перевіряємо чи знаходиться друге число y між двома іншими.
} else if ((y>x) && (y<z) || (y<x) && (y>z)) {
    console.log(y)        //   повернув true-значить y є середнім. Якби вернулося false, лишився б тільки 3-ій варіант z.
} else {
    console.log(z)
}




// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
let a = 2
let b = 1

let result= (a + b < 4) ? 'Мало': 'Багато';
console.log(result);



// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

let num = +prompt('введіть число від -100 до 100');

let message = ((num>=-100) && (num<=0)) &&  (num<=100)  ? 'число негативне або нуль' : 'Число позитивне'
console.log (message)
