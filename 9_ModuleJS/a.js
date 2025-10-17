var x = 2;

export let user = {
  name: "Utkarsh",
  age: 22,
  city: "Agra",
};

export function sayHello(time) {
  let y = 2;
  console.log("Hello", y + time);
}

console.log(x + user.age);

function main() {
  console.log("runing main");
}

export default main;
/*
  {
    
  user:value,
  sayHello:fnValue,
 default :mainFn,

  }
*/
