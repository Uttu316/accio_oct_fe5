Array.prototype.at = null; // assume it is not present

//polyfill of at function
if (!Array.prototype.at) {
  Array.prototype.at = function (pos) {
    let arr = this;
    return arr[pos];
  };
}

let arr = ["a", "b", "c", "d"];

const ans = arr.at(2);

console.log(ans);
