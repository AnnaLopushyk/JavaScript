
let users = [
{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {
        city: 'Cairo',
        country: 'Egypt',
        street: 'Seashore',
        houseNumber: 45}
}];

document.body.appendChild(document.createElement('hr'))
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
for (let item of users){
    let divAddress = document.createElement('div');
    let divCity = document.createElement('div');
    divCity = `${item.address.city}`;
    let divCountry = document.createElement('div');
    divCountry = item.address.country;
    let divStreet  = document.createElement('div');
    divStreet = item.address.street;
    let divHouseNumb = document.createElement('div');
    divHouseNumb = item.address.houseNumber;


    let emptyArr = document.createElement('div');
    emptyArr.classList.add('view')
    emptyArr.append(divCity,divCountry,divStreet,divHouseNumb)
    document.body.append(emptyArr)
}


document.body.appendChild(document.createElement('hr'))



// - За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement.
// Всі данні в одному блоці.


for (let value of users) {
    let div2 = document.createElement('div');
    div2.append(`${value.name} - ${value.age} - ${value.status} - ${value.address.street}`)

    document.body.appendChild(div2)
}
document.body.appendChild(document.createElement('hr'))

// =================================================================
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
for (let property of users) {
    let userDiv = document.createElement('div');
    userDiv.classList.add('view')
    let nameDiv = document.createElement('div');
    nameDiv.innerText = `${property.name}`;
    let ageDiv = document.createElement('div');
    ageDiv.innerText = `${property.age}`;
    let statusDiv = document.createElement('div');
    statusDiv.innerText = `${property.status}`;

    let addresaDiv = document.createElement('div');
    // addresaDiv.innerText = `${property.address}`
    let adressElements = document.createElement('div');
    adressElements.classList.add('adress')
    addresaDiv.appendChild(adressElements);

    userDiv.append(nameDiv, ageDiv, statusDiv, addresaDiv);
    document.body.appendChild(userDiv)
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера
// в свій блок за допомоги document.createElement
// розділивши всі властивості по своїм блокам ,
// блок з адресою зробити окремим блоком, з блоками для кожної властивості

for (let elements of users){
    let userDiv = document.createElement('div');
    userDiv.classList.add('view')
    let nameDiv = document.createElement('div');
    nameDiv.innerText = `${elements.name}`;
    let ageDiv = document.createElement('div');
    ageDiv.innerText = `${elements.age}`;
    let statusDiv = document.createElement('div');
    statusDiv.innerText = `${elements.status}`


    let addresaDiv = document.createElement('div');
    // addresaDiv.innerText = `${elements.address}`
    let adressElements = document.createElement('div');
    adressElements.classList.add('adress')
    addresaDiv.appendChild(adressElements)


    for (let key in elements.address) {

        let address = document.createElement('div');
        address.innerText = key;
        adressElements.appendChild(address);
    }

    userDiv.append(nameDiv,ageDiv,statusDiv,addresaDiv);
    document.body.appendChild(userDiv)
}

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи.
// Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//  створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
//  який буде змістом того, що знаходиться на сторінці.
//  Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
//

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цьому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html


let divWrap = document.createElement('div');
for (value2 of rules){

    let divForProperty = document.createElement('div');
    let divTitle = document.createElement('h2');
    let divBody = document.createElement('p');

    divTitle.innerText= value2.title;
    divBody.innerText = value2.body;

    divForProperty.append(divTitle,divBody)
divWrap.appendChild(divForProperty)
}
document.body.appendChild(divWrap)