

let createError = require('http-errors');
import { join } from 'path';
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let express = require('express');
import { Request, Response } from 'express';
import { indexRouter } from './routes/Index';
import { usersRouter } from './routes/Users';
import { testsRouter } from './routes/Tests';

export let app = express();

// view engine setup
app.set('views', join(__dirname, '../../views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, '../../public')));

app.use('/', indexRouter);
app.use('/tests', testsRouter);

app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: any) => {
  next(createError(404), null, null);
});

// error handler
app.use((err: any, req: Request, res: Response, next: any) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});