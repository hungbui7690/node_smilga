const { readFile, writeFile } = require("fs");

// * sử dụng util.promisify()
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) reject(err);

      resolve(data);
    });
  });
};

const start = async () => {
  try {
    // ! sử dụng promisify() >> thằng này sẽ nhận vào path và utf8
    const first = await readFilePromise("./content/first.txt", "utf8");
    const second = await readFilePromise("./content/second.txt", "utf8");

    // * write file >> vì ko return gì cả nên không cần lưu vào biến
    await writeFilePromise("./content/result.txt", "AWESOME");

    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
