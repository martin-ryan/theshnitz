'use strict';

const Hapi = require('hapi');
const Good = require('good');
const Inert = require('inert');
const Vision = require('vision');
const Routes = require('./routes/_routes');
const Handlebars = require('handlebars');

//
// register transpilers for view engine to use on the fly. Used for React/JSX.
// require('babel-register')({
//     presets: ['react', 'es2015']
// });

//
// create server
const server = new Hapi.Server();
server.connection({ port: 3000 });

//
// register view engine with server for server-side rendering...currently turned off in favor of client-side rendering
server.register(Vision, (err) => {

    if (err) {
        console.log('Failed to load vision.');
    }

    server.views({
        engines: {
            html: Handlebars,
        },
        compileOptions: {}, // optional
        relativeTo: __dirname,
        path: 'public',
    });
});

//
// SET ROUTES
server.register(Inert, function(err){
  if (err) {
    throw err;
  }

  server.route(Routes);
});

//
// register "Good" activity log with server
server.register({
    register: Good,
    options: {
        reporters: [{
            reporter: require('good-console'),
            events: {
                response: '*',
                log: '*'
            }
        }]
    }
});

//
// Finally, START SERVER
server.start(() => {
    console.log('Server running at:', server.info.uri);
});
