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

function asyncSum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = 0;
      result = a + b;

      resolve(result);
    }, 1000);
  });
}

const main = async () => {
  try {
    const result = await asyncSum(5, 1);

    if (result < 10) {
      throw new Error("Result is under 10");
    }

    console.log(result);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Process is done..");
  }
};

main();
