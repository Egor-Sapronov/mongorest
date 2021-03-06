var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var collections = require('./routes/collections');
var mongo = require('./libs/mongo');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/collections', collections.get);

app.post('/api/collections', collections.post);

module.exports = app;
