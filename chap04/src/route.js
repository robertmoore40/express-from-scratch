module.exports = Route;
var methods = require('methods');

var flatten = require('array-flatten');
var Layer = require('./Layer')

function Route(path) {
    this.path = path;
    this.stack = [];