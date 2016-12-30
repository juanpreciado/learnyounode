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