function sum(a, b, callback) {
  let output = a + b;
  callback(output);
}

function mul(a, b, callback) {
  let output = a * b;
  callback(output);
}

function print(value) {
  console.log(value);
}

sum(2, 3, print);
mul(4, 5, print);

// print is callback function
// mul,sum are HOF(high order function)
// a function passed as an argument is known as callback function
//  function which takes a callback or return a function is know as HOF
