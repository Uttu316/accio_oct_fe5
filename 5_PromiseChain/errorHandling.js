const getUserData = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "ABC") {
        const user = {
          name: "ABC XYZ",
          id: "abc_123",
        };
        resolve(user);
      } else {
        const msg = "Oops not user found";
        let err = new Error(msg);
        err.type = "API_ERROR";
        reject(err);
      }
    }, 3000);
  });
};

getUserData("XYZ")
  .then((userData) => {
    console.log("Userinfo", userData);
  })
  .catch((err) => {
    console.log(err);
  });
