module.exports = Route;

var methods = require('methods');
var flatten = require('array-flatten');

var Layer = require('./Layer')

function Route(path) {
    this.path = path;
    this.stack = [];

    this.methods = {}
}

Route.prototype.dispatch = function dispatch(req,res,done) {

};