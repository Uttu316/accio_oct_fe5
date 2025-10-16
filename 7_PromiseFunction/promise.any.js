const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("A");
  }, 3000);
}); //3s A

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("B");
  }, 2000);
}); //2s B

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("C");
  }, 1000);
}); //1s C

const p = Promise.any([p1, p2, p3]);

p.then((value) => {
  console.log(value);
}).catch((err) => {
  console.log("Error", err);
});
