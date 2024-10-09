const readline = require("readline");
const prompt = require("prompt-sync")();

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// r1.question(`what is your name ?`,(name)=>
// {
//     console.log(`Hi ${name}`);
//     r1.close();
// })

const name = prompt("what is your name ?");
console.log(`Hi ${name}`);

