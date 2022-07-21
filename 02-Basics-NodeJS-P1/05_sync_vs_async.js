const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");

// * SYNC

console.log("===== START 1 ====");

const first = readFileSync("./assets/first.txt", "utf8");
const second = readFileSync("./assets/content/second.txt", "utf8");

writeFileSync(
  "./assets/content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);

console.log("===== DONE 1 ====\n");

//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////

// * ASYNC

console.log("===== START 2 ====");

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

        console.log("===== DONE 2 =====");
      }
    );
  });
});

console.log("===== START 3 =====");

/* 
  Kết quả sẽ ra: 

  ===== START 1 ====
  ===== DONE 1 ====

*  ===== START 2 ====
*  ===== START 3 =====
*  ===== DONE 2 =====

! phải hiểu thằng này, vì sau này chúng ta sẽ read và write vào db >> phải dùng async liên tục >> async/await
*/
