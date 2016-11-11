'use strict';

let AlexaAppServer = require('alexa-app-server')
  , server = new AlexaAppServer({
    port: process.env.PORT || 3000,
    debug: true,
    httpEnabled: false
  });

server.start();
