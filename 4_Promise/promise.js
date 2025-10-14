//what is promise
// how to create a promise

const p = new Promise((resolve, reject) => {
  // success ya fail
  setTimeout(() => {
    if (4 < 2) {
      resolve("Success");
    } else {
      reject("Failure");
    }
  }, 3000);
});

p.then((output) => {
  console.log(output);
}).catch((errr) => {
  console.log(errr);
});
