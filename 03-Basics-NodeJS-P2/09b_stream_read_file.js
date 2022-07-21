const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt");

// ! 2 thằng .on() bên dưới đi chung với nhau
stream.on("data", (chunk) => {
  console.log(chunk); // * sẽ trả về nhiều Buffer, mỗi thằng 64kb >> chúng ta read data in "chunk"
});

stream.on("error", (err) => {
  console.log(err);
});

/* 
  ? default : 64kb
  ? last buffer: remainder
  ? highWaterMark : control size of each Buffer
  
  ? mặc định >> không có 2nd param trong createReadStream()
  * const stream = createReadStream("./content/big.txt")

  * const stream = createReadStream("./content/big.txt", {hightWaterMark : 90000})

  * const stream = createReadStream("./content/big.txt", {encoding : 'utf8'})

*/
