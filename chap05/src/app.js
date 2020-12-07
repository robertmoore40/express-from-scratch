  
var setPrototypeOf = require('setprototypeof')
var methods = require('methods');

var Router = require('./router');
var Layer = require('./Layer')

var slice = Array.prototype.slice;
var http = require('http');

var middleware = require('./middleware/init');
var app = exports = module.exports = {};
