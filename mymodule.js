var fs = require("fs");
module.exports= function(path, extensionToLookUp, callback) {
    //console.log(path);
   // console.log(extensionToLookUp);
    fs.readdir(path, function innerCallback (err, list) {
        if (err)
            return callback(err, null);

        var re = /(?:\.([^.]+))?$/;
        var listMatchingFiles = Array();
        //console.log(listMatchingFiles);
        for (var i = 0; i < list.length; i++) {
            if (re.exec(list[i])[1] == extensionToLookUp) {
                //console.log("Adding: "+list[i]);
                listMatchingFiles.push(list[i])

            }
        }
        return callback(null, listMatchingFiles);
    });

}