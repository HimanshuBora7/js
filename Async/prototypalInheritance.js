function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`hello, my name is ${this.name}`);
};

let person1 = new Person("alpha");

person1.greet();
