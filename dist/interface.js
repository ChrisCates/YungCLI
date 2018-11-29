"use strict";
exports.__esModule = true;
var config_1 = require("./config");
var fs = require('fs-jetpack');
var request = require('request');
var ADM = require('adm-zip');
function download(url, path) {
    fs.dir(path);
    request.get({ url: url, encoding: null }, function (err, res, body) {
        var zip = new ADM(body);
        var files = zip.getEntries();
        files.forEach(function (file) {
            if (!file.isDirectory) {
                var filePath = file.entryName.replace('YungCPP-master', '');
                var content = zip.readAsText(file);
                fs.write("" + path + filePath, content);
            }
        });
        console.log(("Created a new Yung C++ project in " + path).green.bold);
    });
}
exports.download = download;
function route(name) {
    var template = "#include \"../Shared.hpp\"\n\n#ifndef _HELLOROUTE_H\n#define _HELLOROUTE_H 1\n\nnamespace yungroute {\n    std::pair<web::http::status_code, std::string> hello() {\n        web::json::value info;\n        unsigned short status = 200;\n\n        info = yungservice::metadata(info);\n\n        std::string payload = info.serialize().c_str();\n        return make_pair(status, payload);\n    }\n}\n\n#endif";
    var templateH = "_" + name.toUpperCase() + "ROUTE_H";
    var templateUrl = config_1.cwd + "/routes/" + name + ".route.hpp";
    template = template.replace('_HELLOROUTE_H', templateH).replace('_HELLOROUTE_H', templateH);
    fs.write(templateUrl, template);
    console.log(("Created a new Yung C++ route in " + templateUrl).green.bold);
}
exports.route = route;
function service(name) {
    var template = "#include \"../Shared.hpp\"\n\n#ifndef _HELLOSERVICE_H\n#define _HELLOSERVICE_H 1\n\nnamespace yungservice {\n    web::json::value hello(web::json::value info) {\n        return info;\n    }\n}\n\n#endif";
    var templateH = "_" + name.toUpperCase() + "SERVICE_H";
    var templateUrl = config_1.cwd + "/services/" + name + ".service.hpp";
    template = template.replace('_HELLOSERVICE_H', templateH).replace('_HELLOSERVICE_H', templateH);
    fs.write(templateUrl, template);
    console.log(("Created a new Yung C++ service in " + templateUrl).green.bold);
}
exports.service = service;
