//Exercise 1
//HELLOWORLD

//console.log("HELLO WORLD");

//Exercise2.
//BABY STEPS

// var acumulador = 0;
// for (var i = 2; i < process.argv.length; i++) {
//   acumulador += Number(process.argv[i]);
// }
// console.log(acumulador);

//Exercise 3
//MY FIRST i/o!

// var fs = require("fs");
// var filePath = process.argv[2];
// var buffer = fs.readFileSync(filePath);
// var stringFromBuffer = buffer.toString();
// var splittedString = stringFromBuffer.split('\n');
// console.log(splittedString.length-1);

//Exercise 4
//MY FIRST ASYNC I/O!

// var fs = require("fs");
// var filePath = process.argv[2];
// var contentFromFile = fs.readFile(filePath, function callback (err, data) {
//     var stringFromBuffer = data.toString();
//     var splittedString = stringFromBuffer.split('\n');
//     console.log(splittedString.length-1);
// });

//Exercise 5
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

//Exercise 6
//MAKE IT MODULAR

// var mymodule = require("./mymodule.js");
// var path = process.argv[2];
// var extenstionToLookUp = process.argv[3];
// mymodule(path, extenstionToLookUp, function callback(err, data) {
//     if (err) {
//         console.log("There was an error");
//         return false;
//     }
//
//     for (var i = 0; i< data.length; i++) {
//         console.log(data[i]);
//     }
// });

//Exercise 7
//HTTP CLIENT

// var url = process.argv[2];
// var httpHandler = require('http');
// httpHandler.get(url, function (response) {
//     response.on("data", function (data) {
//         console.log(data.toString());
//     });
// });

//Exercise 8
//HTTP COLLECT

// var httpHandler = require("http");
// const BufferList = require('bl');
// var url = process.argv[2];
// httpHandler.get(url, function (response) {
//     response.pipe(BufferList(function(err, data) {
//         if (err) {
//             console.log("There was an error");
//             return false;
//         }
//
//         console.log(data.length);
//         console.log(data.toString());
//     }));
// });


//Exercise 9
//JUGGLING ASYNC

// var httpHandler = require("http");
// const BufferList = require('bl');
// var urls = [];
// urls[0] = process.argv[2];
// urls[1] = process.argv[3];
// urls[2] = process.argv[4];
//
// var textUrls = [];
// textUrls[0] = "";
// textUrls[1] = "";
// textUrls[2] = "";
//
// var count = 0;
//
// for (var i = 0; i < urls.length; i++) {
//     function doHttpRequest (n) {
//         httpHandler.get(urls[i], function (response) {
//
//             response.on('data', function(data) {
//
//                 textUrls[n]+= data.toString();
//
//             });
//             response.on("end", function() {
//                 count++;
//
//                 if (count === 3) {
//
//
//                     for (var j = 0; j < textUrls.length; j++) {
//                         console.log(textUrls[j]);
//
//                     }
//                 }
//
//             })
//         });
//     }
//     doHttpRequest(i);
// }

//Exercise 10
//TIME SERVER
// var net = require("net");
// var server = net.createServer(function (socket) {
//     var date = new Date();
//     var data = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+ "\n";
//     socket.write(data);
//     socket.end();
// });
// server.listen(process.argv[2]);

//Exercise 11
//HTTP FILE SERVER

// var http = require("http");
// var fs = require("fs");
//
// var server = http.createServer(function (req, res) {
//     var fsStream = fs.createReadStream(process.argv[3]);
//     fsStream.pipe(res);
// });
// server.listen(process.argv[2]);

//Exercise 12
//HTTP UPPERCASERER

// var http = require("http");
// var map = require("through2-map");
//
// var server = http.createServer(function (req, res) {
//     if (req.method == "POST") {
//         // console.log(req.body);
//         // console.log(req.body.toString());
//         req.pipe(map(function (chunk) {
//             return chunk.toString().toUpperCase();
//         })).pipe(res);
//     }
// });
// server.listen(process.argv[2]);

//Exercise 13
//HTTP JSON API SERVER

var http = require("http");
var url = require("url");

var server = http.createServer(function (req, res) {
    if (req.method == "GET") {
        var parsedUrl = url.parse(req.url, true);


        if (parsedUrl.pathname === '/api/parsetime') {
            var dateString = parsedUrl.query.iso;
            var date = new Date(dateString);
            var objResponse = {
                "hour": date.getHours(),
                "minute":date.getMinutes(),
                "second": date.getSeconds()
            }
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(objResponse));
            res.end();

        }
        if (parsedUrl.pathname === '/api/unixtime') {
            var dateString = parsedUrl.query.iso;
            var date = new Date(dateString);
            var objResponse = {
                "unixtime": date.getTime()

            }
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(objResponse));
            res.end();
        }
    }
});

server.listen(process.argv[2]);