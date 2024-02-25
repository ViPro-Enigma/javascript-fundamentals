// const processor = (callback) => {
//   callback();
// };

// const greeting = () => {
//   console.log("Hello world");
// };

// const goodbye = () => {
//   console.log("goodbye");
// };

// processor(greeting);
// processor(goodbye);

// const calculate = (x, y, callback = sum) => {
//   return callback(x, y);
// };
const calculate = (x, callback) => {
  return callback(x);
};

const upperString = (text = "") => text.toUpperCase();

const getFirstLetter = (text = "") => {
  return text.charAt(0);
};

// const sum = (a = 5, b = 3) => a + b;

// console.log(calculate(5, 3, sum));
console.log(calculate("naruto", getFirstLetter));
