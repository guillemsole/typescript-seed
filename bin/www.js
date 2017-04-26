#!/usr/bin/env node
"use strict";

const Server = require('../dist/server').Server,
    http = require("http"),
    debug = require("debug")("express:server");

const serverInstance = Server.bootstrap();
const port = 8080;

serverInstance.app.set('port', port);

const httpServer = http.createServer(serverInstance.app);
httpServer.listen(port);


function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string"
    ? "Pipe " + port
    : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = httpServer.address();
  var bind = typeof addr === "string"
    ? "pipe " + addr
    : "port " + addr.port;
  debug("Listening on " + bind);
}

httpServer.on("error", onError);
httpServer.on("listening", onListening);
