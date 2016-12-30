//Exercise 12
//HTTP UPPERCASERER

var http = require("http");
var map = require("through2-map");

var server = http.createServer(function (req, res) {
    if (req.method == "POST") {
        // console.log(req.body);
        // console.log(req.body.toString());
        req.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(res);
    }
});
server.listen(process.argv[2]);