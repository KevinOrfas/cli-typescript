"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var json = JSON.parse(fs.readFileSync('package.json', 'utf8'));
var version = json.version;
exports.default = function () {
    console.log("v" + version);
};
