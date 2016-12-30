//Exercise 8
//HTTP COLLECT

var httpHandler = require("http");
const BufferList = require('bl');
var url = process.argv[2];
httpHandler.get(url, function (response) {
    response.pipe(BufferList(function(err, data) {
        if (err) {
            console.log("There was an error");
            return false;
        }

        console.log(data.length);
        console.log(data.toString());
    }));
});