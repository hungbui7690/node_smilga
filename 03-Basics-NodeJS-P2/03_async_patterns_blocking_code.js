/*
 * check lại bài readFile, writeFile (ở dưới) bằng async thì thấy code của chúng ta rất khó đọc do nested (callback hell) >> bài này chúng ta sẽ thấy thêm 1 ví dụ nữa về blocking code
 */
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Homepage");
  }
  if (req.url === "/about") {
    // * BLOCKING CODE: bây giờ nếu vào /about thì sẽ bị block (loading ở browser) >> nếu back lại homepage vẫn loading >> đây là lý do mà chúng ta prefer async code
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 100; j++) console.log(`${i} ${j}`);
    }
    // * =====================

    return res.end("About");
  }

  return res.end("Error");
});

server.listen(5000, () => {
  console.log(`Server is listening on port 5000...`);
});

//////////////////////////////////
//////////////////////////////////
//////////CALL BACK HELL//////////
//////////////////////////////////

// readFile("./assets/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   const first = result;
//   readFile("./assets/content/second.txt", "utf8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }

//     const second = result;
//     writeFile(
//       "./assets/content/ASYNC-RESUTL.txt",
//       `Here is the result : ${first} \n${second}`,
//       { flag: "a" },
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log(result); // ! chỗ này sẽ ra undefined
//       }
//     );
//   });
// });
