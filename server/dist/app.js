"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Data_1 = __importDefault(require("./Data"));
const MessageDb_1 = __importDefault(require("./MessageDb"));
const bodyParser = require('body-parser');
const cors = require('cors');
const USERS = Data_1.default;
const MESSAGES = MessageDb_1.default;
const app = (0, express_1.default)();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    allowedHeaders: ['Content-Type',],
}));
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
exports.default = app;
