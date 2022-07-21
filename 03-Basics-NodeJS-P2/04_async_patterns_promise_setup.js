const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, data) => {
  if (err) return;

  console.log(data);
});

// * đây là cách thông thường để read file >> để tốt hơn thì chúng ta sẽ biến nó thành promise hoặc async/await

///////////////////////////////
///////////////////////////////
///////////////////////////////

// * dưới đây là cách để biến thành promise >> viết function return promise

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) reject(err);

      resolve(data);
    });
  });
};

getText("./content/first.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

// * có thể thấy chúng ta đã biến code ở trên trở nên rất clean bằng cách sử dụng promise
// * để clean hơn >> async/await
