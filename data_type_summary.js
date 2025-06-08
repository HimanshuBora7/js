//data type

//two types of primitive and non primitive(refrenced type)

//primitive (call by value)

//  ---> 7 types : String ,NUmber,boolean,null,undefined,Symbol(kisi value ko unique bna ne kay liye use hota hai),BigInt

//js is a dynamically typed language as variable type is determined at runtime rather than at compile time 


// refrenced type (non primitve )

// Array , Objects,Functions 

//symbol example
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) // this will return false 

const heros = ['thor',"stark","ned"]

//key value pair inside curly brackets are referred as objects 
let myObj =
{
    name: "doges",
    age: 19,
}

//function can be treated as variable in JS

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof myFunction)

//when we use typeof for null it produces object as output 
//datatype of non primitive is referred as object only but if use typeof with a function then showcases the output as function which is in actual a object function only 

console.log(typeof myFunction)

//datatype of symbol is symbol