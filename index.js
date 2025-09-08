const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const server = http.createServer((req, res) => {
  let filePath = '';
  const requestPath = req.url;

  switch (requestPath) {
    case '/':
        filePath = path.join(__dirname, 'index.html');
        break;
    case '/about':
        filePath = path.join(__dirname, 'about.html');
        break;
    case '/contact-me':
        filePath = path.join(__dirname, 'contact-me.html');
        break;
    default:
        filePath = path.join(__dirname, '404.html');
        break;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});
