"use strict";
exports.__esModule = true;
var express_1 = require("express");
var Data_1 = require("./Data");
var bodyParser = require('body-parser');
var cors = require('cors');
var USERS = Data_1["default"];
var app = (0, express_1["default"])();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    allowedHeaders: ['Content-Type',]
}));
app.get('/api/users', cors(), function (_req, res) {
    return res
        .status(200)
        .json({ Users: USERS });
});
exports["default"] = app;
