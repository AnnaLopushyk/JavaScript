// 1.- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function numberMin (a,b,c) {
    if (a<b && a<c) {
        console.log(a);
    } else if ( b<a && b<c) {
        console.log(b);
    } else {
        console.log(c);
    }
}
numberMin(10,20,30)

//2. - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function numberMax (a,b,c) {
    if (a>b && a>c) {
        document.write(a);
    } else if ( b>a && b>c) {
        document.write(b);
    } else {
        document.write(c);
    }
}
numberMax(10,20,30)


// 3.- створити функцію яка повертає найбільше число з масиву
let array = [101,2020,300,40,50,60,120,150];
function numbMaxFromArray (array) {
let max = array[0];
for (let keyNumb of array) {
    if (keyNumb>max) {
        max=keyNumb;
        return max;
    }
}
}
let result =numbMaxFromArray (array);
console.log(result)

//4. - створити функцію яка повертає найменьше число з масиву

let arr = [20,48,4,-100,45,270,1000];
function numbMinFromArray (arr) {
    let min = arr[0];
    for (let key of arr) {
        if (key<min) {
            min=key;
            return min;
        }
    }
}
let res =numbMinFromArray (arr);
console.log(res)



// 5.- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arrNumb = [1,2,10,30,12];
function sumArray (arrNumb) {
    let result1 = 0;
    for (let numbers of arrNumb) {
        result1 = result1+numbers;
    }
    return result1;
}
result1 = sumArray(arrNumb)
console.log(result1)



//6. - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arrNumbers = [1,2,10,30,12];
function avgArray (arrNumbers) {
    let result2 = sumArray(arrNumbers)/arrNumbers.length;
    return result2
}
result2 = avgArray(arrNumbers)
console.log(result2)


//7. - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// не виводить значення, де помилка?

let array2 = [20,30,45,74,72,14,49];
function minMaxNumb(array2) {
    let max = numb[0];
    let min = numb[0];
    for (let numb of array2) {
        if (numb>max) {
            max=numb;
        }
        if (numb<min) {
            min=numb;
        }
        console.log(max);
    }
    return min;
}

//8. - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function randomArray (arr3) {
    for (let i =o; i<arr3.length; i++) {
        arr3[i] = Math.round(Math.random()*100);
    }
    return arr3;
}



// 9.- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function randomArraylimit (arrays,limit) {
    for (let i =o; i<15; i++) {
        arrays[i] = Math.round(Math.random()*limit);
    }
    return arrays;
}



// 10.- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
array4 = [2,3,4,5];
function reverseNewArray (array4) {
    let newArray = [];
    for (let i=array4.length-1, ri=0; i>=0; i--, ri++) {
newArray[ri] = array4[i];
    }
    return newArray;
}
let resultIs = reverseNewArray(array4);
console.log(resultIs);