// 1. We start by requiring module `a`.
// ...Continue to `broken/a.js`

const a = require("./a");
console.log("Exports of module 'a' from module 'index':", a);

// 6. Finally, we're back to the beginning. Unfortunately, calling `getAB`
// will get us `TypeError: a.getA is not a function`. :(

console.log("Result:", a.getAB());
