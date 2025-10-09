// a polyfill for evens

// fn evens will return the array of all even number from array

Array.prototype.evens = function () {
  let arr = this;
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      output.push(arr[i]);
    }
  }
  return output;
};
let arr = [2, 4, 5, 3, 1, 8, 6];
const ans = arr.evens();

console.log(ans);
