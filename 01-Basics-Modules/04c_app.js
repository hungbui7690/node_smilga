// ! để có thể sử dụng 2 biến bên kia >>> sử dụng require()
const names = require("./04a_names");
const sayHi = require("./04b_utils");

console.log("Names: ", names);

/////////////////////////////////////
console.log("========= 1 =========");
/////////////////////////////////////

// ! bây giờ đã có thể access tới 2 biến bên 04a
sayHi("Alan");
sayHi(names.john);
sayHi(names.peter);
