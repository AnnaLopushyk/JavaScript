

// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// let userForm = document.forms.userForm;
// userForm.onsubmit = function (e) {
//     e.preventDefault();
//     let name = this.name.value;
//     let age = this.age.value;
//     console.log(name,age);
//     localStorage.setItem('key',JSON.stringify({name,age}));
// };


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.


let carsInfo = document.forms.carsInfo;
carsInfo.onsubmit = function (e) {
    e.preventDefault();
    let model = this.modelCar.value;
    let type = this.typeCar.value;
    let volume = this.volumeCar.value;
    let car = {modelCar: model, typeCar: type, volumeCar: volume};

}
// let model = document.forms.carsInfo.model;
// let type = document.forms.carsInfo.type;
// let volume = document.forms.carsInfo.volume;
// let btn2 = document.getElementById('carInfo');
// let key = 'key';
//
// let saveCar = (infoModel,infoType,infoVolume) => {
//     let carArr = JSON.parse(localStorage.getItem(key));
//
//     carArr.push({infoModel,infoType,infoVolume});
//     localStorage.setItem(key, JSON.stringify(carArr));
// }
//
// btn2.onclick = () => {
//     saveCar( model.value, type.value, volume.value)
// };