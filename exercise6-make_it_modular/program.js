//Exercise 6
//MAKE IT MODULAR

var mymodule = require("./mymodule.js");
var path = process.argv[2];
var extenstionToLookUp = process.argv[3];
mymodule(path, extenstionToLookUp, function callback(err, data) {
    if (err) {
        console.log("There was an error");
        return false;
    }

    for (var i = 0; i< data.length; i++) {
        console.log(data[i]);
    }
});