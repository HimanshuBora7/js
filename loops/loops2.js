// write a for loop that loops through the array ["green tea","black tea","chai","oolong tea"] and stops the loop when it finds "chai"
//store all the teas before chai in a new array named 'selectedTeas'

let arr1 = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i <= arr1.length; i++) {
  if (arr1[i] != "chai") {
    selectedTeas[i] = arr1[i];
  } else {
    console.log(selectedTeas);
  }
}
