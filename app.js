//added comment #1
function showData(data, isDisplayed){
    if(isDisplayed){
        console.log(data);
    }
}
//added comment #2
function Car(brandName, model, productionYear){
   this.brandName = brandName;
   this.model = model;
   this.productionYear = productionYear;
}


//added whitespace
//create a prototype
const myCar = _.create(Car.prototype, {brandName :'Toyota', model:'Corolla', productionYear: 2018});
showData(myCar, true);

//invert
const invertedCar = _.invert(myCar);
showData(invertedCar, true);

//pick
const pickCar = _.pick(myCar, 'brandName', 'productionYear');
showData(pickCar, true);

//omit 
const omitCar = _.omit(myCar, 'model');
showData(omitCar, true);

