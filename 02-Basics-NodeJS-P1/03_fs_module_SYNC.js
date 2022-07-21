const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./assets/first.txt", "utf8");
const second = readFileSync("./assets/content/second.txt", "utf8");

console.log(first);

///////////////////////////////////
///////////////////////////////////
///////////////////////////////////

// ! parameter thứ 3 là 1 object >> khi để a: append (mặc định sẽ overwrite thành file mới)
writeFileSync(
  "./assets/content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);
