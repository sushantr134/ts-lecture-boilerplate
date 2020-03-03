import Car from "./Car";

let car: Car = new Car(1234);

car.setModel("M5");
car.setName("BMW");

console.log(car.getModel());
console.log(car.getName());
console.log(car.getRegno());
