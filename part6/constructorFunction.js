//constructor function ~ from these constructor function we will be creating objects so it is basically like defining a class
// name of constructor funciton starts with capital letter

function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("toyota", "land cruiser");

console.log(myCar);

let myNewCar = new Car("range rover", "defender");
console.log(myNewCar);

function Tea(type) {
  this.type = type;

  this.describe = () => {
    console.log(`type of tea you are currently drinking is ${this.type}`);
  };
}

let myTea = new Tea("mocha");
console.log(myTea.describe());

function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("dog");
console.log(dog.sound());

// adding exception to prevent from creation of object without the new keyword

function Drink(name) {
  if (!new.target) {
    throw new Error(
      "drink must be called with new keyword to create an object",
    );
  }
  this.name = name;
}

let tea1 = new Drink("tea");
let coffee = Drink("tea");
