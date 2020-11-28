var mixin = require('merge-descriptors');
var proto = require("./app")
var http = require('http');

exports = module.exports = createApplication;

function createApplication() {
    let app = function(req,res,next) {
        app.handle(req,res,next)
    };