const getFlag = require("./getflag");
const flag = require("./getflag");

//Also works but longer

/*const name = process.argv[flag("--name") + 1];

console.log(name);

const greet = process.argv[flag("--greeting") + 1];

console.log(greet);*/

console.log(`Olá ${getFlag("--name")}, ${getFlag("--greeting")}`)