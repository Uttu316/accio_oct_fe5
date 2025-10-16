const p = new Promise((resolve, reject) => {
  const name = prompt("Enter your name");

  const emojis = ["😍", "💀", "🤥", "💩", "😈", "🤖", "🥸"];
  setTimeout(() => {
    let size = name.length;
    if (size <= emojis.length) {
      let emoji = emojis[Math.floor(Math.random() * emojis.length)];
      resolve(emoji);
    } else {
      reject("Bye");
    }
  }, 3000);
});

p.then((value) => {
  console.log(value);
  return "You are -> " + value;
})
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
