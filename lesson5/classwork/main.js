// 1.- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let numMin = (a,b,c)=> {
    if (a<b && a<c) {
        console.log('min ', a);
    } else  if (b<a && b<c) {
        console.log('min ',b);
    } else {
        console.log('min ',c);
    }
}
numMin(70,40,50)

//2. - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let numMax =(a,b,c)=> {
    if (a>b && a>c) {
        console.log('max ', a);
    } else if (b>a && b>c) {
        console.log('max ', b);
    } else  {
        console.log('max ',c);
    }
}
numMax(10,20,5)

// 3.- створити функцію яка повертає найбільше число з масиву

let array = [101,2020,300,40,50,60,120,150];
let turnNumbMax =(array)=> {
    let max = array[0];
    for (let keyNumb of array) {
        if (keyNumb>max) {
            max=keyNumb;
            return max;
        }
    }
}
let result =turnNumbMax(array);
console.log(result)

//4. - створити функцію яка повертає найменьше число з масиву

let arr = [20,48,4,-100,45,270,1000];
let turnNumbMin =(arr)=> {
    let min = arr[0];
    for (let key of arr) {
        if (key<min) {
            min=key;
            return min;
        }
    }
}
let res =turnNumbMin(arr);
console.log(res)



// 5.- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let arrNumb = [1,2,10,30,12];

let sumArray =(arrNumb)=> {
    let result1 = 0;
    for (let numbers of arrNumb) {
        result1=result1+numbers;
    }
    return result1;
}
result1=sumArray(arrNumb);
console.log(result1)


//6. - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let arrNumbers = [1,2,10,30,12];

let avgArray = (arrNumbers)=> {

    let result2 = sumArray(arrNumbers)/arrNumbers.length;
    return result2
}
result2 = avgArray(arrNumbers)
console.log(result2)


//7. - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


fnAcceptNumbers=(...numbers)=>{
    let min = numbers[0];
    let max = numbers[0];
    for (let keyNumb of numbers) {
        if (keyNumb > max) {
            max = keyNumb
        }
        if (keyNumb < min) {
            min = keyNumb
        }
    }
    console.log(max);
    return min;
}
let min = fnAcceptNumbers(2,3,5,105,24,4,54,1,24);
console.log(min);

//8. - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
arr3=[];
random = (value)=> {
    for (let i =0; i<value; i++) {
        arr3[i] = Math.round(Math.random()*100);
    }
    return arr3;
}
let exit =random(10)
console.log(exit)

// 9.- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let randomArraylimit = (arrays,size,limit)=> {
    for (let i =0; i<size; i++) {
        arrays[i] = Math.round(Math.random()*limit);
    }
    return arrays;
}
console.log(randomArraylimit([],10,999))



// 10.- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
array4 = [2,3,4,5];
let reverseNewArray = (array4) => {
    let newArray = [];
    for (let i=array4.length-1, ri=0; i>=0; i--, ri++) {
        newArray[ri] = array4[i];
    }
    return newArray;
}
let resultIs = reverseNewArray(array4);
console.log(resultIs);