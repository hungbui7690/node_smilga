const { readFile, writeFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) reject(err);

      resolve(data);
    });
  });
};

///////////////////////////
///////////////////////////
///////////////////////////

// ! khi dùng async/await >> nhớ setup try/cath
const start = async () => {
  try {
    // * đọc 2 file cùng lúc
    const first = await getText("./content/first.txt");
    const second = await getText("./content/second.txt");
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
