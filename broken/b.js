// 3. Module `b` now requires module `a` again. In order for Node.js not to get
// stuck in an infinite loop, `a` is not re-evaluated, but instead it is read
// from the require cache. Since in module `a` we have only gotten to line
// 1 before this module (module `b`) has been required, the module cache
// only contains an empty object for module `a` — the default value of
// `module.exports`.

const a = require("./a");
console.log("Exports of module 'a' from module 'b':", a);

// 4. Here lies the issue. a.getA is not a function, because as far as
// module `b` is concerned, module `a` is just an empty object. Since `getAB`
// is a function (which are evaluated lazily), we won't get error yet,
// but we will get it once `getAB` is called.
// ...Continue to `broken/a.js`

module.exports = { getAB: () => a.getA() + "b" };
