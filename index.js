require('babel-core/register');
require('babel-polyfill');

var server = require('./src/server/server.js');
var port = 3000;

server();
