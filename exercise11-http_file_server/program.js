//Exercise 11
//HTTP FILE SERVER

var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
    var fsStream = fs.createReadStream(process.argv[3]);
    fsStream.pipe(res);
});
server.listen(process.argv[2]);