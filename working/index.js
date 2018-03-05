// 1. Just like the `broken` example, we start by requiring `a`
// ...Continue to `working/a.js`

const a = require("./a");
console.log("Exports of module 'a' from module 'index':", a);

// 6. And again, we're back to the beginning. This time, `a.getAB()` will
// work as expected though. You should get "Result: ab" in the console.

console.log("Result:", a.getAB());
