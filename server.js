const http = require('http');
const fs = require('fs').promises;

const hostname = 'localhost';
const PORT = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  fs.readFile(__dirname + "/index.html")
  .then(contents => {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(contents);
  })
  .catch(err => {
    res.writeHead(500);
    res.end(err);
    return;
  });
});

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});