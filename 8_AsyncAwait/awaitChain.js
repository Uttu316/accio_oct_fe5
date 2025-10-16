const getUserData = (username) => {
  console.log("Fetching Userdata");
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

const getPost = (userId) => {
  console.log("Fetching Postdata");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        resolve({
          postId: "213132",
          caption: "Beautiful Morning",
        });
      } else {
        reject("Oopp no Post");
      }
    }, 3000);
  });
};

const getComments = (postId) => {
  console.log("Fetching Comments");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (postId) {
        resolve({
          commentId: "3232321",
          caption: "Nice",
        });
      } else {
        reject("Oopp no comment");
      }
    }, 3000);
  });
};

const main = async () => {
  console.log("Start");

  const user = await getUserData("ABC");
  console.log(user);

  const post = await getPost(user.id);
  console.log(post);

  const comment = await getComments(post.postId);

  console.log(comment);
};
main();
