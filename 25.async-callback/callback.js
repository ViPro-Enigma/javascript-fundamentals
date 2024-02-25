function asyncOne(callback) {
  setTimeout(() => {
    console.log("function ONE is done");

    callback();
  }, 3000);
}

function asyncTwo(callback) {
  setTimeout(() => {
    console.log("function TWO is done");

    callback();
  }, 1000);
}

function asyncThree() {
  setTimeout(() => {
    console.log("function THREE is done");
  }, 2000);
}

asyncOne(() => {
  asyncTwo(() => {
    asyncThree();
  });
});
