"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRouter = void 0;
const express_1 = require("express");
exports.indexRouter = express_1.Router();
/* GET home page. */
exports.indexRouter.get('/', (req, res) => {
    res.render('index', {
        title: 'Template Application Index',
        pages: [
            { address: "tests/simple-js-test", name: "Simple JS Test" },
            { address: "tests/websocket-test", name: "Websocket Test" }
        ]
    });
});
//# sourceMappingURL=Index.js.map