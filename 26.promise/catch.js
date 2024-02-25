function createKTP(age = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age < 17) {
        reject("ERROR: age not old enough");
      } else {
        resolve("valid! creating KTP...");
      }
    }, 3000);
  });
}

createKTP(10)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    // ...
    console.log(err);
  })
  .finally(() => {
    console.log("checking process is done..");
  });
