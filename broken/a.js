// 2. Module `a` immediately requires module `b`.
// ...Continue to `broken/b.js`

const b = require("./b");
console.log("Exports of module 'b' from module 'a':", b);

// 5. Now, we have resumed in module `a`. Module `b` will have the
// right signature. But there will be a bug in it's `getAB` method.
// ...Continue to `broken/index.js`

module.exports = { getA: () => "a", getAB: () => b.getAB() };
