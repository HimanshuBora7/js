//data type

//two types of primitive and non primitive(refrenced type)

//primitive (call by value)

//  ---> 7 types : String ,NUmber,boolean,null,undefined,Symbol(kisi value ko unique bna ne kay liye use hota hai),BigInt

//js is a dynamically typed language as variable type is determined at runtime rather than at compile time

// refrenced type (non primitve )

// Array , Objects,Functions

//symbol example
const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id === anotherId); // this will return false
// console.log(id);
// console.log(anotherId);
// console.table([id, anotherId]);

const heros = ["thor", "stark", "ned"];

//key value pair inside curly brackets are referred as objects
let myObj = {
  name: "doges",
  age: 19,
};
myObj.name = "dogesh";
// console.log(myObj.name);
//function can be treated as variable in JS

const myFunction = function (a, b) {
  // console.log("hello world");
  // console.log(a + b);
};

// myFunction(3, "hello");

// console.log(typeof myFunction);

//when we use typeof for null it produces object as output
//datatype of non primitive is referred as object only but if use typeof with a function then showcases the output as function which is in actual a object function only

//console.log(typeof myFunction)

//datatype of symbol is symbol
// a = 3;
// console.log("type of number data type", typeof BigInt);
// +++++++++++++++++++++++++++++++

// memory types availabe in js are heap and stack

//Stack (primitive) (whenever stack is used for variable we get copy of that variable ), Heap(non primitive type)(if a variable is declared in heap we get direct refrence to that variable)

let myName = " bochan";
let anothername = myName;
anothername = "kasukabe";
console.log(anothername);
console.log(myName);

let userOne = {
  email: "user@yahoo.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "user2@yahoo.com";

console.log(userOne.email);
console.log(userTwo.email);
