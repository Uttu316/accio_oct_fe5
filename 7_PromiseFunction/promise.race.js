const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("A");
  }, 3000);
}); //3s A

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("B");
  }, 2000);
}); //2s B reject

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("C");
  }, 4000);
}); //4s C

const p = Promise.race([p1, p2, p3]);

p.then((value) => {
  console.log(value);
}).catch((err) => {
  console.log("Error", err);
});
