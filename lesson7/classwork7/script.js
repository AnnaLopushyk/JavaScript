// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function Car (model, producer,year,speedMax,engineCapacity ) {
    this.model=model;
    this.producer=producer;
    this.year=year;
    this.speedMax=speedMax;
    this.engineCapacity=engineCapacity;

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${speedMax}`)
    };

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = function (){
       for (let key in this) {
           if(typeof this[key] !=='function')
               console.log(`${key}-${this[key]}`)
       }
    };

    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed =function (newSpeed) {
        this.speedMax=this.speedMax + newSpeed
        console.log()
    };

    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newValue) {
        this.year = newValue;
    };


    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.addDriver = function (driver){
        this.driver = driver;
    };

}

let addCar = new Car ('BMW','Germany',2010,280,2.4)
console.log(addCar);
addCar.drive();
addCar.info();
addCar.increaseMaxSpeed(30);
addCar.drive();
addCar.changeYear(2020);
addCar.info();
addCar.addDriver('Olya');
console.log(addCar)

//

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Cars {
    constructor(model, country, year, speedMax, engineCapacity) {
        this.model = model;
        this.country = country;
        this.year = year;
        this.speedMax = speedMax;
        this.engineCapacity = engineCapacity;
    }
        drive () {
            console.log(`їдемо зі швидкістю ${this.speedMax}km на годину`);
        }
        info () {
            for (let element in this) {
                console.log(`${element}-${this[element]}`)
            }
        };
        increaseMaxSpeed (newSpeed) {
            this.speedMax = this.speedMax + newSpeed
        };
         changeYear (newValue) {
            this.year = newValue;
        };
        addDriver (driver) {
            this.driver = driver;
        };
}
let addCars = new Cars ('Volvo',
    'Sweden',2018,280,2.8)
console.log(addCars);
addCars.info();
addCars.increaseMaxSpeed(20);
addCars.drive();
addCars.changeYear(2021);
addCars.info();
addCars.addDriver('Anna');
console.log(addCars)



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class  Popelyshka {
    constructor(name,age,footsize) {
        this.name=name;
        this.age=age;
        this.footsize=footsize;
    }
}

let princess = [
    new Popelyshka ('Katya',25,37),
    new Popelyshka ('Sonya',28,36),
    new Popelyshka ('Daria',33,39),
    new Popelyshka ('Eva',29,38),
    new Popelyshka ('Varya',26,40),
    new Popelyshka ('Iryna',28,37),
    new Popelyshka ('Olena',31,38),
    new Popelyshka ('Inna',29,37),
    new Popelyshka ('Oly',32,36),
    new Popelyshka ('Tanya',30,35),
]
console.log(princess)
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Princ  {
    constructor (name,age,shoes) {
        this.name=name;
        this.age=age;
        this.shoes=shoes;
    }
}
let lord = new Princ('James', 33, 35);
console.log(lord)


//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let Lover = (princess,lord)=>{
    for (let item of princess) {
        if(item.footsize===lord.shoes) {
            return item.name;
        }
    }
};
console.log(Lover(princess,lord))
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let princeska = princess.find(item=>item.footsize===lord.shoes);
console.log(princeska)