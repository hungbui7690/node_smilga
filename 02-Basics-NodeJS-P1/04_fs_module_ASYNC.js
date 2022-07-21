const { readFile, writeFile } = require("fs");

/* 
  ! thằng này khác với thằng sync ở chỗ là trong method sẽ yêu cầu callback (error, result)

  * readFile('path', callback(err, result)) >>> thằng này sẽ trả về buffer
  * readFile('path', 'utf8', callback(err, result)) >>> thằng này sẽ trả về text

*/

// ? without UTF8
readFile("./assets/first.txt", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

// ? with UTF8
readFile("./assets/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("UTF-8 : \n ", result);
});

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

/* 
* đây là làm giống ví dụ ở bài trước nhưng sử dụng async

* writeFile('path', data, {}, callback)

*/

readFile("./assets/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;
  readFile("./assets/content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = result;
    writeFile(
      "./assets/content/ASYNC-RESUTL.txt",
      `Here is the result : ${first} \n${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result); // ! chỗ này sẽ ra undefined
      }
    );
  });
});

// ! khi viết kiểu này >> chúng ta đã đang ở callback hell
