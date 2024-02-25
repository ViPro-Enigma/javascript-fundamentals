function asyncOne() {
  setTimeout(() => {
    console.log("function ONE is done");
  }, 3000);
}

function asyncTwo() {
  setTimeout(() => {
    console.log("function TWO is done");
  }, 1000);
}

function asyncThree() {
  setTimeout(() => {
    console.log("function THREE is done");
  }, 2000);
}

asyncOne();
asyncTwo();
asyncThree();
