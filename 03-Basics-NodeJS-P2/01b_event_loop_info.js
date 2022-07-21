console.log("=== 1st Task ===");

console.time();

// ! cho dù chúng ta set thời gian là 0 (run right away), nhưng thằng này vẫn chạy sau cùng, do chạy ở background >> async code sẽ không bao giờ tốn thời gian của chúng ta >> thường thì chúng ta sẽ tốn thời gian khi fetch data từ đâu đó về >> fetch() là async code
// * tóm lại là thằng setTimeout() là async >> bị get offload nên chạy sau
setTimeout(() => {
  console.log("===== 2nd Task =====");
}, 0);

console.log("=== 3nd Task ===");

console.timeEnd();

// * check pdf file
