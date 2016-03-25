/* jshint esversion: 6 */

var http = require('http');
var cluster = require('cluster');

http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.write('hello world\n');
  if (cluster.isWorker) {
    res.write('worker.id: '+ cluster.worker.id);
  }
  res.end();
}).listen(3000, () => {
  console.log('Running on http://localhost:3000/');
});
