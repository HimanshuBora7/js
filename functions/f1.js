// write a function named 'makeTea' that takes  one parameter, 'typeOftea', and returns a string like "Making green tea" when called with "green tea". Store the result in a variable named 'teaOrder'.

makeTea = (typeOfTea) => {
  return `Making ${typeOfTea}`;
};

let Teaorder = makeTea("green tea");

console.log(Teaorder);

/** 2. create a function named 'orderTea' that takes one parameter,'teaType'.Inside this function create another function named 'confirmOrder' that returns a message like "order confirmed for chai",call 'confirmOrder' from within 'orderTea' and return the result  */

function orderT(teaType) {
  let x;
  function confirmOrder() {
    return `order confirmed for ${teaType}`;
  }
  x = confirmOrder();
  return x;
}

let y = orderT("mocha");
console.log(y);

// write a function named 'createTeaMaker' that returns another function.The returned function should take one parameter, 'teatype', and return a message like "making green tea".
// store the returned function in a variable named 'teaMaker' and call it with 'green tea'

function createTeamaker() {
  function fn(teaType) {
    return `making ${teaType}`;
  }
  return fn;
}

let x = createTeamaker();
let z = x("mocha");

console.log(z);
