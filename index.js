#! /usr/bin/env node

var http = require('http');
var NodeStatic = require('node-static');
var fileServer = new NodeStatic.Server('.');

var index = process.argv[2]
var ignore = process.argv.slice(4,process.argv.length).join('|');
var ignoreRegex = new RegExp('^\/('+ ignore +')','g');

http.createServer(function(req, res) {
  req.addListener('end', function() {
    if (req.url.search(ignoreRegex) === 0) {
      fileServer.serve(req, res);
    } else {
      fileServer.serveFile('./' + index, 200, {}, req, res);
    }
  }).resume();
}).listen(3000);
