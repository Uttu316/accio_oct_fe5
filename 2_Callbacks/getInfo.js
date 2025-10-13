function main() {
  const number = parseInt(prompt("Enter a number")); //7

  getInfo(
    number,
    (output) => {
      console.log(output);
    },
    (err) => {
      console.log("Error", err);
    }
  );
}
function getInfo(num, onSuccess, onFailure) {
  if (num % 2 == 0) {
    onSuccess("even");
  } else {
    onFailure("odd");
  }
}

main();
