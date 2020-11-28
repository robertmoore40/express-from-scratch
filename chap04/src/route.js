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


methods.forEach(function(method){
    Route.prototype[method] = function(){

        var handles = flatten(Array.prototype.slice.call(arguments));

        for (var i = 0; i < handles.length; i++) {
            var handle = handles[i];
