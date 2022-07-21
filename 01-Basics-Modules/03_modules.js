/*
 * CommonJS: đây là default lib của node.js >> every file trong node là 1 module (by default)
 * Modules: encapsulated code (only share minimum >> share what we want to share)
 */

const secret = "SUPER SECRET";
const john = "john";
const peter = "peter";

const sayHi = (name) => {
  console.log(`Hello there, ${name}`);
};

sayHi("Mary");
sayHi(john);
sayHi(peter);
