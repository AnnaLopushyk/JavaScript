// - Дано натуральне число n. Выведите все числа от 1 до n.


showNumb =(...arrayNumb)=> {
    let n =0;
for (let i=0; i<arrayNumb.length; i++) {
    n=arrayNumb[i]
    console.log(n)
    }
}
 showNumb(1,2,3,4,5,6,7,8,9,10);


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.


enterNumbs=(...arr)=> {
  for (let element of arr) {
     let A = arr[0];
      let B = arr.length-1;
      if(A<B) console.log(arr);
if (A>B) console.log((arr.length-1))
  }
}
enterNumbs(2,3,4,5,6,7,8);



// -   функція Приймає масив та число "i", та міняє місцями об`єкт
// який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

foo=[9,8,0,4];
let fnAcceptArray = (array,val)=> {

        for (let i = 0; i < foo.length-1; i++) {
        if(val=i+1) {
            let key=array[i];
            array[i]=array[i+1];
            array[i+1]=key;
            console.log(array)
        }
        }
  }
 fnAcceptArray([9,8,0,4],0);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

