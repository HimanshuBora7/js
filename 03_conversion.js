let score = "33"
console.log(score)
console.log(typeof score)


let ValueInNumber = Number (score)

console.log(typeof ValueInNumber)


let score1 = "3abc32"
let ValueInScore1 = Number(score1)
console.log(ValueInScore1) 

//"33"=> 33 if variable holds a valid number and conversion is possible them we get the right conversion 
//but it the value to be converted consists
//something like "33abc" => NaN in this case
//NaN will be provided vch is a number type
//for conversion of null to number 0 will be provided
//true => 1 , false => 0

let isloggedIn = null

let booleanisLoggedIn = Boolean(isloggedIn)
console.log(booleanisLoggedIn)




