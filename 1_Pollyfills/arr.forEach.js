Array.prototype.forEach = null; //asumption

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback) {
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
    }
  };
}

let arr = ["a", "b", "c", "d"];

arr.forEach((item, index, currArray) => {
  console.log(item, index, currArray);
});
