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

let array=[2,3,4,5,6,7,8];
enterNumbs=(A,B)=> {
      if(A<B) for (let key of array) {
          A=key++
          console.log(A)
      }
      if (A>B) for (let i=1; i<=array.length;i++) {
         A--
          console.log(A)
      }
}
enterNumbs(1,8);



// -   функція Приймає масив та число "i", та міняє місцями об`єкт
// який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// foo=[9,8,0,4];
// let fnAcceptArray = (array,val)=> {
//
//         for (let i = 0; i < foo.length-1; i++) {
//             val=val+1;
//             let key=array[i];
//             array[i]=array[i+1];
//             array[i+1]=key;
//             console.log(array)
//         }
//   }
//  fnAcceptArray([9,8,0,4],0);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

