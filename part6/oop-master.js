let car = {
  company: "toyota",
  model: "camry",
  year: 2000,
  start: function () {
    return `${this.model} has been made in ${this.year}`;
  },
};

// this is an object literal method of creating object, we can't make copies of it
console.log(car.start());
//creating objects using functional constructor method

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person1 = new Person("pam", 25);
console.log(`name of person1 is ${person1.name} and age is ${person1.age}`);

Person.prototype.describe = function () {
  console.log(`${this.name} is ${this.age} year old`);
};

person1.describe();

// prototyping chain
function Animal(type) {
  this.type = type;
}

Animal.prototype.makeSound = function () {
  return `${this.type} makes a sound`;
};

Array.prototype.customMethod = function () {
  return `coustom method: ${this}`;
};

let arr1 = [1, 23, 4];

console.log(arr1.customMethod());

class Vehicle {
  // with class keyword u can't ask for parameter like we could have asked in constructor function instead here we have a method with name counstructot() to whome we can pass the parameter
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `this ${this.model} is of ${this.make}`;
  }
}

let tank1 = new Vehicle("L&t", "k9");
console.log(tank1);
console.log(tank1.start());

//inheritance

class Tank extends Vehicle {
  drive() {
    return `${this.make} : this is an inheritance example`;
  }
}
let myCar = new Tank("drdo", "zoravar");
console.log(myCar.start());
console.log(myCar.drive());
