const minimist = require("minimist")

const argNew = minimist(process.argv.slice(2));

console.log(argNew.name);