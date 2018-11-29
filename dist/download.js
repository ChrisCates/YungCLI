"use strict";
exports.__esModule = true;
var http = require('https');
var fs = require('fs-jetpack');
var fstream = require('fstream');
var unzip = require('unzip');
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
