#! /usr/bin/env node

var http = require('http');
var NodeStatic = require('node-static');
var fileServer = new NodeStatic.Server('.');
var serverPort = process.env.PORT || 3000;

var index = process.argv[2]
var ignore = process.argv.slice(3,process.argv.length).join('|');
var ignoreRegex = new RegExp('^\/('+ ignore +')','g');

http.createServer(function(req, res) {
  req.addListener('end', function() {
    if (req.url === '/' || req.url.search(ignoreRegex) === -1) {
      fileServer.serveFile('./' + index, 200, {}, req, res);
    } else {
      fileServer.serve(req, res);
    }
  }).resume();
}).listen(serverPort, function() {
  console.log('Server running on port ' + serverPort + '.');
});
