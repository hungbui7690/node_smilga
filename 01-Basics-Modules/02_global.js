/* 

* Global - No Window because no browser

? Một số property và methods thông dụng:
?   __dirname   : path to current directory
?   __filename  : filename
?   require     : function to use modules (CommonJS)
?   module      : info about current module (file)
?   process     : info about env where the program is being executed

* clear terminal: clear
*/

console.log(__dirname);
console.log(__filename);

setInterval(() => {
  console.log("Hello World");
}, 1000);
