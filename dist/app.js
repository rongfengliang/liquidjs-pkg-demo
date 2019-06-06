"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var liquidjs_1 = __importDefault(require("liquidjs"));
var path_1 = __importDefault(require("path"));
var engine = new liquidjs_1.default({
    root: path_1.default.resolve(__dirname, './'),
    extname: '.liquid'
});
engine
    .renderFile("hello", { name: 'alice' }) // will read and render `views/hello.liquid`
    .then(console.log); // outputs "Alice"
