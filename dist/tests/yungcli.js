"use strict";
exports.__esModule = true;
require("colors");
var fs = require('fs-jetpack');
var config_1 = require("../config");
var yungcli_1 = require("../yungcli");
var interface_1 = require("../interface");
describe("Basic test functionality", function () {
    it("Should save the test text file", function (done) {
        interface_1.download(yungcli_1.REPO_URL, config_1.cwd + "/cache/archive");
        done();
    });
    it("Should generate test route", function (done) {
        interface_1.route('test');
        done();
    });
    it("Should generate test service", function (done) {
        interface_1.service('test');
        done();
    });
    it("Should try to run CLI tool", function (done) {
        yungcli_1.start();
        done();
    });
    it("Should clean up redundant files", function (done) {
        fs.remove(config_1.cwd + "/routes");
        fs.remove(config_1.cwd + "/services");
        fs.remove(config_1.cwd + "/hello");
        done();
    });
});
