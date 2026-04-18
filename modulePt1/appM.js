//module import file

//default import ~ the export statement with whom default keyword is used
import multiply from "./mathOperationsM.js";
console.log(multiply(3, 2));

//named import

import { add, substract } from "./mathOperationsM.js";

console.log(add(3, 2));
console.log(substract(2, 2));
