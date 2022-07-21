/* 
  * Event Loop allows Node.JS to perform Non-Blocking I/O Operations by OFFLOADING operations 

  * check thêm trong nodejs.dev hoặc youtube

  * https://course-api.com/ >> check phần slides
*/

console.log("=== 1st Task ===");

console.time();

for (let i = 0; i < 10000000; i++) {
  const h3 = document.querySelector("h3");
  h3.textContent = "Hey, everyone is waiting on me!!";
}

console.timeEnd(); // * phải đợi for loop chạy xong thì thằng dưới mới đc chạy >> trong trường hợp này tốn gần 5s >> nếu có nhiều task như vậy sẽ block code của chúng ta >> đây là sync code

console.log("=== 2nd Task ===");

// ! qua tiếp file sau >> async code
