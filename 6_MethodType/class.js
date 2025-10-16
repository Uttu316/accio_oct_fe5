class A {
  constructor(input) {
    this.value = input;

    //instance method
    this.sayHello = function () {
      console.log("hello");
    };
  }

  //prototype method
  sayBye() {
    console.log("Bye");
  }

  //static method
  static sayHey() {
    console.log("Hey");
  }
}

const a = new A(2);
const b = new A(3);

console.log(a.sayHello === b.sayHello); // instance method, have individual memory
console.log(a.sayBye === b.sayBye); // prototype method share in same memory

A.sayHey(); // static method declared once to class itself
