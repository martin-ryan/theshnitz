var data = require('./data');
var views = require('./views');
var staticFiles = require('./public');

var routes = [].concat(data, views, staticFiles);

module.exports = routes;
