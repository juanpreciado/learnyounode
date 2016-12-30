//Exercise 9
//JUGGLING ASYNC

var httpHandler = require("http");
const BufferList = require('bl');
var urls = [];
urls[0] = process.argv[2];
urls[1] = process.argv[3];
urls[2] = process.argv[4];

var textUrls = [];
textUrls[0] = "";
textUrls[1] = "";
textUrls[2] = "";

var count = 0;

for (var i = 0; i < urls.length; i++) {
    function doHttpRequest (n) {
        httpHandler.get(urls[i], function (response) {

            response.on('data', function(data) {

                textUrls[n]+= data.toString();

            });
            response.on("end", function() {
                count++;

                if (count === 3) {


                    for (var j = 0; j < textUrls.length; j++) {
                        console.log(textUrls[j]);

                    }
                }

            })
        });
    }
    doHttpRequest(i);
}