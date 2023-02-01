"use strict";
exports.__esModule = true;
var app_1 = require("./app");
var port = 8000;
app_1["default"].listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
