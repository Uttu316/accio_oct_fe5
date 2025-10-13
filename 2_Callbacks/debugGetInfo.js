console.log("A");
function main() {
  console.log("B");
  const number = parseInt(prompt("Enter a number"));

  console.log("C");

  getInfo(
    number,
    (output) => {
      console.log(output);
    },
    (err) => {
      console.log("Error", err);
    }
  );
  console.log("D");
}
function getInfo(num, onSuccess, onFailure) {
  if (num % 2 == 0) {
    onSuccess("even");
  } else {
    onFailure("odd");
  }
  console.log("F");
}
console.log("E");

main();
console.log("G");
