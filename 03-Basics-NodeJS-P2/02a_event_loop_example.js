const { readFile } = require("fs");

console.log("== Start 1st Task ==");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("== DONE 1st Task ==");
});

console.log("||||| START 2nd Task |||||");
