"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testsRouter = void 0;
const express_1 = require("express");
exports.testsRouter = express_1.Router();
/* GET home page. */
exports.testsRouter.get('/simple-js-test', (req, res) => {
    res.render('simple-js-test', {
        title: 'Simple JS Test'
    });
});
exports.testsRouter.get('/websocket-test', (req, res) => {
    res.render('websocket-test', {
        title: 'Websocket Test'
    });
});
//# sourceMappingURL=Tests.js.map