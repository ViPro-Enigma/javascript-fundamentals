const { tambah } = require("./math-utils/add");
const { kali } = require("./math-utils/multiply");
const myLogFn = require("./logging/output");

let x = 5;
let y = 7;

const additionResult = tambah(x, y);
const multiplyResult = kali(x, y);

console.log(myLogFn(additionResult));
console.log(myLogFn(multiplyResult));
