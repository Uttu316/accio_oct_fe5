// function getdata(){
//     return new Promise((resolve,reject)=>{
//         resolve('Hey')
//     })
// }

// function getdata(){
//         return Promise.resolve('hey')
// }

async function getdata() {
  return "hey"; // resolve promise
  // throw 'bye' // reject promise
}

getdata()
  .then((v) => {
    console.log(v);
  })
  .catch((err) => {
    console.log("Error", err);
  });
