//Exercise 5
//FILTERED LS

var fs = require("fs");
var path = process.argv[2];
var re = /(?:\.([^.]+))?$/;
var extenstionToLookUp = process.argv[3];
fs.readdir(path, function callback (err, list) {
    for (var i = 0; i < list.length; i++) {
        if (re.exec(list[i])[1] == extenstionToLookUp) {
            console.log(list[i]);
        }
    }
});
