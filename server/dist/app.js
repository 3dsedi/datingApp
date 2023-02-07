"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Data_1 = __importDefault(require("./Data"));
const MessageDb_1 = __importDefault(require("./MessageDb"));
const User_1 = require("./models/User");
const uuid_1 = require("uuid");
const bodyParser = require('body-parser');
const cors = require('cors');
const USERS = Data_1.default;
const MESSAGES = MessageDb_1.default;
const id = (0, uuid_1.v4)();
const app = (0, express_1.default)();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    allowedHeaders: ['Content-Type', '*'],
}));
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
app.get('/api/users', cors(), (_req, res) => {
    return res
        .status(200)
        .json({ Users: USERS });
});
app.get('/api/messages', cors(), (_req, res) => {
    return res
        .status(200)
        .json({ messages: MESSAGES });
});
app.post('/api/users', cors(), (_req, res) => {
    const { name, gender, age, img, dsc } = _req.body;
    const newUser = new User_1.User(id, gender, name, age, img, dsc);
    USERS.push(newUser);
    return res.status(201).json({ message: 'user added', Users: USERS });
});
exports.default = app;
