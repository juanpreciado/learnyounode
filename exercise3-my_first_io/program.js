//Exercise 3
//MY FIRST i/o!

var fs = require("fs");
var filePath = process.argv[2];
var buffer = fs.readFileSync(filePath);
var stringFromBuffer = buffer.toString();
var splittedString = stringFromBuffer.split('\n');
console.log(splittedString.length-1);