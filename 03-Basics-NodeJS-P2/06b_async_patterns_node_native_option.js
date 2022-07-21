// * thêm .promise vào sẽ ko cần phải sử dụng util
const { readFile, writeFile } = require("fs").promises;

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
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");

    await writeFile("./content/result-new.txt", "AWESOME", { flag: "a" });

    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
