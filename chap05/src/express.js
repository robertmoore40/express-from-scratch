var mixin = require('merge-descriptors');
var proto = require("./app")

var http = require('http');

exports = module.exports = createApplication;

function createApplication() {
    let app = function(req,res,next) {

        app.handle(req,res,next)
    };

    mixin(app,proto,false);

    var req = Object.create(http.IncomingMessage.prototype);
    var res = Object.create(http.ServerResponse.prototype)

    res.send = function (body) {
        if(typeof body === 'object') {
            this.json(body)
        }