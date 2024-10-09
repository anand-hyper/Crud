const repl = require("repl");

const local = repl.start("the node started");

local.on("exit",() =>{
   console.log("exiting REPL");
   process.exit();
});