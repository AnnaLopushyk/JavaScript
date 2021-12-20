// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let cardItem = document.forms.cardItem;
cardItem.onsubmit = function (e) {
    e.preventDefault();
    let name = this.nameProduct.value;
    let number = this.numberProduct.value;
    let price = this.priceProduct.value;
    // let file = this.myFile.value;
    let product = {nameProduct:name, numberProduct:number, priceProduct:price};
    let products = JSON.parse(localStorage.getItem('product')) || [];
    console.log(products);
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
};


// let cars = JSON.parse(localStorage.getItem('cars')) || [];
// console.log(cars);
// cars.push(car);
// localStorage.setItem('cars',JSON.stringify(cars));
// };
