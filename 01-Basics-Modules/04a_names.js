// ? local
const secret = "SUPER SECRET";

// ? Global (share)
const john = "john";
const peter = "peter";

console.log(module); // * chúng ta sẽ quan tâm tới export {} >> nhờ có thằng này mà chúng ta có thể access tới module này trong app của chúng ta

/////////////////////////////////////
console.log("=========///=========");
/////////////////////////////////////

module.exports = { john, peter }; // * lúc này thì bên thằng 04b, chúng ta có thể access tới 2 biến này
