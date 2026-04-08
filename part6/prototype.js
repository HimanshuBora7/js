let computer = { cpu: 12 };
let lenovo = { screen: "hd", __proto__: computer }; // linking lenovo to computer
let tomHw = {};

console.log("computer", computer.__proto__);
console.log("lenovo", lenovo.__proto__);

let genericCar = { tyres: 4 };
let tesla = { driver: "Ai" };

// now if we want tesla object to have all the property of generic car then we want to link these objects we can either likn by __proto__ of there is newer way

Object.setPrototypeOf(tesla, genericCar); // now tesla has all the property of genericCar

console.log("tesla ", tesla);
console.log("tesla ", tesla.tyres);

// we can see all the property of tesla by using getPropertyOf instead of using __proto__

console.log(`tesla `, Object.getPrototypeOf(tesla));
