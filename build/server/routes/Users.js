"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = require("express");
exports.usersRouter = express_1.Router();
/* GET users listing. */
exports.usersRouter.get('/', (req, res) => {
    res.send('respond with a resource');
});
//# sourceMappingURL=Users.js.map