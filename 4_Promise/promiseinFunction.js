function getUserData(userName) {
  console.log("Fetching user Data");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userName === "ABC") {
        const data = {
          name: "ABC xyz",
          id: "abc_",
        };
        resolve(data);
      } else {
        reject("No user found");
      }
    }, 4000);
  });
}

getUserData("ABC")
  .then((user) => {
    console.log("User Data recieved", user);
  })
  .catch((err) => {
    console.log(err);
  });
