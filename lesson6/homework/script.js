// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase())
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.length);
console.log(str.trim())


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//
    let text = 'Каждый охотник желает знать';
function stringToarray(str) {
   return text.split(' ');

}
console.log(stringToarray(text));
document.write(`${stringToarray(text)}`)



// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
    let ster = 'Каждый охотник желает знать';
let delete_characters=(str, length)=>{
    return ster.substring(0,7)
}
console.log(delete_characters(0,7));
document.write(`<br>${delete_characters(0,7)}`)


//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
     let str1 = "HTML JavaScript PHP";
let insert_dash=str=> {
    let line =str1.toUpperCase().replaceAll(' ','-');
    return line

}
console.log(insert_dash(str));
document.writeln(insert_dash(str));
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let someText='okten school';
let fn = arg=>{
return someText[0].toUpperCase()+someText.slice(1)
}
console.log(fn(someText))

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let someStr='i like programming. okten school-the best!';
function capitalize(string) {
    return someStr.charAt(0).toUpperCase() + someStr.substring(1)
}



    //
    // String.prototype.capitalize = function(allWords) {
    //     return (allWords) ? // if all words
    //         this.split(' ').map(word => word.capitalize()).join(' ') :
    //         this.charAt(0).toUpperCase() + this.slice(1);