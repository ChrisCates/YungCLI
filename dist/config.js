"use strict";
exports.__esModule = true;
var path_1 = require("path");
exports.dbPath = path_1.join(__dirname, '.trusty');
exports.rootDir = __dirname;
exports.cwd = process.cwd();
exports.optionsObj = {
    "new": ['n', 'Create a new project', 'string'],
    route: ['r', 'Create a new template route', 'string'],
    service: ['s', 'Create a new template service', 'string']
};
