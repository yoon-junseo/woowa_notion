"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("./App");
var http_1 = require("http");
var port = Number(process.env.PORT) || 4000;
var server = http_1.createServer(App_1.default);
server.listen(port, function () {
    console.log(port + "\uD3EC\uD2B8 \uC11C\uBC84 \uB300\uAE30 \uC911!");
});
exports.default = server;
