//Ejercicio 1
//HELLOWORLD

//console.log("HELLO WORLD");

//Ejercicio2.
//BABY STEPS

// var acumulador = 0;
// for (var i = 2; i < process.argv.length; i++) {
//   acumulador += Number(process.argv[i]);
// }
// console.log(acumulador);

//Ejercicio 3
//MY FIRST i/o!

// var fs = require("fs");
// var filePath = process.argv[2];
// var buffer = fs.readFileSync(filePath);
// var stringFromBuffer = buffer.toString();
// var splittedString = stringFromBuffer.split('\n');
// console.log(splittedString.length-1);

//Ejercicio 4
//MY FIRST ASYNC I/O!

// var fs = require("fs");
// var filePath = process.argv[2];
// var contentFromFile = fs.readFile(filePath, function callback (err, data) {
//     var stringFromBuffer = data.toString();
//     var splittedString = stringFromBuffer.split('\n');
//     console.log(splittedString.length-1);
// });

//Ejercicio 5
//FILTERED LS

// var fs = require("fs");
// var path = process.argv[2];
// var re = /(?:\.([^.]+))?$/;
// var extenstionToLookUp = process.argv[3];
// fs.readdir(path, function callback (err, list) {
//     for (var i = 0; i < list.length; i++) {
//         if (re.exec(list[i])[1] == extenstionToLookUp) {
//             console.log(list[i]);
//         }
//     }
// });

//Ejercicio 5
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
