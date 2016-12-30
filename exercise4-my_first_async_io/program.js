//Exercise 4
//MY FIRST ASYNC I/O!

var fs = require("fs");
var filePath = process.argv[2];
var contentFromFile = fs.readFile(filePath, function callback (err, data) {
    var stringFromBuffer = data.toString();
    var splittedString = stringFromBuffer.split('\n');
    console.log(splittedString.length-1);
});