"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var App = express();
App.get("/", function (req, res, next) {
    res.send("hello typescript express!");
});
exports.default = App;
