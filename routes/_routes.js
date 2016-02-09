var data = require('./data');
var index = require('./index');
var staticFiles = require('./public');

var routes = [].concat(data, index, staticFiles);

module.exports = routes;
