// 2. Now, the important difference. This module FIRST defines it's exports.
// This makes sure that the require cache includes the correct properties.
// Since function definition are hoisted, this is perfectly legal JS.
// ...Continue to `working/b.js`

module.exports = { getA, getAB };

const b = require("./b");
console.log("Exports of module 'b' from module 'a':", b);

// 5. We have resumed in module `a`. Nothing much happens except the
// console.log above, as the functions below have already been defined.
// ...Continue to `working/index.js`

function getA() {
  return "a";
}

function getAB() {
  return b.getAB();
}
