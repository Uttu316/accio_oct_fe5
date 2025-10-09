Array.prototype.map = null; //asumption

if (!Array.prototype.map) {
  Array.prototype.map = function (callback) {
    let arr = this;
    let output = [];
    for (let i = 0; i < arr.length; i++) {
      let o = callback(arr[i], i, arr);
      output.push(o);
    }
    return output;
  };
}

let arr = [1, 2, 3, 4];

let callBack = (item) => item * 2;
let out = arr.map(callBack);
console.log(out);
