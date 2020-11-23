var setPrototypeOf = require('setprototypeof');
var Route = require('./route');

var Layer = require('./Layer');
var parseUrl = require('parseurl');

var proto = module.exports = function(options) {
    var opts = options || {}

    function router(req,res,next) {
        router.handle(req,res,next)
    }

    setPrototypeOf(router, proto)
