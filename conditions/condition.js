// arrays

let teaFlavors = ["green tea ", "black tea", "oolong tea"];

console.log(teaFlavors);

let firstTea = teaFlavors[0];
console.log("first tea", firstTea);

// simplest way to make hard copeies of array

let itemsNum = [1, 2, 3, 4, 5];

console.log(itemsNum);
let itemsNumCopy = [...itemsNum];
console.log(itemsNumCopy);

//merging two arrays
let europeanCities = ["paris", "rome"];
let asianCities = ["tokyo", "bangkok"];

//merging using spreadOperator

let worldCities = [...europeanCities, ...asianCities];

// merging using concat method
let worldCities1 = europeanCities.concat(asianCities);

console.log(worldCities);
console.log(worldCities1);
