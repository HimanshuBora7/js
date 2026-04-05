//loops
// write a while loop that counts down from 5 to 1 and stores the number in an array named 'countdown'

let num = 5;
let arr = [];
while (num >= 1) {
  arr.push(num);
  num--;
}

console.log(arr);

// write a do while loop that prompts the user to enter their fac tea type untill ther enter stop.
// store each type in an array named 'teaColelction'.

let teaColelction = [];
let userChoice;

// do {
//   userChoice = prompt("enter ur fav chai or enter stop to quit");

//   teaColelction.push(userChoice);
// } while (userChoice.toLowerCase() != "stop");

// console.log(teaColelction);

//write a do while loop that adds numbers from 1 to 3 and stores the result in a variable named total

let count = 1;
let total = 0;

do {
  total += count;
  count++;
} while (count <= 3);
console.log(total);

//write a for loop that multiplies each element in the array [2,4,6] by 2 and stores the result in a new array named mulitpliedNUmbers

let iniArr = [2, 4, 6];
let mulitpliedNumbers = [];
for (let i = 0; i < iniArr.length; i++) {
  mulitpliedNumbers.push(iniArr[i] * 2);
}
console.log(mulitpliedNumbers);
