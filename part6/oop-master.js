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

// Encapsulation ~ in simple terms restricting the direct access to object data
class Bank {
  #balance = 0; // by adding hash now this variable will be not be directly accessed
  // if we want acess this we have to create a method

  deposit(amount) {
    this.#balance += amount;
    // return this.#balance;
    return this.getBalance();
  }
  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new Bank();
console.log(account.getBalance());
console.log(account.deposit(100));
console.log(account.getBalance());

// abstraction ~ hiding the complex implementation details

class CoffeMachine {
  start() {
    //call db
    //filter
    return ` starting the machine....`;
  }
  brewCofee() {
    //complex calculation
    return `Brewing coffee`;
  }
  pressStartButton() {
    let msg1 = this.start();

    let msg2 = this.brewCofee();

    return ` ${msg1} , ${msg2}`;
  }
}
let myMachine = new CoffeMachine();
console.log(myMachine.start());
console.log(myMachine.brewCofee());
console.log(myMachine.pressStartButton());

//polymorphism ~ many form
class Bird {
  fly() {
    return `flying......`;
  }
}

class Penguin extends Bird {
  fly() {
    return `penguin can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();

console.log(bird.fly());
console.log(penguin.fly());

// static method
// static method in js can oonly be called by class itself only

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// let miniCalc = new Calculator();

// console.log(miniCalc.add(3, 2));

console.log(Calculator.add(3, 2));

// Getters and setters

class Employee {
  #salary;
  constructor(name, salary) {
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return `you are not allowed to see salary `;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid salary");
    }
    this._salary = value;
  }
}

let emp1 = new Employee("john", -50000);
console.log(emp1.salary); // u can see here with salary method we have not used () becoz we are using get and set keyword
emp1.salary = -3000;
