const person = {
  name: "alpha",
  greet() {
    console.log(`hello ${this.name}`);
  },
};

person.greet();

const greetFunction = person.greet;
greetFunction(); //context lost

const boundGreet = person.greet.bind({ name: "bravo" });
boundGreet();

//bind, call, apply ~ to study
