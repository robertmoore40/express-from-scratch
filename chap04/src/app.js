var setPrototypeOf = require('setprototypeof')
var methods = require('methods');

var Router = require('./router');
var Layer = require('./Layer')

var slice = Array.prototype.slice;
var http = require('http');

var middleware = require('./middleware/init');
var app = exports = module.exports = {};

app.init = function() {
    this.cache = {};
    this.engines = {};

    this.settings = {}
    this._router = undefined;
};

app.set = function set(setting,val) {
    this.settings[setting] = val;

    switch (setting) {
        case 'etag':
            this.set('etag fn',"")
            break;

            case 'query parser':
            this.set('query parser fn',"")
            break

            case 'trust proxy':
                this.set('trust proxy fn',"");
                break;
        }