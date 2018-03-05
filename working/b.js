// 3. Module `b` requires `a` as before, but the require cache now contains
// the right properties.

const a = require("./a");
console.log("Exports of module 'a' from module 'b':", a);

// 4. Here, `a.getA` will indeed be a function. We're in business.
// ...Continue to `working/a.js`

module.exports = { getAB: () => a.getA() + "b" };
