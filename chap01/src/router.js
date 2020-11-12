var setPrototypeOf = require('setprototypeof');
var Route = require('./route');
var Layer = require('./Layer');

var proto = module.exports = function(options) {
    var opts = options || {}