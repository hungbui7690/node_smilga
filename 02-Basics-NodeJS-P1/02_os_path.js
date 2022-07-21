const path = require("path");

///////////////////////////////////
console.log("======== 1 ========");
///////////////////////////////////

console.log(path.sep); // * separator

///////////////////////////////////
console.log("======== 2 ========");
///////////////////////////////////

// * relative path
// * dư / vẫn không sao >> tự động normalize
const filePath = path.join("/assets/", "content//", "test.txt");
console.log(filePath);

///////////////////////////////////
console.log("======== 3 ========");
///////////////////////////////////

// * filename
const baseName = path.basename(filePath);
console.log(baseName);

///////////////////////////////////
console.log("======== 4 ========");
///////////////////////////////////

// * absolute path
const absPath = path.resolve(__dirname, "asset", "content", "test.txt");
console.log(absPath);
