"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
let createError = require('http-errors');
const path_1 = require("path");
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let express = require('express');
const Index_1 = require("./routes/Index");
const Users_1 = require("./routes/Users");
const Tests_1 = require("./routes/Tests");
exports.app = express();
// view engine setup
exports.app.set('views', path_1.join(__dirname, '../../views'));
exports.app.set('view engine', 'hbs');
exports.app.use(logger('dev'));
exports.app.use(express.json());
exports.app.use(express.urlencoded({ extended: false }));
exports.app.use(cookieParser());
exports.app.use(express.static(path_1.join(__dirname, '../../public')));
exports.app.use('/', Index_1.indexRouter);
exports.app.use('/tests', Tests_1.testsRouter);
exports.app.use('/users', Users_1.usersRouter);
// catch 404 and forward to error handler
exports.app.use((req, res, next) => {
    next(createError(404), null, null);
});
// error handler
exports.app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
//# sourceMappingURL=Server.js.map