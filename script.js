import function1 from "./modules/function1.js";
import { functionTwo, function2 } from "./modules/function2.js";

const input2 = 1;
const array = [1, 2, 3];

const output1 = function1();
const output2 = functionTwo(input2);

const outputTwo = function2(array);

console.log(output1);
console.log(output2);
console.log(outputTwo);
