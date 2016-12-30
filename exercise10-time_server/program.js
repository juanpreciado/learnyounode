//Exercise 10
//TIME SERVER
var net = require("net");
var server = net.createServer(function (socket) {
    var date = new Date();
    var data = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+ "\n";
    socket.write(data);
    socket.end();
});
server.listen(process.argv[2]);