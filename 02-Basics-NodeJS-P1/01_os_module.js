/*
 * Vào trang chủ, chọn Documentation >> LTS Version >> để check docs
 */

// * OS = Operating System
const os = require("os"); // * có thể dùng destructuring object để lấy ra những thứ cần

///////////////////////////////////
///////////////////////////////////
///////////////////////////////////

// * info about current user
const user = os.userInfo();
console.log("USER: ", user);

///////////////////////////////////
console.log("======== 1 ========");
///////////////////////////////////

// * method returns system uptime in seconds
console.log(`The System Uptime is ${os.uptime()}`);

///////////////////////////////////
console.log("======== 2 ========");
///////////////////////////////////

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
