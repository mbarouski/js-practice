 // Main.js
var arg1 = process.argv[2];
var arg2 = process.argv[3];

import Math from './Math';
console.log(Math.PI);
console.log(Math.sqrt(+arg1));
console.log(Math.square(+arg2));