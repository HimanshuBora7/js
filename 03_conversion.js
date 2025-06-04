let score = "33"
//console.log(score)
//console.log(typeof score)


let ValueInNumber = Number (score)

//console.log(typeof ValueInNumber)


let score1 = "3abc32"
let ValueInScore1 = Number(score1)
//console.log(ValueInScore1) 

//"33"=> 33 if variable holds a valid number and conversion is possible them we get the right conversion 
//but it the value to be converted consists
//something like "33abc" => NaN in this case
//NaN will be provided vch is a number type
//for conversion of null to number 0 will be provided
//true => 1 , false => 0

let isloggedIn = null

let booleanisLoggedIn = Boolean(isloggedIn)
//console.log(booleanisLoggedIn)

// *********************** Operations ***********************

 let value =3
 let negValue = -value
 // console.log(negValue)

// console.log(2**2)//2**2 means 2 raised to the power of 2
  
console.log("1"+2+2); //we expect 14 but we get 122 

console.log(1+2+"2") // but for this 32 will be the output 

//comparison operator

//comparison should me mafe between same data types

//comparison operators like >,<,>=,<= works diffrently in comparison to the equality check operator == in js

// === (strict check) it check compatible datatypes also whereas simple check == converts incompatible data type itself and then checks
console.log("2" == 2) // for this true will be the output
console.log("2" === 2) // false will be the output for this