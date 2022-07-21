/* 
! Đây là 1 cách khác để chúng ta có thể Export >> Export as you go
*/

const items = ["a", 1, true];
const person = {
  name: "bob",
  age: 20,
};

// * Đây là alternative syntax
module.exports.singlePerson = person;
module.exports.items = items;
