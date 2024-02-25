function asyncSum(a, b, callback) {
  setTimeout(() => {
    let result = 0;
    result = a + b;

    console.log("Done sum");
    callback(result);
  }, 1000);
}

function asyncMultiply(a, b, callback) {
  setTimeout(() => {
    let result = 0;
    result = a * b;

    console.log("Done multiply");

    callback(result);
  }, 1000);
}

function displayResult(result) {
  console.log("Your result is " + result);
}

function asyncSubtract(a, b, callback) {
  setTimeout(() => {
    let result = 0;
    result = a - b;

    console.log("Done subtract");

    callback(result);
  }, 1000);
}

function asyncDivide(a, b, callback) {
  setTimeout(() => {
    let result = 0;
    result = a / b;

    console.log("Done divide");

    callback(result);
  }, 1000);
}

asyncSum(5, 3, (sumResult) => {
  asyncMultiply(sumResult, 2, (multiplyResult) => {
    asyncSubtract(multiplyResult, 1, (subtractResult) => {
      asyncDivide(subtractResult, 2, (divideResult) => {
        displayResult(divideResult);
      });
    });
  });
});
