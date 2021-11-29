
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id,name,surname,phone,email){
    this.id = id;
    this.name = name;
    this.surname =surname;
    this.phone = phone;
    this.email = email;
}
let users = new User(1,'Anna','Lopushyk','0462741142','jcs.fw@mail.com');
console.log(users)

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let emptyArr =[
    new User(1,'olya','potter','0841989120','olya.poter@gmail.com'),
    new User(2,'anya','braun','0951989120','anya.poter@gmail.com'),
    new User(3,'inna','vaskin','0511989120','inna.poter@gmail.com'),
    new User(4,'denya','pigret','09341989120','denya.poter@gmail.com'),
    new User(5,'kolya','spears','09841989120','kolya.poter@gmail.com'),
    new User(6,'ivan','melnik','0961989120','ivan.poter@gmail.com'),
    new User(7,'misha','kravets','0981989120','misha.poter@gmail.com'),
    new User(8,'sonya','pawko','0842439120','bred.poter@gmail.com'),
    new User(9,'garri','potter','0844289120','garri.poter@gmail.com'),
    new User(10,'ivanna','paliy','0841989120','ivanna.poter@gmail.com')

];
// emptyArr.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10);
console.log(emptyArr)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let arr=emptyArr.filter((value) => {
if(value.id % 2 === 0) return  value.id
});
console.log(arr)


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

emptyArr.sort((a,b)=> b.id-a.id);
console.log(emptyArr)


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
    let client = new Client(1,'anna','lopushyk','efj@mailcom',2941284817);
console.log(client)



// створити пустий масив, наповнити його 10 об'єктами Client
let emptyArrClient =[
    new Client (1,'olya','potter','0841989120','olya.poter@gmail.com',['milk','bred','sugar','tea']),
    new Client (2,'anya','braun','0951989120','anya.poter@gmail.com',['milk','bred','sugar']),
    new Client (3,'inna','vaskin','0511989120','inna.poter@gmail.com',['milk','bred','sugar','tea','coffee']),
    new Client (4,'denya','pigret','09341989120','denya.poter@gmail.com',['milk','tea']),
    new Client (5,'kolya','spears','09841989120','kolya.poter@gmail.com',['milk','bred','sugar','tea','choclate','fish']),
    new Client (6,'ivan','melnik','0961989120','ivan.poter@gmail.com',['milk','bred','sugar','tea']),
    new Client (7,'misha','kravets','0981989120','misha.poter@gmail.com',['sugar','tea']),
    new Client (8,'sonya','pawko','0842439120','bred.poter@gmail.com',['tea']),
    new Client (9,'garri','potter','0844289120','garri.poter@gmail.com',['milk','bred','sugar']),
    new Client (10,'ivanna','paliy','0841989120','ivanna.poter@gmail.com',['milk','sugar','tea','meat','candy','cake','coffee'])
        ];
console.log(emptyArrClient)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let clientSort=emptyArrClient.sort((a,b)=> a.order.length - b.order.length );
console.log(clientSort)
