"use strict";
exports.__esModule = true;
exports.REPO_URL = 'https://codeload.github.com/ChrisCates/YungCPP/zip/master';
require("colors");
var cli_1 = require("cli");
var config_1 = require("./config");
var interface_1 = require("./interface");
function start() {
    var options = cli_1.parse(config_1.optionsObj, null);
    if (options['new']) {
        console.log(("Creating a new project in " + options['new']).green.bold);
        interface_1.download(exports.REPO_URL, options['new']);
    }
    else if (options['route']) {
        var routeUrl = "" + options['route'];
        console.log(("Creating a new route " + routeUrl).green.bold);
        interface_1.route(routeUrl);
    }
    else if (options['service']) {
        var serviceUrl = "" + options['service'];
        console.log(("Creating a new service " + serviceUrl).green.bold);
        interface_1.service(serviceUrl);
    }
    else {
        console.log("You need to specify a directory when using the --save or --use flag".red.bold);
    }
}
exports.start = start;
if (process.env['LOADED_MOCHA_OPTS'] != 'true') {
    start();
}
