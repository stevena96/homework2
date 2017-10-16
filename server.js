const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello\n');
});

server.listen(port, hostname, () => {
  console.log("This is our tiny Node app in ISOM 215!");
});