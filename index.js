var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("app", ["require", "exports", "liquidjs"], function (require, exports, liquidjs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    liquidjs_1 = __importDefault(liquidjs_1);
    var engine = new liquidjs_1.default();
    engine
        .parseAndRender('{{name | capitalize}}', { name: 'alice' })
        .then(console.log);
});
