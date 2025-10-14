console.log("A");
const p = new Promise((resolve, reject) => {
  console.log("B");
  // success ya fail
  setTimeout(() => {
    console.log("C");
    if (4 < 2) {
      resolve("Success");
    } else {
      reject("Failure");
    }
    console.log("D");
  }, 3000);
  console.log("E");
});
console.log("F");
p.then((output) => {
  console.log(output);
}).catch((errr) => {
  console.log(errr);
});
console.log("G");
