function getUserData(userName, onSuccess, onFailure) {
  console.log("Fetching user data", userName);
  setTimeout(() => {
    if (userName === "ABC") {
      const userData = {
        name: "ABC Xyz",
        id: "ABC_",
      };
      onSuccess(userData);
    } else {
      onFailure("No User Found");
    }
  }, 3000);
}

function getPost(userId, onSuccess, onFailure) {
  console.log("Fetching Post for", userId);

  setTimeout(() => {
    if (userId) {
      const post = {
        postId: "3212121",
        caption: "Welcome to Accio",
      };
      onSuccess(post);
    } else {
      onFailure("No post found");
    }
  }, 4000);
}

function getComments(postId, onSuccess, onFailure) {
  console.log("Fetching Comment for", postId);

  setTimeout(() => {
    if (postId) {
      const commentData = {
        commentId: "67627323",
        comment: "Hey",
      };
      onSuccess(commentData);
    } else {
      onFailure("No comment found");
    }
  }, 4000);
}

getUserData(
  "ABC",
  (user) => {
    console.log("User Data recieved", user);
    getPost(
      user.id,
      (post) => {
        console.log("Post Data recieved", post);
        getComments(
          post.postId,
          (comment) => {
            console.log("Comment Recieved", comment);
          },
          (err) => {
            console.log(err);
          }
        );
      },
      (err) => {
        console.log(err);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
