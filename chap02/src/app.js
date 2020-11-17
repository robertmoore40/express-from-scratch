var setPrototypeOf = require('setprototypeof')
var methods = require('methods');

var Router = require('./router');
var Layer = require('./Layer')

var slice = Array.prototype.slice;
var http = require('http');

var app = exports = module.exports = {};

app.init = function() {

    this.cache = {};
    this.engines = {};
    this.settings = {}

    this._router = undefined;
};