const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  // console.log(req);
  fs.writeFileSync('abc.txt', 'kuldeep');
});
server.listen('3001');
