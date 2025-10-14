console.log("A");
function getUserData(userName) {
  console.log("Fetching user Data");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("B");
      if (userName === "ABC") {
        const data = {
          name: "ABC xyz",
          id: "abc_",
        };
        resolve(data);
      } else {
        reject("No user found");
      }
      console.log("C");
    }, 4000);
    console.log("D");
  });
}
console.log("E");
getUserData("ABC")
  .then((user) => {
    console.log("User Data recieved", user);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("F");
