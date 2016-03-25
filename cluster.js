/* jshint esversion: 6 */

var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log('worker %s died', worker.process.pid);
  });
} else {
  http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.write('hello world\n');
    res.write('worker.id: '+ cluster.worker.id);
    res.end();
  }).listen(3000, () => {
    console.log('Running on http://localhost:3000/');
  });
}
