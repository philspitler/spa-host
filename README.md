# SPA Host

[![npm version](https://badge.fury.io/js/spa-host.svg)](https://badge.fury.io/js/spa-host)

## Easily host applications that have a default file to route requests through, yet need to override a set of folders

### Installation
```bash
$ npm install -g spa-host
```

### Run in the root of your project
```bash
$ spahost index.html styles scripts
```

This will run a server which routes all traffic to index.html unless it starts with /styles or /scripts.

### Notes

Is currently hardcoded to run on port 3000.  A future release will allow that to be configured.
