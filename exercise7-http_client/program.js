//Exercise 7
//HTTP CLIENT

var url = process.argv[2];
var httpHandler = require('http');
httpHandler.get(url, function (response) {
    response.on("data", function (data) {
        console.log(data.toString());
    });
});