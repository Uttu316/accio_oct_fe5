const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hey");
  }, 3000);
});

const p2 = p
  .then((res) => {
    console.log("p", res);
    return res + " Animesh"; // resolve
  })
  .catch((err) => {
    console.log("Error", err);
  });

const p3 = p2
  .then((value) => {
    console.log("p2", value);
    throw value + " wow!";
  })
  .catch((err) => {
    console.log("Error2", err);
    throw "Oops";
  });

p3.then((value) => {
  console.log("p3", value);
}).catch((err) => {
  console.log("Error3", err);
});
