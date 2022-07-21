/* 
  * Use when manipulate string data >> read, write file

  * Có 4 loại stream: 
  * - Writable
  * - Readable
  * - Duplex
  * -Transform

  * Thằng này cũng extend Event Emitter

  * những bài trước chúng ta đã học readFile, writeFile >> nhưng với file lớn thì dùng trong trường hợp này sẽ ko ổn, do độ dài string quá lớn, và file quá lớn >> sử dụng Stream thay thế sẽ tốt hơn
*/

// * file này chỉ dùng để tạo file
// ! dùng để tạo file lớn
const { writeFileSync } = require("fs");
for (let i = 0; i < 100000; i++)
  writeFileSync("./content/big.txt", `Hello World ${i}\n`, {
    flag: "a",
  });
