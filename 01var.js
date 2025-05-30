//here we gonna see how constants and variables are declared in javaScript

//constants are declared using const keyword like in java we decalre with final keyword and in c with const keyword

const accountID=201223;

//variables are declared using let and var keyword but using var keyword is forbidden as it has scope issue like block scope
//and functional scope 

let account_name = "thor"

let account_city = "asgardian"
let x
console.log(accountID)
//by using console.table syntax we can display many variables in single line on the terminal 
console.table([accountID,account_name,account_city,x]);